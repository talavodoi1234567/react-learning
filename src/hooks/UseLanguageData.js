import { useState, useEffect } from "react";
import axios from "axios";

const useLanguageData = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`http://localhost:8000/overall`);
                setData(res.data); // Đảm bảo truy cập đúng thuộc tính data
            } catch (error) {
                setError(error);
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { data, loading, error }
    
}

export default useLanguageData;