import React from 'react';

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	variant?: 'primary' | 'secondary';
	size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
	children, 
	onClick, 
	className = '', 
	variant = 'primary',
	size = 'md'
}) => {
	const sizeClasses = size === 'sm' 
		? 'px-6 py-3 text-[12px]' 
		: size === 'lg' 
			? 'px-12 py-6 text-xl' 
			: 'px-10 py-5 text-lg';

	return (
		<button
			onClick={onClick}
			className={`relative inline-flex items-center justify-center ${sizeClasses} text-[#E8FF3B] font-orbitron tracking-normal uppercase transition-transform duration-200 hover:scale-105 ${className}`}
		>
			{/* SVG IMPROTED */}
			<svg className="absolute inset-[2px] w-full h-full pointer-events-none" viewBox="0 0 100 40" preserveAspectRatio="none">
				
				<path d="M 14 0 H 100 V 26 L 86 40 H 0 V 14 L 14 0 Z" fill="none" stroke="white" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinejoin="miter" strokeLinecap="square" />
				
				<line x1="8" y1="14" x2="14" y2="8" stroke="white" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinecap="square" />
			
				<line x1="88" y1="32" x2="94" y2="26" stroke="white" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinecap="square" />
			</svg>

			<span className="relative z-10">{children}</span>
		</button>
	);
};

export default Button;
