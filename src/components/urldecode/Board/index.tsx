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
        this.setState({
            encoded: value,
            decoded: decodeURI(value)
        })
    }
    encodeUrl(value: string): void {
        this.setState({
            encoded: encodeURI(value),
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