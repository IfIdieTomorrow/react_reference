import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import { NEWS_URL, KEY, CATEGORY } from '../utils/api';
import userPromise from '../lib/userPromise';

const NewsListBox = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = userPromise(() => {
    const query = category === 'all' ? '' : `${CATEGORY}${category}`;
    return axios.get(NEWS_URL + KEY + query);
  }, [category]);

  // 대기 중일 때
  if (loading) {
    return <NewsListBox>대기 중 ...</NewsListBox>;
  }

  // 아직 articles 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }

  // 에러가 발생했을 때
  if (error) {
    return <NewsListBox>에러 발생!</NewsListBox>;
  }

  // articles 값이 유효할 때
  const { articles } = response.data;
  return (
    <NewsListBox>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBox>
  );
};

export default NewsList;
