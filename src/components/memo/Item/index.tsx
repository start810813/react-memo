import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './style.module.scss'

interface PropsInterface {
    id: string
    title: string
    date: string
    updateTitle: (id: string, value: string) => void
    updateDate: (id: string, value: string) => void
}

class Item extends React.Component<PropsInterface> {
    render(): React.ReactChild {
        const title = <input type="text"
            value={this.props.title}
            placeholder='請輸入記事標題..'
            onClick={
                (event: React.MouseEvent<HTMLInputElement>) => {
                    this.removeMobileFocus(event)
                }
            }
            onInput={
                (event: React.ChangeEvent<HTMLInputElement>): void => {
                    
                    const val = event?.target?.value || ''
                    this.props.updateTitle(this.props.id, val)
                }
            }
        />
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
        return (
            <NavLink activeClassName={styles.active} to={`/memo/${this.props.id}`}>
                <div className={styles.item}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.date}>{date}</div>
                </div>
            </NavLink>
        )
    }
    removeMobileFocus(event: React.MouseEvent<HTMLInputElement>): void {
        if (window.innerWidth <= 576) {
            event.currentTarget.blur()
            event.preventDefault()
        }
    }
}

export default Item