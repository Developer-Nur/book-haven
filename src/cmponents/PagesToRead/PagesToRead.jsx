import { useEffect, useState } from 'react';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const PagesToRead = () => {

    const [readData, setReadData] = useState({});

   const {totalPages, bookName} = readData;

   console.log(totalPages, bookName)

    useEffect(()=>{
        const dataFromLocalStore = JSON.parse(localStorage.getItem('read'));
        if(dataFromLocalStore){
            setReadData(dataFromLocalStore);
        }
    },[])


    return (
        <div>
            <h2>The charts is getting ready</h2>
            
        </div>
    );
};

export default PagesToRead;




{/* <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart> */}