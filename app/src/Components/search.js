import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Tab from './tab.js'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {
                    "url": "https://tabs.ultimate-guitar.com/tab/drugdealer/easy_to_forget_chords_2002551",
                    "name": "Easy To Forget",
                    "difficulty": "intermediate",
                    "rating": 4.5,
                    "numberRates": 5,
                    "type": "chords",
                    "artist": "Drugdealer"
                },
                {
                    "url": "https://tabs.ultimate-guitar.com/tab/drugdealer/the_real_world_chords_2218561",
                    "name": "The Real World",
                    "type": "chords",
                    "artist": "Drugdealer"
                },
                {
                    "url": "https://tabs.ultimate-guitar.com/tab/drugdealer/the_real_world_chords_2263267",
                    "name": "The Real World (ver 2)",
                    "type": "chords",
                    "artist": "Drugdealer"
                },
                {
                    "url": "https://tabs.ultimate-guitar.com/tab/drugdealer/were_you_saying_something_chords_1879295",
                    "name": "Were You Saying Something",
                    "rating": 5,
                    "numberRates": 7,
                    "type": "chords",
                    "artist": "Drugdealer"
                }
            ],
            activeTab: ''
        }
    }

    componentDidMount() {
        let propTabs = this.props.result
        if (propTabs) {
            this.setState({
                tabs: propTabs
            })
        }
        console.log(propTabs);
    }

    handleTab(e) {
        let songURL = e.target.value;
        this.setState({
            activeTab: songURL
        })
    }

    render() {
        return (
            <div>
                <table className={this.state.activeTab.length > 0 ? 'hidden' : "table table-dark"}>
                <thead><tr><th scope="col">Song Name</th><th scope="col">Artist Name</th><th scope="col">Rating</th></tr></thead>
                <tbody>
                {this.state.tabs ? this.state.tabs.map((tab, index) => {
                    if (tab.type === 'tabs' || tab.type === 'chords') {
                        return (
                            <tr className={this.state.activeTab.length > 0 ? 'hidden' : 'song'} key={`${index}guy`}>
                                <td><button className='btn btn-outline-danger' onClick={this.handleTab.bind(this)} value={tab.url} >{tab.name}</button> - {tab.type}</td>
                                <td>{tab.artist}</td>
                                <td>{tab.rating}</td>
                            </tr>
                    ) } else {
                        return;
                    }
                }) : <p> no tabs found </p>}
                </tbody>
                </table>
                {this.state.activeTab.length > 0 ? <Tab url={this.state.activeTab}/> : null}
            </div>
        )
    }
}