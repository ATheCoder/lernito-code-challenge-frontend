import React, {Component} from 'react'
import Post from './Post'
import Comments from './Comments'

class PostWithComments extends Component{
    constructor(props){
        super(props)
        this.state = {isCommentsOpen: false}
        
        this.openComments = this.openComments.bind(this)
        this.closeComments = this.closeComments.bind(this)
    }

    openComments(){
        console.log(this)
        this.setState({isCommentsOpen: true})
    }

    closeComments(){
        this.setState({isCommentsOpen: false})
    }

    render(){
        if(this.state.isCommentsOpen) return <Comments closeComments={this.closeComments} postId={this.props.id} />
        return <Post openComments={this.openComments} {...this.props} />
    }
}

export default PostWithComments