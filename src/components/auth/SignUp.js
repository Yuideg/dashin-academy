import React from 'react'
import {SignUpForm} from "../../layouts/forms";
import moment from "moment-timezone";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers";
import {CountriesList} from "../../_mock/CountriesList";
import {Container, FormControl, FormLabel, MenuItem, Radio, RadioGroup} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import dayjs from "dayjs";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
    "@global": {
        body: {
            backgroundColor: theme.palette.common.white
        }
    },
    paper: {
        marginTop: theme.spacing(1),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));
export default function SignUp() {
    const classes = useStyles();
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    const [country, setCountry] = React.useState('');
    const currentYear = moment().get("year");

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };
    return (
        <>
            <Container className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    <b>Sign Up</b>
                </Typography>
                <form className={classes.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="middleName"
                                label="Middle Name"
                                name="midleName"
                                autoComplete="mname"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Confirm Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={4}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="phone"
                                label="Phone Number"
                                name="phone"
                                autoComplete="text"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="emergency_phone"
                                label="Emergency Phone"
                                name="emergency_phone"
                                autoComplete="emergency_phone"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="religion"
                                label="Religion"
                                name="religion"
                                autoComplete="religion"
                            />
                        </Grid>
                        {/* here is what we want!*/}
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="zone"
                                label="Zone"
                                name="zone"
                                autoComplete="text"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="woreda"
                                label="Woreda"
                                name="woreda"
                                autoComplete="text"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="kebele"
                                label="Kebele"
                                name="kebele"
                                autoComplete="text"
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={4}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="zip_code"
                                label="Zip Code"
                                name="zip_code"
                                autoComplete="text"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="town"
                                label="Town"
                                name="town"
                                autoComplete="text"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="city"
                                label="City"
                                name="city"
                                autoComplete="text"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="region"
                                label="Region"
                                name="region"
                                autoComplete="text"
                            />
                        </Grid>
                        <Grid item sx={12}  sm={4} md={4}>
                            <TextField
                                fullWidth
                                id="outlined-select-country"
                                select
                                label="Country"
                            >
                                {CountriesList.map((option) => (
                                    <MenuItem key={option.code} value={option.name}>
                                        {option.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item sx={12}  sm={4} md={4}>
                            <TextField
                                fullWidth
                                id="outlined-select-country"
                                select
                                label="Marital Status"
                            >
                                {['Single','Married','Widowed','Divorced'].map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item sx={12}  sm={4} md={4}>
                            <TextField
                                fullWidth
                                id="outlined-select-country"
                                select
                                label="Role"
                            >
                                {['Admin','Student','Teacher','Director','Parent','Accountant','Human Resource'].map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={4} md={4}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                <DatePicker
                                    label="Date of Birth"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="birth_place"
                                label="Birth Place"
                                name="birth_place"
                                autoComplete="text"
                            />
                        </Grid>

                        <Grid item sx={12} sm={4} md={4}>
                            <FormControl>
                                <FormLabel id="radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup
                                    aria-labelledby="radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                                </RadioGroup>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={4} md={4}>
                            <label htmlFor="btn-upload">
                                <input
                                    id="profile_pic"
                                    name="profile_pic"
                                    style={{ display: 'none' }}
                                    type="file"
                                    onChange={()=>alert("file uploaded!")} />
                                <Button
                                    className="btn-choose"
                                    variant="outlined"
                                    component="span" >
                                    Upload Profile Picture
                                </Button>
                            </label>
                        </Grid>


                        <Grid item xs={12} sm={4} md={4}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                label="I agree to the Terms and Conditions."
                            />

                        </Grid>
                        <Grid item xs={12} sm={4} md={4}  />
                        <Grid item xs={12} sm={4} md={4}  />

                    </Grid>
                    <Grid container>
                        <Grid item sx={12} sm={4} md={4}/>
                        <Grid item sx={12} sm={4} md={4}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                            </Grid>
                        <Grid item sx={12} sm={4} md={4} />

                    </Grid>


                    {/*<Grid container alignItems={"center"} justify="flex-center">*/}
                    {/*    <Grid item>*/}
                    {/*        <Link href="/login" variant="body2">*/}
                    {/*            Already have an account? Sign in*/}
                    {/*        </Link>*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}
                </form>
            </Container>
            <Typography m={3} textAlign={"center"} component={"h5"}>
                Copyright © {`${currentYear} All rights reserved.`}
            </Typography>
        </>);
}