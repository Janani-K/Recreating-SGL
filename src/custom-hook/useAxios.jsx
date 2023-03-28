import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5000';

const useAxios = (axiosParam) => {

    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchData = async (axiosParam) => {
        try {
            const response = await axios.request(axiosParam);
            setData(response);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData(axiosParam);
    }, [])


    return { data, isLoading, error }
}

export default useAxios