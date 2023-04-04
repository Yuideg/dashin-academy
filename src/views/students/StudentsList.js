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
    Popover,
    Checkbox,
    TableRow,
    MenuItem,
    TableBody,
    TableCell,
    Container,
    Typography,
    IconButton,
    TableContainer,
    TablePagination,
} from '@mui/material';
import Label from '../../components/label';
import {Iconify} from '../../components/iconify';
import Scrollbar from '../../components/scrollbar';
import { UserListHead, UserListToolbar } from '../../sections/dashboard/user';
import STUDENTSLIST from '../../_mock/student';
import PopupComponent from "../../utils/popup_component";
import Box from "@mui/material/Box";

const TABLE_HEAD = [
    {
        key: 'id',
        label: 'ID',
        alignRight: false,
    },
    {
        key: 'profile_pic',
        alignRight: false,
        label: 'Profile Picture',
    },
    {
        key: 'username',
        alignRight: false,
        label: 'Username',
    },
    {
        key: 'religion',
        alignRight: false,
        label: 'Religion',
    },
    {
        key: 'gender',
        alignRight: false,
        label: 'Gender',
    },
    {
        key: 'phone',
        alignRight: false,
        label: 'Phone',
    },
    {
        key: 'emergency_phone',
        alignRight: false,
        label: 'Emergency Phone',
    },
    {
        key: 'section',
        alignRight: false,
        label: 'Section',
    },
    {
        key: 'current_address',
        alignRight: false,
        label: 'Current Address',
    },
    {
        key: 'permanent_address',
        alignRight: false,
        label: 'Permanent Address',
    },
    {
        key: 'marital_status',
        alignRight: false,
        label: 'Marital Status',
    },
    {
        key: 'date_of_birth',
        alignRight: false,
        label: 'Birth Date',
    },
    {
        key: 'birth_place',
        alignRight: false,
        label: 'Birth Place',
    },
    {
        key: 'role',
        alignRight: false,
        label: 'Role',
    },
    {
        key: 'is_active',
        alignRight: false,
        label: 'Active',
    },
    {
        key: 'status',
        alignRight: false,
        label: 'Status',
    },
    {
        key: 'updated_at',
        alignRight: false,
        label: 'Updated At',
    },
    {
        key: 'created_at',
        alignRight: false,
        label: 'Created At',
    },
    {

    }
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

export default function StudentsList() {
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
            const newSelecteds = STUDENTSLIST.map((teacher) => teacher.username);
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

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - STUDENTSLIST.length) : 0;
    const filteredUsers = applySortFilter(STUDENTSLIST, getComparator(order, orderBy), filterName);

    const isNotFound = !filteredUsers.length && !!filterName;
    console.log("emptyRows=>",emptyRows)
    return (
        <>
            <Helmet>
                <title> Teachers | Dashin Academy </title>
            </Helmet>

            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Students
                    </Typography>
                    <Button variant="contained" href={'/dashboard/register'} startIcon={<Iconify icon="eva:plus-fill" />}>
                        New Student
                    </Button>
                </Stack>

                <Card >
                    <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />
                    <Box>
                        <TableContainer sx={{ minWidth: 800 }}>
                            <Table>
                                <UserListHead
                                    order={order}
                                    orderBy={orderBy}
                                    headLabel={TABLE_HEAD}
                                    rowCount={STUDENTSLIST.length}
                                    numSelected={selected.length}
                                    onRequestSort={handleRequestSort}
                                    onSelectAllClick={handleSelectAllClick}
                                />
                                <TableBody>
                                    {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                        const {id,profile_pic,username,religion,gender,phone,emergency_phone,section,
                                            current_address,permanent_address,marital_status,is_active,status,
                                            date_of_birth,birth_place,role,updated_at,created_at} = row;
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
                                                <TableCell align="left">{phone}</TableCell>
                                                <TableCell align="left">{emergency_phone}</TableCell>
                                                <TableCell align="left">{section}</TableCell>
                                                <TableCell align="left">{current_address}</TableCell>
                                                <TableCell align="left">{permanent_address}</TableCell>
                                                <TableCell align="left">{marital_status}</TableCell>
                                                <TableCell align="left">{date_of_birth}</TableCell>
                                                <TableCell align="left">{birth_place}</TableCell>
                                                <TableCell align="left">{role}</TableCell>
                                                <TableCell align="left">{is_active ? 'Yes' : 'No'}</TableCell>
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
                        count={STUDENTSLIST.length}
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
