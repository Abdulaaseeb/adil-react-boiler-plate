import * as React from 'react';
import Button from '@mui/material/Button';

type iconstype = {
  icons:any,
  iconName:string,
}

export default function BasicIconButtons(props:iconstype) {
  return (
       
      <Button variant="contained" className='mx-3' endIcon = { props.icons }>{props.iconName}</Button>
  );
}