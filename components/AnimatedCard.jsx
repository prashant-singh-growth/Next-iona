import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * AnimatedCard component
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.to - Link destination (optional)
 * @param {string} props.href - External URL (optional)
 * @param {function} props.onClick - Click handler (optional)
 * @param {string} props.variant - Card style variant (default, glass, outlined, raised)
 * @param {boolean} props.hover3D - Enable 3D hover effect
 * @param {boolean} props.hoverLift - Enable lift on hover
 * @param {boolean} props.animate - Enable entrance animation
 * @param {number} props.animateDelay - Delay for entrance animation in seconds
 * @param {string} props.className - Additional CSS classes
 */
const AnimatedCard = ({
  children,
  to,
  href,
  onClick,
  variant = 'default',
  hover3D = false,
  hoverLift = true,
  animate = false,
  animateDelay = 0,
  className = '',
  ...rest
}) => {
  const getBaseClasses = () => {
    const baseClasses = {
      default: 'bg-white shadow-card',
      glass: 'bg-glass/70 backdrop-blur-lg border border-white/20 shadow-glass',
      outlined: 'bg-white border border-gray-200 shadow-sm',
      raised: 'bg-white shadow-lg',
      gradient: 'bg-mesh-gradient border border-white/10 shadow-card',
    };

    return baseClasses[variant] || baseClasses.default;
  };

  const cardClasses = `
    ${getBaseClasses()}
    rounded-2xl overflow-hidden transition-all duration-300
    ${hoverLift && !hover3D ? 'hover:-translate-y-2 hover:shadow-lg' : ''}
    ${onClick || to || href ? 'cursor-pointer' : ''}
    ${className}
  `;

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24,
        delay: animateDelay
      }
    },
    hover: hover3D 
      ? { 
          rotateX: 5, 
          rotateY: 5, 
          scale: 1.05,
          boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
          transition: { 
            type: "spring", 
            stiffness: 300, 
            damping: 10
          }
        } 
      : hoverLift 
        ? { 
            y: -8, 
            scale: 1.01,
            boxShadow: "0 20px 30px rgba(0, 0, 0, 0.08)",
            transition: { 
              type: "spring", 
              stiffness: 300, 
              damping: 10
            }
          } 
        : {}
  };

  const cardContent = (
    <motion.div
      className={cardClasses}
      variants={cardVariants}
      initial={animate ? "hidden" : "visible"}
      whileInView={animate ? "visible" : undefined}
      viewport={animate ? { once: true, margin: "-50px" } : undefined}
      whileHover={hover3D || hoverLift ? "hover" : undefined}
      {...rest}
    >
      {children}
    </motion.div>
  );

  if (to) {
    return <Link href={to}>{cardContent}</Link>;
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  if (onClick) {
    return <div onClick={onClick}>{cardContent}</div>;
  }

  return cardContent;
};

/**
 * Card.Header component
 */
const CardHeader = ({ children, className = '', divider = false, ...rest }) => (
  <div 
    className={`p-6 ${divider ? 'border-b border-gray-100' : ''} ${className}`}
    {...rest}
  >
    {children}
  </div>
);

/**
 * Card.Body component
 */
const CardBody = ({ children, className = '', ...rest }) => (
  <div className={`p-6 ${className}`} {...rest}>
    {children}
  </div>
);

/**
 * Card.Footer component
 */
const CardFooter = ({ children, className = '', divider = false, ...rest }) => (
  <div 
    className={`p-6 ${divider ? 'border-t border-gray-100' : ''} ${className}`}
    {...rest}
  >
    {children}
  </div>
);

/**
 * Card.Image component
 */
const CardImage = ({ src, alt, className = '', ...rest }) => (
  <div className="w-full">
    <img
      src={src}
      alt={alt || "Card image"}
      className={`w-full object-cover ${className}`}
      loading="lazy"
      {...rest}
    />
  </div>
);

/**
 * Card.Title component
 */
const CardTitle = ({ children, className = '', ...rest }) => (
  <h3 
    className={`text-xl font-bold text-primaryText mb-2 ${className}`}
    {...rest}
  >
    {children}
  </h3>
);

/**
 * Card.Text component
 */
const CardText = ({ children, className = '', ...rest }) => (
  <p 
    className={`text-secondaryText ${className}`}
    {...rest}
  >
    {children}
  </p>
);

// Attach sub-components to AnimatedCard
AnimatedCard.Header = CardHeader;
AnimatedCard.Body = CardBody;
AnimatedCard.Footer = CardFooter;
AnimatedCard.Image = CardImage;
AnimatedCard.Title = CardTitle;
AnimatedCard.Text = CardText;

export default AnimatedCard; 