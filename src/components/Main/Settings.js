import React, {useState} from "react"
import {Button, Menu, FormGroup } from "@material-ui/core"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../css/Settings.css'


const Settings = ({theme,themeToggler, greetingToggler, greeting}) => {

      //console.log(`State of darkmode ${state.darkMode} \n State of greeting ${state.greeting}`)

      const handleDarkMode = (event) => {
        themeToggler()
      };

      const handleGreeting = (event) => {
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
      <Button name="darkMode "variant="contained" color="primary" onClick={handleDarkMode}>{theme ? "Disable" : "Enable"} Dark Mode</Button>
      <Button name="greeting" variant="contained" color="primary" onClick={handleGreeting}>{greeting ? "Disable" : "Enable"} Greeting</Button>
    </FormGroup>
    </Menu>
        </div> 
    )
}

export default Settings;