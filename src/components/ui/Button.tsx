import { cn } from '@/utils/cn';
import { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-300 tracking-wide uppercase',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variant === 'primary' && 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/25',
          variant === 'secondary' && 'bg-white text-neutral-900 hover:bg-neutral-100',
          variant === 'outline' && 'border border-amber-500/50 text-amber-500 hover:bg-amber-500/10 hover:border-amber-500',
          variant === 'ghost' && 'text-white/70 hover:text-white hover:bg-white/10',
          variant === 'whatsapp' && 'bg-green-600 text-white hover:bg-green-500 shadow-lg shadow-green-600/25',
          size === 'sm' && 'px-4 py-2 text-xs',
          size === 'md' && 'px-6 py-3 text-sm',
          size === 'lg' && 'px-10 py-4 text-sm',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
