import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div className={s.content}>
        <div>
            My post
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='0' />
                <Post message="It's my first post" likesCount='24' />
            </div>
        </div>
    </div>
}

export default MyPosts;