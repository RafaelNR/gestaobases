import React from 'react';
import {
  TextField,
  InputLabel
} from '@mui/material';

import { Controller, useFormContext, useWatch } from 'react-hook-form';



import { cepService } from "@/Service/CEP.service"


export default function MyOutlinedInput({ name, label = "CEP", ...otherProps }) {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();
  const cep = useWatch({
    control,
    name: "cep"
  })

  const clear = React.useCallback((value) => {
    return value && value.replace(/[^0-9]/g, '');
  }, []);
  const MASK = React.useMemo(() => '99999-999', []);
  // eslint-disable-next-line
  const MAX_LENGTH = React.useMemo(() => MASK.length, []);

  const onLocalChange = React.useCallback((ev) => {

    let value = clear(ev.target.value);

    let nextLength = value.length;

    if (nextLength > MAX_LENGTH) return;
    value = applyMask(value, MASK);

    setValue("cep", value);
    // eslint-disable-next-line
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


  const getCEP = React.useCallback(async () => {
    try {
      const Dados = await cepService.getCEP(cep);
      if (Dados) {
        setValue("estado", Dados.uf)
        setValue("cidade", Dados.localidade)
        setValue("bairro", Dados.bairro)
        setValue("logradouro", Dados.logradouro)
        return;
      }

    } catch (error) {
      console.log(error)
    }
  }, [cep])


  return (
    <Controller control={control} name={name} defaultValue="" render={({ field }) => (
      <>
        <InputLabel htmlFor="cpf" sx={{ fontWeight: "bold", mb: 0.5 }} required={true} error={!!errors[name]}>
          {label}
        </InputLabel>
        <TextField
          size='small'
          {...otherProps}
          {...field}
          variant="outlined"
          id={`textField-outlined-${name}`}
          onChange={onLocalChange}
          onBlur={getCEP}
          fullWidth
          InputProps={{
            inputMode: 'numeric', pattern: '[0-9]*', minLength: 12, maxLength: 18,
            style: {
              borderRadius: 12, // cantos arredondados
              backgroundColor: "#f9f9f9",
            },
          }}
          error={!!errors[name]}
          helperText={errors[name] ? errors[name]?.message : ''}
        />
      </>
    )}
    />
  );
}

