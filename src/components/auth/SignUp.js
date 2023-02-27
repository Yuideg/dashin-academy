import React from 'react'
import {SignUpForm} from "../../layouts/forms";
import moment from "moment-timezone";
import Typography from "@mui/material/Typography";

export default function SignUp() {
    const currentYear = moment().get("year");

    return (
        <>
            <SignUpForm />
            <Typography m={3} textAlign={"center"} component={"h5"}>
                Copyright © {`${currentYear} All rights reserved.`}
            </Typography>
        </>);
}