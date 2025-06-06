import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: number;
  className?: string;
}

const LoadingSpinner = ({ size = 40, className }: LoadingSpinnerProps) => {
  return (
    <Loader2 
      size={size} 
      className={cn("animate-spin-slow text-waiting-text", className)}
    />
  );
};

export default LoadingSpinner;
