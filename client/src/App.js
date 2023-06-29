import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts'
import PostImage from './images/thumbnail.jpeg'
import Posts from './components/posts/posts';
import Form from './components/form/form';

import useStyles from "./styles"

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color='inherit'>
        <Typography variant='h2' align='center'>Post</Typography>
        <img className={classes.image} src={PostImage} alt="post"  height="120"/>
      </AppBar>
      <Grow in>
        <Container >
          <Grid Container justify='space-between' alignItems='stretch' spacing={4}>   
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App