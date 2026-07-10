import React from "react";
import { styled } from "@mui/material/styles";
import {
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
	Typography,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

import useTable from "../../Contexts/TableContext";

const VisuallyHidden = styled("span")({
	border: 0,
	clip: "rect(0 0 0 0)",
	height: 1,
	margin: -1,
	overflow: "hidden",
	padding: 0,
	position: "absolute",
	top: 20,
	width: 1,
});

const MyTableCell = styled(TableCell)(({ theme }) => ({
	fontWeight: "bold",
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: "#f2f2f2",
		color: "#6f6f6f",
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

type IHead = {
	id: string;
	numeric?: boolean;
	disablePadding?: boolean;
	label?: string;
	sort?: boolean;
	align?: "center" | "left" | "right" | "inherit" | "justify";
};

function EnhancedTableHead({ headCells }: { headCells: IHead[] }) {
	const { order, orderBy, handleRequestSort } = useTable();

	return (
		<TableHead>
			<TableRow>
				{headCells &&
					headCells.length > 0 &&
					headCells.map((headCell) => (
						<MyTableCell
							key={headCell.id}
							align={headCell.align ? headCell.align : "left"}
							padding={headCell.disablePadding ? "none" : "normal"}
							sortDirection={orderBy === headCell.id ? order : false}
						>
							{headCell.sort ? (
								<TableSortLabel
									active={orderBy === headCell.id}
									direction={orderBy === headCell.id && order ? order : "asc"}
									onClick={() => handleRequestSort(headCell.id)}
								>
									<Typography>{headCell.label}</Typography>
									{orderBy === headCell.id ? (
										<VisuallyHidden>
											{order === "desc"
												? "sorted descending"
												: "sorted ascending"}
										</VisuallyHidden>
									) : null}
								</TableSortLabel>
							) : (
								headCell.label
							)}
						</MyTableCell>
					))}
			</TableRow>
		</TableHead>
	);
}

export default React.memo(EnhancedTableHead);
