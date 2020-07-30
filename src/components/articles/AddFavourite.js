// This component should change the bool value of the favourited variable
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFavourite } from '../../store/actions/articleActions'

export class AddFavourite extends Component{
    state = {
        title: '',
        // authors: [],
        content: ''
        // tasks: '',
        // date: '',
        // bitmap: []
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.addFavourite(this.state)
    }
    render() {
        return (
            <div className = "container">
                <form onSubmit = {this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Add Favourite</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type = "text" id = "title" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea name="text" id="content" onChange = {this.handleChange} className="materialize-textarea"></textarea>                    
                    </div>
                    <div className="input-field">
                        <button className = "btn red lighten-2 z-depth-0" onChange = {this.handleChange}>Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFavourite: (article) => dispatch(addFavourite(article))
    }
}

export default connect(null, mapDispatchToProps)(AddFavourite) // first property is mapstatetoprops, then mapdispatchtoprops, thus the null