import React from 'react';

const FrostedGlass = ({ 
  children, 
  className = '', 
  blur = 'md', 
  opacity = 10,
  border = true,
  rounded = 'lg'
}) => {
  // Blur intensity mapping (reduced blur for more glassy effect)
  const blurClasses = {
    sm: 'backdrop-blur-[2px]',
    md: 'backdrop-blur-[4px]', 
    lg: 'backdrop-blur-[6px]',
    xl: 'backdrop-blur-[8px]'
  };

  // Background opacity mapping (using bg-white with opacity for more transparency)
  const bgOpacityClasses = {
    5: 'bg-white/[0.05]',
    10: 'bg-white/[0.08]',
    15: 'bg-white/[0.12]',
    20: 'bg-white/[0.15]',
    25: 'bg-white/[0.18]'
  };

  // Rounded corner mapping
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    full: 'rounded-full'
  };

  const baseClasses = [
    blurClasses[blur] || blurClasses.md,
    bgOpacityClasses[opacity] || bgOpacityClasses[10],
    roundedClasses[rounded] || roundedClasses.lg,
    border ? 'border border-white/30' : '',
    'backdrop-saturate-150',
    // 'shadow-xl shadow-black/20'
  ].filter(Boolean).join(' ');

  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
};

export default FrostedGlass;