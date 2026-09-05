import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'white';
  showDescriptor?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'full',
  showDescriptor = false 
}) => {
  const isWhite = variant === 'white';

  if (isWhite) {
    return (
      <div className={`inline-flex flex-col select-none ${className}`}>
        <div className="bg-white px-3.5 py-1.5 rounded-2xl shadow-md border border-slate-700/60 inline-flex items-center hover:shadow-lg transition-shadow">
          <img 
            src="/images/rg_official_logo.png" 
            alt="RG Consultoría Ambiental" 
            className="h-10 sm:h-12 w-auto object-contain"
            loading="eager"
          />
        </div>
        {showDescriptor && (
          <span className="text-[10px] tracking-tight font-medium text-slate-300 mt-1.5 pl-1">
            Gestión Ambiental · Vanguardia y Sostenibilidad
          </span>
        )}
      </div>
    );
  }

  return (
    <div 
      className={`inline-flex items-center select-none ${className}`}
      role="img"
      aria-label="RG Consultoría Ambiental - Logo Oficial"
    >
      <img 
        src="/images/rg_official_logo.png" 
        alt="RG Consultoría Ambiental" 
        className="h-10 sm:h-12 md:h-14 w-auto object-contain"
        loading="eager"
      />
      {showDescriptor && (
        <span className="text-[10px] tracking-tight font-semibold text-slate-500 ml-2.5 hidden lg:inline-block border-l border-slate-200 pl-2.5">
          Gestión Ambiental · Vanguardia y Sostenibilidad
        </span>
      )}
    </div>
  );
};
