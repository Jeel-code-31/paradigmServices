"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export type PdfViewerProps = {
  file: string;
  currentPage: number;
  numPages: number;
  onDocumentLoadSuccess: ({ numPages }: { numPages: number }) => void;
};

type PdfComponents = {
  Document: any;
  Page: any;
};

export default function PdfViewer({ file, currentPage, numPages, onDocumentLoadSuccess }: PdfViewerProps) {
  const [pageWidth, setPageWidth] = useState(350);
  const [components, setComponents] = useState<PdfComponents | null>(null);

  useEffect(() => {
    const init = async () => {
      const mod = await import("react-pdf");
      mod.pdfjs.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
      setComponents({ Document: mod.Document, Page: mod.Page });
    };

    init();

    const updateWidth = () => {
      setPageWidth(window.innerWidth > 1024 ? 480 : 350);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  if (!components) {
    return (
      <div className="flex flex-col items-center text-white gap-4">
        <Loader2 className="animate-spin" size={48} />
        <p className="font-bold tracking-widest">Loading PDF viewer...</p>
      </div>
    );
  }

  const { Document, Page } = components;

  return (
    <Document
      file={file}
      onLoadSuccess={onDocumentLoadSuccess}
      loading={
        <div className="flex flex-col items-center text-white gap-4">
          <Loader2 className="animate-spin" size={48} />
          <p className="font-bold tracking-widest">FLIPPING PAGES...</p>
        </div>
      }
    >
      <div className="flex flex-col md:flex-row gap-2 bg-[#222] p-3 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
        <div className="bg-white rounded-l-lg overflow-hidden border-r border-gray-100">
          <Page
            pageNumber={currentPage}
            width={pageWidth}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </div>

        <div className="bg-white rounded-r-lg overflow-hidden hidden md:block">
          {currentPage + 1 <= numPages ? (
            <Page
              pageNumber={currentPage + 1}
              width={pageWidth}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ) : (
            <div className="w-[480px] h-full bg-gray-50 flex items-center justify-center text-gray-300 font-black">
              END OF MANUAL
            </div>
          )}
        </div>
      </div>
    </Document>
  );
}
