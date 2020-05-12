import React, { Component } from 'react'
import request from 'superagent'
import { Link } from 'react-router-dom';
import Header from './Header.js'
import './App.css'

export default class HomePage extends Component {           
    
    state = {
    data: []
    }

async componentDidMount() {
const fetchedData = await request.get('https://young-cove-37682.herokuapp.com/characters')
const data = fetchedData.body
this.setState({ data: data })

}
    render() {
        return (
            <div className="home-page">
                <Header/>
                <div className="home-page-body">
                    <h2 className='home-page-header'>
                        Figures of Destiny
                    </h2>
                    <p className="body-text">Figures of Destiny is an API that allows you to keep track of your characters from roleplaying games. You are able to keep track of details such as name, level, alignment, current status, and a description. The best part is you can save them to your profile!</p>
                    <Link className="character-link-home-page" to={`/listpage`}>Take a look at some famous characters from my roleplaying games!</Link>
                    <div>
                        <img src="northmap.jpg" alt=""></img>
                        <img src="southmap.jpg" alt=""></img>
                    </div>
                </div>
            </div>
        )
    }
}
