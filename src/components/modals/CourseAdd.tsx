import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Select, Box, InputLabel, FormControl, MenuItem, SelectChangeEvent, Grid} from "@mui/material";
import {useState} from "react";

export default function CourseAdd() {
    const [open, setOpen] = React.useState(false);
    const [course_name, setCourseName] = useState('');
    const [grade, setGrade] = useState('');


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleAdd = () => {
        alert('course =>'+course_name+'grade =>'+grade)
    };
    const courseList = ['English', 'Ammharic', 'Biology', 'ሂሣብ', 'አማረኛ', 'አካባቢ ሳይንስ', 'ስነ ጥበብ', 'የሰውነት ማጎልመሻ',
        'ህብረተሰብ ሳይንስ', 'ስነ ዜጋ እና ስነ ምግባር', 'ሳይንስ', 'ሙዚቃ',
        'Mathematics', 'General Science', 'Physics', 'Chemistry', 'English', 'French Language', 'Chinese Language',
        'Arabic Language', 'Information Communication Technology(ICT)',
        'Fundamentals of Programming', 'Basic Technical Drawing', 'History', 'Geography', 'General Business',
        'Economics', 'SAT', 'Sport', 'Civics And Ethical Education',
        'Social Studies', 'Other Foreign Language']
    const gradeLevelList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                New Course
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add New Course</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fill the following form to register new course.
                    </DialogContentText>
                    <Box sx={{minWidth: 120}}>

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={12} xl={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="course-name">Course Name</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="course-name"
                                        id="course-name"
                                        value={course_name}
                                        label="Course Name"
                                        onChange={(e: SelectChangeEvent) => setCourseName(e.target.value)}
                                    >
                                        {
                                            gradeLevelList.map((level, index) => (
                                                    <MenuItem key={index} value={level}>{level}</MenuItem>
                                                )
                                            )
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} xl={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="grade-level">Grade</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="grade-level"
                                        id="grade-level"
                                        value={grade}
                                        label="Grade"
                                        onChange={(e: SelectChangeEvent) => setGrade(e.target.value)}
                                    >
                                        {
                                            courseList.map((course, index) => (
                                                    <MenuItem key={index} value={course}>{course}</MenuItem>
                                                )
                                            )
                                        }

                                    </Select>
                                </FormControl>

                            </Grid>
                        </Grid>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleAdd}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}