import React, {useState,useEffect} from "react"
import {Button, Menu, MenuItem, Switch, FormGroup, FormControlLabel } from "@material-ui/core"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../css/Settings.css'


const Settings = ({theme,themeToggler, greetingToggler, greeting}) => {
    const [state, setState] = useState({
        darkMode: theme,
        greeting: greeting,
      });
      

      const handleDarkMode = (event) => {

        setState({ ...state, [event.target.name]: event.target.checked });
        themeToggler()
      };

      const handleGreeting = (event) => {

        setState({ ...state, [event.target.name]: event.target.checked });
        greetingToggler()
      };



    const [anchorEl, setAnchorEl] = useState(null);

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
    </Menu>
        </div> 
    )
}

export default Settings;