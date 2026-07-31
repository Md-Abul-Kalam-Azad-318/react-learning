import React, { useEffect, useState } from 'react'

const PostListError = () => {
   
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() =>{
        const fetchPosts = async () =>{
            try{
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                if(!response.ok){
                    throw new Error("Request failed");
                    
                }
                const data = await response.json();
                setPosts(data);
                setLoading(false);

            }
            catch (error){
                setError("Failed to load posts");
                setLoading(false);
            }
        }
        fetchPosts();

    }, []);
  
    if(loading){
        return <h2>Loading posts...</h2>;
    }
    if(error){
        return <h2>{error}</h2>;

    }
  
    return (
    <div>
        <h2>Post List Error</h2>
        {
            posts
            .slice(0, 10)
            .map((post) =>(
                <p key={post.id}>{post.title}</p>
            ))
        }
    </div>
  )

}

export default PostListError;