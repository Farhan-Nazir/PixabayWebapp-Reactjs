import React, { Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { searchText: ''};
    }
    render(){
        return(
            <div>
                <input className='col-md-8 input' value={this.state.searchText} onChange={ event => this.onInputChange(event.target.value)}/>
            </div>
        )
    }
    onInputChange(searchText){
        this.setState({searchText});
        this.props.onSearch(searchText);
    }
}


export default SearchBar;