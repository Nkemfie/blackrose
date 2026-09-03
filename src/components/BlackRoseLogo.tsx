import React from 'react';

interface BlackRoseLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'image';
  showText?: boolean;
}

export default function BlackRoseLogo({
  className = '',
  size = 'md',
  variant = 'image',
  showText = true
}: BlackRoseLogoProps) {
  const sizeMap = {
    sm: { img: 'w-8 h-8', text: 'text-base', sub: 'text-[8px]' },
    md: { img: 'w-11 h-11', text: 'text-xl', sub: 'text-[9px]' },
    lg: { img: 'w-16 h-16', text: 'text-2xl', sub: 'text-[11px]' },
    xl: { img: 'w-24 h-24', text: 'text-3xl', sub: 'text-xs' }
  };

  const { img, text, sub } = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Official Blackrose Logo Icon */}
      <div className={`relative ${img} rounded-xl overflow-hidden border border-rose-500/30 shadow-md shadow-rose-900/20 flex-shrink-0 bg-slate-950 flex items-center justify-center`}>
        <img
          src="/images/logo.jpg"
          alt="Blackrose Luxe Official Emblem"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback to inline stylized logo if image is loading or missing
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Fallback Vector Emblem if image fails */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#0B0F19] text-white font-serif font-bold text-base select-none">
          <span className="text-white">B</span>
          <span className="text-rose-500 -ml-0.5">R</span>
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-rose-500 rounded-full animate-ping opacity-75" />
        </div>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className={`font-serif ${text} font-bold tracking-tight text-slate-900 leading-none`}>
              BLACKROSE
            </span>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-sm">
              LUXE
            </span>
          </div>
          <span className={`${sub} uppercase tracking-[0.25em] font-medium text-slate-500 mt-1`}>
            Restaurant & Lounge • Bamenda
          </span>
        </div>
      )}
    </div>
  );
}
