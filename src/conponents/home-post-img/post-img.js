import React from 'react'
import _ from './post-img.module.scss'

import Figure from 'react-bootstrap/Figure'

const PostImage = ({payload}) => {
    /*
    if(payload.length > 1){
        //slider? 
    }
    */
    const imgOnLoad = (e) => {
        e.target.style.opacity = 1
    }

    return(
        <Figure className ='mt-2'>
            <div className = {`${_.wrapper}`}>
            <Figure.Image
                onLoad ={imgOnLoad}
                className = {`${_.postImage} border `}
                alt="post"
                src={payload.url}
            />
            </div>
            <Figure.Caption className ={`${_.postDescription} `}>
                {payload.description}
            </Figure.Caption>
        </Figure>
    )
}

export default PostImage