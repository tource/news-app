import styled from "@emotion/styled";
import React from "react";

const NewsItemStyle = styled.div`
  display: flex;
  gap: 15px;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;

  .thumbnail {
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    display: flex;
    flex-direction: column;
    gap: 8px;
    h2 {
      margin: 0;
      a {
        color: #000;
      }
    }
    p {
      margin: 0;
      white-space: normal;
    }
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage, publishedAt } = article;

  return (
    <NewsItemStyle>
      <div className="thumbnail">
        <a href={url} target="blank" rel="noopener noreferrer">
          <img src={urlToImage} alt="썸네일이미지" />
        </a>
      </div>
      <div className="contents">
        <h2>
          <a href={url} target="blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
        <p>{publishedAt}</p>
      </div>
    </NewsItemStyle>
  );
};

export default NewsItem;
