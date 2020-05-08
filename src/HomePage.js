import React, { Component } from 'react'
import request from 'superagent'
import { Link } from 'react-router-dom';




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
            <div>
                <header>
                <h3 className='home-page-header'>
                    Figures of Destiny
                </h3>
                <Link to={`./aboutme`}><p>By: Erik Ford</p></Link>
                </header>
                <p>Add in a description of what this API is about.</p>
                <Link to={`/listpage`}>Take a look at these heroes and villians.</Link>
                <p>placement holder for images of campaigns</p>

            </div>
        )
    }
}
