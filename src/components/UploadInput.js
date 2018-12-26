import React, {Component} from 'react'
import axios from 'axios'
import { apiAddress } from '../config'

class UploadInput extends Component{
    constructor(props){
        super(props)
        this.state = {file: null}
        
        this.onChange = this.onChange.bind(this)
        this.uploadFile = this.uploadFile.bind(this)
    }

    async onChange(e) {
        await this.setState({file: e.target.files[0]})
        let uploadResponse = await this.uploadFile()
        let pictureURL = apiAddress + uploadResponse.data
        this.props.onChange(pictureURL)
    }

    async uploadFile(){
        const formData = new FormData()
        formData.append('file', this.state.file)

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        return await axios.post(apiAddress + 'upload', formData, config)
    }

    render(){
        if(this.props.uploadedURL === '') return <input onChange={this.onChange} type="file"/>
        return <img style={styles.img} src={this.props.uploadedURL} alt=""/>
    }
}

const styles = {
    img: {
        flexGrow: 1,
        width: '100%'
    }
}

export default UploadInput