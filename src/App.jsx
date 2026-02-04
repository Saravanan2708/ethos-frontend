import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import SubmitPackage from './pages/SubmitPackage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/submit" element={<SubmitPackage />} />
    </Routes>
  );
}

export default App;
