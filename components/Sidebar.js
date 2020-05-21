import React from 'react'
import data from './sampleClassData'
import NavButton from './NavButton'
import AccentButton from './AccentButton'
import styles from './Sidebar.module.css'

export default class Sidebar extends React.Component {
    constructor() {
        super()
        this.state = {
            items: data
        }
    }

    render() {
        const navItems = this.state.items.map(item => <div className={styles.sidebar_item}><NavButton key={item.id} name={item.name} /></div>)
        return (
            <nav className={styles.sidebar_container}>
                {navItems}
                <ul className={styles.horizontal_buttons}>
                    <li className={styles.horizontal_buttons_item}>
                        <AccentButton text="Calendar" />
                    </li>
                    <li className={styles.horizontal_buttons_item}>
                        <AccentButton text="Support" />
                    </li>
                </ul>
            </nav>
        )
    }
}