import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { getCurrentUser } from "./services/AuthService"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {getCurrentUser() ? <Navbar /> : <Login /> }
    </div>
  );
}

export default App;
