import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'
import Header from './Header.js'

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
        return <div className="list-page-body">
                    <Header/>
                        <ul className="list-page"> {this.state.data.map(character => 
                            <li className="list-item">
                            <Link className="link-to-character" to={`/listitem/${character.id}`}>Name: {character.name}</Link>
                            <p>Character Level: {character.level}</p>
                            <p>Character Alignment: {character.alignment}</p>
                            <p>Alive?: {String(character.is_alive)}</p>
                            <p>Description: {character.description}</p>

                            </li>)}
                        </ul>
               </div>
    }
}