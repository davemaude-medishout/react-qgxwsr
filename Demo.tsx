import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {}
  // allow configuration using `createTheme`
  interface ThemeOptions {}
}

const mediShoutTheme = createTheme({
  palette: {
    primary: {
      main: '#17C78A',
      contrastText: '#FFFFFF',
      light: '#39CF9E',
      dark: '#487B6B',
    },
    secondary: {
      main: '#5CACEE',
      contrastText: '#FFFFFF',
      light: '#76B9F2',
      dark: '#6D87C3',
    },
    text: {
      primary: '#1D2220',
      secondary: '#505251',
      disabled: '#D8D7D7',
    },
    background: {
      default: '#F7F7F7',
    },
    error: {
      main: '#E54141',
      dark: '#C02B4C',
      light: '#D45F76',
    },
    info: {
      main: '#8ED6E1',
      light: '#BCE7EF',
      dark: '#6D87C3',
    },
    warning: {
      main: '#D6CA2D',
      light: '#E4E683',
      dark: '#756B11',
    },
    success: {
      main: '#17C78A',
      light: '#78DEBD',
      dark: '#487B6B',
    },
    divider: 'rgba(216,215,215,0.4)',
  },
  typography: {
    fontFamily: 'Lato,Roboto,"Helvetica Neue",Arial',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: 'red' },
      },
    },
  },
});

export default function BasicTextFields() {
  return (
    <ThemeProvider theme={mediShoutTheme}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl variant="standard" required>
          <InputLabel
            htmlFor="component-helper"
            shrink={true}
            sx={{
              color: 'text',
              fontSize: 16,
              position: 'static',
              transform: 'none',
            }}
          >
            This is a label
          </InputLabel>
          <OutlinedInput
            id="component-helper"
            placeholder="I am some placeholder text"
            aria-describedby="component-helper-text"
            sx={{ mt: 1, height: '38px' }}
          />
          <FormHelperText id="component-helper-text">
            Some important helper text
          </FormHelperText>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
}
