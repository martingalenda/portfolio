import { createTheme } from "@mui/material";
import {  ThemeProvider} from "@mui/material";
import {  CssBaseline} from "@mui/material";

import PropTypes from 'prop-types';

export const theme = createTheme({
    // Colores:
    palette: {
      mode: 'dark',
      background: {
        default: '#131829',
        paper: '#131829',
      },
      primary: {
        main: '#ff67cd',
        dark: '#131829'
      },
      secondary: {
        main: '#131829',
        dark: '#131829'
      },
      divider: '#494949'
    },
    // Tipografia
    typography:{
        fontFamily: "'Blinker', sans-serif",
    },
    // Componentes
    components: {
        MuiFab: {
          variants: [
            {
              props: { variant: 'extended' },
              style: {
                width: "10em", 
                height: "3em", 
              },
            },
            {
              props: { variant: 'circular' },
              style: {
                width: "3em",
                height: "3em",
              },
            },
          ],
        },
        MuiTooltip: {
            styleOverrides: {
              tooltip: {
                padding: "0.25em 1em",
                backgroundColor: "rgba(8, 9, 19, 0.25)",
                fontSize: "1rem",
                maxWidth: 'none'
              }
            }
        },  
        MuiSpeedDial: {
            styleOverrides: {
              fab: {
                transition: '0.5s all !important',
                background: "radial-gradient(50% 50% at 50% 50%, #1c2642 0%, rgba(7, 11, 34, 0.7882352941) 100%)",
                fontSize: '1.5em',
                '&:hover': {
                  background: 'radial-gradient(50% 50% at 50% 50%, #5b98ff47 0%, rgb(8 9 19 / 59%))',
                  boxShadow: '0 0 0.8rem #8db7ff',
                  '& svg': {
                    color: '#b0c8ff',
                    filter: 'drop-shadow(0px 0px 0.5rem #8db7ff)'
                  }
                }
              }
            }
        },      
        MuiSpeedDialAction: {
            styleOverrides: {
              fab: {
                fontSize: '1.25em',
                transition: '0.5s all',
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(19, 26, 64, 0) 0%, rgba(7, 11, 34, 0.7882352941) 100%)',
                '&:hover': {
                  background: 'radial-gradient(50% 50% at 50% 50%, #5b98ff47 0%, rgb(8 9 19 / 59%))',
                  boxShadow: '0 0 0.8rem #8db7ff',
                  '& svg': {
                    color: '#b0c8ff',
                    filter: 'drop-shadow(0px 0px 0.5rem #8db7ff)'
                  }
                }
              }
            }
        },
        MuiIconButton: {
          styleOverrides: {
            root: {
              background: 'rgba(8, 9, 19, 0.25)',
              color: '#e2e8ef',
              padding: '1rem',
              filter: 'drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5))',
              transition: '0.5s all',
              '&:hover': {
                background: 'radial-gradient(50% 50% at 50% 50%, #5b98ff47 0%, rgb(8 9 19 / 59%))',
                color: '#b0c8ff',
                boxShadow: '0 0 0.8rem #8db7ff'
              },
              '& svg': {
                filter: 'drop-shadow(0px 0px 0.5rem #8db7ff)'
              }
            }
          }
        },
        MuiMenu: {
            styleOverrides: {
              paper: {
                background: "#131829",
                padding: '0.5rem'
              }
            }
        },
        MuiMenuItem: {
          styleOverrides: {
            root: {
              color: '#e2e8ef',
              border: '0.1rem solid #131829',
              '&:hover': {
                background: 'radial-gradient(68% 83% at 11% 53%, rgba(146, 186, 255, 0.3803921569) 0%, rgba(43, 59, 115, 0) 123%)',
                color: '#b0c8ff'
              }
            }
          }
        }       
    },
    // Breakpoints
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1920,
        xxxl: 2560,
        xxxxl: 3200,
      },
    },
  });

export const ThemeConfig = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

ThemeConfig.propTypes = {
    children: PropTypes.node.isRequired,
};