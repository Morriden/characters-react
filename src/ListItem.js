import React, { Component } from 'react'
import request from 'superagent'
import Header from './Header'

export default class ListItem extends Component {
    state = {
        data: {}
    }

    async componentDidMount() {
        const fetchedData = await request.get(`https://young-cove-37682.herokuapp.com/characters/${this.props.match.params.id}`)
        const data = fetchedData.body
        this.setState({ data: data })
        console.log(this.state.data.id, 'hey')
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        const deleteCharacter = await request.delete(`https://young-cove-37682.herokuapp.com/characters/${this.props.match.params.id}`)
        console.log('hey')
    }

    render() {
        console.log(this.state.data, 'hey')
        return (
            <div>       
                        <Header/>
                        <h3>Name: {this.state.data.name}</h3>
                        <p>Level: {this.state.data.level}</p>
                        <p>Alignment: {this.state.data.alignment}</p>
                        <p>Current Status: {String(this.state.data.is_alive)}</p>
                        <p>Description: {this.state.data.description}</p>
                        <button onClick={this.handleSubmit}>DELETE Character</button>
            </div>
        )
    }
}