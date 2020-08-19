import React, {useState,useEffect} from "react"
import {Button, Menu, MenuItem, Switch, FormGroup, FormControlLabel } from "@material-ui/core"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../css/Settings.css'
//TODO: Use the react-sidebar thingey and make it a functioning settings panel 
const Settings = ({theme,themeToggler, greetingToggler}) => {
    console.log(theme)
    const [state, setState] = useState({
        darkMode: null,
        greeting: null,
      });

      const localTheme = window.localStorage.getItem('theme');
      useEffect(() => {
        if(localTheme === "dark"){
          setState({ darkMode: true});
      } if(localTheme === "light"){
        setState({ darkMode: false});
      }
      }, [])

      const handleDarkMode = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        if(state.darkMode === "dark"){
          window.localStorage.setItem('theme', `light`)
        } else {
          window.localStorage.setItem('theme', `dark`)
        }
        themeToggler()
      };

      const handleGreeting = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        greetingToggler()
      };
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    }; 
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
        <div className="Settings-div">
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
    <MoreVertIcon />
    </Button>
    <Menu
    id="simple-menu"
    anchorEl={anchorEl}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={handleClose}
    >
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={state.darkMode}
            onChange={handleDarkMode}
            name="darkMode"
            color="primary"
          />
        }
        label="Dark Mode"
      />

      <FormControlLabel
        control={
          <Switch
            checked={state.greeting}
            onChange={handleGreeting}
            name="greeting"
            color="primary"
          />
        }
        label="Greeting"
      />
    </FormGroup>

    <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>
        </div> 
    )
}

export default Settings;