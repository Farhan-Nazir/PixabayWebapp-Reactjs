import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {searchImages} from 'pixabay-api';
import _ from 'lodash';
import SearchBar from './components/search-bar';
import ImageList from './components/image-list';
import ImageDetail from './components/image-detail';
const AUTH_key = '5941074-00a3581ded0d2ad1a2547d589';
//searchImages(AUTH_key, 'Roses').then((r) => console.log(r))
class App extends Component{
    constructor(props){
        super(props);
        this.state = { images: [], selectedImage: null}
        this.imagesSearch('Flowers')
        
    }
    imagesSearch(searchText) {
        searchImages(AUTH_key, searchText).then((images) => {
            this.setState({ images : images.hits, selectedImage: images[0]});
            console.log(this.state.images);
        });
    }
    render(){
        const imagesSearch = _.debounce((searchText) => {this.imagesSearch(searchText)},300); // just for update in every 3 seconds
        // const imagesSearch = (searchText) => {this.imagesSearch(searchText)}; // update on every key press
        return(
            <div>
                Pixabay Webapp
                <SearchBar onSearch={imagesSearch}/>
                <br/>
                <br/>
                <div className='total-hits'>
                    Total Hits: {this.state.images.length}
                </div>
                <br/>
                <ImageDetail image={this.state.selectedImage} />
                <ImageList images={this.state.images} onImageSelect={ selectedImage => this.setState({ selectedImage})}/>
            </div>
        )
    }
}

ReactDom.render(<App />, document.querySelector('.container'));

