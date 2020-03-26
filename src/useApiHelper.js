import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useApiHelper(pageNumber) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        setLoading(true);
        axios({
            method: 'GET',
            url: 'https://randomuser.me/api/',
            params:{page: pageNumber, results: 10}
        }).then(res => {
            setData(preData => {
                return Array.from(new Set([...preData, ...res.data.results]));
            });
            setLoading(false);
            console.log(res.data.results);
        })
    }, [pageNumber]);
    return {loading, data};
}
