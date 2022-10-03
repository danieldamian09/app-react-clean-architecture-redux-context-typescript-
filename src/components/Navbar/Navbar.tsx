import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Box,
	Button,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import React from "react";
export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
	return (
		<AppBar position="fixed">
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{mr: 2}}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" component="div" sx={{flexGrow: 1}}>
					React Test
				</Typography>
				<Button color="inherit">Login</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
