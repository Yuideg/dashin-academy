import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { LoadingButton } from '@mui/lab';

const theme = createTheme();
export default function ChangePassword() {

    const dispatch = useDispatch()

    const { changePasswordLoading} = useSelector((state) => state.oneUser)
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            old_password: data.get('old_password'),
            new_password: data.get('new_password'),
            confirm_password: data.get('confirm_password'),
        });
        if (data.get('new_password') !== data.get('confirm_password')) {
            toast.warning('New password and confirm password should be similar', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 6000
            });
        }
        else {
            const value = {
                old_password: data.get('old_password'),
                new_password: data.get('new_password'),
                confirm_password: data.get('confirm_password'),
            }
            dispatch(changePasswordAction(value))
            document.getElementById("create-form").reset();
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography component="h1" variant="h5">
                        Change password
                    </Typography>
                    <Box component="form" id={'create-form'} onSubmit={handleSubmit} sx={{ mt: 0 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="old_password"
                                    label="Old Password"
                                    type="password"
                                    id="old_password"
                                    autoComplete="old_password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="new_password"
                                    label="New Password"
                                    type="password"
                                    id="new_password"
                                    autoComplete="new_password"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="confirm_password"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirm_password"
                                    autoComplete="confirm_password"
                                />
                            </Grid>
                            <Grid item xs={12} />

                        </Grid>
                        <LoadingButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1, mb: 2 }}
                            loading={changePasswordLoading}
                        >
                            Change Password
                        </LoadingButton>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}