import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';
import './variables.scss';

// A custom theme for this app
const theme = createTheme({
	palette: {
		primary: {
			main: '#4884bd',
			contrastText: '#fff',
		},
		secondary: {
			main: '#195a85',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#195a85',
		},
	},
});

export default theme;
