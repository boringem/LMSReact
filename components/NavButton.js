import React from 'react'
import styles from './Sidebar.module.css'
import Link from 'next/Link'

export default class NavButton extends React.Component {
    constructor(props) {
        super(props)
        let name = this.props.name
        this.state = {
            name: name
        }
    }

    render() {
        console.log(this.props.name)
        return (
            <Link href="/ClassDash">
                <button className={styles.nav_button}>
                    <p>{this.state.name}</p>
                </button> 
            </Link>
        )
    }
}