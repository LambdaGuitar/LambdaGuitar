import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            song: '',
            artist: '',
            tabText: ''
        }
    }

    componentDidMount() {
        let url = `http://localhost:3000/api/tabs/url`;
        console.log(this.props.url);
        axios.post(url, { url: this.props.url })
        .then((songBack) => {
            console.log('tab back',songBack.data);
            this.setState({
                song: songBack.data.name,
                artist: songBack.data.artist,
                tabText: songBack.data.content.text
            })
        })
        .catch((err) => {
            console.log('axios FAILED!!!!  \n',err)
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.song}</h1>
                <h1>by {this.state.artist}</h1>
                <p style={{fontFamily: 'elronet, monospace', whiteSpace: 'pre-wrap'}}>{`${this.state.tabText}`}</p>
            </div>
        )
    }
}