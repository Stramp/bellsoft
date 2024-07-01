import { motion } from 'framer-motion'
export const PageWrapper = ({ children }) => {
  return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {children}
      </motion.div>
  );
};
