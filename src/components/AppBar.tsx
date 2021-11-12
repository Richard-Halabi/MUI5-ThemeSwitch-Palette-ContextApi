import React, { useContext } from 'react';
// MUI **************************************************//
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Avatar, Container, Box } from '@mui/material';
// COMPONENTS ******************************************//
//import TemporaryDrawer from './TemporaryDrawer';
// ICONS ***********************************************//
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
// Context Api
import { miscContext } from '../context/misc/MiscState';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    fontSize: 40,
    //backgroundColor: 'red',
    // '&:hover': {
    //   backgroundColor: 'red',
    // },
  },
}));

export const AppBar: React.FC = () => {
  const classes = useStyles();
  const context = useContext(miscContext);

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const switchTheme = () => {
    if (context.theme === 'lightTheme') {
      context.SwitchTheme('darkTheme');
      return;
    }
    context.SwitchTheme('lightTheme');
  };

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'right',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 10,
        maxWidth: '100%',
      }}
    >
      <Box style={{ display: 'flex', alignItems: 'center' }}>
        <EmojiObjectsIcon color='primary' className={classes.icon} onClick={switchTheme} />
        <Avatar src='//unsplash.it/600/600' style={{ color: 'white' }}>
          {'UN'}
        </Avatar>
      </Box>
    </Container>
  );
};
