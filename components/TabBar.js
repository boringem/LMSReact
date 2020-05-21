import React from 'react'
import TabButton from './TabButton'
import styles from './TabBar.module.css'

export default class TabBar extends React.Component {
    constructor(props) {
        super(props) 
        let type = this.props.type
        this.checkType = this.checkType.bind(this)
        this.state = {
            type: type,
        }
    }

    checkType(type) {
        let typeName = type
        let typeValue
        if (typeName === 'classroom') {
            typeValue = 'classroom'
        } else {
            typeValue = null
        }
        return typeValue
    }

    render() {
        let value = this.checkType(this.state.type)
        if (value === 'classroom') {
            return (
                <ul className={styles.tab_bar_list}>
                    <TabButton text='Updates' id='one' />
                    <TabButton text='Materials' id='two' />
                    <TabButton text='Assignments' id='three' />
                    <TabButton text='Grades' id='four' />
                </ul>
            )
        }
        return (
            <p></p>
        )
    }
}