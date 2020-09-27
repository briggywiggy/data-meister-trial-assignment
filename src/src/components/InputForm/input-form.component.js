import React from 'react';
import moment from 'moment';
import validator from 'validator';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';

import CountrySelector from '../../components/CountrySelector/country-selector.component';
import CitySelector from '../../components/CitySelector/city-selector.component';
import AgeSlider from '../../components/AgeSlider/age-slider.component';
import FileUpload from '../../components/FileUpload/file-upload.component';

import { setCSVData } from '../../actions/csv-data.action';
import { setUserData } from '../../actions/user-data.action';

import JSONData from '../../assets/json/data.json';

const InputForm = ({ redirectToOutputTab }) => {
    const userData = useSelector(state => state.userData);
    const csvData = useSelector(state => state.csvData);
    const dispatch = useDispatch();

    const [name, setName] = React.useState("");
    const [errorName, setErrorName] = React.useState(false);
    const [helperTextName, setHelperTextName] = React.useState("");

    const [gender, setGender] = React.useState("female");
    const [age, setAge] = React.useState(60);

    const [email, setEmail] = React.useState("");
    const [errorEmail, setErrorEmail] = React.useState(false);
    const [helperTextEmail, setHelperTextEmail] = React.useState("");

    const [country, setCountry] = React.useState(JSONData.countries.sort()[0]);
    const [city, setCity] = React.useState(JSONData.cities[country].sort()[0]);

    const [csv, setCSV] = React.useState();
    const [errorCSV, setErrorCSV] = React.useState(false);

    const [date, setDate] = React.useState(moment().format('YYYY-MM-DD'));

    const requiredText = "This is a required field";

    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    const handleBlurName = (e) => {
        if (!e.target.value) {
            setErrorName(true);
            setHelperTextName(requiredText);
        }
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

    const handleBlurEmail = (e) => {
        if (!e.target.value) {
            setErrorEmail(true);
            setHelperTextEmail(requiredText);
        }
    }

    const onFileLoaded = (data, fileInfo) => {
        dispatch(setCSVData(data));
    };

    const handleClickUpload = (e) => {
        let result;
        if (csv) {
            result = window.confirm("Are you sure you want to overwrite contents?")
        }
        if (!csv || result) {
            let string = "";
            csvData.forEach((data, index) => {
                let additional = (index !== csvData.length - 1) ? ",\n" : "";
                string += data.toString() + additional;
            })
            setCSV(string);
        }
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
    const handleBlurCSV = (e) => {
        if (!e.target.value) {
            setErrorCSV(true);
        }
    }
    const handleChangeDate = (e) => {
        setDate(e.target.value);
    }

    const isAllowedToContinue = () => {
        if (
            name &&
            !errorName &&
            gender &&
            age &&
            email &&
            !errorEmail &&
            country &&
            city &&
            csv &&
            date) {
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

    React.useEffect(() => {
        if (Object.keys(userData).length > 0) {
            setName(userData.name);
            setGender(userData.gender);
            setAge(userData.age);
            setEmail(userData.email);
            setCountry(userData.country);
            setCity(userData.city);
            setCSV(userData.csv);
            setDate(userData.date);
        }
        console.log('userData', userData);
    }, [])

    React.useEffect(() => {
        if (name) {
            if (name.match(/^[A-Za-z0-9_']+\s?,\s?[A-Za-z0-9_']+$/g)) {
                setErrorName(false);
                setHelperTextName("");
            } else {
                setErrorName(true);
                setHelperTextName("Name format should be [<Last_Name>, <First_Name>]")
            }
        }
    }, [name])

    React.useEffect(() => {
        if (email) {
            if (validator.isEmail(email)) {
                setErrorEmail(false);
                setHelperTextEmail("");
            } else {
                setErrorEmail(true);
                setHelperTextEmail("This is not a valid email");
            }
        }
    }, [email])

    React.useEffect(() => {
        setCity(JSONData.cities[country].sort()[0]);
    }, [country])

    React.useEffect(() => {
        if (csv) {
            setErrorCSV(false);
        }
    }, [csv])

    return (
        <form noValidate autoComplete="off">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <FormLabel>User:</FormLabel>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        value={name}
                        fullWidth
                        error={errorName}
                        helperText={helperTextName}
                        onChange={handleChangeName}
                        onBlur={handleBlurName}
                    />
                </Grid>
                <Grid item xs={2}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={handleChangeGender}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <AgeSlider age={age} handleChangeAge={handleChangeAge} />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        value={email}
                        fullWidth
                        error={errorEmail}
                        helperText={helperTextEmail}
                        onBlur={handleBlurEmail}
                        onChange={handleChangeEmail}
                    />
                </Grid>
                <Grid item xs={2}>
                    <CountrySelector countries={JSONData.countries.sort()} country={country} handleChangeCountry={handleChangeCountry} />
                </Grid>
                <Grid item xs={4}>
                    <CitySelector cities={JSONData.cities[country].sort()} city={city} handleChangeCity={handleChangeCity} />
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
                        value={date}
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
                        onBlur={handleBlurCSV}
                    />
                    {errorCSV && <FormHelperText children={requiredText} error />}
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