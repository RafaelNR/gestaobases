/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { TablePagination } from "@mui/material";
import useTable from "../../Contexts/TableContext";

const Pagination = React.memo(
	({ rowsFiltered = [] }: { rowsFiltered?: any[] }) => {
		const {
			rows,
			page,
			rowsPerPage,
			handleChangePage,
			handleChangeRowsPerPage,
		} = useTable();

		return (
			<React.Fragment>
				<TablePagination
					labelRowsPerPage="Linhas por página:"
					rowsPerPageOptions={[10, 15, 25, 50, 100]}
					component="div"
					count={
						rowsFiltered && rowsFiltered.length === 0
							? rows && rows.length
							: rowsFiltered.length
					}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</React.Fragment>
		);
	}
);

export default Pagination;
