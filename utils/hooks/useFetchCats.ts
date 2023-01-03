import React from 'react'
import { useQuery } from 'react-query';
import { getCats } from '../services/getCats';

export const useFetchCats = () => {
    const { isLoading, data, error, refetch } = useQuery('cats', getCats);
    
    return { data, isLoading, refetch };
}

export default useFetchCats