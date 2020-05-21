import React from 'react'
import styles from './Button.module.css'
export default class AccentButton extends React.Component {
    constructor(props) {
        super(props)
        let text = this.props.text
        this.state = {
            text: text
        }
    }

    render() {
        return (
            <button className={styles.accent_button}>
                <p>{this.state.text}</p>
            </button> 
        )
    }
}