import React, { useState } from 'react';
import { X, Sparkles, Check, Info, ShieldCheck, ZoomIn } from 'lucide-react';
import { SENSE_VISUAL_INFO } from './SenseVisualIcons';
import { soundEffects } from '../utils/soundEffects';

interface SenseIconShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SenseIconShowcaseModal: React.FC<SenseIconShowcaseModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedSenseId, setSelectedSenseId] = useState<string>('mata');

  if (!isOpen) return null;

  const currentSense =
    SENSE_VISUAL_INFO.find((s) => s.id === selectedSenseId) || SENSE_VISUAL_INFO[0];
  const IconComponent = currentSense.komponen;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-xl shadow-inner">
              🎨
            </div>
            <div>
              <span className="text-[11px] font-bold tracking-wider uppercase text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-400/30">
                Desain Visual Resmi
              </span>
              <h3 className="text-base sm:text-lg font-bold font-heading">
                Galeri Desain Ikon Detektif Panca Indera
              </h3>
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

        {/* Modal Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Quick 5 Icon Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {SENSE_VISUAL_INFO.map((item) => {
              const isSelected = item.id === selectedSenseId;
              const TabIcon = item.komponen;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    soundEffects.playInspect();
                    setSelectedSenseId(item.id);
                  }}
                  className={`p-3 rounded-2xl border flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/80 ring-2 ring-indigo-300 shadow-sm scale-102'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <TabIcon size={42} animated={false} />
                  <span className="text-xs font-bold text-slate-800 mt-2">
                    {item.indera}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    ({item.aksi})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Focused Icon Spotlight Banner */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-50 via-indigo-50/20 to-amber-50/30 border border-slate-200 flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 rounded-3xl bg-white shadow-md border border-slate-100 flex items-center justify-center flex-shrink-0 animate-bounce-slow">
              <IconComponent size={96} animated={false} />
            </div>

            <div className="space-y-2 text-center md:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${currentSense.bgBadge}`}>
                  {currentSense.emoji} {currentSense.organ}
                </span>
                <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-semibold">
                  Fungsi Utama: {currentSense.aksi}
                </span>
              </div>

              <h4 className="text-xl font-black text-slate-900 font-heading">
                Ikon {currentSense.indera} — Detektif {currentSense.aksi}
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {currentSense.detailFungsi}
              </p>
            </div>
          </div>

          {/* Design Philosophy Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-1.5">
              <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-600" />
                Filosofi & Konsep Desain:
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                {currentSense.filosofiDesain}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-1.5">
              <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                Peran dalam Memecahkan Kasus:
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                Digunakan untuk mencatat bukti di <b>Hasil Misi 1</b> dan menganalisis peran spesifik organ ini dalam <b>Hasil Misi 2</b>.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 hidden sm:inline">
            Ikon vektor SVG dirancang eksklusif, tajam, dan responsif untuk media pembelajaran siswa.
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Tutup Galeri Ikon
          </button>
        </div>
      </div>
    </div>
  );
};
