import React, { useEffect, useState } from 'react'
import _ from './post-author.module.scss'
import './post-author.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'

import {Link} from 'react-router-dom'
import compose from '../../utils/compose'
import {withFirebaseService, withFirebaseUser} from '../hoc'

import default_avatar from '../../img/default_avatar.png'


const PostAuthor = ({author, postId, firebaseService, currentUser, date}) => {
    const {id} = author
    const [loading, setLoading] = useState(true)
    const [postAuthor, setPostAuthor] = useState(null)

    const deletePost = () => {
        firebaseService.removePost(postId)
    }
    useEffect(()=>{
        //get author of post by id
        const fetchData = async () => {
            const response = await 
              firebaseService.getDocFromCollection('users', id)
            setPostAuthor(response)
            setLoading(false)
        }
        fetchData()
    },[])
    
 
    if(loading){
        return (null)
    }

    const avatarStyle = {
        backgroundImage: `url(${postAuthor.avatar || default_avatar} )`,
        width:'33px',
        height:'33px',
        backgroundSize: 'cover',
        boxShadow: '0 0 0.2rem 0.01rem rgb(172, 172, 172)',
        borderRadius:'5px',
        backgroundRepeat:'no-repeat',
    }


    return(
        <div className= 'd-flex '>
            <div className = 'd-flex mr-auto'> 
                     <Nav.Link className = {`${_.navLinkAvatar} mt-2`} as={Link} to={`/profile/${author.id}`}>
                         <div style ={avatarStyle}></div>
                     </Nav.Link>

                    <div className ='ml-2 mt-2'>
                        <div className ={`${_.authorName}`}>
                          {postAuthor.name}
                        </div>
                        <div className ={`${_.postDate} text-muted  `}>
                            {`
                            ${new Date(date.seconds *1000).toDateString()}
                            `}
                        </div>
                    </div>
            </div>
            <div className ='mr-3'>
            {currentUser?
            <Dropdown >
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                <FontAwesomeIcon icon = 'ellipsis-v'/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {currentUser? currentUser.id === id?
                     <Dropdown.Item onClick = {deletePost} >Delete</Dropdown.Item>:
                     <Dropdown.Item onClick ={() => alert(`Брат, ты что крыса?! `)} >Сomplain</Dropdown.Item> 
                     :null}
                   
                </Dropdown.Menu>
            </Dropdown>
            :null
            }
                
            </div>
        </div>
    )
}

export default compose(
    withFirebaseUser(),
    withFirebaseService()
) (PostAuthor)