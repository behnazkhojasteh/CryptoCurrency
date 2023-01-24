
import './Style/App.css';
import { Routes, Route, useParams } from 'react-router-dom';
import Coins from './components/Coins';
import Coin from './components/Coin';
import CoinId from './components/CoinId';
import { Chart } from 'smart-webcomponents-react/chart';
import { useSlotProps } from '@mui/base';
import { Box } from '@mui/system';
import { grey } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
    </ThemeProvider>
    <header>

  
    </header>
        <Routes>
        
          <Route path='/' element={ <Coins /> }/>
          <Route path='/coin/:id' element={<CoinId  />} />
        
        </Routes>
      </div>

         );
}

export default App;
