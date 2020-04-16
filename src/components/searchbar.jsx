import React, { Component } from 'react';




class Searchbar extends Component {
    state = { 
        searchtext:'',
     }

    handleChange=(event) =>this.setState({searchtext:event.target.value});
    
    handleSubmit=(event) =>{
        const { searchtext} =this.state;
        const {onformsubmit }=this.props;
        onformsubmit(searchtext);
        event.preventDefault();
    }
    render() { 
        return ( <div>
            <form style={{margin:"30px 0 0 0"}} onSubmit={this.handleSubmit}>
            <input style={{width:'92%',padding:'12px'}} type="text" 
                           name="search" onChange={this.handleChange}/>
                           <button style={{display:"inline",padding:'12px'}}>search</button>
            </form>
         
        </div>  );
    }
}
 


export default Searchbar;