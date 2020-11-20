import React from 'react'
import _ from './post-author.module.scss'
import './post-author.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown'

import avatar from '../../img/girl.jpeg'

const PostAuthor = () => {
    return(
        <div className= 'd-flex '>
            <div className = 'd-flex mr-auto'> 
                    
                    <Image 
                      className = {`${_.authorAvatar} mt-1`} 
                      src={avatar} 
                      rounded 
                    />

                    <div className ='ml-3'>
                        <div className ={`${_.authorName}`}>
                            Hyper Chad
                        </div>
                        <div className ={`${_.postDate} text-muted `}>
                            just now
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
                    <Dropdown.Item onClick ={() => alert('Брат, ты что крыса?!')} >Сomplain</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
                
            </div>
        </div>
    )
}

export default PostAuthor