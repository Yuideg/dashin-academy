import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LockIcon from '@mui/icons-material/Lock';
import Typography from "@mui/material/Typography";
import {makeStyles} from '@mui/styles'
import Container from "@mui/material/Container";
import {DatePicker} from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {FormControl, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select} from "@mui/material";
import {CountriesList} from '../../_mock/CountriesList'
import moment from "moment-timezone";



export default function SignUp() {



    return (
        <Container component="div" maxWidth="xs">
            <CssBaseline/>


        </Container>
    );
}
