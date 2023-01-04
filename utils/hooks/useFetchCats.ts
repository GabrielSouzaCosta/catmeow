import { AxiosResponse } from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { CatType } from '../../@types/cat';
import { getCats } from '../services/getCats';

export const useFetchCats = () => {
    const { isLoading, data, error, refetch, isRefetching } = useQuery('cats', getCats);
    
    return { data, isLoading, refetch, isRefetching };
}

export default useFetchCats