import React from 'react';
import { Sparkles, Printer, Copy, RotateCcw, BookOpen, Volume2, VolumeX, ShieldCheck } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

interface HeaderProps {
  progressPercentage: number;
  completedTasksCount: number;
  totalTasksCount: number;
  badgeTitle: string;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onLoadDemo: () => void;
  onReset: () => void;
  onOpenCopyModal: () => void;
  onPrint: () => void;
  onOpenLab: () => void;
  onOpenNarasi: () => void;
  onOpenIconsModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  progressPercentage,
  completedTasksCount,
  totalTasksCount,
  badgeTitle,
  soundEnabled,
  onToggleSound,
  onLoadDemo,
  onReset,
  onOpenCopyModal,
  onPrint,
  onOpenLab,
  onOpenNarasi,
  onOpenIconsModal,
}) => {
  return (
    <header className="no-print bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white shadow-lg sticky top-0 z-30 border-b border-amber-500/40">
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          
          {/* Logo & Main Title */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-3xl shadow-inner shadow-black/10 flex-shrink-0 animate-bounce-slow">
              🕵️‍♂️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-[11px] font-bold tracking-wider uppercase bg-amber-900/60 rounded-full text-amber-200 border border-amber-400/40">
                  Media Sains Interaktif
                </span>
                <span className="text-xs bg-emerald-500/80 text-white font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Kurikulum Merdeka
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight drop-shadow-sm font-heading flex items-center gap-2">
                LKPD DIGITAL DETEKTIF INDERA
              </h1>
              <p className="text-xs text-amber-100 hidden sm:block">
                Investigasi 5 Panca Indera & Pemecahan Kasus Sains Cilik
              </p>
            </div>
          </div>

          {/* Quick Toolbar */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                soundEffects.playInspect();
                onOpenNarasi();
              }}
              className="px-3 py-1.5 rounded-xl bg-amber-200 hover:bg-amber-100 text-amber-950 font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-md transition-transform active:scale-95 cursor-pointer"
              title="Baca Cerita Latar Belakang & Misi Detektif"
            >
              <span>📜</span>
              <span>Cerita</span>
            </button>

            <button
              onClick={() => {
                soundEffects.playInspect();
                onOpenIconsModal();
              }}
              className="px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 backdrop-blur-sm border border-white/30 shadow-md transition-transform active:scale-95 cursor-pointer"
              title="Buka Galeri Desain Ikon 5 Panca Indera"
            >
              <span>🎨</span>
              <span>Ikon Indera</span>
            </button>

            <button
              onClick={() => {
                soundEffects.playInspect();
                onOpenLab();
              }}
              className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-md transition-transform active:scale-95 cursor-pointer"
              title="Buka Laboratorium Pengamatan Interaktif"
            >
              <Sparkles className="w-4 h-4 text-amber-800" />
              <span>Lab Objek Indera</span>
            </button>

            <button
              onClick={() => {
                soundEffects.playClick();
                onOpenCopyModal();
              }}
              className="px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 backdrop-blur-sm border border-white/25 transition-transform active:scale-95 cursor-pointer"
              title="Salin Teks Format LKPD"
            >
              <Copy className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Salin Format</span>
            </button>

            <button
              onClick={() => {
                soundEffects.playClick();
                onPrint();
              }}
              className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 shadow transition-transform active:scale-95 cursor-pointer"
              title="Cetak atau Unduh PDF LKPD"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Cetak / PDF</span>
            </button>

            <button
              onClick={() => {
                soundEffects.playClick();
                onLoadDemo();
              }}
              className="px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-amber-100 text-xs flex items-center gap-1 border border-white/15 cursor-pointer"
              title="Muat Contoh LKPD Tim Selesai"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Contoh</span>
            </button>

            <button
              onClick={() => {
                soundEffects.playClick();
                onReset();
              }}
              className="px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-rose-500/80 text-amber-100 hover:text-white text-xs flex items-center gap-1 border border-white/15 cursor-pointer"
              title="Kosongkan LKPD"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onToggleSound}
              className={`p-1.5 rounded-xl border text-xs cursor-pointer transition-colors ${
                soundEnabled
                  ? 'bg-amber-400 text-amber-950 border-amber-300'
                  : 'bg-white/10 text-amber-200 border-white/20'
              }`}
              title={soundEnabled ? 'Suara Aktif (Klik untuk mute)' : 'Suara Dimatikan (Klik untuk aktifkan)'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Progress & Badge Indicator */}
        <div className="mt-3 pt-2.5 border-t border-white/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-amber-100">Status Investigasi:</span>
            <div className="w-28 sm:w-36 bg-black/25 rounded-full h-2.5 overflow-hidden p-0.5 border border-white/20">
              <div
                className="bg-gradient-to-r from-amber-300 to-emerald-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="font-bold text-amber-200">
              {completedTasksCount}/{totalTasksCount} ({progressPercentage}%)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-amber-200/80">Pangkat Detektif:</span>
            <span className="bg-amber-950/70 text-amber-300 font-bold px-2.5 py-0.5 rounded-lg border border-amber-400/40 shadow-sm flex items-center gap-1">
              ⭐ {badgeTitle}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
