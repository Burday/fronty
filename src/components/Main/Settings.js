import React, {useState} from "react"
import {Button, Menu, MenuItem, Switch, FormGroup, FormControlLabel } from "@material-ui/core"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../css/Settings.css'
//TODO: Use the react-sidebar thingey and make it a functioning settings panel 
const Settings = ({themeToggler}) => {

    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

      const handleDarkMode = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        themeToggler()
      };

      const handleGreeting = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
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
            checked={state.checkedA}
            onChange={handleDarkMode}
            name="checkedA"
            color="primary"
          />
        }
        label="Dark Mode"
      />

      <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
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