// src/shared/lib/text-parser.ts
import React from 'react';

/**
 * Converte il testo con markdown (**grassetto**) in componenti React per il web
 */
export function parseMarkdownToReact(text: string): React.ReactNode {
  if (!text) return '';
  
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const boldText = part.slice(2, -2);
      return React.createElement('strong', { key: index }, boldText);
    }
    return part;
  });
}

/**
 * Converte il testo con markdown (**grassetto**) in array di oggetti per React-PDF
 */
export function parseMarkdownToPdf(text: string): Array<{ text: string; bold?: boolean }> {
  if (!text) return [];
  
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  
  return parts.map((part) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return {
        text: part.slice(2, -2),
        bold: true
      };
    }
    return {
      text: part,
      bold: false
    };
  });
}
