import { useState, useEffect } from 'react';
import NewsViewMain from './components/NewsViewMain';
import MainLayout from './components/MainLayout';

const App = () => {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=30&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status as followzzz: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const articlesWithID = data.articles.map((article, index) => ({
          ...article,
          id: index,
        }));
        setArticles(articlesWithID);
      })
      .catch(error => {
        console.error('Error fetching data:', error.message);
      });
  }, []);

  return (
    <MainLayout>
      <NewsViewMain articles={articles} />
    </MainLayout>
  );
};

export default App;
