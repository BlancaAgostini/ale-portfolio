import { fontWeight, height } from "@mui/system";

export const navbarStyles = {
    container: {
        height: '4rem',
        backgroundColor: 'white',
        padding: {
            xs: '10px 5px 10px 20px',
            md: '10px 30px',
            lg: '10px 70px',
        },
        boxShadow: '1px 1px 5px 1px rgba(208, 206, 206, 0.4)',
        fontFamily: 'Montserrat'
    },
    linksContainer: {
        alignItems: 'center', 
        justifyContent: 'flex-end'
    },
    collapsibleMenuBtn: {
        display: {
            xs: 'block',
            md: 'none'
        }
    },
    collapsibleMenuIcon: {
        fontSize: '2rem', 
        justifyContent: 'center'
    },
    collapsibleMenuLinks: {
        display: { 
            xs: 'flex', 
            md: 'none' 
        },
        bgcolor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        zIndex: 1
    },
    menuLinks: {
        display: { 
            xs: 'none', 
            md: 'flex'
        },
        alignItems: 'center',
        height: '80%',
    }
};
