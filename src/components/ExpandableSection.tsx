'use client';

import { useState } from 'react';

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function ExpandableSection({ title, children, defaultOpen = false }: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
      >
        <span className="font-semibold text-gray-800">{title}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="px-4 py-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
