import {
  amber, grey, green, pink, red, common,
} from '@mui/material/colors';

const colors = {
  white: common.white,
  background: grey[50],
  primary: pink.A400,
  secondary: green.A700,
  positive: green[500],
  medium: amber[700],
  negative: red[500],
  neutral: grey[500],
  geometry: '#3bb2d0',
};

export default {
  background: {
    default: colors.background,
  },
  primary: {
    main: colors.primary,
  },
  secondary: {
    main: colors.secondary,
    contrastText: colors.white,
  },
  colors,
};
