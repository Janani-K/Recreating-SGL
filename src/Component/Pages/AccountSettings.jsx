import { Button, Checkbox, FormControlLabel, FormGroup, MenuItem, Select, Stack, Typography } from "@mui/material"
import axios from "axios"
import { useState } from "react"
// import useAxios from "../../custom-hook/useAxios"

const AccountSettings = ({ t }) => {

    const days = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

    // const [inputs, setInputs] = useState({
    //     unit: 'si',
    //     dataEntry: false,
    //     text: false,
    //     email: false,
    //     suppressDays: 0
    // })

    // const handleChange = (event) => {
    //     setInputs((prevState) => ({
    //         ...prevState,
    //         [event.target.name]: event.target.value
    //     }))
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(inputs);
    // }

    const [unit, setUnit] = useState('si')
    const [isDataEntryChecked, setIsDataEntryChecked] = useState(false);
    const [isTxtChecked, setIsTxtChecked] = useState(false);
    const [isEmailChecked, setIsEmailChecked] = useState(false);
    const [daysToSuppress, setDaysToSuppress] = useState(0);

    const submitData = async (payload) => {
        const response = await axios.post('http://localhost:5000/settings', payload);
        console.log(response);
    }

    const handleChangeSettings = (event) => {
        event.preventDefault();
        const payload = { unit, isDataEntryChecked, isEmailChecked, isTxtChecked, daysToSuppress }
        submitData(payload);
    }


    return (

        <Stack
            sx={{
                alignItems: 'center'
            }}
            spacing={2}
        >
            <Typography variant="h5">{t('change-account-settings')}</Typography>
            <FormGroup>
                <Stack direction='row' sx={{ alignItems: 'center' }} spacing={2}>
                    <Typography>{t('unit-system')}</Typography>
                    <Select
                        sx={{ width: '300px' }}
                        size="small"
                        // id="demo-simple-select-standard"
                        value={unit}
                        onChange={(event) => setUnit(event.target.value)}
                    >
                        <MenuItem value={'si'}>{t('units-si')}</MenuItem>
                        <MenuItem value={'bi'}>{t('units-bi')}</MenuItem>
                    </Select>
                </Stack>
                <FormControlLabel control={<Checkbox checked={isDataEntryChecked} color='warning' onChange={() => setIsDataEntryChecked(!isDataEntryChecked)} />} label={t('data-entry-method')} />
                <FormControlLabel control={<Checkbox checked={isTxtChecked} color='warning' onChange={() => setIsTxtChecked(!isTxtChecked)} />} label={t('send-notifications-txt')} />
                <FormControlLabel control={<Checkbox checked={isEmailChecked} color='warning' onChange={() => setIsEmailChecked(!isEmailChecked)} />} label={t('send-notifications-email')} />

                <Stack direction='row' sx={{ alignItems: 'center' }} spacing={2}>
                    <Typography>{t('days-to-suppress-notifications-by-email')}</Typography>
                    <Select
                        size="small"
                        // id="demo-simple-select-standard"
                        value={daysToSuppress}
                        onChange={(event) => { setDaysToSuppress(event.target.value) }}
                    >
                        {days && days.map((day, index) => (
                            <MenuItem key={index} value={day}>{day}</MenuItem>
                        ))}
                    </Select>
                </Stack>
            </FormGroup>
            <Button variant="contained" color="warning" size="small" onClick={(event) => handleChangeSettings(event)} >{t('change-settings')}</Button>
        </Stack>
    )
}

export default AccountSettings