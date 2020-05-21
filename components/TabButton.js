import React from 'react'
import styles from './Button.module.css'
import tabstyles from './TabBar.module.css'
import TabBar from './TabBar'

export default class TabButton extends React.Component {
    constructor(props) {
        super(props)
        let text = this.props.text 
        let id = this.props.id
        this.state = {
            text: text,
            status: '',
            id: id,
            active: ''
        }
    }


    render() {
        return (
            <li className={tabstyles.tab_item }>
                <button className={styles.tab_button} id={this.state.id}>
                    {this.state.text}
                </button>
            </li>
            )
    }
}