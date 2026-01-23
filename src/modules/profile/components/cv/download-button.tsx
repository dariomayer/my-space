// src/modules/profile/components/cv/download-button.tsx
import { useTranslation } from 'react-i18next';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CvDocument } from './cv-document';
import { useCvData } from './use-cv-data';
import { Download } from 'lucide-react';

export function CvDownloadButton() {
  const { i18n } = useTranslation();
  const cvData = useCvData();
  
  return (
    <PDFDownloadLink
      document={<CvDocument data={cvData} language={i18n.language} />}
      fileName={`CV_Dario_Pratola_${i18n.language.toUpperCase()}.pdf`}
      style={{
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      {({ loading }) => (
        <div
          className={`flex items-center gap-2 text-xs font-medium transition-colors ${
            loading
              ? 'text-muted-foreground opacity-50 cursor-not-allowed pointer-events-none'
              : 'text-muted-foreground hover:text-foreground cursor-pointer'
          }`}
          aria-disabled={loading}
        >
          <Download className="h-4 w-4" />
          <span>Download Resume</span>
        </div>
      )}
    </PDFDownloadLink>
  );
}
