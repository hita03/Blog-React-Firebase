import { collection, deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { getDocs } from 'firebase/firestore';
import {db} from '../firebase-config';
import { useEffect, useState } from 'react';
export default function Home() {
    const [postList, setpostList ] = useState([]);
    const colRef = collection(db, "posts");

    useEffect(() => {
        const getPosts = async()=>{
            const data  = await getDocs(colRef)
            setpostList(data.docs.map((doc)=> ({ ...doc.data(), id: doc.id})));
        }
        getPosts();
        
    });

    const deletePost = async(id)=>{

        const userDoc = doc(db,"posts", id ); //user whose post has to be deleted
        await deleteDoc(userDoc);

    }  
   return (
        <div className='homePage'>
            {postList.map((post) =>{
                return (
                <div className='post' key = {post.id}>
                    <div className='postHeader'>
                        <div className='title'>
                            <h1>{post.title}</h1>
                        </div>
                        <div className='deletePost'>
                            <button onClick={()=>{deletePost(post.id)}}>&#128465;</button>
                        </div>
                    </div>
                    <div className='postTextContainer'>{post.postText}</div>
                    <h3>@{post.author.name}</h3>
                </div>
                );
                
            })}
        </div>
    );
}
