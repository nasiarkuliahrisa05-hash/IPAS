import React, { useState } from 'react';
import { KasusItem, INDERA_OPTIONS } from '../types/lkpd';
import { soundEffects } from '../utils/soundEffects';
import { CheckCircle2, HelpCircle, FileSearch, Sparkles, ChevronDown, ChevronUp, Edit3 } from 'lucide-react';
import { MataVisualIcon, TelingaVisualIcon, HidungVisualIcon, LidahVisualIcon, KulitVisualIcon } from './SenseVisualIcons';

interface Misi2Props {
  cases: KasusItem[];
  onUpdateCase: (index: number, field: keyof KasusItem, value: string) => void;
}

export const Misi2Section: React.FC<Misi2Props> = ({ cases, onUpdateCase }) => {
  const [openClueId, setOpenClueId] = useState<number | null>(null);
  const [editingScenarioId, setEditingScenarioId] = useState<number | null>(null);

  const toggleClue = (id: number) => {
    soundEffects.playInspect();
    setOpenClueId((prev) => (prev === id ? null : id));
  };

  const completedCount = cases.filter(
    (c) => c.indra.trim().length > 0 && c.penjelasan.trim().length > 0
  ).length;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-amber-200/80 p-5 sm:p-6 transition-all hover:shadow-md">
      {/* Header Misi 2 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-amber-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
            2
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide">
                Misi Investigasi 2
              </span>
              <span className="text-[11px] bg-indigo-100 text-indigo-800 font-semibold px-2 py-0.5 rounded-full">
                {completedCount}/{cases.length} Kasus Terpecahkan
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-800 font-heading">
              HASIL MISI 2: Memecahkan Kasus Detektif Indera
            </h2>
            <p className="text-xs text-slate-500">
              Analisis setiap kasus misteri sains, tentukan indera yang bekerja, dan berikan penjelasan ilmiah
            </p>
          </div>
        </div>

        <div className="text-xs text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl self-start sm:self-auto flex items-center gap-1.5">
          <FileSearch className="w-4 h-4 text-indigo-600" />
          <span>4 Kasus Investigasi Resmi</span>
        </div>
      </div>

      {/* Case Files List */}
      <div className="space-y-6">
        {cases.map((kasus, idx) => {
          const isCaseSolved =
            kasus.indra.trim().length > 0 && kasus.penjelasan.trim().length > 0;
          const isTargetMatch =
            kasus.kunciIndra &&
            kasus.indra.toLowerCase().includes(kasus.kunciIndra.toLowerCase());

          return (
            <div
              key={kasus.id || idx}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isCaseSolved
                  ? 'border-indigo-200 bg-gradient-to-b from-indigo-50/20 to-white shadow-sm'
                  : 'border-slate-200 bg-slate-50/30'
              }`}
            >
              {/* Case Bar */}
              <div className="px-5 py-3.5 bg-gradient-to-r from-slate-800 to-slate-900 text-white flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-amber-400 text-slate-900 font-black text-xs flex items-center justify-center shadow-xs">
                    #{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold tracking-wide font-heading text-amber-300">
                      KASUS {idx + 1}: {kasus.judul || `Kasus ${idx + 1}`}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {isCaseSolved && isTargetMatch ? (
                    <span className="text-[11px] bg-emerald-500/90 text-white font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Terpecahkan Tepat!
                    </span>
                  ) : isCaseSolved ? (
                    <span className="text-[11px] bg-blue-500/90 text-white font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Terisi
                    </span>
                  ) : (
                    <span className="text-[11px] bg-white/15 text-slate-300 px-2.5 py-0.5 rounded-full">
                      Menunggu Penyelidikan
                    </span>
                  )}
                </div>
              </div>

              {/* Case Body */}
              <div className="p-5 space-y-4">
                {/* Scenario Description */}
                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 text-slate-800">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5 uppercase tracking-wide">
                      <FileSearch className="w-3.5 h-3.5 text-amber-600" />
                      Skenario Kasus Detektif:
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setEditingScenarioId((prev) =>
                          prev === kasus.id ? null : kasus.id
                        )
                      }
                      className="text-[11px] text-amber-700 hover:text-amber-900 flex items-center gap-1 font-medium cursor-pointer"
                    >
                      <Edit3 className="w-3 h-3" />
                      {editingScenarioId === kasus.id ? 'Selesai Edit' : 'Ubah Kasus'}
                    </button>
                  </div>

                  {editingScenarioId === kasus.id ? (
                    <div className="space-y-2 pt-1">
                      <input
                        type="text"
                        value={kasus.judul}
                        onChange={(e) =>
                          onUpdateCase(idx, 'judul', e.target.value)
                        }
                        placeholder="Judul Kasus..."
                        className="w-full text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-amber-300 bg-white"
                      />
                      <textarea
                        rows={3}
                        value={kasus.skenario}
                        onChange={(e) =>
                          onUpdateCase(idx, 'skenario', e.target.value)
                        }
                        placeholder="Deskripsi cerita kasus sains..."
                        className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-amber-300 bg-white"
                      />
                    </div>
                  ) : (
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      "{kasus.skenario}"
                    </p>
                  )}
                </div>

                {/* Clue Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => toggleClue(kasus.id)}
                    className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer py-0.5"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Petunjuk Rahasia Detektif (Clue)</span>
                    {openClueId === kasus.id ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>

                  {openClueId === kasus.id && (
                    <div className="mt-2 p-3 rounded-xl bg-indigo-50 border border-indigo-200/80 text-xs text-indigo-900 animate-fadeIn">
                      <div className="font-bold flex items-center gap-1 text-indigo-800 mb-0.5">
                        <Sparkles className="w-3.5 h-3.5" /> Petunjuk Investigasi:
                      </div>
                      <p className="text-slate-700">{kasus.petunjuk}</p>
                    </div>
                  )}
                </div>

                {/* Question: Indra Yang Bekerja */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <span className="text-amber-500 font-black">▶</span>
                      <span>Indra yang digunakan dalam kasus ini:</span>
                    </label>
                    <span className="text-[11px] text-slate-400">
                      Klik pilihan atau ketik di kolom
                    </span>
                  </div>

                  {/* Quick Select Buttons */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {INDERA_OPTIONS.map((opt) => {
                      const isSelected = kasus.indra
                        .toLowerCase()
                        .includes(opt.name.toLowerCase());

                      const renderMiniIcon = () => {
                        switch (opt.name) {
                          case 'Mata': return <MataVisualIcon size={24} animated={false} />;
                          case 'Telinga': return <TelingaVisualIcon size={24} animated={false} />;
                          case 'Hidung': return <HidungVisualIcon size={24} animated={false} />;
                          case 'Lidah': return <LidahVisualIcon size={24} animated={false} />;
                          case 'Kulit': return <KulitVisualIcon size={24} animated={false} />;
                          default: return <span>{opt.label.split(' ')[0]}</span>;
                        }
                      };

                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            soundEffects.playClick();
                            onUpdateCase(
                              idx,
                              'indra',
                              `${opt.label}`
                            );
                          }}
                          className={`px-2.5 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer border ${
                            isSelected
                              ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm scale-102 ring-2 ring-indigo-200'
                              : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                          }`}
                        >
                          <span className="flex-shrink-0">{renderMiniIcon()}</span>
                          <span className="truncate">{opt.name}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Text Input for Indra (per user template exact matching) */}
                  <div className="pt-1">
                    <input
                      type="text"
                      value={kasus.indra}
                      onChange={(e) =>
                        onUpdateCase(idx, 'indra', e.target.value)
                      }
                      placeholder="Contoh: Hidung (Mencium) / Telinga (Mendengar)"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all bg-white"
                    />
                  </div>
                </div>

                {/* Question: Penjelasan */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <span className="text-amber-500 font-black">▶</span>
                    <span>Penjelasan Detektif:</span>
                  </label>
                  <textarea
                    rows={2}
                    value={kasus.penjelasan}
                    onChange={(e) =>
                      onUpdateCase(idx, 'penjelasan', e.target.value)
                    }
                    placeholder="Tuliskan analisis detektifmu mengapa indera tersebut yang membongkar kasus ini..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all bg-white resize-y"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
