import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';


interface Genre {

    id: number;
    name: string;
    image_background: string;
}

interface FetchGenresResponse {
    results : Genre[]
}

const useFetchGenres = () => {

    

    const [genres, setGenres] = useState<Genre[]>()
    const [error, setEError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    


    useEffect(() => {
        const controller = new AbortController();
        
        setIsLoading(true)
        apiClient
            .get<FetchGenresResponse>('/genres', { signal: controller.signal})
            .then((res) => {
                setGenres(res.data.results)
                setIsLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                setEError(err.message)
                setIsLoading(false)
            })
        
        return () => {
          controller.abort();
        };

    }, [])

    
    return { genres, error, isLoading }

    
}

export default useFetchGenres