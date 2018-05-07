import React from 'react';
import ImageListItem from './image-list-item';

const ImageList = (props) => {
    const ImageItem = props.images.map((image) => {
        return <ImageListItem key={image.id} image={image} onImageSelect={props.onImageSelect}/>
    });
    return (
        <div>
            <ul className='list-group'>
                {ImageItem}
            </ul>
        </div>
    )

}

export default ImageList;