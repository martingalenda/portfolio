import { createTheme } from "@mui/material";
import {  ThemeProvider} from "@mui/material";
import {  CssBaseline} from "@mui/material";

import PropTypes from 'prop-types';

const theme = createTheme({
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
                backgroundColor: "#131829"
              }
            }
        },      
        MuiSpeedDial: {
            styleOverrides: {
              fab: {
                //background: "radial-gradient(50% 50% at 50% 50%, #4277e4cf 0%, rgb(18 17 17 / 50%) 100%)",
                background: "radial-gradient(50% 50% at 50% 50%, #1e51ff00 0%, #07080b 100%)",
                fontSize: '1.5em',
                '&:hover': {
                  background: "radial-gradient(50% 50% at 50% 50%, #b3464600 0%, #687497d4 100%)"
                }
              }
            }
        },      
        MuiSpeedDialAction: {
            styleOverrides: {
              fab: {
                fontSize: '1.25em'
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