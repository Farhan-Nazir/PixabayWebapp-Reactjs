import React from 'react';
const ImageDetail = ({ image }) =>  {
    if (!image){
        return <div>Loading Images.......</div>;
    }
    const imageID = image.largeImageURL;
    return (
        <div>
            <div className='video-detail col-md-20'>
            <div className='embed-responsive embed-responsive-16by9'>
            <img src={imageID} className="rounded float-right" />
            </div>
            <div className='details'>
                <div>Tags: {image.tags} </div>
                <div>Downloads:{image.downloads} </div>
                <div>Likes:{image.likes} </div>
            </div>

        </div>
        </div>
    )
}

export default ImageDetail;