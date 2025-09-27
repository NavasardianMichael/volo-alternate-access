interface SolidTriangleIconProps {
  className?: string;
}

export function SolidTriangleIcon({ className }: SolidTriangleIconProps) {
  return (
    <svg 
      width="8" 
      height="5" 
      viewBox="0 0 8 5" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M4 5L0 0H8L4 5Z" 
        fill="currentColor"
      />
    </svg>
  );
}