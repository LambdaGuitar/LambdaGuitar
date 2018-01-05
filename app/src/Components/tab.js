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
        let artist= this.props.match.params.artist;
        let song  = this.props.match.params.song;
        let url = `http://localhost:3000/api/tabs/${artist}/${song}`;
        axios.get(url)
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
                <p style={{fontFamily: 'elronet, monospace'}}>{this.state.tabText}</p>
            </div>
        )
    }
}