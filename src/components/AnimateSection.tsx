import { motion } from 'framer-motion';

interface AnimateSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function AnimateSection({ children, className = '', id }: AnimateSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-40px' }}
    >
      {children}
    </motion.section>
  );
}
