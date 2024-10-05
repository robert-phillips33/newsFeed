import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
};

export const sortArticlesByDate = (articles) => {
  return articles.slice().sort((a, b) => 
    new Date(b.publishedAt) - new Date(a.publishedAt));
};

export const sortArticlesAlphabetically = (articles) => {
  return articles.slice().sort((a, b) =>
     a.title.localeCompare(b.title));
};

export const getSortedArticles = (articles, sortOption) => {
  if (sortOption === 'date-sorted') {
    return sortArticlesByDate(articles);
  } else if (sortOption === 'alphabetically-sorted') {
    return sortArticlesAlphabetically(articles);
  }
  return articles;
};

export const capitalizeCardTitle = (sentence) => {
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
};
