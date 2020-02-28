import React, { Component } from 'react';
import axios from 'axios';

//Components
import CollectionItem from './CollectionItem';

class Collections extends Component {
    state = {
        collections: []
    }

    componentDidMount() {
        let API_KEY = 'gCouJE6hRjWt7VFkyxrAGhBL9T_m1-MJ51ruYu7LbJY';

        axios.get(`https://api.unsplash.com/collections/?client_id=${API_KEY}`)
            .then(res => {
                this.setState({
                    collections: res.data
                });
            })
    }

    render() {
        const { collections } = this.state;

        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-10 offset-lg-1">
                        {
                            collections && collections.map(col => {
                                return (
                                    <CollectionItem collection={col} key={col.id} />
                                );

                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Collections;
