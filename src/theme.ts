import { common, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Lexend_Deca, Red_Hat_Display, Roboto } from '@next/font/google';


export const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})


export const redHat = Red_Hat_Display({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['italic', 'normal'],
  subsets: ['latin', 'latin-ext']
})


export const lexend = Lexend_Deca({
  weight: ['100', '500', '600', '800', '200', '300', '400'],
  style: ['normal'],
  subsets: ['latin']

})

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: common.black
    },
    background: {
      default: '#e2dddb'
    }
  },
  typography: {
    fontFamily: redHat.style.fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '::-webkit-scrollbar': {
            width: '14px',
            height: '18px'
          },
          '::-webkit-scrollbar-thumb': {
            'height': '6px',
            'border': ' 4px solid rgba(0, 0, 0, 0)',
            'background-clip': 'padding-box',
            'background-color': 'lightgrey',
            '-webkit-border-radius': '7px',
            '-webkit-box-shadow': 'inset -1px -1px 0px rgba(0, 0, 0, 0.05) ,inset 1px 1px 0px rgba(0, 0, 0, 0.05)'
          },
          '::-webkit-scrollbar-button': {
            display: 'none',
            width: 0,
            height: 0,
          }
          ,
          '::-webkit-scrollbar-corner': {
            'background-color': 'transparent'
          }
        },
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#e2dddb',
          borderRadius: '20px'
        }
      },
      defaultProps: {
        // variant:"outlined"
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "#bdb3aa",
          backgroundColor: "transparent",
          "&.Mui-focused": {
            boxShadow: "rgb(189, 179, 170) 0px 0px 0px 2px",
            backgroundColor: "transparent",
            borderColor: "rgb(189, 179, 170)",
          },
          borderRadius: "8px",
        },
        underline: {
          "&&&:before": {
            borderBottom: "none",
          },
          "&&:after": {
            borderBottom: "none",
          },
        },
      },
    },
  },
});

export default theme;