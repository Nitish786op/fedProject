import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './Navbar';
import SongList from './SongList';
import Footer from './Footer';
import AudioPlayer from './AudioPlayer'; 

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a1a1a',
    },
    secondary: {
      main: '#ff4081', 
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <SongList />

      <Footer />
    </ThemeProvider>
  );
}

export default App;
