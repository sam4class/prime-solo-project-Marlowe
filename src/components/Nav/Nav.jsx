import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import Login from '@mui/icons-material/Login';
import { Box } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';



function Nav() {
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const [value, setValue] = useState(0);

  const linkToLogIn = () => {
    history.push("/login")
  }

  const linkToFavs = () => {
    history.push("/user")
  }
  const linkToLakes = () => {
    history.push("/lakes")
  }

  const linkToAbout = () => {
    history.push("/about")
  }

  return (

    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}}>

      <BottomNavigation value={value} onChange={(event, newValue) => { setValue(newValue) }}>

        {!user.id &&
          <BottomNavigationAction label="Login" value="login" icon={<Login />} onClick={linkToLogIn} className="navLink" />
        }

        <BottomNavigationAction label="About" value="about" icon={<FolderIcon />} className="navLink" onClick={linkToAbout} />

        {user.id &&
          <BottomNavigationAction label="Favs" value="favorites" icon={<FavoriteIcon />} onClick={linkToFavs} className="navLink" />
        }

        <BottomNavigationAction label="Home" value="nearby" icon={<HomeIcon />} className="navLink" onClick={linkToLakes} ></BottomNavigationAction>

        {user.id &&
          <LogOutButton className="navLink" />
        }
      </BottomNavigation>
    </Box>
  );
}

export default Nav;
