import * as React from 'react';
import Switch from '@mui/material/Switch';
import { type } from 'os';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
type switchType = {
   switchChecked:boolean,
   switchAble:boolean,
}

export default function BasicSwitches(props:switchType) {
  return (
    <div>
      <Switch className='mx-3' color='warning' {...label} defaultChecked = {props.switchChecked} disabled = {props.switchAble} />

    </div>
  );
}