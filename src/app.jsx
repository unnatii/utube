import React, { Component } from 'react';
import {Searchbar,Videobar,Videoscreen }from './components'
import utube from './api/utube'

class App extends Component {
    state = {  
        videos:[],
        selectedvideo:null
    }

    handleSubmit = async(searchtext) =>{
        const response= await utube.get('search',{
            params:{
                part: 'snippet',
                maxResults: 8,
                key:'AIzaSyBKjXr_SD56SF5w7cNTTrxjfS1Y7_WK-jI'
            }
        })
        this.setState({
                videos:response.data.items,
                selectedvideo:response.data.items[0]
        })
        console.log(response.data.items);
    };
    handleVideoSelect = (video) =>{
        this.setState({selectedvideo:video})
    }
    render() { 
        return (   <div className="container">
        <Searchbar onformsubmit={this.handleSubmit} />
        <div className="row">
            <div  className="col-sm-9">
                <Videoscreen video={this.state.selectedvideo}/>
            </div>
            <div className="col-sm-3">
                <Videobar handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
            </div>
        </div>
    </div>);
    }
}


export default App;