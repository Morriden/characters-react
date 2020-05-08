import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

export default class ListPage extends Component {

    state = {
            data: [{}]
        }
    
    async componentDidMount() {
    const fetchedData = await request.get('https://young-cove-37682.herokuapp.com/characters')
    const data = fetchedData.body
    this.setState({ data: data })
    }

    render() {
        console.log(this.state.data)         
        return <ul>{this.state.data.map(character => 
                    <li>
                        <Link to={`/listitem/${character.id}`}><h3>Name: {character.name}</h3></Link>
                        <p>Level: {character.level}</p>
                        <p>Alignment: {character.alignment}</p>
                        <p>Current Status: {String(character.is_alive)}</p>
                        <p>Description: {character.description}</p>

                    </li>)}
               </ul>
    }
}