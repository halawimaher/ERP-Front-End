import './App.css';
import CreateEmployee from './components/CreateEmployee';
import Login from './components/Login';
import DashBoard from './components/DashBoard'
import EmployeePage from './components/EmployeePage';

function App() {
  return (
    <>
      <Login />
      <DashBoard />
      <CreateEmployee />
      <EmployeePage />
    </>
  );
}

export default App;
