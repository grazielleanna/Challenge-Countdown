import { KeyboardDatePicker } from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import { withFormsy } from 'formsy-react';
import React from 'react';
import moment from 'moment';

import './style.css';

function InputDateKeyboard(props) {
  const { errorMessage } = props;
  const value = props.value || null;
  const changeValue = date => {
    props.setValue(moment(date).format('YYYY-MM-DDTHH:mm:ss'));
    if (props.onChange) {
      props.onChange(date);
    }
  };
  return (
    <KeyboardDatePicker
      {...props}
      onChange={changeValue}
      value={value}
      error={Boolean((!props.isPristine && props.showRequired) || errorMessage)}
      helperText={errorMessage}
      placeholder="DD/MM/AAAAA"
    >
      {() => <TextField {...props} variant="outlined" />}
    </KeyboardDatePicker>
  );
}

export default React.memo(withFormsy(InputDateKeyboard));
