import React from 'react';

const ImageListItem = ({image, onImageSelect}) => {
    const ImagePreview = image.previewURL;
    return (
        <li onClick={ () => onImageSelect(image)} className='list-group-item col-md-6'>
            <div className='video-list-media'>
            <div className='media-left'>
                <img className='media-object' src={ImagePreview} />
            </div>
            <div className='media-body'>
                <div className='media-heading'>
                  Tags: {image.tags}
                </div>
                <div>
                  Downloads: {image.downloads}
                </div>
                <div>
                   Likes: {image.likes}
                </div>
            </div>
        </div>
        </li>
    )
}

export default ImageListItem;