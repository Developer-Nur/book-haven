import { useEffect, useState } from 'react';
import ChartData from '../ChartData/ChartData';

const PagesToRead = () => {

    const [readData, setReadData] = useState([]);


    useEffect(() => {
        const dataFromLocalStore = JSON.parse(localStorage.getItem('read'));
        if (dataFromLocalStore) {
            setReadData(dataFromLocalStore);
        }
    }, [])


    return (
        <div className='mt-10'>
            <ChartData data={readData}> </ChartData>
        </div>
    );
};

export default PagesToRead;




