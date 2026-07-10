/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState, useCallback, useContext } from "react";
import PropTypes from "prop-types";
import { uniquesObjects } from "../Utils/functions";
import { SortDirection } from "@mui/material";
import { buscarPalavra } from "@/Utils/removeAcentos";

type IType = {
	order: SortDirection;
	setOrder: React.Dispatch<React.SetStateAction<SortDirection>>;
	orderBy: string | null;
	setOrderBy: React.Dispatch<React.SetStateAction<string | null>>;
	handleRequestSort: (property: string) => void;
	rows: any[];
	rowsFiltered: any[] | undefined;
	setRows: React.Dispatch<React.SetStateAction<any[]>>;
	emptyRows: number;
	page: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
	rowsPerPage: number;
	setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
	handleChangePage: (event: any, newPage: number) => void;
	handleChangeRowsPerPage: (event: any) => void;
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	searchKeys: string[];
	setSearchKeys: React.Dispatch<React.SetStateAction<string[]>>;
	handleSearchValue: (keys: any, Dados: any, value: any) => any;
	handleSearch: () => any[] | undefined;
};

const TableContext = createContext({} as IType);

const TableProvider = ({ children }: { children: React.ReactNode }) => {
	const [order, setOrder] = useState<SortDirection>("asc");
	const [orderBy, setOrderBy] = useState<string | null>(null);
	const [page, setPage] = useState(0);
	const [rows, setRows] = useState<any[]>([]);
	const [rowsPerPage, setRowsPerPage] = useState(25);
	const [searchKeys, setSearchKeys] = useState<string[]>([]);
	const [search, setSearch] = useState("");

	const handleRequestSort = useCallback(
		(property: string) => {
			const isAsc = orderBy === property && order === "asc";
			setOrder(isAsc ? "desc" : "asc");
			setOrderBy(property);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[order, orderBy],
	);

	/**
	 * Muda para uma nova página
	 */
	const handleChangePage = useCallback((_event: any, newPage: number) => {
		setPage(newPage);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	/*
		/* Altera a quantidade de itens por página
		 */
	const handleChangeRowsPerPage = useCallback((event: any) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const emptyRows = React.useMemo(() => {
		return rows && rows.length
			? rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)
			: 0;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, rows, rowsPerPage]);

	const handleSearch = useCallback(
		() => {
			if (search) {
				let results: any[] = [];
				const s = search.trim().toLowerCase();
				searchKeys.forEach((key) => {
					const result = rows.filter(
						(Dado: any) => Dado[key] && buscarPalavra(Dado[key], s) && Dado,
					);
					results = [...results, ...result];
				});
				return uniquesObjects(results);
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[searchKeys, rows, search],
	);

	const handleSearchValue = useCallback(
		(value: any) => {
			if (value) {
				let results: any[] = [];
				searchKeys.forEach((key: any) => {
					const result = rows.filter(
						(Dado: any) => Dado[key] && buscarPalavra(Dado[key], value) && Dado,
					);
					results = [...results, ...result];
				});
				return uniquesObjects(results);
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[searchKeys, rows],
	);

	const rowsFiltered = search.length > 0 ? handleSearch() : rows;
	return (
		<TableContext.Provider
			value={{
				order,
				setOrder,
				orderBy,
				setOrderBy,
				handleRequestSort,
				rows,
				rowsFiltered,
				setRows,
				emptyRows,
				page,
				setPage,
				rowsPerPage,
				setRowsPerPage,
				handleChangePage,
				handleChangeRowsPerPage,
				search,
				setSearch,
				searchKeys,
				setSearchKeys,
				handleSearchValue,
				handleSearch,
			}}
		>
			{children}
		</TableContext.Provider>
	);
};

TableProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default function /*  */ useTable() {
	return useContext(TableContext);
}

export { TableContext, TableProvider };
