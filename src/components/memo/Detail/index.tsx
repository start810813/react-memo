import React from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { Link } from 'react-router-dom'
import styles from './style.module.scss'


interface PropsInterface {
    id: string
    title: string
    date: string
    content: string,
    history: RouteComponentProps['history']
    updateTitle: (id: string, value: string) => void
    updateDate: (id: string, value: string) => void
    updateContent: (id: string, value: string) => void
    deleteMemo: (id: string) => void
}

class Detail extends React.Component<PropsInterface> {
    delete(id: string): any {
        this.props.deleteMemo(id)
        this.props.history.push('/memo')
    }
    render(): React.ReactChild {
        const title = <input type="text"
            value={this.props.title}
            placeholder="請輸入記事標題.."
            onInput={
                (event: React.ChangeEvent<HTMLInputElement>): void => {
                    const val = event?.target?.value || ''
                    this.props.updateTitle(this.props.id, val)
                }
        } />
        const date = <input type="date"
            value={this.props.date}
            className={this.props.date ? '' : 'placeholder'}
            max="9999-12-31"
            onChange={
                (event: React.ChangeEvent<HTMLInputElement>): void => {
                    const val = event?.target?.value || ''
                    this.props.updateDate(this.props.id, val)
                }
            }
        />
        const content = <textarea 
            value={this.props.content}
            placeholder="請輸入記事內容.."
            onInput={
                (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
                    const val = event?.target?.value || ''
                    this.props.updateContent(this.props.id, val)
                }
            }
        />
        return (
            <div className={styles.item}>
                <div className={styles.control}>
                    <Link to="/memo">
                        <span>ㄑ 返回</span>
                    </Link>
                    <span className={styles.delete} onClick={() => this.delete(this.props.id)}>🅧 刪除</span>
                </div>
                <div className={styles.title}>
                    <span>標題</span>
                    {title}
                </div>
                <div className={styles.date}>
                    <span>記錄日期</span>
                    {date}
                </div>
                <div className={styles.content}>
                    <span>記錄內容</span>
                    {content}
                </div>
            </div>
        )
    }
}


export default Detail