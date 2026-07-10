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
	value?: string;
	data_inicial?: any;
	setFiltros: any;
} & DatePickerProps<any>;

const FormInput: FC<IFormInputProps> = ({
	title,
	value,
	data_inicial,
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
						data_final: moment(newValue).format("YYYY-MM-DD"),
					}))
				}
				sx={{ width: "100%", borderRadius: 3, backgroundColor: "#f9f9f9" }}
				minDate={data_inicial && moment(data_inicial)}
				disabled={!data_inicial}
				{...otherProps}
			/>
		</LocalizationProvider>
	);
};

export default FormInput;
