import { useState } from "react"
import { useApi } from "./axios"

export const useFetch = async(route: string, params?: any) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState()

    try {
        setIsLoading(true)
        const response = await useApi.get(route, params)
        setData(response.data)
    }catch(err){
        setError(err.response?.data.message || null)
        setIsLoading(false)
    }finally{
        setIsLoading(false)
    }

    return {
        data,
        isLoading,
        error
    }
}