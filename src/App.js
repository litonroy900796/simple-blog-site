import { Route,   BrowserRouter as Router,  Routes } from 'react-router-dom';
import './App.css';
import Header from './components/navbar/header';
import Home from './page/home';
import Post from './page/post';

function App() {
  return (
    <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:postId" element={<Post />} />
            </Routes>
           
        </Router>
  );
}

export default App;
