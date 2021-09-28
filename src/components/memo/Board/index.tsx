import React from 'react'
import { Route } from 'react-router-dom'
import Item from '../Item'
import Detail from '../Detail'
import styles from './style.module.scss'


interface PropsInterface {
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
    memoList: ItemInterface[]
}

class Board extends React.Component<PropsInterface, StateInterface<ItemInterface>> {
    public readonly state: StateInterface<ItemInterface> = {
        memoList: [{
            id: 'A000001',
            title: 'A000001',
            date: '2021-09-28',
            content: '內容1'
        }, {
            id: 'A000002',
            title: 'A000002',
            date: '2021-09-26',
            content: '內容2'
        }]
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
                <Route path='/board/:id' render={() =>
                    <div className={styles.memo_detail}>
                        <Detail key={this.memoDetail.id}
                            id={this.memoDetail.id}
                            date={this.memoDetail.date}
                            title={this.memoDetail.title}
                            content={this.memoDetail.content}
                            updateTitle={this.updateTitle.bind(this)}
                            updateDate={this.updateDate.bind(this)}
                            updateContent={this.updateContent.bind(this)}
                        />
                    </div>
                } />
            </div>

        )
    }
}


export default Board