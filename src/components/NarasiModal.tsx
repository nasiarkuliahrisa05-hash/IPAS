import React from 'react';
import { X, Sparkles, Scroll, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

interface NarasiModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartMission: () => void;
}

export const NARASI_LATAR_BELAKANG = {
  judul: 'Panggilan Darurat dari Markas Besar Detektif Sains Cilik!',
  subjudul: 'Misi Rahasia Mengungkap Misteri Kota Panca dengan 5 Senjata Alami Tubuh',
  paragraf1:
    'Di sebuah kota yang tenang bernama Kota Panca, tiba-tiba terjadi kehebohan besar! Berbagai peristiwa janggal terjadi tanpa jejak yang jelas: aroma gosong menyengat tercium di lantai dua tanpa terlihat asap, suara dentingan misterius terdengar di tengah malam yang gelap gulita, dua toples bumbu dapur kembar tertukar tanpa label, dan sebuah kotak misterius dingin ditemukan tanpa ada yang berani membukanya.',
  paragraf2:
    'Kepala Inspektur Sains Kota Panca kebingungan. Seluruh warga membutuhkan bantuan tim penyelidik paling cerdas dan teliti di sekolah: YAITU KALIAN, TIM DETEKTIF CILIK!',
  paragraf3:
    'Tahukah kamu rahasia terbesar seorang detektif hebat? Detektif sejati tidak membutuhkan kekuatan sihir ataupun kacamata tembus pandang super canggih. Senjata paling mutakhir dan paling dahsyat di dunia ternyata sudah terpasang sempurna di dalam diri kita sejak lahir: LIMA PANCA INDERA AJAIB!',
  inderaList: [
    {
      emoji: '👁️',
      nama: 'Mata Elang (Penglihatan)',
      deskripsi: 'Menangkap warna, wujud, bayangan, dan perubahan bentuk sekecil apa pun di tempat kejadian.',
      warna: 'bg-blue-50 border-blue-200 text-blue-900',
    },
    {
      emoji: '👂',
      nama: 'Telinga Radar (Pendengaran)',
      deskripsi: 'Mendeteksi frekuensi gelombang bunyi, gesekan rantai, hingga dentingan samar dari kejauhan.',
      warna: 'bg-amber-50 border-amber-200 text-amber-900',
    },
    {
      emoji: '👃',
      nama: 'Hidung Pelacak (Penciuman)',
      deskripsi: 'Menyaring partikel aroma tak kasat mata yang melayang di udara sebelum bahaya api mendekat.',
      warna: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    },
    {
      emoji: '👅',
      nama: 'Lidah Analis (Pengecapan)',
      deskripsi: 'Membongkar rahasia serbuk kembar dengan mendeteksi rasa manis, asin, asam, pahit, dan gurih.',
      warna: 'bg-rose-50 border-rose-200 text-rose-900',
    },
    {
      emoji: '✋',
      nama: 'Kulit Sensorik (Perabaan)',
      deskripsi: 'Membaca suhu dingin-panas, tekstur licin, kasar, lembut, dan getaran tanpa perlu melihat.',
      warna: 'bg-purple-50 border-purple-200 text-purple-900',
    },
  ],
  paragraf4:
    'Ketika mata terhalang oleh kegelapan pekat, telinga dan hidung kita siap menjadi penyelamat. Ketika dua zat terlihat kembar persis di mata, lidah dan kulit kita yang akan membongkar kebenarannya! Semua indera ini bekerja sama seperti sebuah tim investigasi super yang tak terkalahkan.',
  misiUtama:
    'Biro Investigasi Sains menantang kalian untuk menguji ketajaman indera di Laboratorium Misi 1, memecahkan 4 Kasus Misterius di Misi 2, dan menyusun laporan kesimpulan resmi. Pasang lencana detektifmu, siapkan buku catatan analisismu, dan buktikan ketajaman panca inderamu!',
};

export const NarasiModal: React.FC<NarasiModalProps> = ({ isOpen, onClose, onStartMission }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl border border-amber-200 w-full max-w-2xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header Modal */}
        <div className="px-6 py-4 bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-2xl shadow-inner">
              📜
            </div>
            <div>
              <span className="text-[11px] font-bold tracking-wider uppercase text-amber-200 bg-amber-950/40 px-2 py-0.5 rounded-full border border-amber-400/30">
                Prolog & Surat Tugas Resmi
              </span>
              <h3 className="text-base sm:text-lg font-bold font-heading">
                Narasi Latar Belakang Detektif Indera
              </h3>
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

        {/* Modal Story Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-slate-800 leading-relaxed text-sm">
          {/* Top Badge Stamp */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-start gap-3">
            <div className="text-3xl flex-shrink-0">🕵️‍♂️🔍</div>
            <div>
              <h4 className="font-bold text-amber-950 font-heading text-base">
                {NARASI_LATAR_BELAKANG.judul}
              </h4>
              <p className="text-xs text-amber-800 font-medium mt-0.5">
                {NARASI_LATAR_BELAKANG.subjudul}
              </p>
            </div>
          </div>

          <p className="text-slate-700">
            {NARASI_LATAR_BELAKANG.paragraf1}
          </p>

          <p className="font-semibold text-amber-900 bg-amber-100/60 p-3 rounded-xl border border-amber-200/60">
            {NARASI_LATAR_BELAKANG.paragraf2}
          </p>

          <p className="text-slate-700">
            {NARASI_LATAR_BELAKANG.paragraf3}
          </p>

          {/* Senses Cards */}
          <div className="space-y-2 py-1">
            <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>5 Senjata Detektif Alami yang Kamu Miliki:</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {NARASI_LATAR_BELAKANG.inderaList.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-2.5 rounded-xl border ${item.warna} flex items-start gap-2.5 text-xs ${
                    idx === 4 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <span className="text-xl flex-shrink-0">{item.emoji}</span>
                  <div>
                    <span className="font-bold block text-slate-900">{item.nama}</span>
                    <span className="text-[11px] text-slate-600 leading-normal">
                      {item.deskripsi}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-700">
            {NARASI_LATAR_BELAKANG.paragraf4}
          </p>

          {/* Mission Callout */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-emerald-900 mb-1">
                Tantangan Penyelidikan:
              </span>
              <p className="leading-relaxed">
                {NARASI_LATAR_BELAKANG.misiUtama}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500 text-center sm:text-left">
            Siapakah yang siap menjadi Detektif Sains terbaik hari ini?
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Tutup Cerita
            </button>
            <button
              onClick={() => {
                soundEffects.playFanfare();
                onStartMission();
              }}
              className="flex-1 sm:flex-none px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-xs font-bold shadow-md flex items-center justify-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Saya Siap Memulai Misi! 🕵️‍♂️</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
