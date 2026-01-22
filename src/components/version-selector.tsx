import React, { useState, useRef, useEffect } from 'react';

export interface VersionInfo {
  version: string;
  label?: string;
  isLatest: boolean;
}

interface VersionSelectorProps {
  versions: VersionInfo[];
  currentVersion: string;
  onVersionChange: (version: string) => void;
  className?: string;
}

export const VersionSelector: React.FC<VersionSelectorProps> = ({
  versions,
  currentVersion,
  onVersionChange,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const currentVersionInfo = versions.find(v => v.version === currentVersion);
  const hasMultipleVersions = versions.length > 1;

  if (!hasMultipleVersions) {
    // Show static badge if only one version
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <span className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-md border border-gray-200">
          v{currentVersion}
        </span>
        {currentVersionInfo?.isLatest && (
          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded uppercase">
            Latest
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-1.5 bg-white text-gray-700 text-sm font-medium rounded-md border-2 border-gray-900 hover:-translate-y-0.5 transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>v{currentVersion}</span>
        {currentVersionInfo?.isLatest && (
          <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded uppercase">
            Latest
          </span>
        )}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-56 bg-white rounded-lg border-2 border-gray-900 shadow-lg overflow-hidden">
          <div className="py-1" role="listbox">
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-200">
              Available Versions
            </div>
            {versions.map((version) => {
              const isSelected = version.version === currentVersion;
              return (
                <button
                  key={version.version}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onVersionChange(version.version);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 flex items-center justify-between ${
                    isSelected ? 'bg-primary/5' : ''
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`font-medium ${isSelected ? 'text-primary' : 'text-gray-900'}`}>
                      v{version.version}
                    </span>
                    {version.isLatest && (
                      <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded uppercase">
                        Latest
                      </span>
                    )}
                    {version.label && version.label !== 'latest' && (
                      <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                        {version.label}
                      </span>
                    )}
                  </div>
                  {isSelected && (
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

interface OlderVersionBannerProps {
  currentVersion: string;
  latestVersion: string;
  onViewLatest: () => void;
}

export const OlderVersionBanner: React.FC<OlderVersionBannerProps> = ({
  currentVersion,
  latestVersion,
  onViewLatest,
}) => {
  return (
    <div className="bg-amber-50 border-2 border-amber-400 rounded-lg p-4 mb-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <svg
          className="w-5 h-5 text-amber-600 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <div>
          <p className="text-amber-800 font-medium">
            You're viewing an older version (v{currentVersion})
          </p>
          <p className="text-amber-700 text-sm">
            The latest version is v{latestVersion}
          </p>
        </div>
      </div>
      <button
        onClick={onViewLatest}
        className="px-4 py-2 bg-amber-100 text-amber-800 text-sm font-medium rounded-md hover:bg-amber-200 transition-colors border border-amber-300"
      >
        View Latest
      </button>
    </div>
  );
};

export default VersionSelector;
