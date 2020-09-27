import React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import OutputTable from '../OutputTable/output-table.component';
import OutputChart from '../OutputChart/output-chart.component';

const OutputForm = () => {
    const userData = useSelector(state => state.userData);
    const paginatedData = useSelector(state => state.paginatedData);
    const nameArray = userData.name.split(','),
        lastName = nameArray[0].trim(),
        firstName = nameArray[1].trim();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} align="right">
                <Typography gutterBottom>{firstName} {lastName}, {userData.gender}, {userData.age}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography gutterBottom>{userData.date}</Typography>
            </Grid>
            <Grid item xs={6} align="right">
                <Typography gutterBottom>{userData.country}, {userData.city}, {userData.email}</Typography>
            </Grid>
            <Grid item xs={6}>
                <OutputTable />
            </Grid>
            <Grid item xs={6}>
                <OutputChart data={Object.keys(paginatedData)
                    .map(key => {
                        return { argument: paginatedData[key][0], value: parseFloat(paginatedData[key][1]) }
                    })} />
            </Grid>
        </Grid>
    )
}

export { OutputForm as default }