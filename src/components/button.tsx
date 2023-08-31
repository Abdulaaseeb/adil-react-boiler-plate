import * as React from 'react';
import MicSharpIcon from '@mui/icons-material/MicSharp';
import Button from '@mui/material/Button';
type btnProps = {
        displayBtn:string,
    clickBtn:any
}

export default function BasicButtons(props:btnProps) {
    const {displayBtn,clickBtn } = props
  return (
      <Button className='mx-3 my-2'  onClick={clickBtn} color='secondary' variant="contained">{displayBtn }</Button>

  );
}