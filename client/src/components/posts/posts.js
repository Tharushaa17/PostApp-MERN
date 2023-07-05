import React from 'react'
import Post from './post/post'
import useStyles from "./style"
import { useSelector } from 'react-redux'

const Posts = () => {
   const classes = useStyles();
   const posts = useSelector((state)=>state.posts)

   console.log(posts);
   console.log("POP");
  return (
    <>
        <Post/>
        <Post/>
        <Post/>
    </>
  )
}

export default Posts