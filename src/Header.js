import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                <Link className="link" to={`/`}>Home Page</Link>
                <Link className="link" to={`/listpage`}>List of Characters</Link>
                <p className="link-title">Figures of Destiny!</p>
                <Link className="link" to={`/adminpage`}>Submit your Character</Link>
                <Link className="link" to={`/aboutme`}>About Erik</Link>
            </header>
        )
    }
}
