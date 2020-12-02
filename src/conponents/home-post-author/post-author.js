import React from 'react'
import _ from './post-author.module.scss'
import './post-author.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown'

const PostAuthor = ({author, date}) => {
    const {avatar,name} = author

    return(
        <div className= 'd-flex '>
            <div className = 'd-flex mr-auto'> 
                    
                    <Image 
                      className = {`${_.authorAvatar}`} 
                      src={avatar} 
                      rounded 
                    />

                    <div className ='ml-2'>
                        <div className ={`${_.authorName}`}>
                            {name}
                        </div>
                        <div className ={`${_.postDate} text-muted  `}>
                            {`
                            ${new Date(date.seconds *1000).toDateString()}
                            `}
                        </div>
                    </div>
            </div>
            <div className ='mr-3'>

            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                <FontAwesomeIcon icon = 'ellipsis-v'/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item >Delete</Dropdown.Item>
                    <Dropdown.Item onClick ={() => alert(`Брат, ты что крыса?! `)} >Сomplain</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
                
            </div>
        </div>
    )
}

export default PostAuthor