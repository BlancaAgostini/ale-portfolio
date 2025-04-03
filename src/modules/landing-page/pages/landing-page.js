import { Navbar } from "../components/navbar/navbar";
import { RecentProjects } from "../components/recent-projects/recent-projects";
import { Box } from "@mui/material";
import { styles } from "./landing-page.styles";
import { Footer } from "../components/footer/footer";

export const LandingPage = () => {
    return (
        <Box sx={styles.mainContainer}>
            <Navbar></Navbar>

            <Box sx={styles.recentProjectsContainer}>
                <RecentProjects></RecentProjects>
            </Box>

            <Footer></Footer>
        </Box>
    );
}