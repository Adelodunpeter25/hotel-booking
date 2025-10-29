import { motion } from 'framer-motion';

interface MetricCardProps {
    label: string;
    value: string;
    icon: React.ReactNode;
    status: 'success' | 'warning' | 'danger' | 'info';
    onView?: () => void;
}

const MetricCard = ({ label, value, icon, status, onView }: MetricCardProps) => {
    const statusColors = {
        success: 'bg-green-50 text-green-600',
        warning: 'bg-orange-50 text-orange-600',
        danger: 'bg-red-50 text-red-600',
        info: 'bg-blue-50 text-blue-600',
    };

    return (
        <motion.div
            whileHover={{ y: -4, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
            className="bg-white rounded-2xl p-4 shadow-md transition-all duration-200"
        >
            <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${statusColors[status]}`}>
                    {icon}
                </div>
                {onView && (
                    <button
                        onClick={onView}
                        className="text-xs text-gray-500 hover:text-gray-700 font-medium"
                    >
                        View
                    </button>
                )}
            </div>
            <p className="text-xs font-medium text-gray-500 mb-1">{label}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
        </motion.div>
    );
};

export default MetricCard;
