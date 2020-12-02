const homePostsLoaded = (newPosts) => {
    return{
        type:'HOME_POSTS_LOADED',
        payload: newPosts
    }
}

export {
    homePostsLoaded
}