import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface ImageWarningProps {
  onClose: () => void;
}

const ImageWarning: React.FC<ImageWarningProps> = ({ onClose }) => {
  return (
    <div className="glassmorphic p-4 mb-4 rounded-lg flex items-start gap-3">
      <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
          Image Support Notice
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Make sure you're using a model that supports image input (like llava or bakllava). 
          Other models may not be able to process images correctly.
        </p>
      </div>
      <button
        onClick={onClose}
        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
      >
        <X className="w-4 h-4 text-gray-500" />
      </button>
    </div>
  );
};

export default ImageWarning;