import React from 'react';
import { useHistory } from 'react-router-dom';

//************************************ Components MAteria-UI ************************************
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  CircularProgress,
} from '@material-ui/core';

//************************************** Icons MAteria-UI ***************************************
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StorageIcon from '@material-ui/icons/Storage';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import AddCircleIcon from '@material-ui/icons/AddCircle';

//****************************************** Styles  ********************************************
import { withStyles } from '@material-ui/core/styles';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

//********************************************* Components *********************************************

export default function AssetsDropdown() {
  
  const history = useHistory()
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
    <Tooltip title="Opciones" placement="bottom">
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        aria-label="options"
        color="inherit"
        onClick={handleClick}
      >
        <MoreVertIcon/>
      </IconButton>
    </Tooltip>

      {
        currentUser 
        ? 
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {
              currentUser.name
              ?
                <StyledMenuItem>
                  <ListItemIcon onClick={ () => history.push(`/users/${currentUser.name}/assets`)}>
                    <StorageIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Mis Activos" />
                </StyledMenuItem>
              : ''
            }
            
            {
              currentUser.name === 'Darth Vader'
              ? 
                <StyledMenuItem>
                  <ListItemIcon onClick={ () => history.push(`/assets/create`) }>
                    <AddCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Crear Activos" />
                </StyledMenuItem>
              : 
                <StyledMenuItem>
                  <ListItemIcon onClick={ () => history.push(`/assets/buy`) }>
                    <LocalGroceryStoreIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Comprar Activos" />
                </StyledMenuItem>
            }

          </StyledMenu>
        : 
          <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <StyledMenuItem>
              <CircularProgress color="secondary" size={20}/>
            </StyledMenuItem>
          </StyledMenu>
      }
    
    </div>
  );
}