import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { v4 as uuidv4 } from 'uuid'
import Item from '../Item'
import Detail from '../Detail'
import styles from './style.module.scss'
import './animation.scss'


interface PropsInterface {
    history: RouteComponentProps['history']
    location: RouteComponentProps['location']
    match: {
        params: {
            id: string
        }
    }
}

interface ItemInterface {
    id: string
    title: string
    date: string
    content: string
}

interface StateInterface<ItemInterface> {
    memoList: ItemInterface[] | []
}


class Board extends React.Component<PropsInterface, StateInterface<ItemInterface>> {
    constructor(props: PropsInterface) {
        super(props)
        this.myRef = React.createRef();
    }
    myRef: React.RefObject<HTMLDivElement> | undefined = undefined;
    public readonly state: StateInterface<ItemInterface> = {
        memoList: JSON.parse(window.localStorage.getItem('memoList') || JSON.stringify([this.getNewEmptyMemo()]))
    }
    componentDidUpdate() {
        this.createdMemo()
        window.localStorage.setItem('memoList', JSON.stringify(this.state.memoList))
    }
    get memoDetail(): ItemInterface {
        const detail = this.state.memoList.filter((item) => item.id === this.props.match.params.id)[0]
        if (detail) return detail
        else return {
            id: '',
            title: '',
            date: '',
            content: ''
        }
    }
    public updateTitle(id: string, value: string): void {
        this.setState({
            memoList: this.state.memoList.map((item): ItemInterface => {
                if (item.id === id) {
                    return {
                        id: id,
                        title: value,
                        date: item.date,
                        content: item.content
                    }
                } else return item
            })
        })
    }
    public updateDate(id: string, value: string): void {
        this.setState({
            memoList: this.state.memoList.map((item): ItemInterface => {
                if (item.id === id) {
                    return {
                        id: id,
                        title: item.title,
                        date: value,
                        content: item.content
                    }
                } else return item
            })
        })
    }
    public updateContent(id: string, value: string): void {
        this.setState({
            memoList: this.state.memoList.map((item): ItemInterface => {
                if (item.id === id) {
                    return {
                        id: id,
                        title: item.title,
                        date: item.date,
                        content: value
                    }
                } else return item
            })
        })
    }
    public deleteMemo(id: string): void {
        this.setState({
            memoList: this.state.memoList.filter((memo) => memo.id !== id)
        })
    }
    public createdMemo(): void {
        const notEmptyMemoList = this.state.memoList.filter((memo) => {
            return memo.title !== '' ||
                memo.date !== '' ||
                memo.content !== ''
        })
        if ((this.state.memoList.length - notEmptyMemoList.length) === 0)
            this.setState({
                memoList: [...this.state.memoList, this.getNewEmptyMemo()]
            })
        else if ((this.state.memoList.length - notEmptyMemoList.length) >= 2) {
            this.setState({
                memoList: [...notEmptyMemoList, this.getNewEmptyMemo()]
            })
        }
    }
    public getNewEmptyMemo(): ItemInterface {
        return {
            id: uuidv4(),
            title: '',
            date: '',
            content: ''
        }
    }
    render(): React.ReactChild {
        const memoList = <div className={styles.memo_list}>{
            this.state.memoList.map((item) => {
                return <Item key={item.id}
                    id={item.id}
                    date={item.date}
                    title={item.title}
                    updateTitle={this.updateTitle.bind(this)}
                    updateDate={this.updateDate.bind(this)}
                />
            })
        }</div>

        return (
            <div className={styles.memo}>
                {memoList}
                <CSSTransition
                    classNames='detail'
                    nodeRef={this.myRef}
                    in={this.props.match.params.id !== undefined}
                    unmountOnExit
                    timeout={1000}
                >
                    <div ref={this.myRef} className={styles.memo_detail}>
                        <Detail key={this.memoDetail.id}
                            id={this.memoDetail.id}
                            date={this.memoDetail.date}
                            title={this.memoDetail.title}
                            content={this.memoDetail.content}
                            history={this.props.history}
                            updateTitle={this.updateTitle.bind(this)}
                            updateDate={this.updateDate.bind(this)}
                            updateContent={this.updateContent.bind(this)}
                            deleteMemo={this.deleteMemo.bind(this)}
                        />
                    </div>
                </CSSTransition>
            </div>

        )
    }
}


export default Board