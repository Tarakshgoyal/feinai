import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  duration?: number;
  className?: string;
}

const ProgressBar = ({ duration = 4000, className }: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        return next > 100 ? 100 : next;
      });
    }, duration / 100);
    
    return () => clearInterval(interval);
  }, [duration]);
  
  return (
    <div className={cn("w-full bg-waiting-text/20 h-1 rounded-full overflow-hidden", className)}>
      <div 
        className="h-full bg-waiting-text rounded-full transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }} 
      />
    </div>
  );
};

export default ProgressBar;
