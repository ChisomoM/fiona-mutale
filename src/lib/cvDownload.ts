/**
 * Utility functions for handling CV download functionality
 */

export interface CVDownloadOptions {
  trackDownload?: boolean;
  downloadMethod?: 'newTab' | 'direct';
}

/**
 * Downloads the CV with error handling and optional analytics tracking
 */
export const downloadCV = (
  cvPath: string, 
  options: CVDownloadOptions = {}
): void => {
  const { trackDownload = true, downloadMethod = 'newTab' } = options;
  
  try {
    if (downloadMethod === 'direct') {
      // Create a temporary link for direct download
      const link = document.createElement('a');
      link.href = cvPath;
      link.download = 'Chisomo-Mutale-CV.pdf';
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Open in new tab (default behavior)
      window.open(cvPath, '_blank');
    }
    
    // Track download event (for future analytics integration)
    if (trackDownload) {
      console.log('CV downloaded:', {
        timestamp: new Date().toISOString(),
        method: downloadMethod,
        path: cvPath
      });
      
      // Future: Add analytics tracking here
      // analytics.track('cv_downloaded', { method: downloadMethod });
    }
  } catch (error) {
    console.error('Error downloading CV:', error);
    
    // Fallback: try alternative method
    if (downloadMethod === 'direct') {
      console.log('Falling back to new tab method');
      window.open(cvPath, '_blank');
    } else {
      console.log('Falling back to direct download method');
      downloadCV(cvPath, { ...options, downloadMethod: 'direct' });
    }
  }
};

/**
 * Checks if the CV file is accessible
 */
export const checkCVAvailability = async (cvPath: string): Promise<boolean> => {
  try {
    const response = await fetch(cvPath, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error('CV file not accessible:', error);
    return false;
  }
};

/**
 * Gets the CV file size
 */
export const getCVFileSize = async (cvPath: string): Promise<string | null> => {
  try {
    const response = await fetch(cvPath, { method: 'HEAD' });
    const size = response.headers.get('content-length');
    
    if (size) {
      const sizeInMB = (parseInt(size) / (1024 * 1024)).toFixed(2);
      return `${sizeInMB} MB`;
    }
    
    return null;
  } catch (error) {
    console.error('Error getting CV file size:', error);
    return null;
  }
};
