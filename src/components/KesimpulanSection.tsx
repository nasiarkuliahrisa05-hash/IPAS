import React from 'react';
import { KesimpulanData, REFLECTION_EMOTIONS } from '../types/lkpd';
import { CheckCircle2, Sparkles, Heart, Lightbulb, Trophy } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

interface KesimpulanProps {
  kesimpulan: KesimpulanData;
  perasaan: string;
  onUpdateKesimpulan: (field: keyof KesimpulanData, value: string) => void;
  onUpdatePerasaan: (val: string) => void;
  isAllCompleted: boolean;
}

export const KesimpulanSection: React.FC<KesimpulanProps> = ({
  kesimpulan,
  perasaan,
  onUpdateKesimpulan,
  onUpdatePerasaan,
  isAllCompleted,
}) => {
  const triggerCelebration = () => {
    soundEffects.playFanfare();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const usePromptIdea = (field: keyof KesimpulanData, text: string) => {
    soundEffects.playClick();
    onUpdateKesimpulan(field, text);
  };

  const isKesimpulanFilled =
    kesimpulan.poin1.trim().length > 0 &&
    kesimpulan.poin2.trim().length > 0 &&
    kesimpulan.poin3.trim().length > 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-amber-200/80 p-5 sm:p-6 transition-all hover:shadow-md">
      {/* Header Kesimpulan */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-amber-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
            🎯
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                Refleksi & Kesimpulan Akhir
              </span>
              {isKesimpulanFilled && (
                <span className="text-[11px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Lengkap
                </span>
              )}
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-800 font-heading">
              KESIMPULAN & REFLEKSI DETEKTIF
            </h2>
            <p className="text-xs text-slate-500">
              Rangkum 3 hal pokok yang telah kamu pelajari dari misi penyelidikan indera
            </p>
          </div>
        </div>

        {isAllCompleted && (
          <button
            type="button"
            onClick={triggerCelebration}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-500 text-white font-bold text-xs shadow-md hover:opacity-95 active:scale-95 transition-all cursor-pointer self-start sm:self-auto"
          >
            <Trophy className="w-4 h-4 text-amber-200" />
            <span>Rayakan Misi Selesai! 🎉</span>
          </button>
        )}
      </div>

      {/* 3 Conclusion Points */}
      <div className="space-y-4 mb-6">
        {/* Poin 1 */}
        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/30 hover:bg-white transition-all space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold">
                1
              </span>
              <span>Kesimpulan 1 (Tentang Panca Indera Manusia):</span>
            </label>
            <button
              type="button"
              onClick={() =>
                usePromptIdea(
                  'poin1',
                  'Manusia memiliki 5 panca indera yaitu mata (melihat), telinga (mendengar), hidung (mencium), lidah (mengecap), dan kulit (meraba).'
                )
              }
              className="text-[11px] text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer font-medium"
            >
              <Lightbulb className="w-3 h-3" /> Ide Kalimat
            </button>
          </div>
          <textarea
            rows={2}
            value={kesimpulan.poin1}
            onChange={(e) => onUpdateKesimpulan('poin1', e.target.value)}
            placeholder="Tuliskan kesimpulan pertama mengenai macam-macam dan fungsi panca indera..."
            className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all bg-white resize-y"
          />
        </div>

        {/* Poin 2 */}
        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/30 hover:bg-white transition-all space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold">
                2
              </span>
              <span>Kesimpulan 2 (Fungsi & Cara Kerja Indera):</span>
            </label>
            <button
              type="button"
              onClick={() =>
                usePromptIdea(
                  'poin2',
                  'Setiap indera memiliki rangsangan khusus dan saling melengkapi untuk mengenali keadaan di sekitar serta menjaga diri kita dari bahaya.'
                )
              }
              className="text-[11px] text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer font-medium"
            >
              <Lightbulb className="w-3 h-3" /> Ide Kalimat
            </button>
          </div>
          <textarea
            rows={2}
            value={kesimpulan.poin2}
            onChange={(e) => onUpdateKesimpulan('poin2', e.target.value)}
            placeholder="Tuliskan kesimpulan kedua mengenai bagaimana indera membantu kita mengenali lingkungan..."
            className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all bg-white resize-y"
          />
        </div>

        {/* Poin 3 */}
        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/30 hover:bg-white transition-all space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-800 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold">
                3
              </span>
              <span>Kesimpulan 3 (Saat Salah Satu Indera Terbatas):</span>
            </label>
            <button
              type="button"
              onClick={() =>
                usePromptIdea(
                  'poin3',
                  'Bila penglihatan terhalang (misal dalam kegelapan), indera lain seperti pendengaran, penciuman, dan peraba tetap bekerja akurat membantu kita.'
                )
              }
              className="text-[11px] text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer font-medium"
            >
              <Lightbulb className="w-3 h-3" /> Ide Kalimat
            </button>
          </div>
          <textarea
            rows={2}
            value={kesimpulan.poin3}
            onChange={(e) => onUpdateKesimpulan('poin3', e.target.value)}
            placeholder="Tuliskan kesimpulan ketiga mengenai bagaimana indera saling bekerja sama saat salah satu indera terhalang..."
            className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all bg-white resize-y"
          />
        </div>
      </div>

      {/* Perasaan / Refleksi Emosional */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-rose-50/70 via-pink-50/50 to-amber-50/70 border border-rose-200/80 space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-slate-800 flex items-center gap-2">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>Perasaan saat Menyelesaikan Misi:</span>
          </label>
          <span className="text-[11px] text-rose-700 font-semibold">
            {perasaan}
          </span>
        </div>

        {/* Emotion Selector Chips */}
        <div className="flex flex-wrap gap-2">
          {REFLECTION_EMOTIONS.map((emotion, idx) => {
            const isSelected = perasaan === emotion;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  onUpdatePerasaan(emotion);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-rose-600 text-white border-rose-600 shadow-sm scale-102 ring-2 ring-rose-200'
                    : 'bg-white hover:bg-rose-50 text-slate-700 border-rose-200'
                }`}
              >
                {emotion}
              </button>
            );
          })}
        </div>

        {/* Custom Input for Perasaan if user wants custom words */}
        <div className="pt-1">
          <input
            type="text"
            value={perasaan}
            onChange={(e) => onUpdatePerasaan(e.target.value)}
            placeholder="Ketik perasaanmu jika berbeda..."
            className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-rose-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 outline-none transition-all bg-white"
          />
        </div>
      </div>
    </div>
  );
};
