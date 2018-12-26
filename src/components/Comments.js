import React, {Component} from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

class Comments extends Component{
    render(){
        return (
            <div style={styles.containerDiv}>
                <div style={styles.topDiv}>
                    <span style={{flex: 0.5}} onClick={this.props.closeComments}>Back</span>
                    <span>Comments</span>
                </div>
                <Query variables={{postId: this.props.postId}} query={gql`

                    query Comments($postId: String!){
                        getCommentsOfPost(postId: $postId){
                            text
                        } 
                    }

                `}>
                    {({loading, err, data}) => {
                        if(loading) return <p>Loading ...</p>
                        if(err) return <p>There was an Error!</p>
                        return data.getCommentsOfPost.map((comment) => {
                            return <div key={comment.id} style={styles.commentDiv}>{comment.text}</div>
                        })
                    }}
                </Query>
            </div>
        )
    }
}

const styles = {
    containerDiv: {
        width: '35vh',
        height: '60vh',
        border: 'solid',
        margin: 5,
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    topDiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '1vh'
    },
    commentDiv: {
        padding: '1vh',
        borderTop: 'solid'
    }
}

export default Comments