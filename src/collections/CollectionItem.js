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
                            <h5><b>{collection.title}</b></h5>
                            <div>{collection.description ? collection.description : "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua."}</div>

                            <div style={{ margin: '10px 0px 10px 0px' }}>
                                <Link to={`/collection/${collection.id}`}>See collecion photos</Link>
                            </div>
                            <hr />
                            <div>
                                {
                                    collection.tags && collection.tags.map((tag, i) => {
                                        return (
                                            <span className="badge badge-light tag" key={i}>{tag.title}</span>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <CollectionPreviewImages collection={collection} />
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}

export default CollectionItem;
