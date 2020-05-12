import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'
import Header from './Header.js'

export default class ListPage extends Component {

    state = {
            data: [{}],
            alignment: [],
            dropDownFilter: '',
        }
    
    async componentDidMount() {
    const fetchedData = await request.get('https://young-cove-37682.herokuapp.com/characters')
    const alignmentData = await request.get('https://young-cove-37682.herokuapp.com/alignment')
    const alignment = alignmentData.body
    const data = fetchedData.body
    this.setState({ data: data, alignment: alignment })
    }

    handleChange = (e) => {
        this.setState({ dropDownFilter: e.target.value })
    }

    render() {    
        return (<div className="list-page-body">
                    <Header/>
                        <select onChange={this.handleChange}>
                            <option value="">Show All Alignments</option>
                            {
                            this.state.alignment.map(
                            alignment => <option value={alignment.alignment}>{alignment.alignment}</option>
                            )
                            }
                        </select>
                        <ul className="list-page"> {this.state.data
                        .filter(character => {
                            if (!this.state.dropDownFilter) return true;
                            return character.alignment === this.state.dropDownFilter
                        }) 
                        .map(character => 
                            <li className="list-item">
                            <Link className="link-to-character" to={`/listitem/${character.id}`}>Name: {character.name}</Link>
                            <p>Character Level: {character.level}</p>
                            <p>Character Alignment: {character.alignment}</p>
                            <p>Alive?: {String(character.is_alive)}</p>
                            <p>Description: {character.description}</p>

                            </li>)}
                        </ul>
               </div>)
    }
}