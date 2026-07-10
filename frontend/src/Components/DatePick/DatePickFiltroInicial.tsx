/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers";
import { FC } from "react";
import moment from "moment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { InputLabel } from "@mui/material";
moment.locale("pt-br");

type IFormInputProps = {
	title: string;
	value?: any;
	setFiltros: any;
} & DatePickerProps<any>;

const FormInput: FC<IFormInputProps> = ({
	title,
	value,
	setFiltros,
	...otherProps
}) => {
	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<InputLabel htmlFor={"label"} sx={{ fontWeight: "bold", mb: 0.5 }}>
				{title}
			</InputLabel>
			<DatePicker
				format="DD/MM/YYYY"
				value={value ? moment(value) : null}
				onChange={(newValue) =>
					setFiltros((e: any) => ({
						...e,
						data_inicial: moment(newValue).format("YYYY-MM-DD"),
					}))
				}
				sx={{ width: "100%" }}
				{...otherProps}
			/>
		</LocalizationProvider>
	);
};

export default FormInput;
