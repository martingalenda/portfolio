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
                backgroundColor: "#131829",
                fontSize: "1rem",
                maxWidth: 'none'
              }
            }
        },  
        MuiSpeedDial: {
            styleOverrides: {
              fab: {
                transition: '1.5s all !important',
                background: "radial-gradient(50% 50% at 50% 50%, #1c2642 0%, rgba(7, 11, 34, 0.7882352941) 100%)",
                fontSize: '1.5em',
                '&:hover': {
                  background: 'radial-gradient(50% 50% at 50% 50%, rgb(33 91 248 / 36%) 0%, rgba(7, 11, 34, 0.7882352941))',
                  '& svg': {
                    color: '#4c8eff'
                  }
                }
              }
            }
        },      
        MuiSpeedDialAction: {
            styleOverrides: {
              fab: {
                fontSize: '1.25em',
                transition: '1s all',
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(19, 26, 64, 0) 0%, rgba(7, 11, 34, 0.7882352941) 100%)',
                '&:hover': {
                  color: '#4c8eff',
                  background: 'radial-gradient(50% 50% at 50% 50%, rgb(33 91 248 / 36%) 0%, rgba(7, 11, 34, 0.7882352941))',
                }
              }
            }
        },
        MuiIconButton: {
          styleOverrides: {
            root: {
              '&:hover': {
                transition: 'color 1s',
                background: 'none',
                color: '#4c8eff'
              }
            }
          }
        },
        MuiMenu: {
            styleOverrides: {
              paper: {
                background: "#131829",
              }
            }
        },       
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