import React, { useEffect, useState } from 'react'

const PostList = () => {

   const [posts, setPosts]= useState([]);

   useEffect(() =>{

    fetch("https://jsonplaceholder.typicode.com/posts")
        
        .then(response =>response.json())
        .then(data =>{
            setPosts(data);
            console.log(data);
        });


   }, []);


  return (
    <div>
        <h2>Post List</h2>

        {
            posts.map((post) =>(
                <p key={post.id}>{post.title}</p>
            ))
        }
    </div>
  )
}

export default PostList