import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, direction = 'down', className = '' }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('revealed');
                } else {
                    el.classList.remove('revealed');
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`scroll-reveal direction-${direction} ${className}`}>
            {children}
        </div>
    );
}
