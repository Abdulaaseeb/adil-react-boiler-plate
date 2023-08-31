import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
type fieldProps = {
    fieldLabel:string,
    fieldType:string,
    fieldValue:string,
    fieldChange:any
}

export default function BasicTextFields(props:fieldProps) {
    const {fieldLabel,fieldChange,fieldType,fieldValue} = props
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField className='my-2' id="filled-basic" value={fieldValue} label={fieldLabel} type={fieldType} onChange={fieldChange} variant = "filled"/>
    </Box>
  );
}