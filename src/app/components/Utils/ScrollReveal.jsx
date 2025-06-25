'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ScrollReveal({ children, index = 0 }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <motion.div
            ref={ref}
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: index * 0.2
            }}
        >
            {children}
        </motion.div>
    );
}