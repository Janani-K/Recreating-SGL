import { Button, Checkbox, FormControlLabel, FormGroup, Grid, MenuItem, Paper, Select, Stack, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
// import useAxios from "../../custom-hook/useAxios"

const ChangePassword = () => {

    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Stack
            sx={{
                alignItems: 'center',
                width: '340px'
            }}
            spacing={2}
        >
            <Typography variant="h5">Change Password</Typography>
            <Typography variant="body2">Password should contain a minimum of 7 characters,
                1 lowercase, 1 uppercase, 1 digit and 1 special case</Typography>

            <TextField required type="password" label="Old Password" variant="outlined" color="warning" size="small" fullWidth
                helperText={errors.oldPwd && errors.oldPwd.message}
                name="oldPwd" {...register("oldPwd", {
                    required: "Old Password is required",
                    // minLength: { value: 7, message: "Password should be at-least 7 characters" }
                })} />
            <TextField required type="password" label="New Password" variant="outlined" color="warning" size="small" fullWidth
                helperText={errors.newPwd && errors.newPwd.message}
                name="newPwd" {...register("newPwd", {
                    required: "New Password is required",
                    pattern: {
                        value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/,
                        message: "Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol"
                    },
                    minLength: { value: 7, message: "Password should be at-least 7 characters" }
                })} />
            <TextField required type="password" label="Confirm New Password" variant="outlined" color="warning" size="small" fullWidth
                helperText={(errors.confirmNewPwd && errors.confirmNewPwd.message) || (errors.confirmNewPwd?.type === "checkPwdMatch" && "New Password and Confirm Password does not match")}
                name="confirmNewPwd" {...register("confirmNewPwd", {
                    required: "Confirm Password is required",
                    pattern: {
                        value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/,
                        message: "Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol"
                    },
                    validate: {
                        checkPwdMatch: (value) => watch('newPwd') == value,
                    },
                    minLength: { value: 7, message: "Password should be at-least 7 characters" }
                })} />
            <Button variant="contained" color="warning" size="small" onClick={handleSubmit(onSubmit)} >Change Password</Button>
        </Stack >

        // <Grid container>
        //     <Grid item>
        //         <Typography variant="h5">Change Password</Typography>
        //         <Typography variant="body2" variant="pre">Password should contain a minimum of 7 characters,
        //             1 lowercase, 1 uppercase, 1 digit and 1 special case</Typography>
        //         <FormGroup>
        //             <TextField required type="password" id="oldpwd" label="Old Password" variant="outlined" color="warning" size="small" />
        //             <TextField required type="password" id="newpwd" label="New Password" variant="outlined" color="warning" size="small" />
        //             <TextField required type="password" id="confirmnewpwd" label="Confirm New Password" variant="outlined" color="warning" size="small" />
        //         </FormGroup>
        //         <Button variant="contained" color="warning" size="small" onClick={(event) => handlePasswordChange(event)} >Change Password</Button>
        //     </Grid>
        // </Grid >
    )
}

export default ChangePassword