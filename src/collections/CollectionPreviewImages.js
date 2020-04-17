import React from 'react';

const CollectionPreviewImages = ({ collection }) => {
    return (
        <div>
            <div id={collection.id} className="carousel slide carousel-fade text-center" data-ride="carousel">
                <div className="carousel-inner">
                    {
                        collection.preview_photos && collection.preview_photos.map((photo, i) => {
                            return (
                                <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={photo.id}>
                                    <img src={photo.urls.small} alt="..." />
                                </div>
                            )
                        })
                    }

                </div>
                <a className="carousel-control-prev" href={`#${collection.id}`} role="button" data-slide="prev">
                    <div id="chevron-arrow-left"></div>
                </a>
                <a className="carousel-control-next" href={`#${collection.id}`} role="button" data-slide="next">
                    <div id="chevron-arrow-right"></div>
                </a>
            </div>
        </div>
    );
}

export default CollectionPreviewImages;
