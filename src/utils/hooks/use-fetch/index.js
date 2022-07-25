import { useState, useEffect } from 'react';


export const useFetch = (url) => {
  const
    [loading, setLoading] = useState(false),
    [data,    setData]    = useState(null),
    [error,   setError]   = useState(``);
    
  
  useEffect(() => {
    setLoading(true);

    const getFetch = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) return setError(res.statusText);

        const body = await res.json();
        console.log('body: ',url, body);
        setData(body);
      }
      catch (e) {
        setError(e.message);
      }
      finally {
        setLoading(false);
      }
    };

    setTimeout(() => getFetch(), 20);
  }, []);

  return [data, loading, error];
};
