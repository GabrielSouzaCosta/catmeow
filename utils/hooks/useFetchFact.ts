import React from 'react'
import { useQuery } from 'react-query';
import { getFact } from '../services/getFact';

export default function () {
    const { isLoading, data, refetch, isRefetching } = useQuery('fact', getFact);
    
    return { data, isLoading, refetch, isRefetching };
}
