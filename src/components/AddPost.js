import React, {Component} from 'react'
import UploadInput from './UploadInput'
import { Mutation } from "react-apollo";
import {ADD_POST, GET_POSTS} from '../graphql'

class AddPost extends Component{
    constructor(props){
        super(props)
        this.state = {senderName: '', text: '', pictureURL: '', error: ''}

        this.updatePictureURL = this.updatePictureURL.bind(this)
        this.updateSenderName = this.updateSenderName.bind(this)
        this.updateText = this.updateText.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    updatePictureURL(newURL) {
        this.setState({pictureURL: newURL})
    }

    updateSenderName(e) {
        this.setState({senderName: e.target.value})
    }

    updateText(e) {
        this.setState({text: e.target.value})
    }

    refreshForm() {
        this.setState({text: '', senderName: '', pictureURL: '', error: ''})
    }

    submitForm(addPost) {
        let {senderName, text, pictureURL} = this.state
        if(!senderName || !text || !pictureURL) return this.setState({error: 'All fields are required!'})
        addPost({variables: {...this.state}})
        this.refreshForm()
    }

    render(){
        return (
            <div style={styles.container}>
                <UploadInput uploadedURL={this.state.pictureURL} onChange={this.updatePictureURL} />
                    <input value={this.state.senderName} onChange={this.updateSenderName} type="text" placeholder={'senderName'}/>
                    <input value={this.state.text} onChange={this.updateText} type="text" placeholder={'text'}/>
                    <Mutation mutation={ADD_POST} update={(cache, {data: {addPost}}) => {
                            const { getPosts } = cache.readQuery({query: GET_POSTS})
                            cache.writeQuery({
                                query: GET_POSTS,
                                data: {getPosts: getPosts.concat([addPost])}
                            })
                        }}>
                        {(addPost, {data}) => (
                            <button onClick={(e) => {this.submitForm(addPost)}}>Send</button>
                        )}
                    </Mutation>
                    {this.state.error}
            </div>
        )
    }
}

const styles = {
    container: {
        width: '35vh',
        height: '60vh',
        border: 'solid',
        margin: 5,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center'
    }
}

export default AddPost