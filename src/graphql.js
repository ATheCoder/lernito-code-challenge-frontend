import gql from 'graphql-tag'

const ADD_POST = gql`
        mutation AddPost($senderName: String!, $text: String!, $pictureURL: String!){
            addPost(addPostInput: {senderName: $senderName, text: $text, pictureURL: $pictureURL}){
            id
            senderName
            text
            numberOfComments
            pictureURL
        }
    }
`

const GET_POSTS = gql`
    {
        getPosts {
        id
        text
        senderName
        pictureURL
        numberOfComments
        }
    }

`

module.exports = {ADD_POST, GET_POSTS}