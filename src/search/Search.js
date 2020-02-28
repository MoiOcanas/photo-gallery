import React, { Component } from 'react';
import axios from 'axios';

//Components
import GalleryItem from '../gallery/GalleryItem';

class Search extends Component {
    state = {
        searchInput: '',
        result: {}
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let API_KEY = 'gCouJE6hRjWt7VFkyxrAGhBL9T_m1-MJ51ruYu7LbJY';
        axios.get(`https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${this.state.searchInput}`)
            .then(res => {
                this.setState({
                    result: res.data
                });
                console.log(this.state.result);
            })
    }

    render() {
        const { result } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 col-md-8 offset-md-2 text-center">
                        <h3>Search a photo</h3>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" className="search-input" id="searchInput" placeholder="Search..." onChange={this.handleChange} />
                        </form>
                    </div>
                </div>
                <div className="row">
                    {result.results && result.results.map(re => {
                        return (
                            <GalleryItem photo={re} key={re.id} />
                        )
                    })}

                </div>
            </div>
        );
    }
}

export default Search;
