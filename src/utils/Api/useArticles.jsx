'use client'
import axios from 'axios';
import { Api_BASE_URL } from '../resuableVars';
import { useQuery } from '@tanstack/react-query';

// Fetch blogs with pagination
const fetchBlogs = async ({ pageSize, pageNumber }) => {
    // Early return if pageNumber is not valid
    if (pageNumber < 1) {
        throw new Error('Invalid page number');
    }

    const response = await axios.get(`${Api_BASE_URL}/Blog/GetBlogs`, {
        params: {
            pageSize,
            pageNumber,
        },
    });

    return response.data; 
};

// Custom hook to use blogs
const useBlogs = (pageSize, pageNumber) => {
    return useQuery({
        queryKey: ['blogs', pageSize, pageNumber],
        queryFn: () => fetchBlogs({ pageSize, pageNumber }),
        keepPreviousData: true, // Keep previous data while loading new data
        staleTime: 5000, // Data is fresh for 5 seconds
    });
};

export { useBlogs };