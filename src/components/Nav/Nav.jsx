import React from 'react';
import { Link } from 'react-router-dom';
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
import Logout from '@mui/icons-material/Logout';
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

const linkToLogout = () => {
  history.push("/logout")
}

  return (

      <div className="nav">

      <BottomNavigation sx={{ width: 400 }} value={value} onChange={(event, newValue) => {setValue(newValue)}}>

      {!user.id &&
        // <Link className="navLink" to="/login">Log In</Link>
      <BottomNavigationAction label="Login" value="login" icon={<Login />} onClick={linkToLogIn} className="navLink"/>
      }

      <BottomNavigationAction label="Home" value="nearby" icon={<HomeIcon />} className="navLink" onClick={linkToLakes} ></BottomNavigationAction>

      <BottomNavigationAction label="About" value="about" icon={<FolderIcon />} className="navLink" onClick={linkToAbout}/>

      {user.id &&
      <BottomNavigationAction label="Favs" value="favorites" icon={<FavoriteIcon />} onClick={linkToFavs} className="navLink"/>
      }

      {user.id &&
      <LogOutButton className="navLink"/>
      // <BottomNavigationAction label="Logout" value="logout" icon={<Logout />} className="navLink" onClick={linkToLogout}/>
       }
       
    </BottomNavigation>


    </div>

//------------------------------------
    // <div className="nav">
    //   <Link to="/lakes">
    //     <h2 className="nav-title">Prime Solo Project</h2>
    //   </Link>
    //   <div>
    //     {/* If no user is logged in, show these links */}
    //     {!user.id && (
    //       // If there's no user, show login/registration links
    //       <Link className="navLink" to="/login">
    //         Login / Register
    //       </Link>
    //     )}

    //     {/* If a user is logged in, show these links */}
    //     {user.id && (
    //       <>
    //         <Link className="navLink" to="/user">
    //           Home
    //         </Link>

    //         <Link className="navLink" to="/info">
    //           Info Page
    //         </Link>

    //         <LogOutButton className="navLink" />
    //       </>
    //     )}

    //     <Link className="navLink" to="/lakes">
    //       Lakes
    //     </Link>
    //     <Link className="navLink" to="/about">
    //       About
    //     </Link>
    //   </div>
    // </div>
  );
}

export default Nav;
