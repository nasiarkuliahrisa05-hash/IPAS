import React, { useState } from 'react';
import { Scroll, ChevronDown, ChevronUp, Sparkles, BookOpen } from 'lucide-react';
import { NARASI_LATAR_BELAKANG } from './NarasiModal';
import { soundEffects } from '../utils/soundEffects';

interface NarasiBannerProps {
  onOpenFullModal: () => void;
}

export const NarasiBanner: React.FC<NarasiBannerProps> = ({ onOpenFullModal }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    soundEffects.playInspect();
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="rounded-3xl bg-amber-500/10 border-2 border-amber-300/80 p-4 sm:p-5 transition-all shadow-xs relative overflow-hidden">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-xl flex-shrink-0 shadow-sm">
            📜
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider bg-amber-200/80 px-2 py-0.5 rounded-full">
                Briefing Kasus
              </span>
              <span className="text-xs text-amber-900/70 font-semibold">
                Prolog Penyelidikan
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-800 font-heading">
              Narasi Latar Belakang: Rahasia Senjata Alami Detektif
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            type="button"
            onClick={onOpenFullModal}
            className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Baca Surat Lengkap</span>
          </button>

          <button
            type="button"
            onClick={toggleExpand}
            className="px-3 py-1.5 rounded-xl bg-white hover:bg-amber-50 border border-amber-300 text-amber-900 font-semibold text-xs flex items-center gap-1 transition-all cursor-pointer"
          >
            <span>{isExpanded ? 'Ringkas' : 'Buka Cerita'}</span>
            {isExpanded ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Collapsible Story Body */}
      {isExpanded ? (
        <div className="mt-4 pt-4 border-t border-amber-200/80 space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed animate-fadeIn">
          <p className="font-medium text-slate-800">
            {NARASI_LATAR_BELAKANG.paragraf1}
          </p>
          <p className="text-amber-950 font-semibold bg-amber-100/70 p-3 rounded-xl border border-amber-200">
            {NARASI_LATAR_BELAKANG.paragraf2}
          </p>
          <p>
            {NARASI_LATAR_BELAKANG.paragraf3}
          </p>

          {/* Quick List Senses */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 pt-1">
            {NARASI_LATAR_BELAKANG.inderaList.map((item, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-white border border-amber-200 text-center flex flex-col items-center shadow-xs"
              >
                <span className="text-xl mb-1">{item.emoji}</span>
                <span className="font-bold text-xs text-slate-800">
                  {item.nama.split(' ')[0]}
                </span>
                <span className="text-[10px] text-slate-500 line-clamp-2 mt-0.5">
                  {item.nama.split(' ')[1]}
                </span>
              </div>
            ))}
          </div>

          <p className="font-medium text-slate-800">
            {NARASI_LATAR_BELAKANG.paragraf4}
          </p>

          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs">
            <span className="font-bold">Misi Utama: </span>
            {NARASI_LATAR_BELAKANG.misiUtama}
          </div>
        </div>
      ) : (
        <p className="mt-2 text-xs text-slate-600 line-clamp-2">
          "Di sebuah kota bernama Kota Panca, terjadi kehebohan besar! Detektif sejati tidak membutuhkan sihir atau kacamata tembus pandang super, melainkan 5 senjata alami di tubuh kita: <b>Mata, Telinga, Hidung, Lidah, dan Kulit!</b>"
        </p>
      )}
    </div>
  );
};
