import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'
import Posts from './components/Posts'

const client = new ApolloClient({
    uri: "http://localhost:3000/graphql"
})

class HelloMessage extends React.Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Posts />
            </ApolloProvider>
        )
    }
}

let App = document.getElementById("app");

ReactDOM.render(<HelloMessage name="Yomi" />, App);