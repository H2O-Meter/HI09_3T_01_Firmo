import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = false,
}) => {
  // Dimension settings based on size
  const heightClasses = {
    sm: 'h-9',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-22',
  };

  return (
    <div className={`inline-flex items-center gap-2 select-none group ${className}`}>
      {/* Dynamic SVG Vector representation matching logomarca_reestilizada.png */}
      <div
        className={`relative ${heightClasses[size]} aspect-[1000/660] transition-transform duration-200 group-hover:scale-105`}
        title="Escola Parque Ipiranga"
      >
        <svg
          viewBox="0 0 1000 660"
          className="w-full h-full drop-shadow-sm filter"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Orange Brush Body */}
          <path
            d="M 180 320
               C 140 270, 180 180, 310 130
               C 410 90, 560 160, 710 200
               C 800 225, 880 260, 935 295
               C 960 310, 955 330, 915 345
               C 840 375, 740 405, 620 440
               C 500 475, 380 540, 240 545
               C 170 548, 120 525, 95 480
               C 75 440, 90 410, 130 395
               C 100 375, 80 345, 110 310
               C 130 285, 160 300, 180 320 Z"
            fill="#FD7600"
          />

          {/* Top Right Brush Tail Streaks */}
          <path
            d="M 760 215 C 820 230, 895 260, 950 280 C 930 285, 860 270, 780 250 Z"
            fill="#FD7600"
          />
          <path
            d="M 680 435 C 780 440, 870 410, 915 390 C 860 415, 770 445, 660 445 Z"
            fill="#FD7600"
          />

          {/* Left Splatters / Bristles */}
          <path
            d="M 120 490 C 80 525, 60 565, 45 590 C 40 580, 55 540, 85 500 Z"
            fill="#FD7600"
          />
          <path
            d="M 85 415 C 45 440, 20 470, 10 500 C 15 475, 40 440, 75 410 Z"
            fill="#FD7600"
          />
          <path
            d="M 60 360 C 30 375, 15 400, 5 425 C 15 405, 35 380, 60 360 Z"
            fill="#FD7600"
          />
          <path
            d="M 90 315 C 65 305, 40 315, 25 335 C 40 325, 65 320, 85 325 Z"
            fill="#FD7600"
          />

          {/* Lettering: Escola Parque Ipiranga in Deep Green */}
          <g
            fill="#006A00"
            textAnchor="middle"
            fontFamily="'Outfit', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontWeight="900"
          >
            <text
              x="510"
              y="275"
              fontSize="115"
              letterSpacing="-1.5px"
              transform="rotate(-3 510 275)"
            >
              Escola
            </text>
            <text
              x="500"
              y="405"
              fontSize="108"
              letterSpacing="-2px"
              transform="rotate(-3 500 405)"
            >
              Parque Ipiranga
            </text>
          </g>
        </svg>
      </div>

      {showSubtitle && (
        <div className="flex flex-col text-left pl-1 border-l-2 border-[#C9A84C]">
          <span className="text-[11px] font-black uppercase tracking-wider text-[#016E01]">
            Ensino Fundamental II
          </span>
          <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">
            Tradição & Inovação
          </span>
        </div>
      )}
    </div>
  );
};
