import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const buttonVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05, 
    boxShadow: "0 10px 25px rgba(79, 70, 229, 0.3)",
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  tap: { scale: 0.98 },
  glowHover: {
    scale: 1.03,
    boxShadow: "0 0 15px 2px rgba(79, 70, 229, 0.5)",
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
};

const arrowVariants = {
  initial: { x: 0 },
  hover: { 
    x: 5,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
};

/**
 * AnimatedButton component
 * 
 * @param {Object} props - Component props
 * @param {string} props.to - Link destination (for Link buttons)
 * @param {string} props.href - URL for external links (renders an anchor tag)
 * @param {function} props.onClick - Click handler (for button type)
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.variant - Button style variant (primary, secondary, outline, text, glass)
 * @param {string} props.size - Button size (sm, md, lg)
 * @param {boolean} props.fullWidth - Whether button should take full width
 * @param {boolean} props.withArrow - Whether to show an arrow icon
 * @param {boolean} props.withGlow - Whether to show a glow effect on hover
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {string} props.type - Button type (button, submit, reset)
 * @param {string} props.ariaLabel - Accessibility label
 */
const AnimatedButton = ({
  to,
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  withArrow = false,
  withGlow = false,
  className = '',
  disabled = false,
  type = 'button',
  ariaLabel,
  ...rest
}) => {
  const getBaseClasses = () => {
    const baseClasses = {
      primary: 'bg-purple-gradient text-white',
      secondary: 'bg-blue-gradient text-white',
      outline: 'border-2 border-accent/30 text-accent hover:bg-accent/5',
      text: 'text-accent hover:bg-accent/5',
      glass: 'bg-glass/70 backdrop-blur-md border border-white/20 text-primaryText shadow-glass',
      danger: 'bg-brandRed text-white',
      success: 'bg-success text-white',
    };

    return baseClasses[variant] || baseClasses.primary;
  };

  const getSizeClasses = () => {
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return sizeClasses[size] || sizeClasses.md;
  };

  const buttonClasses = `
    ${getBaseClasses()}
    ${getSizeClasses()}
    rounded-xl font-medium transition-all flex items-center justify-center gap-2
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
    ${className}
  `;

  const hoverVariant = withGlow ? 'glowHover' : 'hover';

  const renderButton = () => {
    const commonProps = {
      className: buttonClasses,
      'aria-label': ariaLabel,
      ...rest
    };

    if (to) {
      return (
        <Link href={to} {...commonProps}>
          {children}
          {withArrow && (
            <motion.span
              className="inline-block"
              variants={arrowVariants}
              initial="initial"
              whileHover="hover"
            >
              →
            </motion.span>
          )}
        </Link>
      );
    }

    if (href) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...commonProps}>
          {children}
          {withArrow && (
            <motion.span
              className="inline-block"
              variants={arrowVariants}
              initial="initial"
              whileHover="hover"
            >
              →
            </motion.span>
          )}
        </a>
      );
    }

    return (
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        {...commonProps}
      >
        {children}
        {withArrow && (
          <motion.span
            className="inline-block"
            variants={arrowVariants}
            initial="initial"
            whileHover="hover"
          >
            →
          </motion.span>
        )}
      </button>
    );
  };

  return (
    <motion.div
      className="inline-block"
      variants={buttonVariants}
      initial="initial"
      whileHover={disabled ? {} : hoverVariant}
      whileTap={disabled ? {} : 'tap'}
    >
      {renderButton()}
    </motion.div>
  );
};

export default AnimatedButton; 