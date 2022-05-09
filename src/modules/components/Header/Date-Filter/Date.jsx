import * as React from 'react';
import TextField from '@mui/material/TextField';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DatePicker from '@mui/lab/DatePicker';
// import { AdapterDateFns } from '@mui/lab/x-date-pickers-pro/';
import DateFnsAdapter from "@date-io/date-fns";
import './Date.css'
import { LocalizationProvider } from '@mui/lab';



const Date = (props) => {
  const [value1, setValue1] = React.useState(null);
  const [value2, setValue2] = React.useState(null);
  return (
    <div className='date__container'>
      <LocalizationProvider dateAdapter={DateFnsAdapter}>
        <DatePicker
        className='date-from'
          label="Basic example"
          value={value1}
          onChange={(newValue) => {
            setValue1(newValue);

            props.changeDate( props.currentManager, newValue, props.dateTo)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={DateFnsAdapter}>
        <DatePicker
         className='date-to'
          label="Basic example"
          value={value2}
          onChange={(newValue) => {
            setValue2(newValue);
            props.changeDate( props.currentManager, props.dateFrom, newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}

export default Date


