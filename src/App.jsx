

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavHeader from './header/NavHeader';
import Cursor from './Cursor';
import Home from './components/Home';
import PAGES from './components/PAGES';
import OUROFFER from './components/OUROFFER';
import GALLERIES from './components/GALLERIES';
import BLOG from './components/BLOG';
import SHOP from './components/SHOP';

function App() {
    return (
        
        
        <Router>
         
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pages" element={<PAGES />} />
                <Route path="/offer" element={<OUROFFER />} />
                <Route path="/galleries" element={<GALLERIES />} />
                <Route path="/blog" element={<BLOG/>} />
                <Route path="/shop" element={<SHOP />} />
            </Routes>
        </Router>
       
    );
}

export default App;

