import React from "react";
import { useAppState } from "../AppState";
import { Route, Link } from "react-router-dom";
import Form from "../components/Form.jsx";


const Dashboard = (props) => {

    const {state, dispatch} = useAppState()
    const {token, url, posts, username} = state

    const getPosts = async () => {
        const response = await fetch(url + "/posts/", {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Authorization: "bearer " + token
            }
        })
        const fetchedPosts = await response.json()
        dispatch({type: "getPosts", payload: fetchedPosts})
    }

    React.useEffect(() => {
        getPosts()
    }, [])

    const loaded = () => {
        console.log(state)
        return(
        <div className="dashboard">     
            <h1>{username}'s Posts</h1>
            <Link to="/dashboard/new">
                <button>New Post</button>
            </Link>
            <Route 
                path="/dashboard/:action" 
                render={(rp) => <Form {...rp} getPosts={getPosts} />}
            />
        <ul>
            {state.posts.map((post) => (
                <div className="post" key={post.id}>
                    <h2>{post.title}</h2>
                    <h3>{post.author}</h3>
                    <h4>{post.body}</h4>
                    <button onClick={() => { 
                     dispatch({type: "select", payload: post})
                        props.history.push("/dashboard/edit")
                    }}>Edit Post</button>
                    <button onClick={() => 
                        fetch(url + "/posts/" + post.id,  {
                            method: "delete",
                            headers: {
                                Authorization: "bearer " + token
                            }
                        })
                        .then(() => getPosts())
                    }>Delete Post</button>
                </div>
            ))}
        </ul>
        </div>
    )}
    
    return posts ? loaded() : <h1>Loading...</h1>
};

export default Dashboard;