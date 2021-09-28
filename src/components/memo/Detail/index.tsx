import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

interface PropsInterface {
    id: string
    title: string
    date: string
    content: string
    updateTitle: (id: string, value: string) => void
    updateDate: (id: string, value: string) => void
    updateContent: (id: string, value: string) => void
}

class Detail extends React.Component<PropsInterface> {
    render(): React.ReactChild {
        const title = <input type="text" value={this.props.title} onInput={
            (event: React.ChangeEvent<HTMLInputElement>): void => {
                const val = event?.target?.value || ''
                this.props.updateTitle(this.props.id, val)
            }
        } />
        const date = <input type="date" value={this.props.date} onChange={
            (event: React.ChangeEvent<HTMLInputElement>): void => {
                const val = event?.target?.value || ''
                this.props.updateDate(this.props.id, val)
            }
        } />
        const content = <textarea value={this.props.content} onInput={
            (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
                const val = event?.target?.value || ''
                this.props.updateContent(this.props.id, val)
            }
        } />
        return (
            <div className={styles.item}>
                <div>
                    <Link to="/board">
                        <span>ㄑ 返回</span>
                    </Link>
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