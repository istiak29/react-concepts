import { useEffect, useState } from "react"

export default function Post(){
    // 1. user state
    const [posts, setPosts] = useState([])

    // 2. Use Effect
    useEffect(()=> {
        // 3. fetch
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => setPosts(data))
    }, [])


    return (
        <div>
            <h3>Posts: {posts.length}</h3>
            {
                posts.map(post => <Post></Post>)
            }

        </div>
    )
}



/***
 * 1. Create a state to store the data
 * 2. Create UseEffect with no dependencies
 * 3. Use fetch to load data
 */