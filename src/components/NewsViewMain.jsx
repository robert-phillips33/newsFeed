/* eslint-disable react/prop-types */
import { useState } from 'react';
import { getSortedArticles } from '/src/lib/utils';
import { Label } from '@/components/ui/label';
import {
  RadioGroup,
  RadioGroupItem
} from '@/components/ui/radio-group';
// import { ScrollArea, Scrollbar } from '@/components/ui/scroll-area';
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
      <div className='flex justify-center space-x-4'>
        <RadioGroup className='flex space-x-3 mb-4 mt-2'
          onValueChange={handleSortChange}>
          <div className="flex items-center space-x-1">
            <RadioGroupItem
              value="date-sorted" id="date-sorted" />
            <Label className='font-mono text-med font-bold'
              htmlFor="date-sorted">sort by date</Label>
          </div>
          <div className="flex items-center space-x-1">
            <RadioGroupItem
              value="alphabetically-sorted" id="alphabetically-sorted" />
            <Label className='font-mono text-med font-bold'
              htmlFor="alphabetically-sorted">sort alphabetically</Label>
          </div>
        </RadioGroup>
      </div>

    
      <div className="mt-4 grid text-center grid-cols-1
       md:grid-cols-2 lg:grid-cols-3 gap-6 hover-mute">
        {sortedArticles.map((article) => (
          <Card key={article.url}>
            <CardHeader>
              <CardTitle className='max-w-[36ch] break-words relative rounded bg-muted px-0.6rem text-center py-[0.8rem]'>{article.title.toUpperCase()}</CardTitle>
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