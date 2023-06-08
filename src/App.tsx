import { MantineProvider } from '@mantine/core';
import { DoubleHeader } from './components/Header'
import { AuthenticationPage } from './pages/AuthenticationPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { UserDataForm } from './components/UserDataForm';
import { TemplateOne } from './components/cv-templates/templateOne/TemplateOne';
import { CreateCVPage } from './pages/CreateCVPage';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'light' }}>
      <Router>
        <DoubleHeader/>
        <Routes>
          <Route path="/login" element={<AuthenticationPage/>} />
          <Route path="/template" element={<TemplateOne/>} />
          <Route path="/cv" element={<CreateCVPage/>} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}