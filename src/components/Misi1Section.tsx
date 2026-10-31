import React from 'react';
import { Sparkles, CheckCircle2, FlaskConical, Lightbulb } from 'lucide-react';
import { Misi1Data } from '../types/lkpd';
import { soundEffects } from '../utils/soundEffects';
import { MataVisualIcon, TelingaVisualIcon, HidungVisualIcon, LidahVisualIcon, KulitVisualIcon } from './SenseVisualIcons';

interface Misi1Props {
  data: Misi1Data;
  onChange: (field: keyof Misi1Data, value: string) => void;
  onOpenLab: () => void;
}

export const Misi1Section: React.FC<Misi1Props> = ({ data, onChange, onOpenLab }) => {
  const fields = [
    {
      key: 'mata' as const,
      label: 'Mata (Melihat)',
      organ: 'Mata',
      fungsi: 'Melihat warna, bentuk, ukuran, bayangan, dan cahaya',
      emoji: '👁️',
      visualComponent: MataVisualIcon,
      color: 'border-blue-200 bg-blue-50/30 text-blue-800',
      badgeBg: 'bg-blue-100 text-blue-700',
      ringColor: 'focus:ring-blue-200 focus:border-blue-500',
      placeholder: 'Tuliskan hasil pengamatan penglihatanmu (Contoh: Benda berbentuk bulat, warna kuning cerah, ada bintik-bintik kecil...)',
      starters: ['Berwarna cerah', 'Bentuknya bulat', 'Ukurannya sedang', 'Tampak mengkilap'],
    },
    {
      key: 'telinga' as const,
      label: 'Telinga (Mendengar)',
      organ: 'Telinga',
      fungsi: 'Mendengar bunyi getaran, dentingan, desis, gelombang suara',
      emoji: '👂',
      visualComponent: TelingaVisualIcon,
      color: 'border-amber-200 bg-amber-50/30 text-amber-800',
      badgeBg: 'bg-amber-100 text-amber-700',
      ringColor: 'focus:ring-amber-200 focus:border-amber-500',
      placeholder: 'Tuliskan bunyi yang kamu dengar saat benda diketuk/digerakkan (Contoh: Berbunyi renyah kreuk-kreuk, atau berdenting nyaring...)',
      starters: ['Bunyi nyaring berdering', 'Gemerisik lembut', 'Tetesan air tik-tik', 'Hening tidak berbunyi'],
    },
    {
      key: 'hidung' as const,
      label: 'Hidung (Mencium)',
      organ: 'Hidung',
      fungsi: 'Mencium wangi, aroma sedap, asam, atau bau menyengat',
      emoji: '👃',
      visualComponent: HidungVisualIcon,
      color: 'border-emerald-200 bg-emerald-50/30 text-emerald-800',
      badgeBg: 'bg-emerald-100 text-emerald-700',
      ringColor: 'focus:ring-emerald-200 focus:border-emerald-500',
      placeholder: 'Tuliskan aroma atau bau yang tercium saat didekatkan ke hidung (Contoh: Tercium aroma wangi buah segar yang semerbak...)',
      starters: ['Aroma wangi segar sitrus', 'Harum bunga melati', 'Bau sangit terbakar', 'Hampir tidak berbau'],
    },
    {
      key: 'lidah' as const,
      label: 'Lidah (Mengecap)',
      organ: 'Lidah',
      fungsi: 'Mengecap rasa manis, asin, asam, pahit, gurih',
      emoji: '👅',
      visualComponent: LidahVisualIcon,
      color: 'border-rose-200 bg-rose-50/30 text-rose-800',
      badgeBg: 'bg-rose-100 text-rose-700',
      ringColor: 'focus:ring-rose-200 focus:border-rose-500',
      placeholder: 'Tuliskan rasa yang dirasakan di lidah (Contoh: Rasanya manis bercampur asam segar yang kuat di lidah...)',
      starters: ['Rasa manis legit', 'Asam segar berair', 'Asin gurih', 'Dingin segar di lidah'],
    },
    {
      key: 'kulit' as const,
      label: 'Kulit (Meraba)',
      organ: 'Kulit',
      fungsi: 'Meraba tekstur halus, kasar, suhu panas, dingin, licin',
      emoji: '✋',
      visualComponent: KulitVisualIcon,
      color: 'border-purple-200 bg-purple-50/30 text-purple-800',
      badgeBg: 'bg-purple-100 text-purple-700',
      ringColor: 'focus:ring-purple-200 focus:border-purple-500',
      placeholder: 'Tuliskan sensasi sentuhan pada kulit tanganmu (Contoh: Kulitnya bertekstur agak kasar di luar namun basah dingin di dalam...)',
      starters: ['Terasa dingin menggigit', 'Permukaan halus licin', 'Agak berpori kasar', 'Kenyal dan lembut'],
    },
  ];

  const completedCount = fields.filter((f) => data[f.key]?.trim().length > 0).length;

  const appendStarter = (fieldKey: keyof Misi1Data, text: string) => {
    soundEffects.playClick();
    const current = data[fieldKey] || '';
    if (!current.trim()) {
      onChange(fieldKey, text);
    } else {
      onChange(fieldKey, `${current.trim()}, ${text.toLowerCase()}`);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-amber-200/80 p-5 sm:p-6 transition-all hover:shadow-md">
      {/* Header Misi 1 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-amber-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center font-bold text-lg shadow-sm">
            1
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wide">
                Misi Investigasi 1
              </span>
              <span className="text-[11px] bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded-full">
                {completedCount}/5 Terisi
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-800 font-heading">
              HASIL MISI 1: Eksplorasi 5 Panca Indera
            </h2>
            <p className="text-xs text-slate-500">
              Lakukan pengamatan pada objek uji menggunakan segenap kemampuan panca inderamu
            </p>
          </div>
        </div>

        {/* Action Button: Open Interactive Lab */}
        <button
          type="button"
          onClick={() => {
            soundEffects.playInspect();
            onOpenLab();
          }}
          className="flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs sm:text-sm font-bold shadow-sm hover:from-amber-600 hover:to-orange-600 active:scale-95 transition-all cursor-pointer self-start sm:self-auto"
        >
          <FlaskConical className="w-4 h-4" />
          <span>Buka Lab Objek Uji Interaktif</span>
        </button>
      </div>

      {/* Info Tip */}
      <div className="mb-5 p-3 rounded-xl bg-amber-50/80 border border-amber-200/70 text-xs text-amber-900 flex items-start gap-2.5">
        <Lightbulb className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold">Petunjuk Detektif Cilik:</span> Amati objek penyelidikanmu (misalnya buah jeruk, benda kelas, atau benda dari Lab Objek Uji). Catat bukti spesifik yang kamu temukan untuk setiap indera di bawah ini!
        </div>
      </div>

      {/* Senses Grid / List */}
      <div className="space-y-4">
        {fields.map((f) => {
          const isFilled = (data[f.key] || '').trim().length > 0;
          const VisualIcon = f.visualComponent;

          return (
            <div
              key={f.key}
              className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                isFilled
                  ? 'border-slate-200 bg-white shadow-xs'
                  : 'border-slate-200 bg-slate-50/40 hover:bg-white'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-1 rounded-2xl bg-white shadow-sm border border-slate-100 flex-shrink-0">
                    <VisualIcon size={44} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-800 font-heading flex items-center gap-1.5">
                      <span>{f.label}:</span>
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">{f.fungsi}</p>
                  </div>
                </div>

                {isFilled ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 self-start sm:self-auto">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Bukti Tercatat
                  </span>
                ) : (
                  <span className="text-[11px] text-slate-400 self-start sm:self-auto italic">
                    Belum diisi
                  </span>
                )}
              </div>

              {/* Textarea Input */}
              <div className="space-y-2">
                <textarea
                  rows={2}
                  value={data[f.key] || ''}
                  onChange={(e) => onChange(f.key, e.target.value)}
                  placeholder={f.placeholder}
                  className={`w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 ${f.ringColor} focus:ring-2 outline-none transition-all bg-white resize-y`}
                />

                {/* Quick Word Helpers */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-500" /> Kata bantu:
                  </span>
                  {f.starters.map((starter, sIdx) => (
                    <button
                      key={sIdx}
                      type="button"
                      onClick={() => appendStarter(f.key, starter)}
                      className="text-[11px] bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-800 px-2 py-0.5 rounded-md border border-slate-200 hover:border-amber-300 transition-colors cursor-pointer"
                    >
                      + {starter}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
