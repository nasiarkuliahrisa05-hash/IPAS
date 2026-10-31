import React from 'react';
import { Users, User, GraduationCap, Calendar, Award, Sparkles } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

interface IdentitasProps {
  kelompok: string;
  anggota: string;
  kelas: string;
  tanggal: string;
  onChange: (field: string, value: string) => void;
}

export const IdentitasSection: React.FC<IdentitasProps> = ({
  kelompok,
  anggota,
  kelas,
  tanggal,
  onChange,
}) => {
  const setTodayDate = () => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const formatted = today.toLocaleDateString('id-ID', options);
    onChange('tanggal', formatted);
    soundEffects.playClick();
  };

  const isCompleted = kelompok.trim() && anggota.trim() && kelas.trim() && tanggal.trim();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-amber-200/80 p-5 sm:p-6 transition-all hover:shadow-md relative overflow-hidden">
      {/* Decorative Stamp Background */}
      <div className="absolute -right-6 -bottom-6 w-36 h-36 border-4 border-amber-100 rounded-full flex items-center justify-center pointer-events-none transform -rotate-12 opacity-60">
        <span className="text-[10px] font-black tracking-widest text-amber-300 uppercase text-center">
          KARTU DETEKTIF<br />RESMI SAINS
        </span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-amber-100">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-sm">
            🕵️
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800 font-heading">
              Identitas Tim Detektif Indera
            </h2>
            <p className="text-xs text-slate-500">
              Lengkapi berkas identitas kelompok penyelidik sebelum memulai misi
            </p>
          </div>
        </div>

        {isCompleted ? (
          <div className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 self-start sm:self-auto">
            <Award className="w-3.5 h-3.5" /> Berkas Lengkap
          </div>
        ) : (
          <div className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 self-start sm:self-auto">
            <Sparkles className="w-3.5 h-3.5" /> Isi Identitas
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Kelompok */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <Users className="w-4 h-4 text-amber-600" />
            <span>Kelompok / Nama Tim:</span>
          </label>
          <input
            type="text"
            value={kelompok}
            onChange={(e) => onChange('kelompok', e.target.value)}
            placeholder="Contoh: Kelompok 1 (Tim Detektif Elang)"
            className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-amber-50/20 hover:bg-white"
          />
        </div>

        {/* Kelas */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-amber-600" />
            <span>Kelas:</span>
          </label>
          <input
            type="text"
            value={kelas}
            onChange={(e) => onChange('kelas', e.target.value)}
            placeholder="Contoh: IV (Empat) B / SD Negeri 1"
            className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-amber-50/20 hover:bg-white"
          />
        </div>

        {/* Tanggal */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-600" />
              <span>Tanggal:</span>
            </label>
            <button
              type="button"
              onClick={setTodayDate}
              className="text-[11px] text-amber-700 hover:text-amber-800 underline font-medium cursor-pointer"
            >
              Gunakan Hari Ini
            </button>
          </div>
          <input
            type="text"
            value={tanggal}
            onChange={(e) => onChange('tanggal', e.target.value)}
            placeholder="Contoh: 31 Oktober 2026"
            className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-amber-50/20 hover:bg-white"
          />
        </div>

        {/* Anggota */}
        <div className="space-y-1.5 md:col-span-2">
          <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <User className="w-4 h-4 text-amber-600" />
            <span>Nama Anggota Kelompok:</span>
            <span className="text-[11px] text-slate-400 font-normal">
              (Bisa ditulis satu per baris atau dipisah tanda koma)
            </span>
          </label>
          <textarea
            rows={3}
            value={anggota}
            onChange={(e) => onChange('anggota', e.target.value)}
            placeholder={"1. Alif Pratama\n2. Nabila Zahra\n3. Rizky Fauzan\n4. Putri Syakila"}
            className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-amber-50/20 hover:bg-white resize-y"
          />
        </div>
      </div>
    </div>
  );
};
