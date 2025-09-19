import React, { useState, useEffect } from 'react';
import { Button } from '../ui';
import { downloadCV, checkCVAvailability, getCVFileSize } from '../../lib/cvDownload';

export interface CVDownloadButtonProps {
  cvPath: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showFileSize?: boolean;
  downloadMethod?: 'newTab' | 'direct';
  children?: React.ReactNode;
}

export const CVDownloadButton: React.FC<CVDownloadButtonProps> = ({
  cvPath,
  variant = 'outline',
  size = 'md',
  className = '',
  showFileSize = false,
  downloadMethod = 'newTab',
  children
}) => {
  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [fileSize, setFileSize] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkAvailability = async () => {
      const available = await checkCVAvailability(cvPath);
      setIsAvailable(available);
      
      if (available && showFileSize) {
        const size = await getCVFileSize(cvPath);
        setFileSize(size);
      }
    };
    
    checkAvailability();
  }, [cvPath, showFileSize]);

  const handleDownload = async () => {
    setIsLoading(true);
    
    try {
      await downloadCV(cvPath, { downloadMethod });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAvailable) {
    return (
      <Button
        variant="ghost"
        size={size}
        disabled
        className={`opacity-50 cursor-not-allowed ${className}`}
      >
        CV Unavailable
      </Button>
    );
  }

  const defaultContent = (
    <>
      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
        />
      </svg>
      {isLoading ? 'Downloading...' : 'Download CV'}
      {showFileSize && fileSize && (
        <span className="ml-1 text-xs opacity-75">({fileSize})</span>
      )}
    </>
  );

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleDownload}
      disabled={isLoading}
      className={`transition-all duration-300 hover:scale-105 ${className}`}
    >
      {children || defaultContent}
    </Button>
  );
};
