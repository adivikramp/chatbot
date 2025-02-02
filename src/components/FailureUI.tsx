import { motion } from 'motion/react'
import { Button } from './ui/button';
import { FailureUIProps } from '@/types/types';

const FailureUI: React.FC<FailureUIProps> = ({ handleTestIntegration }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full text-center mt-6"
    >
        <h2 className="text-white text-lg md:text-2xl font-semibold mb-4">⚠️ Integration Not Detected</h2>
        <p className="text-gray-400 mb-4">Ensure the chatbot script is correctly embedded.</p>
        <Button onClick={handleTestIntegration} className="w-full py-4 rounded-xl mb-4">
            🔄 Retry Test
        </Button>
    </motion.div>
);

export default FailureUI;