import { Flex, Loader, MantineProvider } from '@mantine/core';
import { DoubleHeader } from './components/Header'
import { AuthenticationPage } from './pages/AuthenticationPage';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { CreateCVPage } from './pages/CreateCVPage';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { selectAuth, setIsAuthLoading, setUser, store } from './store';
import { getProfile } from './services/AuthService';
import { LocalStorageKeys } from './constants';
import { useEffect } from 'react';
import { MyCVsPage } from './pages/MyCVsPage';

const ProtectedRoute: React.FC<any> = ({ children }) => {
  const auth = useSelector(selectAuth);

  if (!auth.isLoggedIn) {
    return <Navigate replace to="/login" />;
  }

  return children;
}


const AppRoutes = () => {
  const authSlice = useSelector(selectAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsAuthLoading(true));
    new Promise((resolve, _) => setTimeout(async () => resolve(null), 600))
      .then(() => {
        const token = localStorage.getItem(LocalStorageKeys.authorization);
        if (!token) {
          dispatch(setIsAuthLoading(false));
          return;
        }

        getProfile(token)
          .then((user) => {
            if (!user) {
              return;
            }

            dispatch(setUser(user));
          })
          .finally(() => dispatch(setIsAuthLoading(false)));
      });
  }, [dispatch, authSlice.isLoggedIn])

  if (authSlice.isAuthLoading) {
    return (
      <Flex justify="center" align="center" style={{ height: "100vh" }}>
        <Loader size="lg" />
      </Flex>
    );
  }

  return (
    <>
      <DoubleHeader />
      <Routes>
        <Route path="/login" element={<AuthenticationPage />} />
        <Route path="/cv" element={
          <ProtectedRoute>
            <CreateCVPage />
          </ProtectedRoute>
        } />
        <Route path="/my-cvs" element={
          <ProtectedRoute>
            <MyCVsPage />
          </ProtectedRoute>
        } />
        <Route path="/my-cvs/:id" element={
          <ProtectedRoute>
            <CreateCVPage activeStep={0} isViewMode/>
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'light' }}>
        <Router>
          <AppRoutes />
        </Router>
      </MantineProvider>
    </Provider>
  );
}