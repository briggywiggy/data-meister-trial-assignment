import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import JSONData from '../../assets/json/data.json';

const CitySelector = ({ city, handleChangeCity }) => {
    return (
        <FormControl>
            <InputLabel id="demo-simple-select-label">Cities</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={city}
                onChange={handleChangeCity}
            >
                {
                    JSONData.cities
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

export { CitySelector as default }