
import { green } from '@mui/material/colors';

export const styles = {
    mainContainer: {
        paddingLeft: {
            xs: '2rem',
            sm: '3rem',
            md: '5rem',
            lg: '12rem'
        },
        paddingRight: {
            xs: '2rem',
            sm: '3rem',
            md: '5rem',
            lg: '12rem'
        },
        paddingTop: {
            xs: '20px',
            md: '30px'
        },
        paddingBottom: '30px',
        display: 'flex',
    },
    image: {
        width: {
            md: '30vh',
            lg: '40vh'
            // service_pwlcvz8
        },
        marginTop: '1rem',
        objectFit: 'contain',
        alignSelf: 'flex-start',
        display: {
            xs: 'none',
            sm: 'none',
            md: 'block',
            lg: 'block'
        }
    },
    textFieldsContainer: {
        paddingLeft: {
            md: '40px' 
        }
    },
    contactMeTitle: {
        fontSize: {
            xs: '30px',
            sm: '40px'
        },
        fontWeight: 'bold',
        marginTop: '10px',
        color: '#36454F'
    },
    subtitle: {
        color: 'gray'
    },
    textFieldCaptions: {
        fontSize: '18px',
        marginBottom: '5px'
    },
    textField: {
        backgroundColor: 'white'
    },
    sendEmailBtn: {
        borderRadius: '25px'
    },
    sendEmailCircularProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: '-12px',
        marginLeft: '-12px',
    },
    successAlert: {
        position: 'fixed', // Fix the position relative to the viewport
        bottom: 60,
        left: {
            xs: '20%',
            sm: '50%'
        }, // Center horizontally
        transform: {
            xs: 'translateX(-12%)',
            sm: 'translateX(-50%)'
        },
        fontSize: '15px'
    },
    errorAlert: {
        position: 'fixed', // Fix the position relative to the viewport
        bottom: 60,
        left: '50%', // Center horizontally
        transform: 'translateX(-50%)',
        fontSize: '15px'
    }
}