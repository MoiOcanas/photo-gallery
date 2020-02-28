import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';

class GalleryItem extends Component {
    state = {}

    likePhoto(id) {
        let API_KEY = 'gCouJE6hRjWt7VFkyxrAGhBL9T_m1-MJ51ruYu7LbJY';
        axios.post(`https://api.unsplash.com/photos/${id}/like?client_id=${API_KEY}`)
            .then(res => {
                console.log(res.data);
            })
    }

    render() {
        const { photo } = this.props;
        return (
            <div className="col-sm-12 col-md-3 gallery" >
                <span data-toggle="modal" data-target={"#" + photo.id} >
                    <div className="card">
                        <div className="card-body text-center">
                            <img src={photo.urls.raw + "w=1500&h=400"} className="img-fluid img-gallery" alt="Responsive" />
                        </div>
                    </div>
                </span>
    
                <div className="modal fade" id={photo.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog text-center modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <div className="modal-body">
                                        <img src={photo.urls.raw + "w=1500&h=400"} className="img-fluid modal-image" alt="Responsive" />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <span data-dismiss="modal">
                                        <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                                    </span>
                                    <div className="modal-footer-info text-left">
                                        <p><i  onClick={() => { this.likePhoto(photo.id) }} className="fa fa-heart-o" aria-hidden="true"></i> {photo.likes}</p>
    
                                        <br />
    
                                        <div className="modal-info">
                                            <div>{photo.alt_description ? photo.alt_description : "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua." }</div>
    
                                            <div className="dropdown">
                                                <button className="btn btn-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" target="_blank" href={photo.links.download}>download</a>
                                                    <a className="dropdown-item" target="_blank" href={photo.user.portfolio_url}>user portfolio</a>
                                                </div>
                                            </div>
    
                                        </div>
    
                                        <br />
    
                                        <hr />
                                        <div className="modal-footer-container">
                                            <p><small>uploaded {photo.created_at ? moment(photo.created_at).calendar() : null}</small></p>
                                            <p><small>by {photo.user.username}</small><img src={photo.user.profile_image.small} className="rounded-circle" alt={photo.user.username} /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GalleryItem;
