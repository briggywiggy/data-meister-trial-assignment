import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const OutputForm = () => {
    const userData = useSelector(state => state.userData);
    const csvData = useSelector(state => state.csvData);

    return (
        <Grid container spacing={3}>
            <Grid item xs={8}></Grid>
            <Grid item xs={4}>{userData.name}, {userData.gender}, {userData.age}</Grid>
            <Grid item xs={6}>{userData.date}</Grid>
            <Grid item xs={6}>{userData.country}, {userData.city}, {userData.email}</Grid>
            <Grid item xs={6}>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>{csvData[0][0]}</TableCell>
                                <TableCell>{csvData[0][1]}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {csvData.map((data, index) => {
                                if(index > 0) {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell>{data[0]}</TableCell>
                                            <TableCell>{data[1]}</TableCell>
                                        </TableRow>
                                    )
                                }
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={6}>
            </Grid>
        </Grid>
    )
}

export { OutputForm as default }