/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { LkpdData, DEFAULT_CASES, DEMO_LKPD, KasusItem, Misi1Data, KesimpulanData } from './types/lkpd';
import { formatLkpdToPlainText } from './utils/formatters';
import { soundEffects } from './utils/soundEffects';
import { Header } from './components/Header';
import { IdentitasSection } from './components/IdentitasSection';
import { Misi1Section } from './components/Misi1Section';
import { Misi2Section } from './components/Misi2Section';
import { KesimpulanSection } from './components/KesimpulanSection';
import { LabSimulatorModal } from './components/LabSimulatorModal';
import { CopyFormatModal } from './components/CopyFormatModal';
import { PrintLkpdView } from './components/PrintLkpdView';
import { NarasiModal } from './components/NarasiModal';
import { NarasiBanner } from './components/NarasiBanner';
import { SenseIconShowcaseModal } from './components/SenseIconShowcaseModal';
import { Sparkles, CheckCircle2, Copy, Printer, Award, Compass, Search, BookOpen, AlertCircle, Scroll } from 'lucide-react';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'lkpd_detektif_indera_v1';

const INITIAL_EMPTY_DATA: LkpdData = {
  kelompok: '',
  anggota: '',
  kelas: '',
  tanggal: '',
  misi1: {
    mata: '',
    telinga: '',
    hidung: '',
    lidah: '',
    kulit: '',
  },
  misi2: JSON.parse(JSON.stringify(DEFAULT_CASES)),
  kesimpulan: {
    poin1: '',
    poin2: '',
    poin3: '',
  },
  perasaan: 'Senang sekali! 😍',
};

