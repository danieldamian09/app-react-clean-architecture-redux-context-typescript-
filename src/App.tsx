import "./App.css";
import {Navbar} from "./components";
import {Home} from "./pages";
import {LayoutContainer} from "./styled-components";
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
	return (
		<>
			<Provider store={store}>
			<Navbar />
			<LayoutContainer>
				<Home />
			</LayoutContainer>
			</Provider>
		</>
	);
}

export default App;
