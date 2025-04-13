import './App.css';
import { createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './modules/landing-page/pages/landing-page';
import { Contact } from './modules/contact/pages/contact';
import { Box } from "@mui/material";
import { Navbar } from './modules/landing-page/components/navbar/navbar';
import { Footer } from './modules/landing-page/components/footer/footer';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <>
        <Box sx={styles.mainContainer}>
            <Navbar></Navbar>
            
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer></Footer>
        </Box>
    </>
  );
}

export default App;

export const styles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    }
}
