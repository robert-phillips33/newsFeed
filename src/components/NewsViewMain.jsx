/* eslint-disable react/prop-types */
import { useState } from 'react';
import { getSortedArticles } from '/src/lib/utils';
import { Label } from '@/components/ui/label';
import {
  RadioGroup,
  RadioGroupItem
} from '@/components/ui/radio-group';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card';


const NewsViewMain = ({ articles }) => {
  const [articleSortOption, setArticleSortOption] = useState('');

  const handleSortChange = (value) => {
    setArticleSortOption(value);
  };

  const sortedArticles = getSortedArticles(articles, articleSortOption);

  if (!articles.length) {
    return <h2 
    className='text-center font-extrabold
    tracking-tighter text-6xl mt-2'
    >Loading articles...
    </h2>;
  }

  return (
    <section className="p-4">
      <RadioGroup onValueChange={handleSortChange}>
        <div className="flex items-center space-x-1">
          <RadioGroupItem 
          value="date-sorted" id="date-sorted" />
          <Label htmlFor="date-sorted">Sort by date</Label>
        </div>
        <div className="flex items-center space-x-1">
          <RadioGroupItem 
          value="alphabetically-sorted" id="alphabetically-sorted" />
          <Label htmlFor="alphabetically-sorted">Sort alphabetically</Label>
        </div>
      </RadioGroup>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedArticles.map((article) => (
          <Card key={article.url}>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
              <CardDescription>{article.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={article.urlToImage} alt={article.title} className="h-48 w-full object-cover rounded-md" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default NewsViewMain;