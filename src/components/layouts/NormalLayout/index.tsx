import React from 'react'
import { Route } from 'react-router-dom'
import Sidebar from '../Sidebar'
import MemoBoard from '../../memo/Board'
import UrldecodeBoard from '../../urldecode/Board'
import styles from './style.module.scss'

class NormalLayout extends React.Component {
    render(): React.ReactChild {
        return (
            <div className={styles.normal_layout}>
                <Sidebar />
                <div className={styles.page_view}>
                    <Route path='/memo/:id?' exact component={MemoBoard} />
                    <Route path='/urldecode/:id?' exact component={UrldecodeBoard} />
                </div>
            </div>

        )
    }
}

export default NormalLayout
