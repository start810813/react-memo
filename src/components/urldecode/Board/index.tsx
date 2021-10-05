import React from 'react'
import Item from '../Item'
import styles from './style.module.scss'

interface StateInterface {
    encoded: string,
    decoded: string
}
class Board extends React.Component {
    public readonly state: StateInterface = {
        encoded: '',
        decoded: ''
    }
    decodeUrl(value: string): void {
        let decoded: string
        try {
            decoded = decodeURIComponent(value)
        } catch {
            decoded = 'Wrong format...'
        }
        this.setState({
            encoded: value,
            decoded: decoded
        })
    }
    encodeUrl(value: string): void {
        let encoded: string
        try {
            encoded = encodeURIComponent(value)
        } catch {
            encoded = 'Wrong format...'
        }
        this.setState({
            encoded: encoded,
            decoded: value
        })
    }
    render(): React.ReactChild {
        return (
            <div className={styles.urldecode}>
                <Item code={this.state.encoded} type="Encoded" encodeUrl={this.encodeUrl.bind(this)} decodeUrl={this.decodeUrl.bind(this)} />
                <Item code={this.state.decoded} type="Decoded" encodeUrl={this.encodeUrl.bind(this)} decodeUrl={this.decodeUrl.bind(this)} />
            </div>

        )
    }
}


export default Board