import React, { createContext, useContext, useState, useEffect } from "react";

const NewsContext = createContext();

export const useNews = () => {
  return useContext(NewsContext);
};

export const NewsProvider = ({ children }) => {
  const read_url = "https://store-apis.herokuapp.com/api/technews/news";
  const fetch_url = "https://store-apis.herokuapp.com/api/technews/r/";

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const [fullArticle, setFullArticle] = useState();
  const [faload, setFaload] = useState(false);

  const fetchNews = () => {
    fetch(read_url)
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
      })
      .catch((error) => setNews([]))
      .finally(() => {
        setLoading(false);
      });
  };

  const fecthFullArticle = (url, cb) => {
    console.log(url)
    setFaload(true);
    fetch(fetch_url, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({ link: `${url}` }),
    })
      .then((response) => response.json())
      .then((data) => {
        setFullArticle(data);
        setFaload(false);
        cb();
      })
      .catch((error) => {
        console.log(error.message);
        setFaload(false);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <NewsContext.Provider
      value={{
        news,
        loading,
        fetchNews,
        fullArticle,
        faload,
        fecthFullArticle,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
