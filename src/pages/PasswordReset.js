import * as Yup from 'yup';
import React, {useState} from 'react';
import {useFormik, Form, FormikProvider} from 'formik';
import {useNavigate} from 'react-router-dom';
import {TextField, IconButton, InputAdornment, Grid, Stack, Container, MenuItem} from '@mui/material';
import {LoadingButton} from '@mui/lab';
import {Iconify} from '../components/iconify';

const styles = {
    bgColor: "red",
    width: '60%',
    margin: "auto"

}
export default function PasswordResetPage() {
    const usernames = [
        'DAR/0123/15',
        'DAR/9076/15',
        'DAR/5812/15',
        'DAR/5296/15',
        'DAR/1902/15',
        'DAR/7102/15',
        'DAR/4329/15',
        'DAR/0049/15',
        'DAR/1392/15',
        'DAR/3780/15',
    ];
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const PasswordResetSchema = Yup.object().shape({
        username: Yup.string().min(2, 'Username is too short').max(50, 'Username is too long').required('Username is required'),
        password: Yup.string().required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: PasswordResetSchema,
        onSubmit: () => {
            navigate('/dashboard', {replace: true});
        },
    });

    const {errors, touched, handleSubmit, isSubmitting, getFieldProps} = formik;

    return (
        <>
            <Container sx={styles}>
                <FormikProvider value={formik}>
                    <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={12}>

                                <TextField
                                    select
                                    defaultValue="None"
                                    fullWidth
                                    m={10}
                                    label="Username"
                                    {...getFieldProps('username')}
                                    error={Boolean(touched.username && errors.username)}
                                    helperText={touched.username && errors.username}
                                >
                                    {
                                        usernames.map((name,key) => (
                                        <MenuItem key={key} value={name}>
                                            {name}
                                        </MenuItem>
                                    ))
                                    }
                                </TextField>

                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <TextField
                                    m={10}
                                    fullWidth
                                    autoComplete="current-password"
                                    type={showPassword ? 'text' : 'password'}
                                    label="Password"
                                    {...getFieldProps('password')}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                                                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}/>
                                                </IconButton>
                                            </InputAdornment>

                                        ),
                                    }}
                                    error={Boolean(touched.password && errors.password)}
                                    helperText={touched.password && errors.password}
                                />
                            </Grid>
                            <Grid item xs={4} sm={4} md={4}/>
                            <Grid item xs={4} sm={4} md={4}>

                                <LoadingButton fullWidth size="large" type="submit" variant="contained"
                                               loading={isSubmitting}>
                                    Reset Password
                                </LoadingButton>
                            </Grid>
                            <Grid item xs={4} sm={4} md={4}/>


                        </Grid>

                    </Form>
                </FormikProvider>
            </Container>
        </>
    );
}
