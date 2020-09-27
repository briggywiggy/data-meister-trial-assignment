import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    BarSeries
} from '@devexpress/dx-react-chart-material-ui';
import { scaleBand } from '@devexpress/dx-chart-core';
import { ArgumentScale, Stack } from '@devexpress/dx-react-chart';

const OutputChart = ({ data }) => {

    return (
        <Paper>
            <Chart
                data={data}
            >
                <ArgumentScale factory={scaleBand} />
                <ArgumentAxis />
                <ValueAxis />

                <BarSeries valueField="value" argumentField="argument" />
                <Stack />
            </Chart>
        </Paper>
    )
};

export { OutputChart as default };
