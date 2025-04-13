import { Box, Grid2, TextField, Button, IconButton, Alert } from "@mui/material";
import contact_me from './contact_me.png';
import { styles } from "./contact.styles";
import SendIcon from '@mui/icons-material/Send';
import emailjs, { send } from '@emailjs/browser';
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const [isSuccessAlertVisible, setIsSuccessAlertVisible] = useState(false);
    const [isErrorAlertVisible, setIsErrorAlertVisible] = useState(false);
    const [errorAlertText, setErrorAlertText] = useState("Couldn't send email. Try again!");

    useEffect(() => {
        emailjs.init({
            publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        })
    }, []);

    const sendEmail = () => {
        if (name === '' || email === '' || message === '') {
            setErrorAlertText("Please fill out all the fields");
            setIsErrorAlertVisible(true);
            return;
        }
        setIsLoading(true);

        var templateParams = {
            name: name,
            email: email,
            message: message,
        };

        emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, templateParams).then(
            response => {
                console.log('SUCCESS!', response.status, response.text);
                setIsSuccessAlertVisible(true);
                setIsErrorAlertVisible(false);

                setIsLoading(false);
            },
            error => {
                console.log('FAILED...', error);
                setErrorAlertText("Couldn't send email. Try again!");
                setIsErrorAlertVisible(true);

                setIsLoading(false);
            },
        );
    }

    return (
        <Grid2 sx={styles.mainContainer}>
            {/* Contact Me Image */}
            <Box component="img" sx={styles.image} src={contact_me} alt="contact me!" />

            {/* Form */}
            <Box sx={styles.textFieldsContainer}>
                <Box sx={styles.contactMeTitle}>Contact me!</Box>
                <Box sx={styles.subtitle}>I would love to hear from you! Let's get in touch.</Box>

                <Grid2 container spacing={3} sx={{ paddingTop: '20px' }}>
                    {/* Name */}
                    <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                        <Box sx={styles.textFieldCaptions}>Name</Box>
                        <TextField
                            disabled={isSuccessAlertVisible}
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            fullWidth 
                            sx={styles.textField} 
                            size="large" 
                            variant="outlined" />
                    </Grid2>

                    {/* Email */}
                    <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                        <Box sx={styles.textFieldCaptions}>Email</Box>
                        <TextField
                            disabled={isSuccessAlertVisible}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth 
                            sx={styles.textField} 
                            size="large" 
                            variant="outlined" />
                    </Grid2>

                    {/* Message */}
                    <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                        <Box sx={styles.textFieldCaptions}>Message</Box>
                        <TextField
                            disabled={isSuccessAlertVisible}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            fullWidth 
                            multiline 
                            minRows={2} 
                            sx={styles.textField} 
                            size="large" variant="outlined" />
                    </Grid2>

                    <Grid2 size={12} style={{ display: 'flex', justifyContent: 'end' }}>
                        <Box sx={{ m: 1, position: 'relative' }}>
                            <Button
                                disabled={isSuccessAlertVisible || isLoading} 
                                onClick={sendEmail} 
                                sx={styles.sendEmailBtn} 
                                size="large"
                                variant="contained" 
                                endIcon={<SendIcon />}
                            >
                            Send Email
                            </Button>
                            
                            {isLoading && (
                                <CircularProgress size={24} sx={styles.sendEmailCircularProgress}/>
                            )}
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>
                        
            { isSuccessAlertVisible && (
                <Alert variant="filled" severity="success" sx={styles.successAlert}>
                    Email was sent! 
                    I'll get back to you as soon as possible
                </Alert>
            )}
            
            { isErrorAlertVisible && ( 
                <Alert variant="filled" severity="error" sx={styles.errorAlert} 
                onClose={() => setIsErrorAlertVisible(false)}>
                    { errorAlertText }
                </Alert> 
            )}
        </Grid2>
    );
}