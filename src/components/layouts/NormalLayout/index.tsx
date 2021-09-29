import React from 'react'
import { Route } from 'react-router-dom'
import Sidebar from '../Sidebar'
import Board from '../../memo/Board'
import styles from './style.module.scss'

class NormalLayout extends React.Component {
    render(): React.ReactChild {
        return (
            <div className={styles.normal_layout}>
                <Sidebar />
                <div className={styles.page_view}>
                    <Route path='/board/:id?' exact component={Board} />
                </div>
            </div>

        )
    }
}

export default NormalLayout
