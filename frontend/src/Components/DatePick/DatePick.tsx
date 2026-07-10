/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers";
import { FC } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import "moment/dist/locale/pt-br";
moment.locale("pt-br");

type IFormInputProps = {
	name: string;
	required?: boolean;
	fullWidth?: boolean;
} & DatePickerProps<any>;

const FormInput: FC<IFormInputProps> = ({
	name,
	required,
	value,
	fullWidth,
	...otherProps
}) => {
	return (
		<LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="pt-br">
			<DatePicker
				{...otherProps}
				value={value ? moment(value) : undefined}
				slotProps={{
					textField: {
						required: required,
						fullWidth: fullWidth,
					},
				}}
			/>
		</LocalizationProvider>
	);
};

export default FormInput;
