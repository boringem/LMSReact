import React from 'react'
import modernChina from '../components/fakeData.js'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Classroom from '../components/Classroom'
import styles from '../components/Classroom.module.css'

export default class ClassDash extends React.Component {
    constructor() {
        super()
        this.state = {
            data: modernChina
        }
    }


    render() {
        return (
            <main className={styles.classroom_container}>
                <div className={styles.classroom_row}>
                    <Header />
                </div>
                <section className={styles.classroom_row}>
                    <Sidebar />
                    <div className={styles.classroom_content}>
                        <Classroom name={this.state.data.name} updates={this.state.data.updates} />
                    </div>
                </section>
            </main>
        )
    }
}