// This component should change the bool value of the favourited variable
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFavorite } from '../../store/actions/articleActions'
import { Redirect } from 'react-router-dom'

export class AddFavorite extends Component{
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
        this.props.addFavorite(this.state)
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to = '/signin' />
        
        return (
            <div className = "container">
                <form onSubmit = {this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Add Favorite</h5>
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

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFavorite: (article) => dispatch(addFavorite(article))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFavorite) // first property is mapstatetoprops, then mapdispatchtoprops, thus the null