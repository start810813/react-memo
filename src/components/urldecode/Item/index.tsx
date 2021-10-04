import React from 'react'
import styles from './style.module.scss'

interface PropsInterface {
    type: string
    code: string
    decodeUrl: (value: string) => void
    encodeUrl: (value: string) => void
}

class Item extends React.Component<PropsInterface> {
    render(): React.ReactChild {
        const title = this.props.type
        const placeHolder = `請輸入編碼${this.props.type === 'Encoded' ? '前' : '後'}文字..`
        return (
            <div className={styles.item}>
                <div className={styles.title}>{title}</div>
                <textarea
                    value={this.props.code}
                    placeholder={placeHolder}
                    onInput={
                        (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
                            const val = event?.target?.value || ''
                            if (this.props.type === 'Encoded')
                                this.props.decodeUrl(val)
                            else this.props.encodeUrl(val)
                        }
                    }
                />
            </div>
        )
    }
}


export default Item