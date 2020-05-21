import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.css'

export default class Header extends React.Component {
    render() {
        return (
            <header className={styles.header_bar}>
                <h3>Virtual Classroom</h3>
                <ul className={styles.horizontal_list}>
                    <li className={styles.horizontal_list_item}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.list_icon} />
                    </li>
                    <li className={styles.horizontal_list_item}>
                        <FontAwesomeIcon icon={faUser} className={styles.list_icon} />
                    </li>
                </ul>
            </header>
        )
    }
}