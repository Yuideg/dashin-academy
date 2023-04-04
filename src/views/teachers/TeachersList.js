import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import {
    Card,
    Table,
    Stack,
    Paper,
    Avatar,
    Button,
    Checkbox,
    TableRow,
    TableBody,
    TableCell,
    Container,
    Typography,
    IconButton,
    TableContainer,
    TablePagination,
    Box,
} from '@mui/material';
import Label from '../../components/label';
import {Iconify} from '../../components/iconify';
import { UserListHead, UserListToolbar } from '../../sections/dashboard/user';
import TEACHERLIST from '../../_mock/teacher';
import PopupComponent from "../../utils/popup_component";

const TABLE_HEAD = [
    { key: 'id', label: 'ID', alignRight: false },
    { key: 'profile_pic', label: 'Profile Picture', alignRight: false },
    { key: 'username', label: 'Username', alignRight: false },
    { key: 'religion', label: 'Religion', alignRight: false },
    { key: 'gender', label: 'Gender', alignRight: false },
    { key: 'department', label: 'Department', alignRight: false },
    { key: 'major', label: 'Major', alignRight: false },
    { key: 'minor', label: 'Minor', alignRight: false },
    { key: 'degree', label: 'Degree', alignRight: false },
    { key: 'cgpa', label: 'CGPA', alignRight: false },
    { key: 'college', label: 'College', alignRight: false },
    { key: 'qualification', label: 'Qualification', alignRight: false },
    { key: 'experience', label: 'Experience', alignRight: false },
    { key: 'salary', label: 'Salary', alignRight: false },
    { key: 'contract_type', label: 'Contract Type', alignRight: false },
    { key: 'tin_number', label: 'Tin Number', alignRight: false },
    { key: 'phone', label: 'Phone', alignRight: false },
    { key: 'emergency_phone', label: 'Emergency Phone', alignRight: false },
    { key: 'marital_status', label: 'Marital Status', alignRight: false },
    { key: 'current_address', label: 'Current Address', alignRight: false },
    { key: 'permanent_address', label: 'Permanent Address', alignRight: false },
    { key: 'bank_account', label: 'Bank Account', alignRight: false },
    { key: 'facebook_account', label: 'Facebook Account', alignRight: false },
    { key: 'twitter_username', label: 'Twitter Username', alignRight: false },
    { key: 'linkedin_username', label: 'Linkedin Username', alignRight: false },
    { key: 'instagram_username', label: 'Instagram Username', alignRight: false },
    { key: 'date_of_birth', label: 'Birth Date', alignRight: false },
    { key: 'birth_place', label: 'Birth Place', alignRight: false },
    { key: 'role', label: 'Role', alignRight: false },
    { key: 'is_active', label: 'Active', alignRight: false },
    { key: 'status', label: 'Status', alignRight: false },
    { key: 'created_at', label: 'Created At', alignRight: false },
    { key: 'updated_at', label: 'Updated At', alignRight: false },
    {}

];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    if (query) {
        console.log("query =>",query)
        return filter(array, (_user) => _user.username.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
}

export default function TeachersList() {
    const [open, setOpen] = useState(null);

    const [page, setPage] = useState(0);

    const [order, setOrder] = useState('asc');

    const [selected, setSelected] = useState([]);

    const [orderBy, setOrderBy] = useState('username');

    const [filterName, setFilterName] = useState('');

    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleOpenMenu = (event) => {
        setOpen(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setOpen(null);
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = TEACHERLIST.map((teacher) => teacher.username);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, username) => {
        const selectedIndex = selected.indexOf(username);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, username);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
    };

    const handleFilterByName = (event) => {
        setPage(0);
        setFilterName(event.target.value);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - TEACHERLIST.length) : 0;
    const filteredUsers = applySortFilter(TEACHERLIST, getComparator(order, orderBy), filterName);

    const isNotFound = !filteredUsers.length && !!filterName;
    return (
        <>
            <Helmet>
                <title> Teachers | Dashin Academy </title>
            </Helmet>

            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Teacher
                    </Typography>
                    <Button variant="contained" href={'/dashboard/register'} startIcon={<Iconify icon="eva:plus-fill" />}>
                        New Teacher
                    </Button>
                </Stack>

                <Card>
                    <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

                    <Box >
                        <TableContainer sx={{ minWidth: 800 }}>
                            <Table>
                                <UserListHead
                                    order={order}
                                    orderBy={orderBy}
                                    headLabel={TABLE_HEAD}
                                    rowCount={TEACHERLIST.length}
                                    numSelected={selected.length}
                                    onRequestSort={handleRequestSort}
                                    onSelectAllClick={handleSelectAllClick}
                                />
                                <TableBody>
                                    {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                        const { id, profile_pic,username,religion,gender,department,major,minor,
                                            degree,cgpa,college,qualification,experience,salary,contract_type,tin_number,
                                            phone,emergency_phone,marital_status,current_address,permanent_address,
                                            bank_account,facebook_account,twitter_account,linkedin_account,instagram_account,date_of_birth,
                                            birth_place,role,isVerified, status, created_at,updated_at } = row;
                                        const selectedUser = selected.indexOf(username) !== -1;
                                        return (
                                            <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                                                <TableCell padding="checkbox">
                                                    <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, username)} />
                                                </TableCell>
                                                <TableCell align="left">{id}</TableCell>
                                                <TableCell component="th" scope="row" padding="none">
                                                    <Stack direction="row" alignItems="center" spacing={2}>
                                                        <Avatar alt={username} src={profile_pic} />
                                                    </Stack>
                                                </TableCell>
                                                <TableCell align="left">{username}</TableCell>
                                                <TableCell align="left">{religion}</TableCell>
                                                <TableCell align="left">{gender}</TableCell>
                                                <TableCell align="left">{department}</TableCell>
                                                <TableCell align="left">{major}</TableCell>
                                                <TableCell align="left">{minor}</TableCell>
                                                <TableCell align="left">{degree}</TableCell>
                                                <TableCell align="left">{cgpa}</TableCell>
                                                <TableCell align="left">{college}</TableCell>
                                                <TableCell align="left">{qualification}</TableCell>
                                                <TableCell align="left">{experience}</TableCell>
                                                <TableCell align="left">{salary}</TableCell>
                                                <TableCell align="left">{contract_type}</TableCell>
                                                <TableCell align="left">{tin_number}</TableCell>
                                                <TableCell align="left">{phone}</TableCell>
                                                <TableCell align="left">{emergency_phone}</TableCell>
                                                <TableCell align="left">{marital_status}</TableCell>
                                                <TableCell align="left">{current_address}</TableCell>
                                                <TableCell align="left">{permanent_address}</TableCell>
                                                <TableCell align="left">{bank_account}</TableCell>
                                                <TableCell align="left">{facebook_account}</TableCell>
                                                <TableCell align="left">{twitter_account}</TableCell>
                                                <TableCell align="left">{linkedin_account}</TableCell>
                                                <TableCell align="left">{instagram_account}</TableCell>
                                                <TableCell align="left">{date_of_birth}</TableCell>
                                                <TableCell align="left">{birth_place}</TableCell>
                                                <TableCell align="left">{role}</TableCell>
                                                <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell>

                                                <TableCell align="left">
                                                    <Label color={(status === 'banned' && 'error') || 'success'}>{sentenceCase(status)}</Label>
                                                </TableCell>
                                                <TableCell align="left">{updated_at}</TableCell>
                                                <TableCell align="left">{created_at}</TableCell>

                                                <TableCell align="right">
                                                    <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                                                        <Iconify icon={'eva:more-vertical-fill'} />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                    {emptyRows > 0 && (
                                        <TableRow style={{ height: 53 * emptyRows }}>
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>

                                {isNotFound && (
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                                                <Paper
                                                    sx={{
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    <Typography variant="h6" paragraph>
                                                        Not found
                                                    </Typography>

                                                    <Typography variant="body2">
                                                        No results found for &nbsp;
                                                        <strong>&quot;{filterName}&quot;</strong>.
                                                        <br /> Try checking for typos or using complete words.
                                                    </Typography>
                                                </Paper>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                )}
                            </Table>
                        </TableContainer>
                    </Box>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={TEACHERLIST.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Card>
            </Container>
            <PopupComponent open={open} handleCloseMenu={handleCloseMenu} />
        </>
    );
}
