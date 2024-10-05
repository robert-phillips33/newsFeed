import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsViewMain from './components/NewsViewMain';
import NewsViewDetailed from './components/NewsViewDetailed';
import MainLayout from './components/MainLayout';
import mockData from '/src/assets/mockData.json';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log(mockData.articles);
    setArticles(mockData.articles);
  }, []);

  return (
    <>
      <MainLayout>
        <Routes>
          <Route path='/' element={<NewsViewMain articles={articles} />} />
          <Route path="news/:id" element={<NewsViewDetailed articles={articles} />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;

