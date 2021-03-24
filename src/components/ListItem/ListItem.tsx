import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import { Link } from 'react-router-dom';
import { userRoute } from '../../utils/constants/RouteEnum';
export const mainListItems = (
  <div>
    <ListItem button>
        <Link to={userRoute.home} className="navigation-style">
        <ListItemText primary="Dashboard" />
        </Link>
    </ListItem>
    <ListItem button>
    <Link to={userRoute.rockets} className="navigation-style">
      <ListItemText primary="Rockets" />
      </Link>
    </ListItem>
    <ListItem button>
    <Link to={userRoute.launches} className="navigation-style">
      <ListItemText primary="Launches" />
      </Link>
    </ListItem>
   
  </div>
);

