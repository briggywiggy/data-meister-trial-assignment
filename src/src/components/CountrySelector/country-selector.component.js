import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const CountrySelector = ({ countries, country, handleChangeCountry }) => {
    return (
        <FormControl>
            <InputLabel>Country</InputLabel>
            <Select
                value={country}
                onChange={handleChangeCountry}
            >
                {
                    countries
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