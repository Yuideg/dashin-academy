import React, {useState} from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import {
    Card,
    FormControl,
    Paper,
    Typography,
    FormLabel,
    InputLabel,
    Box, MenuItem, Select, Button, IconButton
} from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import {styled} from "@mui/material/styles";
import {CountriesList} from "../../_mock/CountriesList";

export default function EditForm() {
    const [birthday, setBirthday] = React.useState(dayjs('2014-08-18T21:11:54'));
    const [gender, setGender] = React.useState('');
    const currentYear = moment().get("year");
    const [file, setFile] = React.useState(null)

    const handleUploadInput = (newFile) => {
        setFile(newFile)
    }
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    const handleChange = (newValue) => {
        setBirthday(newValue);
    };
    const StyledButton = styled(Button)`
      background-color: #398acc;
      color: #ffffff;
      border-radius: 4%;
      font-weight: 800;
      padding: 3%;
      width: 25%;

      &:hover {
        background-color: #1076c9;
      }
    `;
    return (
        <Box
            width={600} height={80}
            bgcolor="lightblue"
            m='auto'
        >
            <Paper elevation={0} p={3}>
                <FormControl>
                    <Typography className="mb-4" sx={{m: 10, textAlign: 'center'}}><b>General
                        information</b></Typography>
                    <Grid container spacing={3}>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item sx={12} sm={6}>
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

                        <Grid item sx={12} sm={6}>
                            <TextField
                                fullWidth
                                id="outlined-select-gender"
                                select
                                label="Gender"
                            >
                                <MenuItem value='Male'>Male</MenuItem>
                                <MenuItem value='Female'>Female</MenuItem>
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="phone_number"
                                label="Phone Number"
                                name="phone"
                                autoComplete="text"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="address"
                                label="Address"
                                name="address"
                                autoComplete="address"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="zip"
                                label="Zip Code"
                                name="phone"
                                autoComplete="text"
                            />
                        </Grid>


                    <Grid item xs={12} sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>

                            <DatePicker
                                label="Date of Birth"
                                value={birthday}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="profession"
                            label="Profession"
                            name="profession"
                            autoComplete="text"
                        />
                    </Grid>
                    <Grid item sx={12} sm={6} md={6} >
                        <label htmlFor="profile_pic">Upload profile picture (PNG, JPG)</label>
                        <TextField
                           fullWidth
                           variant="outlined"
                           name="upload_photo"
                           type="file"
                           id = 'profile_pic'
                           autoComplete="file"

                       />
                    </Grid>

                    <Grid  sx={12} sm={6} md={6}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                p: 1,
                                m: 1,
                                bgcolor: 'background.paper',
                                borderRadius: 1,
                            }}
                        >
                            <StyledButton fullWidth>Save</StyledButton>
                        </Box>
                    </Grid>
                    </Grid>
                </FormControl>
            </Paper>
            <Typography m={3} textAlign={"center"} component={"h5"}>
                Copyright © {`${currentYear} All rights reserved.`}
            </Typography>
        </Box>
    );
}