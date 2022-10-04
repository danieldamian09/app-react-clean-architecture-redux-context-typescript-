import { People } from '@/data';
import { DataGrid, GridRenderCellParams, } from "@mui/x-data-grid";
import React from "react";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {

	const pageSize = 5;

	const columns = [
		{
			field: "name",
			headerName: "Name",
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
		},
		{
			field: "category",
			headerName: "Category",
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
		},
		{
			field: "company",
			headerName: "Company",
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
		},
		
	];

	return (
			<DataGrid
				rows={People}
				columns={columns}
				disableColumnSelector
				disableSelectionOnClick
				autoHeight
				pageSize={pageSize}
				rowsPerPageOptions={[pageSize]}
				getRowId={(row) => row.id}
			/>
	);
};

export default Home;
