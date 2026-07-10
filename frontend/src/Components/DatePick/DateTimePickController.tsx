/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateTimePicker, DateTimePickerProps } from "@mui/x-date-pickers";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import "moment/dist/locale/pt-br";
moment.locale("pt-br");

type IFormInputProps = {
	name: string;
	fullWidth?: boolean;
	required?: boolean;
} & DateTimePickerProps<any>;

const FormInput: FC<IFormInputProps> = ({
	name,
	fullWidth,
	required,
	...otherProps
}) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	return (
		<LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="pt-br">
			<Controller
				control={control}
				name={name}
				defaultValue=""
				render={({ field }) => (
					<DateTimePicker
						{...otherProps}
						{...field}
						ampm={false}
						ampmInClock={false}
						value={field.value ? moment(field.value) : undefined}
						slotProps={{
							textField: {
								fullWidth: fullWidth,
								required: required,
								error: !!errors[name],
								helperText: errors[name]
									? (errors[name]?.message as string)
									: "",
							},
						}}
					/>
				)}
			/>
		</LocalizationProvider>
	);
};

export default FormInput;
