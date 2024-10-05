/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';

import {
  getSortedArticles,
  capitalizeCardTitle,
  formatDate,
  truncateText,
  removeTextAfterHyphen,
  removeBrackets,
  handleMissingContent,
  handleMissingAuthor
} from '/src/lib/utils';

import {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription
} from '@/components/ui/sheet'

import {
  RadioGroup,
  RadioGroupItem
} from '@/components/ui/radio-group';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

const NewsViewMain = ({ articles }) => {
  const [articleSortOption, setArticleSortOption] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const navigate = useNavigate(); // this will be used once we add this into motorCityKitties -> keep it for now.

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
              value="alphabetically-sorted"
              id="alphabetically-sorted" />
            <Label className='font-mono text-med font-bold'
              htmlFor="alphabetically-sorted"
            >sort alphabetically</Label>
          </div>
        </RadioGroup>
      </div>


      <ScrollArea
        className="h-[600px] overflow-y-auto">
        <div className="mt-4 grid text-center grid-cols-1
        md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedArticles.map((article) => (
            <Card
              onClick={() => {
                setSelectedArticle(article);
                setIsSheetOpen(true);
              }}
              className='hover:bg-gray-100 hover:cursor-pointer
              transition duration-500 ease-in-out h-120 w-full'
              key={article.url}>
              <CardHeader>
                <CardTitle
                  className='flex text-center max-w-[30ch]
                  break-words relative
                  font-bold tracking-tighter text-2xl rounded
                  px-0.6rem text-center py-[0.8rem]'
                >{removeBrackets(truncateText(capitalizeCardTitle(article.title), 50))}
              </CardTitle>
              </CardHeader>
              <CardContent
                className="flex items-center justify-center">
                <img src={article.urlToImage} alt={article.title}
                className="object-cover items-center
                h-60 object-cover rounded-md" />
              </CardContent>
              <p className='font-mono text-sm font-semibold mb-6'>
                {formatDate(article.publishedAt)}
              </p>
            </Card>
          ))}
        </div>
      </ScrollArea>

      <Sheet open={isSheetOpen}
      onOpenChange={setIsSheetOpen}>
        <SheetContent className='flex text-center flex-col'>
          {selectedArticle && (
            <>
              <SheetHeader className='mb-4'>
                <SheetTitle
                  className='bg-muted flex scroll-m-20 
                  font-extrabold tracking-tighter 
                  text-left lg:text-3xl sm:text-2xl'
                >{removeTextAfterHyphen(capitalizeCardTitle(selectedArticle.title))}
                </SheetTitle>
              </SheetHeader>
              <div className="">
                <img src={selectedArticle.urlToImage}
                className="w-full h-auto" />
              </div>
              <SheetDescription>
                <p className='text-left font-mono text-sm font-semibold mb-8'
                >Authored by {handleMissingAuthor(selectedArticle?.author)} <br></br> {formatDate(selectedArticle.publishedAt)}
                </p>
                {handleMissingContent(selectedArticle?.content)}
                </SheetDescription>
              <h3 className='font-mono text-sm font-semibold'>
                <a href={selectedArticle.url} 
                target="_blank" rel="noopener noreferrer">
                [Full article here]
                </a>
              </h3>
            </>
          )}
        </SheetContent>
      </Sheet>

    </section>
  );
};

export default NewsViewMain;