import { Button, Checkbox, FormControlLabel, FormGroup, MenuItem, Select, Stack, Typography } from "@mui/material"
import axios from "axios"
import { useState } from "react"
// import useAxios from "../../custom-hook/useAxios"

const AccountSettings = () => {

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
            <Typography variant="h5">Change Account Settings</Typography>
            <FormGroup>
                <Stack direction='row' sx={{ alignItems: 'center' }} spacing={2}>
                    <Typography>Unit System</Typography>
                    <Select
                        sx={{ width: '300px' }}
                        size="small"
                        // id="demo-simple-select-standard"
                        value={unit}
                        onChange={(event) => setUnit(event.target.value)}
                    >
                        <MenuItem value={'si'}>International System of Units - (SI)</MenuItem>
                        <MenuItem value={'bi'}>Imperial / US Unts- (BI)</MenuItem>
                    </Select>
                </Stack>
                <FormControlLabel control={<Checkbox checked={isDataEntryChecked} color='warning' onChange={() => setIsDataEntryChecked(!isDataEntryChecked)} />} label="Always use new Data Entry method" />
                <FormControlLabel control={<Checkbox checked={isTxtChecked} color='warning' onChange={() => setIsTxtChecked(!isTxtChecked)} />} label="Send notifications by TXT messages" />
                <FormControlLabel control={<Checkbox checked={isEmailChecked} color='warning' onChange={() => setIsEmailChecked(!isEmailChecked)} />} label="Send notifications by Email messages" />

                <Stack direction='row' sx={{ alignItems: 'center' }} spacing={2}>
                    <Typography># days to suppress notifications by email</Typography>
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
            <Button variant="contained" color="warning" size="small" onClick={(event) => handleChangeSettings(event)} >Change Settings</Button>
        </Stack>

        // <Stack
        //     sx={{
        //         alignItems: 'center'
        //     }}
        //     spacing={2}
        // >
        //     <Typography variant="h5">Change Account Settings</Typography>
        //     <FormGroup>
        //         <Stack direction='row' sx={{ alignItems: 'center' }} spacing={2}>
        //             <Typography>Unit System</Typography>
        //             <Select
        //                 sx={{ width: '300px' }}
        //                 size="small"
        //                 // id="demo-simple-select-standard"
        //                 name="unit"
        //                 value={inputs.unit}
        //                 onChange={handleChange}
        //             >
        //                 <MenuItem value={'si'}>International System of Units - (SI)</MenuItem>
        //                 <MenuItem value={'bi'}>Imperial / US Unts- (BI)</MenuItem>
        //             </Select>
        //         </Stack>
        //         <FormControlLabel control={<Checkbox checked={inputs.dataEntry} name='dataEntry' color='warning' onChange={handleChange} />} label="Always use new Data Entry method" />
        //         <FormControlLabel control={<Checkbox checked={inputs.text} name='text' color='warning' onChange={handleChange} />} label="Send notifications by TXT messages" />
        //         <FormControlLabel control={<Checkbox checked={inputs.email} name='email' color='warning' onChange={handleChange} />} label="Send notifications by Email messages" />

        //         <Stack direction='row' sx={{ alignItems: 'center' }} spacing={2}>
        //             <Typography># days to suppress notifications by email</Typography>
        //             <Select
        //                 size="small"
        //                 // id="demo-simple-select-standard"
        //                 name="suppressDays"
        //                 value={inputs.suppressDays}
        //                 onChange={handleChange}
        //             >
        //                 {days && days.map((day, index) => (
        //                     <MenuItem key={index} value={day}>{day}</MenuItem>
        //                 ))}
        //             </Select>
        //         </Stack>
        //     </FormGroup>
        //     <Button variant="contained" color="warning" size="small" onClick={(event) => handleSubmit(event)} >Change Settings</Button>
        // </Stack>
    )
}

export default AccountSettings