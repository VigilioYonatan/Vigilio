import {FormControl} from './FormControl';
import {FormControlControl} from './FormControl.control';
import {FormControlError} from './FormControl.error';
import {FormControlLabel} from './FormControl.label';

export const FormController = Object.assign(FormControl, {
  control: FormControlControl,
  label: FormControlLabel,
  error: FormControlError,
});
