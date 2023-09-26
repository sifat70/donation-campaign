import { Pie, PieChart } from "recharts";


const Statistics = () => {
    const data01 = [
        {
            "name": "Group A",
            "value": 400
        }
    ];
    const data02 = [
        {
            "name": "Group A",
            "value": 2400
        }
    ];
    return (
        <div className="flex items-center justify-center mt-10">
            <PieChart width={730} height={250}>
                
            colors={['red', 'blue', 'green']}
                <Pie data={data01} dataKey="value" nameKey="name"  fill="#8884d8" />
                <Pie data={data02} dataKey="value" nameKey="name" fill="#82ca9d" />
            </PieChart>

        </div>
    );
};

export default Statistics;