import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTask from './routes/AddTask';
import Home from './routes/Home';
import UpdateTask from './routes/UpdateTask';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/update-task/:id" element={<UpdateTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
