import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ManagerFilter(props) {
  let managers = props.managers

  return (

    <Autocomplete
      className='filter'
      disablePortal
      id="combo-box-demo"
      options={managers}
      sx={{ width: 180 }}
      size='small'
      onChange={(e, value) => {

        props.changeManager(value, props.dateFrom, props.dateTo)
      }}
      renderInput={(params) => <TextField

        {...params}
        label="Менеджер"
      />}
    />

  );
}
