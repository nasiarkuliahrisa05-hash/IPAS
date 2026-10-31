import React, { useState } from 'react';
import { X, Check, FlaskConical, Sparkles, Volume2, ArrowRight } from 'lucide-react';
import { MYSTERY_OBJECTS, MysteryObject } from '../data/mysteryObjects';
import { Misi1Data } from '../types/lkpd';
import { soundEffects } from '../utils/soundEffects';
import { MataVisualIcon, TelingaVisualIcon, HidungVisualIcon, LidahVisualIcon, KulitVisualIcon } from './SenseVisualIcons';

interface LabSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyToObject: (obs: Misi1Data) => void;
}

export const LabSimulatorModal: React.FC<LabSimulatorModalProps> = ({
  isOpen,
  onClose,
  onApplyToObject,
}) => {
  const [selectedObjectId, setSelectedObjectId] = useState<string>('jeruk');
  const [activeSenseTab, setActiveSenseTab] = useState<'mata' | 'telinga' | 'hidung' | 'lidah' | 'kulit'>('mata');

  if (!isOpen) return null;

  const currentObj: MysteryObject =
    MYSTERY_OBJECTS.find((o) => o.id === selectedObjectId) || MYSTERY_OBJECTS[0];

  const handleApply = () => {
    soundEffects.playClueFound();
    onApplyToObject({
      mata: currentObj.observasi.mata,
      telinga: currentObj.observasi.telinga,
      hidung: currentObj.observasi.hidung,
      lidah: currentObj.observasi.lidah,
      kulit: currentObj.observasi.kulit,
    });
    onClose();
  };

  const senseTabs = [
    { key: 'mata' as const, label: 'Mata', action: 'Melihat', component: MataVisualIcon, color: 'text-blue-600 border-blue-500 bg-blue-50' },
    { key: 'telinga' as const, label: 'Telinga', action: 'Mendengar', component: TelingaVisualIcon, color: 'text-amber-600 border-amber-500 bg-amber-50' },
    { key: 'hidung' as const, label: 'Hidung', action: 'Mencium', component: HidungVisualIcon, color: 'text-emerald-600 border-emerald-500 bg-emerald-50' },
    { key: 'lidah' as const, label: 'Lidah', action: 'Mengecap', component: LidahVisualIcon, color: 'text-rose-600 border-rose-500 bg-rose-50' },
    { key: 'kulit' as const, label: 'Kulit', action: 'Meraba', component: KulitVisualIcon, color: 'text-purple-600 border-purple-500 bg-purple-50' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-xl">
              🔬
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-heading flex items-center gap-2">
                Laboratorium Objek Uji Panca Indera
              </h3>
              <p className="text-xs text-amber-100">
                Eksplorasi sensorik simulasi untuk memandu pengamatan Misi 1
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {/* Object Selector Pills */}
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-2 flex items-center gap-1.5">
              <FlaskConical className="w-4 h-4 text-amber-600" />
              <span>Pilih Benda Uji Detektif:</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {MYSTERY_OBJECTS.map((obj) => {
                const isSelected = obj.id === selectedObjectId;
                return (
                  <button
                    key={obj.id}
                    onClick={() => {
                      soundEffects.playInspect();
                      setSelectedObjectId(obj.id);
                    }}
                    className={`p-2.5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col items-center text-center ${
                      isSelected
                        ? 'border-amber-500 bg-amber-50/80 ring-2 ring-amber-300 shadow-sm'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-2xl mb-1">{obj.emoji}</span>
                    <span className="text-xs font-bold text-slate-800 line-clamp-1">
                      {obj.nama}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {obj.kategori}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Object Showcase Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50/40 via-orange-50/30 to-amber-100/20 border border-amber-200 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-white border border-amber-200 shadow-sm flex items-center justify-center text-4xl flex-shrink-0 animate-pulse">
              {currentObj.emoji}
            </div>
            <div className="text-center sm:text-left flex-1">
              <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-200/60 text-amber-900 mb-1">
                {currentObj.kategori}
              </div>
              <h4 className="text-lg font-bold text-slate-800 font-heading">
                {currentObj.nama}
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                {currentObj.deskripsi}
              </p>
            </div>
          </div>

          {/* Sense Inspection Tabs */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Uji Sensorik Berdasarkan 5 Indera:</span>
              </label>
              <span className="text-[11px] text-slate-400">
                Pilih tab indera untuk memeriksa
              </span>
            </div>

            <div className="grid grid-cols-5 gap-1.5 border-b border-slate-200 pb-2">
              {senseTabs.map((tab) => {
                const isActive = activeSenseTab === tab.key;
                const TabIcon = tab.component;
                return (
                  <button
                    key={tab.key}
                    onClick={() => {
                      soundEffects.playClick();
                      setActiveSenseTab(tab.key);
                    }}
                    className={`py-2 px-1 rounded-xl text-center font-bold text-xs transition-all cursor-pointer flex flex-col items-center justify-center ${
                      isActive
                        ? `${tab.color} border-2 shadow-xs`
                        : 'text-slate-600 hover:bg-slate-100 border border-transparent'
                    }`}
                  >
                    <TabIcon size={26} animated={false} />
                    <span className="text-[11px] font-bold mt-1">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Sense Result Box */}
            <div className="mt-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 min-h-[90px] flex items-center">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-bold text-slate-800">
                    Hasil Pengamatan {activeSenseTab.toUpperCase()}:
                  </span>
                  <button
                    onClick={() => soundEffects.playClueFound()}
                    className="p-1 text-slate-400 hover:text-amber-600 cursor-pointer"
                    title="Dengarkan efek"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {currentObj.observasi[activeSenseTab]}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            Ingin menggunakan hasil pengamatan <b>{currentObj.nama}</b> untuk LKPD-mu?
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Tutup Lab
            </button>
            <button
              onClick={handleApply}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-md flex items-center justify-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Gunakan untuk Misi 1</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
