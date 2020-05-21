import React from 'react'
import Update from './Update'
import styles from './Classroom.module.css'
import TabBar from './TabBar'

export default class Classroom extends React.Component {
    constructor(props) {
        super(props) 
        let name = this.props.name
        let updates = this.props.updates 

        this.state = {
            name: name,
            updates: updates
        }
    }

    render() {
        const updateItems = this.state.updates.map(item => <Update key={item.id} update={item} />)
        return (
            <section>
                <h1 className={styles.classroom_title}>{this.state.name}</h1>
                <TabBar type="classroom" />
                {updateItems}
            </section>
        )
    }
}