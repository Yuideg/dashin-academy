import React from 'react'
import {Helmet} from 'react-helmet-async';
import {faker} from '@faker-js/faker';
import {useTheme} from '@mui/material/styles';
import {Grid, Container, Typography} from '@mui/material';
import {Iconify} from '../components/iconify';
import {
    AppTasks,
    AppNewsUpdate,
    AppOrderTimeline,
    AppCurrentVisits,
    AppWebsiteVisits,
    AppTrafficBySite,
    AppWidgetSummary,
    AppCurrentSubject,
    AppConversionRates,
} from '../sections/dashboard/app';

export default function DashboardAppPage() {
    const theme = useTheme();

    return (
        <>
            <Helmet>
                <title> Dashin Academy </title>
            </Helmet>

            <Container maxWidth="xl">
                <Typography variant="h4" sx={{mb: 5}}>
                    Welcome to Dashin Academy Admin Dashboard
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppWidgetSummary title="Total Students Count" total={7123} icon={'ph:student-fill'}/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <AppWidgetSummary title="Total Teachers Count" total={223} color="info"
                                          icon={'mdi:teachers'}/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <AppWidgetSummary title="Total Parents count" total={5609} color="warning"
                                          icon={'raphael:parent'}/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <AppWidgetSummary title="Total Staff Count" total={234} color="error" icon={'fluent:people-audience-24-filled'}/>
                    </Grid>

                    <Grid item xs={12} md={6} lg={8}>
                        <AppWebsiteVisits
                            title={`Income and Expense for Year ${new Date().getFullYear()}`}
                            subheader="(+43%) than last year"
                            chartLabels={[
                                '01/01/2022',
                                '02/01/2022',
                                '03/01/2022',
                                '04/01/2022',
                                '05/01/2022',
                                '06/01/2022',
                                '07/01/2022',
                                '08/01/2022',
                                '09/01/2022',
                                '10/01/2022',
                                '11/01/2022',
                            ]}
                            chartData={[
                                {
                                    name: 'Expense',
                                    type: 'column',
                                    fill: 'solid',
                                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                                },
                                {
                                    name: 'Income',
                                    type: 'area',
                                    fill: 'gradient',
                                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                                },
                                ]}
                        />
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <AppCurrentVisits
                            title="Total User Percentage"
                            chartData={[
                                {label: 'Students', value: 4344},
                                {label: 'Teachers', value: 5435},
                                {label: 'Parents', value: 1443},
                                {label: 'Staff', value: 4443},
                            ]}
                            chartColors={[
                                theme.palette.primary.main,
                                theme.palette.info.main,
                                theme.palette.warning.main,
                                theme.palette.error.main,
                            ]}
                        />
                    </Grid>


                </Grid>
            </Container>
        </>
    );
}
