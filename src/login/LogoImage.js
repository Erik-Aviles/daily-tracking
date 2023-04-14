import React from 'react';
import { makeStyles } from '@mui/styles';
// import { ReactComponent as Logo } from '../resources/images/logo.svg';
import Logo from '../resources/images/logo.png';

const useStyles = makeStyles(() => ({
  image: {
    alignSelf: 'center',
    width: '80px',
    height: '80px',
  },
  container: {
    width: 'auto',
    fontSize: '70px',
    letterSpacing: '3px',
    display: 'flex',
    gap: '15px',
  },
}));

const LogoImage = ({ color }) => {
  const classes = useStyles();

  return (
    <div className={classes.container} style={{ color }}>
      <img className={classes.image} src={Logo} alt="Logo de la marca" />
      Daily
    </div>
  );
};

export default LogoImage;
