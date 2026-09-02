import React, { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const [imageError, setImageError] = useState(false);

  // Fallback obrigatório: fundo #FD7600, texto #016E01
  const renderFallback = () => (
    <div
      id="brand-logo-fallback"
      className="flex items-center gap-3 px-3 py-1.5 rounded-lg border-2 border-[#C9A84C] shadow-sm select-none transition-all hover:brightness-105"
      style={{ backgroundColor: '#FD7600' }}
    >
      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-black text-xs shadow-inner text-[#016E01]">
        EPI
      </div>
      <div className="flex flex-col text-left">
        <span
          className="font-extrabold uppercase tracking-wider text-xs md:text-sm leading-tight drop-shadow-sm"
          style={{ color: '#016E01' }}
        >
          Escola Parque Ipiranga
        </span>
        {showSubtitle && (
          <span className="text-[10px] font-semibold text-white/95 uppercase tracking-widest">
            Tradição & Excelência
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className={`inline-flex items-center ${className}`}>
      {!imageError ? (
        <img
          src="logo.png"
          alt="Escola Parque Ipiranga"
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className={`object-contain transition-all duration-300 ${
            size === 'sm' ? 'h-8' : size === 'lg' ? 'h-16' : 'h-11'
          }`}
        />
      ) : (
        renderFallback()
      )}
    </div>
  );
};
