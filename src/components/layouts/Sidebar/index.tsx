import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './style.module.scss'

class Sidebar extends React.Component {
    render(): React.ReactChild {
        return (
            <div className={styles.sidebar_container}>
                <NavLink activeClassName={styles.active} to="/board">board</NavLink>
            </div>
        )
    }
}

export default Sidebar