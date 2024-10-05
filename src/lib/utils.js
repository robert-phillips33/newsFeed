/* eslint-disable no-useless-escape */
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

// <----------------------------> <----------------------------> <----------------------------> <----------------------------> //
// <----------------------------> <----------------------------> <----------------------------> <----------------------------> //

export function cn(...inputs) {
  return twMerge(clsx(inputs));
};

export const sortArticlesByDate = (articles) => {
  return articles.slice().sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};

export const sortArticlesAlphabetically = (articles) => {
  return articles.slice().sort((a, b) =>
    a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
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
  
  if (!sentence) return '';
  return sentence
    .split(" ")
    .map((word) => word ? word[0].toUpperCase() + word.substring(1) : '') 
    .join(" ");
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
};

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  
  const truncated = text.substring(0, maxLength);
  return truncated.substring(0, truncated.lastIndexOf(" ")) + "...";
};

export const removeTextAfterHyphen = (text) => {
  return text.split('-')[0].trim();
};

export const removeBrackets = (title) => {
  return title.replace(/[\[\]]/g, '');
};

export const handleMissingContent = (content) => {
  if (content) {
    return content;
  } else {
    return "Sorry, error retrieving this story's content.. Check the link below!";
  }
};

export const handleMissingAuthor = (content) => {
  if (content) {
    return content;
  } else {
    return "Author not provided.";
  }
};
