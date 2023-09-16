import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/about';
import Home from './pages/home';
import Profile from './pages/profile';
import SignIn from './pages/signin';
import SignUp from './pages/signup';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
