import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const CitySelector = ({ cities, city, handleChangeCity }) => {
    return (
        <FormControl>
            <InputLabel>City</InputLabel>
            <Select
                value={city}
                onChange={handleChangeCity}
            >
                {
                    cities
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