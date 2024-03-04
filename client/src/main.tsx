import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material';
import { blue, indigo } from '@mui/material/colors';
import router from './router';
import { ruRU } from '@mui/x-data-grid';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/ru';

const theme = createTheme(
  {
    palette: {
      primary: blue,
      secondary: indigo,
    },
  },
  ruRU,
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>,
);
