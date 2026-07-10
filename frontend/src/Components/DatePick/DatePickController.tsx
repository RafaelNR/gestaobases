/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { InputLabel } from "@mui/material";

dayjs.locale("pt-br");

type IFormInputProps = {
	name: string;
	required?: boolean;
	fullWidth?: boolean;
} & DatePickerProps<any>;

const DataPickController: FC<IFormInputProps> = ({
	name,
	label,
	required,
	fullWidth,
	...otherProps
}) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
			<Controller
				control={control}
				name={name}
				defaultValue=""
				render={({ field }) => (
					<>
						<DatePicker
							{...otherProps}
							{...field}
							label={label}
							value={field.value ? dayjs(field.value) : null}
							onChange={(date) => field.onChange(date)}
							slotProps={{
								textField: {
									required: required,
									fullWidth: fullWidth,
									error: !!errors[name],
									size: "small",
									helperText: errors[name]
										? (errors[name]?.message as string)
										: "",
								},
							}}
						/>
					</>
				)}
			/>
		</LocalizationProvider>
	);
};

export default DataPickController;
