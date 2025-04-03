import { Box, Card, CardActionArea, Divider, Grid2 } from "@mui/material";
import { styles } from "./recent-projects.styles";
import './recent-projects.css';
import img from './img.jpg';

export const RecentProjects = () => {
    return (
        <Box>
            <Divider>
                <Box sx={styles.dividerText}>RECENT WORK</Box>
            </Divider>

            <Grid2 container spacing={4} sx={styles.cardsContainer} className="card-grid">
                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 4 }} className='card'>
                    <CardActionArea sx={styles.cardActionArea}>
                        <Card sx={styles.card}>
                            <Box sx={styles.imageContainer}>
                                <Box component="img" sx={styles.image} src={img} alt="logo"/>
                            </Box>
                            
                            <Box sx={styles.projectTitle}>
                                Project 1
                            </Box>
                            <Box sx={styles.projectDescription}>
                                Project Description
                            </Box>
                        </Card>
                    </CardActionArea>
                </Grid2>

                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 4 }} className="card">
                    <CardActionArea sx={styles.cardActionArea}>
                        <Card sx={styles.card}>
                            <Box sx={styles.imageContainer}>
                                <Box component="img" sx={styles.image} src={img} alt="logo"/>
                            </Box>
                            
                            <Box sx={styles.projectTitle}>
                                Project 2
                            </Box>
                            <Box sx={styles.projectDescription}>
                                Project Description
                            </Box>
                        </Card>
                    </CardActionArea>
                </Grid2>

                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 4 }} className="card">
                    <CardActionArea sx={styles.cardActionArea}>
                        <Card sx={styles.card}>
                            <Box sx={styles.imageContainer}>
                                <Box component="img" sx={styles.image} src={img} alt="logo"/>
                            </Box>
                            
                            <Box sx={styles.projectTitle}>
                                Project 3
                            </Box>
                            <Box sx={styles.projectDescription}>
                                Project Description
                            </Box>
                        </Card>
                    </CardActionArea>
                </Grid2>
            </Grid2>
        </Box>
    );
}