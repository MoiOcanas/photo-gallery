import React, { Component } from 'react';
import axios from 'axios';

//Components
import GalleryItem from '../gallery/GalleryItem';

class CollectionDetails extends Component {
    state = {
        collectionPhotos: []
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        let API_KEY = 'gCouJE6hRjWt7VFkyxrAGhBL9T_m1-MJ51ruYu7LbJY';

        axios.get(`https://api.unsplash.com/collections/${id}/photos?client_id=${API_KEY}`)
            .then(res => {
                this.setState({
                    collectionPhotos: res.data
                });
            })
    }

    render() {
        const { collectionPhotos } = this.state;
        return (
            <div>
                <div className="row">
                    {collectionPhotos && collectionPhotos.map(photo => {
                        return (
                            <GalleryItem photo={photo} key={photo.id} />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default CollectionDetails;
