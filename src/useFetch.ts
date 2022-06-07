import React, { useEffect, useState } from 'react';
import {
  EsportsTitle,
  loadTournaments,
  Tournament,
} from './api/tournamentsApi';

const useFetch = (title: any) => {
  const [data, setData] = useState<Array<Tournament>>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    setLoading(true);
    loadTournaments(title).then((response) => {
      setData(response);
      setLoading(false);
    });
  }, [title]);

  return {
    data,
    loading,
  };
};

export default useFetch;
