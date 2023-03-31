import {
    Button, Checkbox, FormControlLabel, FormGroup, Grid, MenuItem, Paper, Select, Stack, TextField, Typography,
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import DialogBox from "../DesignComponents/DialogBox"
// import useAxios from "../../custom-hook/useAxios"

const ChangePassword = ({ t }) => {

    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        setIsDialogOpen(true);
        reset({ oldPwd: '', newPwd: '', confirmNewPwd: '' });
    }

    return (
        <Stack
            sx={{
                alignItems: 'center',
                width: '340px'
            }}
            spacing={2}
        >
            <Typography variant="h5">{t('change-password')}</Typography>
            <Typography variant="body2">{t('password-criteria')}</Typography>

            <TextField required type="password" label={t('old-password')} variant="outlined" color="warning" size="small" fullWidth
                helperText={errors.oldPwd && errors.oldPwd.message}
                name="oldPwd" {...register("oldPwd", {
                    required: t('old-password-is-required'),
                    // minLength: {value: 7, message: "Password should be at-least 7 characters" }
                })} />
            <TextField required type="password" label={t('new-password')} variant="outlined" color="warning" size="small" fullWidth
                helperText={errors.newPwd && errors.newPwd.message}
                name="newPwd"
                {...register("newPwd", {
                    required: t('new-password-is-required'),
                    pattern: {
                        value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/,
                        message: t('password-format-validation')
                    },
                    minLength: { value: 7, message: t('password-length-validation') }
                })}
            />
            <TextField required type="password" label={t('confirm-new-password')} variant="outlined" color="warning" size="small" fullWidth
                helperText={(errors.confirmNewPwd && errors.confirmNewPwd.message) || (errors.confirmNewPwd?.type === "checkPwdMatch" && t('new-password-and-confirm-password-does-not-match'))}
                name="confirmNewPwd"
                {...register("confirmNewPwd", {
                    required: t('confirm-password-is-required'),
                    pattern: {
                        value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/,
                        message: t('password-format-validation')
                    },
                    validate: {
                        checkPwdMatch: (value) => watch('newPwd') == value,
                    },
                    minLength: { value: 7, message: t('password-length-validation') }
                })}
            />
            <Button variant="contained" color="warning" size="small" onClick={handleSubmit(onSubmit)} >{t('change-password')}</Button>
            {/* {isDialogOpen && <DialogBox dialog={{ visibility: isDialogOpen, title: '', content: 'Password changed successfully!', buttonText: 'OK' }} />} */}
            <Dialog
                open={isDialogOpen}
            >
                <DialogContent>
                    <DialogContentText>
                        {t('password-changed-successfully')} </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="warning" size="small" onClick={() => setIsDialogOpen(false)}>
                        {t('ok')} </Button>
                </DialogActions>
            </Dialog>
        </Stack >
    )
}

export default ChangePassword