import React from 'react';
import { Link } from 'react-router-dom';

//Components
import CollectionPreviewImages from './CollectionPreviewImages';

const CollectionItem = ({ collection }) => {
    return (
        <div className="col-sm-12 col-md-12">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12 col-md-9">
                            <h5>{collection.title}</h5>
                            <div>{collection.description ? collection.description : "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua."}</div>
                            <br />
                            <Link to={`/collection/${collection.id}`}><h6>See collecion photos</h6></Link>
                            <br />
                            <hr />
                            {
                                collection.tags && collection.tags.map((tag, i) => {
                                    return (
                                        <span className="badge badge-light tag" key={i}>{tag.title}</span>
                                    );
                                })
                            }
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <CollectionPreviewImages collection={collection} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollectionItem;
