import React, { useState } from 'react';
import { X, Copy, Check, Download, FileText } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

interface CopyFormatModalProps {
  isOpen: boolean;
  onClose: () => void;
  formattedText: string;
}

export const CopyFormatModal: React.FC<CopyFormatModalProps> = ({
  isOpen,
  onClose,
  formattedText,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedText);
      soundEffects.playFanfare();
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = formattedText;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownloadTxt = () => {
    soundEffects.playClick();
    const blob = new Blob([formattedText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'LKPD-Detektif-Indera.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold font-heading">
                Salin Teks Format LKPD
              </h3>
              <p className="text-xs text-slate-400">
                Format teks terstruktur siap kirim ke WhatsApp, Google Classroom, atau Word
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Box */}
        <div className="p-5 overflow-y-auto">
          <div className="relative">
            <pre className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm font-mono text-slate-800 whitespace-pre-wrap leading-relaxed max-h-[50vh] overflow-y-auto selection:bg-amber-200">
              {formattedText}
            </pre>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleDownloadTxt}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors cursor-pointer w-full sm:w-auto justify-center"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Unduh Berkas (.txt)</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Tutup
            </button>
            <button
              onClick={handleCopy}
              className={`flex-1 sm:flex-none px-5 py-2 rounded-xl text-xs font-bold shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-amber-500 hover:bg-amber-600 text-white active:scale-95'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Berhasil Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Salin Semua Teks</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
