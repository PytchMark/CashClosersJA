import React, { ReactNode, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '@/src/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  href?: string;
  className?: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  href, 
  className, 
  target,
  ...props 
}: ButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const btnRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-95 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-white text-black hover:bg-white/90",
    gold: "gold-gradient text-black hover:opacity-90 shadow-[0_0_20px_rgba(212,175,55,0.3)]",
    outline: "border border-white/20 text-white hover:bg-white/10 hover:border-white/40",
    ghost: "text-white hover:bg-white/10",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const content = (
    <motion.span 
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="flex items-center gap-2 relative z-10"
    >
      {children}
    </motion.span>
  );

  const buttonInner = (
    <div 
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-full" />
      
      {href ? (
        <Link 
          to={href} 
          target={target}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
          {content}
        </Link>
      ) : (
        <button 
          className={cn(baseStyles, variants[variant], sizes[size], className)} 
          {...props}
        >
          {content}
        </button>
      )}
    </div>
  );

  return buttonInner;
};
