import React, { Component } from 'react';
import axios from 'axios';

//Components
import GalleryItem from './GalleryItem';

class Gallery extends Component {
    state = {
        galleryPhotos: []
    }

    componentDidMount() {
        let API_KEY = 'gCouJE6hRjWt7VFkyxrAGhBL9T_m1-MJ51ruYu7LbJY';

        axios.get(`https://api.unsplash.com/photos/?client_id=${API_KEY}`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    galleryPhotos: res.data
                });
            })
    }

    render() {
        const { galleryPhotos } = this.state;
        return (
            <div>
                <div className="row">
                    {galleryPhotos && galleryPhotos.map(photo => {
                        return (
                            <GalleryItem photo={photo} key={photo.id} />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Gallery;
