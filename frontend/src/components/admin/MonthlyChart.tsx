import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MonthlyChart = () => {
    const data = [
        { month: 'Jan', amount: 45000 },
        { month: 'Feb', amount: 52000 },
        { month: 'Mar', amount: 48000 },
        { month: 'Apr', amount: 61000 },
        { month: 'May', amount: 55000 },
        { month: 'Jun', amount: 67000 },
        { month: 'Jul', amount: 72000 },
        { month: 'Aug', amount: 65000 },
        { month: 'Sep', amount: 59000 },
        { month: 'Oct', amount: 70000 },
        { month: 'Nov', amount: 68000 },
        { month: 'Dec', amount: 75000 },
    ];

    return (
        <ResponsiveContainer width="100%" height={320}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} tickFormatter={(value) => `$${value / 1000}k`} />
                <Tooltip 
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Earnings']}
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
                <Bar dataKey="amount" fill="#eab308" radius={[8, 8, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default MonthlyChart;
