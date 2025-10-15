import { useContext, useEffect, useState } from 'react'
import { Alert, Snackbar, Box } from '@mui/material'

import LangContext from '../../../../../context/languages';
import { theme } from '../../../../../config/theme.config'

const Sent = () => {
    
    const { texts  } = useContext(LangContext);
    const [requestSucces, setRequestSucces] = useState(false)

    useEffect(() => {
        const showMessage = () => setRequestSucces(true)
        setTimeout(showMessage , 1000)
    },[])


    const handlerCloseMessage = () => {
        setRequestSucces(false)
    }

    return(
        <>
            <div className="desktop_section">
                <section className="section bye">
                    <footer className="adew">
                        <div className="adew__container">
                            <Box 
                                sx={{
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    gap: '0.3rem', 
                                    [theme.breakpoints.up('xl')]: {
                                        position: 'relative',
                                        top: '2rem'
                                    },
                                    [theme.breakpoints.up('xxl')]: {
                                        top: '0'
                                    },
                                    [theme.breakpoints.up('xxxxl')]: {
                                        top: '-1rem'
                                    }
                                }}
                            >
                                <h2>{texts.messageReceived.title}</h2>
                                <p style={{color: '#94a3b8'}}>{texts.messageReceived.description}</p>
                            </Box>
                            <img className="adew__planet" src="/portfolio/planet2.png" alt="planet" />
                        </div>
                    </footer>
                </section>

                <Snackbar open={requestSucces} autoHideDuration={6000} anchorOrigin={{ vertical: 'center', horizontal: 'left' }} onClose={handlerCloseMessage}>
                    <Alert 
                        variant="outlined" 
                        severity="success" 
                        sx={{ 
                            alignItems: 'center',
                            padding: '0.25rem 1.25rem',
                            gap: '0.5rem',
                            background: '#090d1d91',
                            border: '0.1rem solid #287d9d',
                            color: '#287d9d',
                            borderRadius: '0.5rem',
                            '& .MuiAlert-icon': {
                              color: '#287d9d',
                              fontSize: '1.25rem'
                            },
                            'h3': {
                                textAlign: 'left',
                                fontSize: '1.15rem',
                                color: '#4fd0ea'
                            }
                        }}
                    >
                        <h3>{texts.messageReceived.title}</h3>
                        <p>{texts.messageReceived.msgDescription} 🚀</p>
                    </Alert>
                </Snackbar>
            </div>
        </>
    )
}

export default Sent