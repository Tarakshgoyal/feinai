import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface LoadingCounterProps {
  duration?: number;
  className?: string;
}

const LoadingCounter = ({ duration = 4000, className }: LoadingCounterProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const next = prev + 1;
        return next > 100 ? 100 : next;
      });
    }, duration / 100);
    
    return () => clearInterval(interval);
  }, [duration]);
  
  return (
    <div className={cn("font-mono text-4xl font-bold", className)}>
      {count}%
    </div>
  );
};

export default LoadingCounter;
