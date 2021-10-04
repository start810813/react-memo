import React from 'react'
import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import styles from './style.module.scss'
import './animation.scss'

interface StateInterface {
    isActive?: boolean
}

class Sidebar extends React.Component<StateInterface> {
    constructor(props: object) {
        super(props)
        this.myRef = React.createRef();
    }
    myRef: React.RefObject<HTMLDivElement> | undefined = undefined;
    public readonly state: StateInterface = {
        isActive: true
    }
    toggleSidebar(): void {
        console.log(this.state.isActive)
        this.setState({
            isActive: !this.state.isActive
        })
    }
    render(): React.ReactChild {
        return (
            <div className={`${styles.sidebar_container} ${this.state.isActive ? styles.active : ''}`}>
                <span className={styles.toggle} onClick={() => this.toggleSidebar()} />
                <CSSTransition
                    classNames='sidebar'
                    nodeRef={this.myRef}
                    in={this.state.isActive}
                    timeout={100000}
                >
                    <div ref={this.myRef} className={styles.menu}>
                        <NavLink activeClassName={styles.active} to="/board">記事本</NavLink>
                    </div>
                </CSSTransition>
            </div>
        )
    }
}

export default Sidebar