export default function App() {
  const [data, setData] = useState<LkpdData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return INITIAL_EMPTY_DATA;
  });

  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isLabOpen, setIsLabOpen] = useState<boolean>(false);
  const [isCopyModalOpen, setIsCopyModalOpen] = useState<boolean>(false);
  const [isNarasiOpen, setIsNarasiOpen] = useState<boolean>(false);
  const [isIconsModalOpen, setIsIconsModalOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'all' | 'identitas' | 'misi1' | 'misi2' | 'kesimpulan'>('all');
  const [showToast, setShowToast] = useState<string | null>(null);

  // Auto-save to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // ignore
    }
  }, [data]);

  const triggerToast = (msg: string) => {
    setShowToast(msg);
    setTimeout(() => {
      setShowToast(null);
    }, 2800);
  };

  const handleToggleSound = () => {
    const nextState = soundEffects.toggleSound();
    setSoundEnabled(nextState);
  };

  const handleReset = () => {
    if (window.confirm('Apakah kamu yakin ingin mengosongkan lembar kerja ini untuk investigasi baru?')) {
      setData(INITIAL_EMPTY_DATA);
      triggerToast('Lembar kerja berhasil dikosongkan!');
    }
  };

  const handleLoadDemo = () => {
    setData(JSON.parse(JSON.stringify(DEMO_LKPD)));
    soundEffects.playFanfare();
    confetti({ particleCount: 50, spread: 60 });
    triggerToast('Contoh LKPD Tim Detektif Elang berhasil dimuat!');
  };

  const handleIdentitasChange = (field: string, value: string) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleMisi1Change = (field: keyof Misi1Data, value: string) => {
    setData((prev) => ({
      ...prev,
      misi1: {
        ...prev.misi1,
        [field]: value,
      },
    }));
  };

  const handleApplyLabObservation = (obs: Misi1Data) => {
    setData((prev) => ({
      ...prev,
      misi1: { ...obs },
    }));
    triggerToast('Hasil pengamatan laboratorium diterapkan ke Misi 1!');
  };

  const handleUpdateCase = (index: number, field: keyof KasusItem, value: string) => {
    setData((prev) => {
      const nextCases = [...prev.misi2];
      nextCases[index] = {
        ...nextCases[index],
        [field]: value,
      };
      return {
        ...prev,
        misi2: nextCases,
      };
    });
  };

  const handleUpdateKesimpulan = (field: keyof KesimpulanData, value: string) => {
    setData((prev) => ({
      ...prev,
      kesimpulan: {
        ...prev.kesimpulan,
        [field]: value,
      },
    }));
  };

  const handleUpdatePerasaan = (val: string) => {
    setData((prev) => ({
      ...prev,
      perasaan: val,
    }));
  };

  // Progress metrics calculation
  const { completedTasksCount, totalTasksCount, progressPercentage, badgeTitle } = useMemo(() => {
    let completed = 0;
    const total = 1 + 5 + 4 + 3; // Identitas(1), Misi 1(5), Misi 2(4), Kesimpulan(3)

    // Identitas
    if (data.kelompok.trim() && data.anggota.trim() && data.kelas.trim()) {
      completed += 1;
    }

    // Misi 1
    if (data.misi1.mata.trim()) completed += 1;
    if (data.misi1.telinga.trim()) completed += 1;
    if (data.misi1.hidung.trim()) completed += 1;
    if (data.misi1.lidah.trim()) completed += 1;
    if (data.misi1.kulit.trim()) completed += 1;

    // Misi 2
    data.misi2.forEach((c) => {
      if (c.indra.trim() && c.penjelasan.trim()) {
        completed += 1;
      }
    });

    // Kesimpulan
    if (data.kesimpulan.poin1.trim()) completed += 1;
    if (data.kesimpulan.poin2.trim()) completed += 1;
    if (data.kesimpulan.poin3.trim()) completed += 1;

    const pct = Math.round((completed / total) * 100);

    let title = 'Calon Detektif';
    if (pct >= 100) title = 'Master Detektif Panca Indera';
    else if (pct >= 70) title = 'Detektif Penyelidik Handal';
    else if (pct >= 40) title = 'Penyelidik Cilik';
    else if (pct >= 15) title = 'Detektif Magang';

    return {
      completedTasksCount: completed,
      totalTasksCount: total,
      progressPercentage: pct,
      badgeTitle: title,
    };
  }, [data]);

  const formattedPlainText = useMemo(() => {
    return formatLkpdToPlainText(data);
  }, [data]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 via-slate-50 to-orange-50/30 text-slate-900 flex flex-col font-sans">
      {/* Printable Sheet (Active during window.print) */}
      <PrintLkpdView data={data} />

      {/* Main Interactive App (Hidden during print) */}
      <div className="no-print flex-1 flex flex-col">
        {/* Interactive Header */}
        <Header
          progressPercentage={progressPercentage}
          completedTasksCount={completedTasksCount}
          totalTasksCount={totalTasksCount}
          badgeTitle={badgeTitle}
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
          onLoadDemo={handleLoadDemo}
          onReset={handleReset}
          onOpenCopyModal={() => setIsCopyModalOpen(true)}
          onPrint={handlePrint}
          onOpenLab={() => setIsLabOpen(true)}
          onOpenNarasi={() => setIsNarasiOpen(true)}
          onOpenIconsModal={() => setIsIconsModalOpen(true)}
        />

        {/* Quick Section Tabs */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-amber-200/60 sticky top-[72px] sm:top-[68px] z-20 shadow-xs">
          <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between overflow-x-auto gap-2 no-scrollbar">
            <div className="flex items-center gap-1.5 flex-nowrap">
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveTab('all');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'all'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-amber-50'
                }`}
              >
                Semua Lembar Kerja
              </button>
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveTab('identitas');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'identitas'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-amber-50'
                }`}
              >
                📋 Identitas Tim
              </button>
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveTab('misi1');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'misi1'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-amber-50'
                }`}
              >
                👁️ Misi 1: Panca Indera
              </button>
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveTab('misi2');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'misi2'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-amber-50'
                }`}
              >
                🔍 Misi 2: 4 Kasus
              </button>
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveTab('kesimpulan');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'kesimpulan'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-amber-50'
                }`}
              >
                🎯 Kesimpulan & Refleksi
              </button>
            </div>

            <div className="flex items-center gap-1.5 pl-2 flex-shrink-0">
              <button
                onClick={() => setIsCopyModalOpen(true)}
                className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 flex items-center gap-1 transition-colors cursor-pointer"
                title="Salin Teks Format Template"
              >
                <Copy className="w-3.5 h-3.5 text-amber-700" />
                <span className="hidden sm:inline">Salin Format</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Content Area */}
        <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8 space-y-6 sm:space-y-8 flex-1 w-full">
          {/* Welcome Banner Card */}
          <div className="rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 p-5 sm:p-7 text-white shadow-md relative overflow-hidden">
            <div className="absolute right-0 top-0 translate-x-6 -translate-y-6 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-100 text-xs font-bold mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                  Misi Investigasi Sains Sekolah Dasar & Menengah
                </div>
                <h2 className="text-xl sm:text-2xl font-black font-heading leading-tight">
                  Selamat Datang di Biro Detektif Panca Indera! 🕵️‍♀️🔍
                </h2>
                <p className="text-xs sm:text-sm text-amber-100 mt-1.5 max-w-2xl leading-relaxed">
                  Lakukan penyelidikan sains terhadap 5 panca indera manusia: <b>Mata</b>, <b>Telinga</b>, <b>Hidung</b>, <b>Lidah</b>, dan <b>Kulit</b>. Selesaikan Misi 1 dan Misi 2 untuk memecahkan seluruh misteri kasus!
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
                <button
                  onClick={() => setIsNarasiOpen(true)}
                  className="px-4 py-2.5 rounded-2xl bg-amber-950/70 hover:bg-amber-950 text-amber-200 font-bold text-xs sm:text-sm border border-amber-300/40 shadow-sm active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>📜</span>
                  <span>Baca Cerita Kasus</span>
                </button>
                <button
                  onClick={() => setIsLabOpen(true)}
                  className="px-4 py-2.5 rounded-2xl bg-white text-amber-900 font-bold text-xs sm:text-sm shadow-md hover:bg-amber-50 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>🔬</span>
                  <span>Buka Lab Objek Uji</span>
                </button>
                <button
                  onClick={handleLoadDemo}
                  className="px-4 py-2.5 rounded-2xl bg-amber-900/40 hover:bg-amber-900/60 text-white font-semibold text-xs sm:text-sm border border-white/25 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-amber-300" />
                  <span>Lihat Contoh Lengkap</span>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Background Story Card */}
          <NarasiBanner onOpenFullModal={() => setIsNarasiOpen(true)} />

          {/* Section: Identitas */}
          {(activeTab === 'all' || activeTab === 'identitas') && (
            <IdentitasSection
              kelompok={data.kelompok}
              anggota={data.anggota}
              kelas={data.kelas}
              tanggal={data.tanggal}
              onChange={handleIdentitasChange}
            />
          )}

          {/* Section: Misi 1 */}
          {(activeTab === 'all' || activeTab === 'misi1') && (
            <Misi1Section
              data={data.misi1}
              onChange={handleMisi1Change}
              onOpenLab={() => setIsLabOpen(true)}
            />
          )}

          {/* Section: Misi 2 */}
          {(activeTab === 'all' || activeTab === 'misi2') && (
            <Misi2Section
              cases={data.misi2}
              onUpdateCase={handleUpdateCase}
            />
          )}

          {/* Section: Kesimpulan */}
          {(activeTab === 'all' || activeTab === 'kesimpulan') && (
            <KesimpulanSection
              kesimpulan={data.kesimpulan}
              perasaan={data.perasaan}
              onUpdateKesimpulan={handleUpdateKesimpulan}
              onUpdatePerasaan={handleUpdatePerasaan}
              isAllCompleted={progressPercentage >= 100}
            />
          )}

          {/* Bottom Action Card & Direct Output Preview */}
          <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xl">
                  📋
                </div>
                <div>
                  <h3 className="text-base font-bold font-heading text-amber-300">
                    Keluaran Format Teks LKPD Siap Pakai
                  </h3>
                  <p className="text-xs text-slate-400">
                    Sesuai persis dengan template LKPD DIGITAL DETEKTIF INDERA yang kamu minta
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsCopyModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer shadow-md"
                >
                  <Copy className="w-4 h-4" />
                  <span>Salin Format Template</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer shadow-md"
                >
                  <Printer className="w-4 h-4" />
                  <span>Cetak / Simpan PDF</span>
                </button>
              </div>
            </div>

            {/* Quick Preview Box */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 text-xs font-mono text-slate-300 whitespace-pre-wrap max-h-56 overflow-y-auto leading-relaxed">
              {formattedPlainText}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500 mt-auto">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-base">🕵️‍♂️</span>
              <span className="font-semibold text-slate-700">
                LKPD Digital Detektif Indera
              </span>
              <span>• Pembelajaran Sains Tematik & Panca Indera</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-amber-600 underline cursor-pointer"
              >
                Kembali ke Atas ↑
              </button>
            </div>
          </div>
        </footer>
      </div>

      {/* Modals */}
      <NarasiModal
        isOpen={isNarasiOpen}
        onClose={() => setIsNarasiOpen(false)}
        onStartMission={() => {
          setIsNarasiOpen(false);
          setActiveTab('identitas');
        }}
      />

      <SenseIconShowcaseModal
        isOpen={isIconsModalOpen}
        onClose={() => setIsIconsModalOpen(false)}
      />

      <LabSimulatorModal
        isOpen={isLabOpen}
        onClose={() => setIsLabOpen(false)}
        onApplyToObject={handleApplyLabObservation}
      />

      <CopyFormatModal
        isOpen={isCopyModalOpen}
        onClose={() => setIsCopyModalOpen(false)}
        formattedText={formattedPlainText}
      />

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-amber-500/50 flex items-center gap-2 text-xs font-semibold animate-slideUp">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{showToast}</span>
        </div>
      )}
    </div>
  );
}
