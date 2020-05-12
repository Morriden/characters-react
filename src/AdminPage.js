import React, { Component } from 'react'
import request from 'superagent';
import Header from './Header.js';
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
        console.log(newCharacter, 'new')
        this.props.history.push('/listpage')
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
            <div className="admin-page-body">
                <Header/>
                <form className="admin-page-form" onSubmit={this.handleSubmit}>
                        <label className="label-input"> Character Name: </label>
                        <input className="admin-page-input" onChange={this.handleChange} value={this.state.name} name="name" />
                        
                        <label className="label-input"> Character Alignment: </label>
                        <input className="admin-page-input" onChange={this.handleChange} value={this.state.alignment} name="alignment"/>
                        
                        <label className="label-input"> Character Description:</label>
                        <input className="admin-page-input" onChange={this.handleChange} value={this.state.description} name="description"/>
                        
                    <div>
                        <label className="label-input">Character Level: </label>
                            
                            <input className="admin-page-input" onChange={this.handleChange} value={this.state.level} name="level" type="number"/>
                        
                        
                        <label className="label-input">
                            Is Character Alive?
                            <input onChange={this.handleChange} name="is_alive" type="radio" value="true"/>
                            Is Character Dead?
                            <input onChange={this.handleChange} name="is_alive" type="radio" value=""/>
                        </label>
                        <button>Submit</button>
                    </div>
                    
                    
                </form>
            </div>
        )
    }
}
