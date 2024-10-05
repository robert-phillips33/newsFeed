/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  getSortedArticles,
  capitalizeCardTitle
} from '/src/lib/utils';
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
import { LetterCaseCapitalizeIcon } from '@radix-ui/react-icons';


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
        <RadioGroup className='flex space-x-3 mb-10 mt-2'
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


      <ScrollArea className="h-[600px] overflow-y-auto">
        <div className="mt-4 grid text-center grid-cols-1
      md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedArticles.map((article) => (
            <Card className='hover:bg-gray-100 hover:cursor-pointer transition duration-500 ease-in-out h-120 w-full' key={article.url}>
              <CardHeader>
                <CardTitle
                  className='flex text-center max-w-[30ch] break-words relative
                  font-bold tracking-tighter text-2xl rounded
                   px-0.6rem text-center py-[0.8rem]'
                  >{capitalizeCardTitle(article.title)}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <img src={article.urlToImage} alt={article.title}
                  className="object-cover items-center h-60 object-cover rounded-md" />
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
};

export default NewsViewMain;