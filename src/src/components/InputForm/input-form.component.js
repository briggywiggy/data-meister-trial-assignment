import React from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

import InfoIcon from '@material-ui/icons/Info';

import CountrySelector from '../../components/CountrySelector/country-selector.component';
import CitySelector from '../../components/CitySelector/city-selector.component';
import AgeSlider from '../../components/AgeSlider/age-slider.component';
import FileUpload from '../../components/FileUpload/file-upload.component';

import { setCSVData } from '../../actions/csv-data.action';
import { setUserData } from '../../actions/user-data.action';

const InputForm = ({ redirectToOutputTab }) => {
    const csvData = useSelector(state => state.csvData);
    const dispatch = useDispatch();

    const [name, setName] = React.useState();
    const [gender, setGender] = React.useState();
    const [age, setAge] = React.useState(60);
    const [email, setEmail] = React.useState();
    const [country, setCountry] = React.useState('Austria');
    const [city, setCity] = React.useState('AMSTERDAM');
    const [csv, setCSV] = React.useState();
    const [date, setDate] = React.useState(moment().format('YYYY-MM-DD'));

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeGender = (e) => {
        setGender(e.target.value);
    }

    const handleChangeAge = (e, newValue) => {
        setAge(newValue);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onFileLoaded = (data, fileInfo) => {
        dispatch(setCSVData(data));
    };

    const handleClickUpload = (e) => {
        console.log(csvData);
        setCSV(csvData.toString());
    }

    const handleChangeCountry = (e) => {
        setCountry(e.target.value);
    }
    const handleChangeCity = (e) => {
        setCity(e.target.value);
    }
    const handleChangeCSV = (e) => {
        setCSV(e.target.value);
    }
    const handleChangeDate = (e) => {
        setDate(e.target.value);
    }

    const isAllowedToContinue = () => {
        if(name && gender && age && email && country && city && csv && date) {
            return true;
        } else {
            return false;
        }
    }

    const handleClickContinue = (e) => {
        let userData = {
            name,
            gender,
            age,
            email,
            country,
            city,
            csv,
            date
        }
        dispatch(setUserData(userData));
        redirectToOutputTab();
    }

    return (
        <form noValidate autoComplete="off">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <FormLabel>User:</FormLabel>
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Name" variant="outlined" fullWidth onChange={handleChangeName} />
                </Grid>
                <Grid item xs={2}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" onChange={handleChangeGender}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <AgeSlider handleChangeAge={handleChangeAge} />
                </Grid>

                <Grid item xs={6}>
                    <TextField label="Email" variant="outlined" fullWidth onChange={handleChangeEmail} />
                </Grid>
                <Grid item xs={2}>
                    <CountrySelector country={country} handleChangeCountry={handleChangeCountry} />
                </Grid>
                <Grid item xs={4}>
                    <CitySelector city={city} handleChangeCity={handleChangeCity} />
                </Grid>


                <Grid item xs={12}>
                    <FormLabel>Data:</FormLabel>
                </Grid>
                <Grid item xs={6}>
                    <FileUpload onFileLoaded={onFileLoaded} />
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" disabled={Object.keys(csvData).length === 0} onClick={handleClickUpload}>Upload</Button>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        id="date"
                        label="Date"
                        type="date"
                        defaultValue={date}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleChangeDate}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextareaAutosize
                        className="full-width"
                        rowsMax={7}
                        rows={7}
                        aria-label="maximum height"
                        placeholder="Input CSV data"
                        value={csv}
                        onChange={handleChangeCSV}
                    />
                </Grid>
                <Grid item xs={8}></Grid>
                <Grid item xs={4}>
                    <Button variant="contained" disabled={!isAllowedToContinue()} onClick={handleClickContinue}>Continue</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export { InputForm as default };