import React from 'react'
import _ from './post-img.module.scss'

import Figure from 'react-bootstrap/Figure'

import girl from '../../img/girl.jpeg'

const PostImage = () => {
    return(
        <Figure className ='mt-2'>
            <div className = {`${_.wrapper}`}>
            <Figure.Image
                className = {`${_.postImage} border `}
                alt="171x180"
                src={girl}
            />
            </div>
            <Figure.Caption className =''>
                Хорошо делай хорошо будет
            </Figure.Caption>
        </Figure>
    )
}

export default PostImage