import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    common: {
      lightBlue: '#28b5f4'
    },
    primary: {
      main: '#263238',
      light: '#4f5b62',
      dark: '#000a12',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#cfd8dc',
      light: '#ffffff',
      dark: '#9ea7aa',
      contrastText: '#000000'
    }
  },
  typography: {
    button: {
      fontWeight: 'bold',
      textTransform: 'none'
    }
  }
});
