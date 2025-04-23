import React from 'react'

import '@mantine/core/styles.css';
// import { useState } from 'react';
// import { useEffect } from 'react';
import { Routes,Route } from 'react-router';

import { MantineProvider } from '@mantine/core';
import AuthProvider from './components/AuthProvider'
import Login from './components/Login';
import Register from './components/Register';
import Tasks from './components/Tasks';
import PrivateRoute from './components/PrivateRoute';


const App = () => {
  // const [posts, setPosts] = useState({});
  // const fetchPosts = async () => {
  //     await axios.get(`http://${queries_host}/posts`).then(response => {
  //         setPosts(response.data);
  //     }).catch(error => {
  //         console.log(error)
  //     });
  // };
  // useEffect(() => {
  //     fetchPosts();
  // }, []);
  return (
    <div>
      <MantineProvider>
   
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoute />}>
            <Route path="/tasks" element={<Tasks />} />
            </Route>
             
            {/* Other routes */}
          </Routes>
         

        </AuthProvider>
     
    </MantineProvider>
      </div>
      
  )
}

export default App

// <h1>Create Post</h1>
// <PostCreate onCreatePost={() => fetchPost()}></PostCreate>
// <hr/>
// <h1>Posts</h1>
// <PostList posts={posts}></PostList>