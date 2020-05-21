import React from 'react'
import styles from './Update.module.css'
import AccentButton from './AccentButton'

export default class Update extends React.Component {
    constructor(props) {
        super(props)
        let updateTitle = this.props.update.updateTitle
        let updateSubject = this.props.update.updateSubject
        let updateContent = this.props.update.updateText
        
        this.state = {
            updateTitle: updateTitle,
            updateSubject: updateSubject,
            updateContent: updateContent
        }
    }

    render() {
        return (
            <article className={styles.update_container}>
                <h2>{this.state.updateTitle}</h2>
                <h1>{this.state.updateSubject}</h1>
                <p>{this.state.updateContent}</p>
                <ul className={styles.buttons_list}>
                    <AccentButton text='Expand Post' />
                    <AccentButton text='View Comments' />
                    <AccentButton text='Reply to Post' />
                </ul>
            </article>
        )
    }
}