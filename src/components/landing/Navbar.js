import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer, Button, SvgIcon
} from '@material-ui/core';
 import MenuIcon from '@material-ui/icons/Menu';
 import Instagram from '../../assets/images/instagram-icon.png';
 import Logo from './Logo';

const styleSheet = {
  list : {
    width : 200,
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },

  sideBarIcon : {
    padding : 0,
    color : "black",
    cursor : "pointer",
  },
  shadows: ["none"]
}

class ResAppBar extends Component{
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount(){
    if(window.innerWidth <= 600){
      this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 600){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }

  //Small Screens
  createDrawer(){
    return (
      <div>
        <AppBar color='white' >
          <Toolbar>
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <Typography color="inherit"><Logo /></Typography>
              <Typography color="inherit"></Typography>
              <MenuIcon
                className = {this.props.classes.sideBarIcon}
                onClick={()=>{this.setState({drawer:true})}}
                fontSize='large' />
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         open={this.state.drawer}
         onClose={()=>{this.setState({drawer:false})}}
         onOpen={()=>{this.setState({drawer:true})}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>

            <List className = {this.props.classes.list}>
               <ListItem key = {1} button divider> Features </ListItem>
               <ListItem key = {2} button divider> Log In </ListItem>
               <ListItem key = {3} button divider> Free Sign In </ListItem>
             </List>

         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
    const {classes} = this.props
    return (
      <AppBar color='white'>
        <Toolbar>
          <Typography  style={{flexGrow:1}} color="inherit" >
            <Logo />
          </Typography>
          <Typography  className = {classes.padding} color="inherit" >
            <Button> Features </Button>
          </Typography>
          <Typography  className = {classes.padding} color="inherit">
            <Button>Login</Button>
          </Typography>
          <Typography  className = {classes.padding} color="inherit" >
            <Button>Free Sign In</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

ResAppBar.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styleSheet)(ResAppBar);