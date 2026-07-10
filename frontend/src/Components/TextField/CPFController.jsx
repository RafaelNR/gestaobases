import React from 'react';
import {
  TextField,
  FormHelperText,
  FormControl,
  InputLabel
} from '@mui/material';

import { Controller, useFormContext } from 'react-hook-form';


export default function MyOutlinedInput({ name, label = "CPF", required = false, ...otherProps }) {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const clear = React.useCallback((value) => {
    return value && value.replace(/[^0-9]/g, '');
  }, []);
  const TYPES = React.useMemo(() => ({
    CPF1: '9.999.999-99',
    CPF2: '99.999.999-99',
    CPF3: '999.999.999-99',
  }), []);
  // eslint-disable-next-line
  const MAX_LENGTH = React.useMemo(() => clear(TYPES.CPF1).length, []);
  const onLocalChange = React.useCallback((ev) => {

    let value = clear(ev.target.value);
    const mask = getMask(value);


    if (mask !== "SEM")
      value = applyMask(value, TYPES[mask]);

    if (mask === "ACIMA")
      return

    setValue(name, value);
    // eslint-disable-next-line
  }, []);
  const getMask = React.useCallback((value) => {
    if (!value && !value.length) return "CPF1";

    if (value.length > 11) {
      return "ACIMA"
    }

    switch (value.length) {
      case 9:
        return "CPF1";
      case 10:
        return "CPF2";
      case 11:
        return "CPF3";

      default:
        return "SEM";
    }


  }, []);
  const applyMask = React.useCallback((value, mask) => {
    let result = '';
    let inc = 0;
    Array.from(value).forEach((letter, index) => {
      if (!mask[index + inc].match(/[0-9]/)) {
        result += mask[index + inc];
        inc++;
      }
      result += letter;
    });
    return result;
  }, []);


  return (
    <Controller control={control} name={name} defaultValue="" render={({ field }) => (
      <>
        <InputLabel htmlFor="cpf" sx={{ fontWeight: "bold", mb: 0.5 }} required={required} error={!!errors[name]}>
          {label}
        </InputLabel>
        <TextField
          id="cpf"
          size="small"
          variant="outlined"
          fullWidth
          required={required}
          InputProps={{
            inputMode: 'numeric', pattern: '[0-9]*', minLength: 13, maxLength: 14,
            style: {
              borderRadius: 12, // cantos arredondados
              backgroundColor: "#f9f9f9",
            },
          }}
          error={!!errors[name]}
          helperText={errors[name] ? (errors[name]?.message) : ""}
          {...otherProps}
          {...field}
          onChange={onLocalChange}

        />

      </>
    )}
    />
  );
}

