import { useState, useEffect } from 'react';
import NewsViewMain from './components/NewsViewMain';
import MainLayout from './components/MainLayout';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        const articlesWithID = data.articles.map((article, index) => ({
          ...article,
          id: index,
        }));
        setArticles(articlesWithID);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <MainLayout>
      <NewsViewMain articles={articles} />
    </MainLayout>
  );
};

export default App;
