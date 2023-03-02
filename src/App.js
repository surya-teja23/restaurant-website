import { Routes , Route , Outlet } from 'react-router-dom'
import ContextProvider from './Context/ContextProvider';

import ProtectedMainRoute from './components/ProtectedMainRoute';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from "./components/SignUp";
import AuthProvider from './Context/AuthProvider';
import FoodItems from './components/FoodItems';
import ProtectedLoginRoute from './components/ProtectedLoginRoute';
import SharedNavbar from './components/SharedNavbar';

function App() {
  return (
    <AuthProvider>
      <ContextProvider>
        <Routes>
          <Route path='/' element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path='signup' element={
              <ProtectedLoginRoute>
                <SignUp />  
              </ProtectedLoginRoute>
            } />
            <Route path='login' element={
              <ProtectedLoginRoute>
                <Login />  
              </ProtectedLoginRoute>
            } />
            <Route path='homepage' element={
              <SharedNavbar />
            }>
              <Route index element={<FoodItems />} />
            </Route>
          </Route>
        </Routes>
      </ContextProvider>
    </AuthProvider>
  );
}

export default App;
