import { Routes, Route } from 'react-router-dom';
import NewsViewMain from './components/NewsViewMain';
import NewsViewDetailed from './components/NewsViewDetailed.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsViewMain />} />
      <Route path="/news/:id" element={<NewsViewDetailed />} />
    </Routes>
  );
};

export default App;
