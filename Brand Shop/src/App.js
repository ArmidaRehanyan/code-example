import { Routes, Route } from 'react-router-dom';

// Components
import {
    Layouts
} from './components';

// Pages
import {
  Home,
  Register,
  Login,
  Profile
} from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
