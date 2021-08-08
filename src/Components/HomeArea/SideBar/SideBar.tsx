import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import WorkIcon from '@material-ui/icons/Work';
import { BrowserRouter as Router,NavLink, Route, Switch, useHistory } from 'react-router-dom';
import { ButtonBase } from '@material-ui/core';

import AddEmployee from '../../LayoutArea/AddEmployee/AddEmployee';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  btn:{
    textTransform: 'lowercase'
   
  },
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function SideBar({children}) {
  const classes = useStyles();
  const [state, setState] = React.useState({

    left: false,
  
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const history = useHistory();

  const list = (anchor: Anchor) => (
   
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
     >
         <Router >
        <br/>
    
      <List>
     
          <ListItem button={true} >
          <Button onClick={()=> history.push("/employee")} className={classes.btn}>
            <ListItemIcon> <MailIcon /></ListItemIcon>
           
           
            <ListItemText primary='add employee'/>
            </Button>
          </ListItem>

      </List>
      <Divider variant="middle" light={true} />
      <List>

  
      <ListItem button={true} >
          <Button onClick={()=> history.push("/employees")} className={classes.btn}>
            <ListItemIcon> <MailIcon /></ListItemIcon>
           
           
            <ListItemText primary =' employees list' />
            </Button>
          </ListItem>
      </List>
      <Divider variant="middle" light={true} />
      <List>
      <ListItem button key='WorkIcon'>
            <ListItemIcon> <MailIcon /></ListItemIcon>
            <ListItemText primary='add employee' />
          </ListItem>
      </List>
      <Divider variant="middle" light={true} />
      <List>
      <ListItem button key='WorkIcon'>
            <ListItemIcon> <MailIcon /></ListItemIcon>
            <ListItemText primary='add employee' />
          </ListItem>
      </List>
      <Switch>
            <Route path="/home" exact/>
            <Route path="/employee" exact>
           {AddEmployee} 
            </Route>
           {/* / <Route path="/employees" component={Layout} exact/> */}
            {/* <Redirect from="/" to="/home" exact/> */}
            </Switch>
      </Router>
    
    </div>

  );

  return (
    <div>
   
        <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}>{children}</Button>
          <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>
       
    </div>
    
  );
}
