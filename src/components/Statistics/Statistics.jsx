import { Pie, PieChart } from "recharts";


const Statistics = () => {
    const data01 = [
        {
            "name": "Group A",
            "value": 1000
        }
    ];
    const data02 = [
        {
            "name": "Group A",
            "value": 2400
        }
    ];
    return (
        <div className="md:flex items-center justify-center mt-10">
            <PieChart width={730} height={250}>
                
            colors={['red', 'blue', 'green']}
                <Pie data={data01} dataKey="value" nameKey="name"  fill="#8884d8" />
                <Pie data={data02} dataKey="value" nameKey="name" fill="#82ca9d" />
            </PieChart>
            <h1 className="flex items-center">Donation <span className="ml-3 h-[10px] w-[100px] bg-[#00C49F]"></span></h1>
            
            <h1 className="flex items-center ml-2">Remaining <span className="ml-3 h-[10px] w-[100px] bg-[#FF444A]"></span></h1>
        </div>
    );
};

export default Statistics;