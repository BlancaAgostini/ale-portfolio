import { Box, Grid2, Link } from "@mui/material";
import { styles } from "./footer.styles";
import './footer.css';

export const Footer = () => {
    return (
        <Box sx={styles.container}>
            © 2025 Alejandra Marquez

            <Grid2 container spacing={3} sx={styles.menuLinks}>
                <Link className="link" href='#' underline='none' sx={styles.link}>About</Link>
                <Link className="link" href='#' underline='none' sx={styles.link}>Portfolio</Link>
                <Link className="link" href='#' underline='none' sx={styles.link}>Blog</Link>
                <Link className="link" href='#' underline='none' sx={styles.link}>Contact</Link>
            </Grid2>
        </Box>
    );
} 