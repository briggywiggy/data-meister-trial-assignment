import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import InputForm from '../../components/InputForm/input-form.component';
import OutputForm from '../../components/OutputForm/output-form.component';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const HomePage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const redirectToOutputTab = () => {
        setValue(1);
    }

    return (
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Input" {...a11yProps(0)} />
                    <Tab label="Output" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <InputForm redirectToOutputTab={redirectToOutputTab} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <OutputForm />
            </TabPanel>
        </div>
    )
}

export { HomePage as default };