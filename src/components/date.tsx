import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
type fieldProps = {
    fieldType:string,
    fieldChange:any
}

export default function BasicDatePicker(props:fieldProps) {
    const {fieldChange,fieldType} = props
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField className='my-2' id="filled-basic" type={fieldType} onChange={fieldChange} variant = "filled"/>
    </Box>
  );
}