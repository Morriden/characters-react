import React, { Component } from 'react'
import request from 'superagent';
import { Link } from 'react-router-dom';
export default class AdminPage extends Component {
    state = {
            name: '',
            level: 0,
            alignment: '',
            is_alive: false,
            description: '',
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        const newCharacter = await request.post('https://young-cove-37682.herokuapp.com/characters', {
            name: this.state.name,
            level: this.state.level,
            alignment: this.state.alignment,
            is_alive: this.state.is_alive,
            description: this.state.description,
        })
        this.props.history.push('/')
    }

    handleChange = (e) => {
        const newState = {};
        if(e.target.name === 'is_alive') {
        const value = Boolean(e.target.value)
        newState[e.target.name] = value;
        console.log(value)
        this.setState(newState)
        } else {
           newState[e.target.name] = e.target.value;
        this.setState(newState) 
        }

    }


    render() {
        return (
            <div>
                <Link to ={'/listpage'}>Look at more Heroes and Villians</Link>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Character Name: 
                        <input onChange={this.handleChange} value={this.state.name} name="name" />
                    </label>
                    <label>
                        Character Level: 
                        <input onChange={this.handleChange} value={this.state.level} name="level" type="number"/>
                    </label>
                    <label>
                        Character Alignment: 
                        <input onChange={this.handleChange} value={this.state.alignment} name="alignment"/>
                    </label>
                    <label>
                        Is Character Alive?
                        <input onChange={this.handleChange} name="is_alive" type="radio" value="true"/>
                        Is Character Dead?
                        <input onChange={this.handleChange} name="is_alive" type="radio" value=""/>
                    </label>
                    <label>
                        Character Description: 
                        <input onChange={this.handleChange} value={this.state.description} name="description"/>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
