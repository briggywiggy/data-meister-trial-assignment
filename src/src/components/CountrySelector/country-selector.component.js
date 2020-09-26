import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import JSONData from '../../assets/json/data.json';

const CountrySelector = ({ country, handleChangeCountry }) => {
    return (
        <FormControl>
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={country}
                onChange={handleChangeCountry}
            >
                {
                    JSONData.countries
                    .sort()
                    .map((data, index) => {
                        return (
                            <MenuItem value={data} key={index}>{data}</MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl>
    )
}

export { CountrySelector as default }