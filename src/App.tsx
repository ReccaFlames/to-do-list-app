import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTask from './routes/AddTask';
import Home from './routes/Home';
import UpdateTask from './routes/UpdateTask';
import Theme from './utils/Theme';
import ThemeStore from './utils/ThemeStore';

function App() {
  return (
    <ThemeStore>
      <Theme>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/update-task/:id" element={<UpdateTask />} />
          </Routes>
        </BrowserRouter>
      </Theme>
    </ThemeStore>
  );
}

export default App;
