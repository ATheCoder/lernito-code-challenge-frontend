import React, {Component} from 'react'
import { Query } from 'react-apollo'
import Post from './Post'
import PostWithComments from './PostWithComments'
import AddPost from './AddPost'
import {GET_POSTS} from '../graphql'

class Posts extends React.Component{

    render(){
        return (
            <div style={styles}>
                <AddPost />
                <Query query={GET_POSTS}>
                    {({loading, err, data, client}) => {
                        if(loading) return <p>Loading ...</p>
                        if(err) return <p>There was an error!</p>
                        return data.getPosts.slice(0).reverse().map((post) => {
                            return <PostWithComments key={post.id} {...post} />
                        })
                    }}
                </Query>
            </div>
        )
    }
}

const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

export default Posts