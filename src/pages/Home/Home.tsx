import { People } from '@/data';
import { useAppSelector } from '@/hooks/useSelectorApp';
import { Person } from '@/models';
import { addFavorite, addPeople } from '@/redux/states';
import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams, } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {

	const [selectedPeople, setSelectedPeople] = useState<Person[]>([])

	const pageSize = 5;

	const dispatch = useDispatch();
	const statePeople = useAppSelector((state => state.people))

	// Validar si la persona está en el array de personas seleccionadas
	const findPerson = (person: Person) => (!!selectedPeople.find(p => p.id === person.id))
	// Filtrar las personas seleccionadas
	const filterPeople = (person: Person) => selectedPeople.filter(p => p.id !== person.id)

	const handleChange = (person: Person) => {
		// Primero validamos si la persona está en el array de personas seleccionadas "selectedPeople", y luego lo filtramos
		const filteredPeople = findPerson(person) ? filterPeople(person) : [...selectedPeople, person]
		// Actualizamos el estado de las personas seleccionadas
		setSelectedPeople(filteredPeople)
		// Actualizamos el estado de las personas seleccionadas en el store
		dispatch(addFavorite(filteredPeople))
	}

	const columns = [
		{
			field: "actions",
			type: "actions",
			sortable: false,
			headerName: "",
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{
				// Logica para seleccionar personas
				<Checkbox size='small' checked={findPerson(params.row)} onChange={() => handleChange(params.row)} />
			}</>,
		},
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

	useEffect(() => {
		dispatch(addPeople(People))
	}, [])
	

	return (
			<DataGrid
				rows={statePeople}
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
