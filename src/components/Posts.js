import React, {Component} from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Post from './Post'

class Posts extends React.Component{
    render(){
        return (
            <div style={styles}>
                <Query query={gql`

                    {
                        getPosts{
                        id
                        text
                        senderName
                        pictureURL
                        numberOfComments
                        }
                    }

                `}>
                    {({loading, err, data}) => {
                        if(loading) return <p>Loading ...</p>
                        if(err) return <p>There was an error!</p>

                        return data.getPosts.map((post) => {
                            return <Post {...post} />
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
    border: 'solid',
    flex: 1
}

export default Posts