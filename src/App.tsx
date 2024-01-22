import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// ROUTES
const Home = lazy(() => import('./pages/Home/Home'));
const InnerPage = lazy(() => import('./pages/InnerPage/InnerPage'));
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));

const App = () => {
  return (
    <>
      <Router>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/innerPage/:id" element={<InnerPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
