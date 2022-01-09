import React from 'react';
import { collection,addDoc } from 'firebase/firestore';
import {db, auth} from '../firebase-config';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePost({isAuth}) {
    const [title, setTitle] = useState("");
    const [postText, setpostText] = useState("");

        const colRef = collection(db, "posts");
    const createPost = async()=>{
        await addDoc(colRef, {title: title, postText: postText, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}})
        navigate("/");
    }
    let navigate = useNavigate();

        useEffect(() => {
            if(!isAuth){
                navigate("/login");
            }
            
        }, []);
    return (
        <div className='createPostPage'>
            <div className='cpContainer'>
                <h1>Write Away</h1>
                <div className='inputGp'>
                    <label>Title</label></div> 
                    <input onChange={(e)=>{setTitle(e.target.value)}}/>
                <div className='inputGp'>
                    <label>Post</label>
                    <textarea placeholder ="Type something..." onChange={(e)=>{setpostText(e.target.value)}} />
                    </div> 
                <button onClick={createPost}><b>Create Post</b></button>
            </div>
            
        </div>
    )
}

export default CreatePost;
