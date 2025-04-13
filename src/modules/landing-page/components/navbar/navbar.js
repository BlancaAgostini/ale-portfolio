import './navbar.css';
import logo from './logo.jpeg';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Grid2, Box, Link } from '@mui/material';
import { useState } from 'react';
import { navbarStyles } from './navbar.styles';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    return (
        <Box>
            <Grid2 container sx={navbarStyles.container}>
                {/* Logo */}
                <Grid2 size={{ xs: 3, md: 2, lg: 2 }} sx={{ height: '100%'}}>
                    <img style={{ height: '100%'}} src={logo} alt="logo"/>
                </Grid2>

                {/* Menu */}
                <Grid2 container 
                size={{ xs: 9, md: 10, lg: 10 }} 
                sx={navbarStyles.linksContainer}>

                    {/* Collapsible menu btn - In xs size, show btn */}
                    <Button sx={navbarStyles.collapsibleMenuBtn}>                    
                        { isMenuOpen ? 
                            <MenuOpenIcon 
                            onClick={() => setIsMenuOpen(false)} 
                            style={navbarStyles.collapsibleMenuIcon} />
                            : 
                            <MenuIcon 
                            onClick={() => setIsMenuOpen(true)} 
                            style={navbarStyles.collapsibleMenuIcon} /> 
                        }
                    </Button>
                    
                    {/* Menu links */}
                    <Grid2 container spacing={2} sx={navbarStyles.menuLinks}>
                        <Link className='menu-link' href='#' underline='none' sx={{ color: 'gray' }}>About</Link>
                        <Link className='menu-link' href='#' underline='none' sx={{ color: 'gray' }}>Portfolio</Link>
                        <Link className='menu-link' href='#' underline='none' sx={{ color: 'gray' }}>Blog</Link>
                        <Link className='menu-link' href='/contact' underline='none' sx={{ color: 'gray' }}>Contact</Link>
                        <Link className='menu-link' href='#' underline='none' sx={{ color: 'gray' }}>
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </Link>
                        <Link className='menu-link' href='#' underline='none' sx={{ color: 'gray' }}>
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </Link>
                    </Grid2>
                </Grid2>
            </Grid2>
            
            {/* Collapsible menu links */}
            { isMenuOpen ? 
                <Grid2 container size={12} 
                sx={navbarStyles.collapsibleMenuLinks}>
                    <Box className='collapsible-link'>
                        <Link href='#' underline='none'>About</Link>
                    </Box>

                    <Box className='collapsible-link'>
                        <Link href='#' underline='none'>Portfolio</Link>
                    </Box>

                    <Box className='collapsible-link'>
                        <Link href='#' underline='none'>Blog</Link>
                    </Box>

                    <Box className='collapsible-link'>
                        <Link href='/contact.js' underline='none'>Contact</Link>
                    </Box>

                    <div class="collapsible-link">
                        <Link href='#' underline='none' style={{marginRight: '1.5rem'}}>
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </Link>
                        <Link href='#' underline='none'>
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </Link>
                    </div>
                </Grid2>
            : null }
        </Box>
    );
}