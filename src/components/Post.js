import React, {Component} from 'react'

class Post extends Component{
    render(){
        const {pictureURL, text, senderName, numberOfComments} = this.props
        return (
            <div style={styles.outerContainer}>
                    <img style={styles.image} src={pictureURL}/>
                <div style={styles.innerContainer}>
                    <span>{senderName}</span>
                    <span>{text}</span>
                </div>
            </div>
        )
    }
}

const styles = {
    outerContainer: {
        width: '35vh',
        height: '60vh',
        border: 'solid',
        margin: 5,
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    image: {
        flexGrow: 1
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
        height: '7vh',
        fontSize: '2vh'
    }
}

export default Post