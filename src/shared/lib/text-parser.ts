// src/shared/lib/text-parser.ts
import React from 'react';

/**
 * Rimuove le emoji dal testo
 */
export function removeEmojis(text: string): string {
  // Rimuove emoji e altri caratteri non standard che possono causare problemi in PDF
  return text.replace(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '');
}

/**
 * Converte il testo con markdown (**grassetto**) in componenti React per il web
 */
export function parseMarkdownToReact(text: string): React.ReactNode {
  if (!text) return '';
  
  // NON rimuovere le emoji per il web - le vogliamo mantenere
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
  
  // Rimuovi emoji prima del parsing
  const cleanText = removeEmojis(text);
  
  const parts = cleanText.split(/(\*\*[^*]+\*\*)/g);
  
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
