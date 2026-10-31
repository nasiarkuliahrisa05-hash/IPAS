import React from 'react';

interface SenseIconProps {
  size?: number | string;
  className?: string;
  animated?: boolean;
}

/**
 * 1. Ikon Mata (Melihat / Penglihatan)
 * Visual: Mata jeli detektif dengan pupil biru kristal, lensa fokus, dan kilau bintang pengintai
 */
export const MataVisualIcon: React.FC<SenseIconProps> = ({ size = 48, className = '', animated = true }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 ${className} ${animated ? 'hover:scale-110 transition-transform duration-300' : ''}`}
    >
      <defs>
        <linearGradient id="mataGradBg" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="1" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id="mataGradIris" x1="24" y1="24" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284C7" />
          <stop offset="1" stopColor="#0C4A6E" />
        </linearGradient>
        <radialGradient id="mataSparkle" cx="0.5" cy="0.5" r="0.5" fx="0.3" fy="0.3">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer Glow / Lens Frame */}
      <circle cx="32" cy="32" r="28" fill="#E0F2FE" stroke="#7DD3FC" strokeWidth="2" strokeDasharray="3 3" />
      
      {/* Sclera (White of Eye) */}
      <path
        d="M8 32C14 20 22 14 32 14C42 14 50 20 56 32C50 44 42 50 32 50C22 50 14 44 8 32Z"
        fill="#FFFFFF"
        stroke="#0284C7"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Iris */}
      <circle cx="32" cy="32" r="13" fill="url(#mataGradBg)" stroke="#0369A1" strokeWidth="2" />
      <circle cx="32" cy="32" r="8" fill="url(#mataGradIris)" />

      {/* Pupil Center */}
      <circle cx="32" cy="32" r="5" fill="#082F49" />

      {/* Light Reflection Stars & Sparkles */}
      <circle cx="28" cy="28" r="3.5" fill="#FFFFFF" />
      <circle cx="36" cy="36" r="1.5" fill="#BAE6FD" />

      {/* Detective Lens Focus Reticle Lines */}
      <path d="M32 7V11" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 53V57" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M7 32H11" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M53 32H57" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />

      {/* Detective Wink / Sparkle Star */}
      <path
        d="M49 14L50.5 18L54.5 19.5L50.5 21L49 25L47.5 21L43.5 19.5L47.5 18L49 14Z"
        fill="#FACC15"
        stroke="#CA8A04"
        strokeWidth="0.8"
      />
    </svg>
  );
};

/**
 * 2. Ikon Telinga (Mendengar / Pendengaran)
 * Visual: Daun telinga aerodinamis yang menangkap gelombang suara beriak (soundwaves) dan dentingan bunyi
 */
export const TelingaVisualIcon: React.FC<SenseIconProps> = ({ size = 48, className = '', animated = true }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 ${className} ${animated ? 'hover:scale-110 transition-transform duration-300' : ''}`}
    >
      <defs>
        <linearGradient id="telingaGradEar" x1="16" y1="12" x2="38" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBF24" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
      </defs>

      {/* Circular Soft Background */}
      <circle cx="32" cy="32" r="28" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="2" strokeDasharray="3 3" />

      {/* Main Outer Ear Pinna */}
      <path
        d="M26 12C18 12 14 18 14 28C14 40 22 46 25 50C28 54 34 54 36 50C38 46 38 41 36 38C34 35 29 35 26 31C24 28 25 21 28 17C30 14 34 14 35 17"
        fill="#FFFFFF"
        stroke="#D97706"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Inner Ear Fold (Antihelix & Concha) */}
      <path
        d="M26 21C22 23 21 28 23 33C25 38 29 39 30 43"
        stroke="#B45309"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="28" cy="36" r="2.5" fill="#D97706" />

      {/* Expanding Soundwaves (Gelombang Bunyi) */}
      <path
        d="M40 24C44 28 44 36 40 40"
        stroke="#F59E0B"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M46 19C52 25 52 39 46 45"
        stroke="#D97706"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M52 14C60 22 60 42 52 50"
        stroke="#B45309"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1 3"
      />

      {/* Musical/Sound Sparkle */}
      <circle cx="43" cy="14" r="2" fill="#F59E0B" />
      <path
        d="M17 14L18 17L21 18L18 19L17 22L16 19L13 18L16 17L17 14Z"
        fill="#FBBF24"
      />
    </svg>
  );
};

/**
 * 3. Ikon Hidung (Mencium / Penciuman)
 * Visual: Siluet hidung dengan aliran partikel wewangian/aroma semerbak (scent wafts)
 */
export const HidungVisualIcon: React.FC<SenseIconProps> = ({ size = 48, className = '', animated = true }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 ${className} ${animated ? 'hover:scale-110 transition-transform duration-300' : ''}`}
    >
      <defs>
        <linearGradient id="hidungGradAroma" x1="36" y1="10" x2="54" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
      </defs>

      {/* Circular Soft Background */}
      <circle cx="32" cy="32" r="28" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="2" strokeDasharray="3 3" />

      {/* Human Nose Bridge & Tip */}
      <path
        d="M26 14C26 22 25 32 18 39C16 41 16 45 20 48C24 50 30 50 33 46C35 43 33 39 31 38"
        fill="#FFFFFF"
        stroke="#059669"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Nostril Flare (Cuping Hidung) */}
      <path
        d="M24 45C22 45 21 44 22 43C23 42 26 42 27 44"
        stroke="#047857"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Swirling Scent Waves (Pita Aroma Wangi & Partikel Udara) */}
      <path
        d="M36 44C40 40 37 34 42 30C46 26 44 19 49 16"
        stroke="url(#hidungGradAroma)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44 46C48 43 45 38 50 34C55 30 53 24 56 20"
        stroke="#34D399"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="3 2"
      />

      {/* Scent Molecule Dots / Fragrance Sparkles */}
      <circle cx="49" cy="14" r="2.5" fill="#10B981" />
      <circle cx="56" cy="18" r="1.8" fill="#34D399" />
      <circle cx="42" cy="27" r="1.5" fill="#059669" />
      <circle cx="38" cy="38" r="1.8" fill="#10B981" />

      {/* Flower Fragrance Star */}
      <path
        d="M53 10L54 12.5L57 13.5L54 14.5L53 17L52 14.5L49 13.5L52 12.5L53 10Z"
        fill="#F59E0B"
      />
    </svg>
  );
};

/**
 * 4. Ikon Lidah (Mengecap / Pengecapan)
 * Visual: Mulut tersenyum dengan lidah bertekstur papila perasa dan kilau cita rasa (manis, asin, dsb.)
 */
export const LidahVisualIcon: React.FC<SenseIconProps> = ({ size = 48, className = '', animated = true }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 ${className} ${animated ? 'hover:scale-110 transition-transform duration-300' : ''}`}
    >
      <defs>
        <linearGradient id="lidahGrad" x1="20" y1="28" x2="44" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FB7185" />
          <stop offset="1" stopColor="#E11D48" />
        </linearGradient>
      </defs>

      {/* Circular Soft Background */}
      <circle cx="32" cy="32" r="28" fill="#FFF1F2" stroke="#FECDD3" strokeWidth="2" strokeDasharray="3 3" />

      {/* Smiling Mouth Opening */}
      <path
        d="M12 28C16 22 48 22 52 28C52 40 46 48 32 48C18 48 12 40 12 28Z"
        fill="#4C0519"
        stroke="#BE123C"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Tongue Protruding Out */}
      <path
        d="M20 32C20 42 24 54 32 54C40 54 44 42 44 32C38 34 26 34 20 32Z"
        fill="url(#lidahGrad)"
        stroke="#9F1239"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Tongue Median Sulcus (Garis Tengah Lidah) */}
      <path
        d="M32 34V48"
        stroke="#BE123C"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Taste Buds / Papillae (Bintik-bintik Perasa) */}
      <circle cx="26" cy="40" r="1.5" fill="#FFE4E6" />
      <circle cx="38" cy="40" r="1.5" fill="#FFE4E6" />
      <circle cx="28" cy="46" r="1.2" fill="#FFE4E6" />
      <circle cx="36" cy="46" r="1.2" fill="#FFE4E6" />
      <circle cx="32" cy="42" r="1.2" fill="#FDA4AF" />

      {/* Taste Flavor Stars (Cita Rasa Manis & Segar) */}
      <path
        d="M48 16L49.5 20L53.5 21.5L49.5 23L48 27L46.5 23L42.5 21.5L46.5 20L48 16Z"
        fill="#F43F5E"
        stroke="#BE123C"
        strokeWidth="0.8"
      />
      <circle cx="16" cy="20" r="2" fill="#FB7185" />
    </svg>
  );
};

/**
 * 5. Ikon Kulit (Meraba / Perabaan)
 * Visual: Telapak tangan detektif dengan sidik jari taktil, sentuhan suhu hangat-dingin, dan tekstur halus-kasar
 */
export const KulitVisualIcon: React.FC<SenseIconProps> = ({ size = 48, className = '', animated = true }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 ${className} ${animated ? 'hover:scale-110 transition-transform duration-300' : ''}`}
    >
      <defs>
        <linearGradient id="kulitGradHand" x1="18" y1="14" x2="46" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C084FC" />
          <stop offset="1" stopColor="#9333EA" />
        </linearGradient>
      </defs>

      {/* Circular Soft Background */}
      <circle cx="32" cy="32" r="28" fill="#FAF5FF" stroke="#E9D5FF" strokeWidth="2" strokeDasharray="3 3" />

      {/* Hand Palm & Fingers */}
      <path
        d="M26 32V18C26 15.5 28.5 15.5 28.5 18V28M28.5 28V14C28.5 11.5 31.5 11.5 31.5 14V28M31.5 28V16C31.5 13.5 34.5 13.5 34.5 16V29M34.5 29V20C34.5 17.5 37.5 17.5 37.5 20V34C37.5 42 34 49 27 50C20 49 18 42 18 36L18 33C18 30.5 21 30 22.5 32.5L26 37"
        fill="#FFFFFF"
        stroke="#7E22CE"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Tactile Sensor Rays (Gelombang Sentuhan / Tekstur Rasa) */}
      <path
        d="M20 16C17 19 16 23 16 27"
        stroke="#A855F7"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M42 16C46 20 47 25 47 30"
        stroke="#9333EA"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M46 12C52 18 53 26 53 34"
        stroke="#C084FC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />

      {/* Fingerprint / Texture Concentric Swirls in Palm */}
      <path
        d="M26 42C28 40 31 40 33 42"
        stroke="#A855F7"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Temperature & Texture Sparkle (Dingin / Hangat) */}
      <path
        d="M32 6L33.5 9.5L37 11L33.5 12.5L32 16L30.5 12.5L27 11L30.5 9.5L32 6Z"
        fill="#C084FC"
      />
      <circle cx="44" cy="44" r="2.5" fill="#9333EA" />
    </svg>
  );
};

/**
 * Metadata lengkap untuk perancangan visual setiap indera
 */
export const SENSE_VISUAL_INFO = [
  {
    id: 'mata',
    indera: 'Mata',
    aksi: 'Melihat',
    organ: 'Organ Penglihatan',
    filosofiDesain: 'Fokus Biru Kristal dengan pupil jernih, retikel lensa pengintai detektif, dan bintang kejernihan visual.',
    detailFungsi: 'Mendeteksi cahaya, warna, bentuk, dimensi, dan bayangan tersembunyi pada barang bukti.',
    komponen: MataVisualIcon,
    bgBadge: 'bg-blue-50 text-blue-800 border-blue-200',
    primaryColor: '#0284C7',
    iconColor: 'text-blue-600',
    emoji: '👁️',
  },
  {
    id: 'telinga',
    indera: 'Telinga',
    aksi: 'Mendengar',
    organ: 'Organ Pendengaran',
    filosofiDesain: 'Resonansi Emas Amber dengan gelombang suara melingkar (soundwaves) dan frekuensi getaran dinamis.',
    detailFungsi: 'Menangkap getaran gelombang bunyi, bisikan, deru mesin, serta dentingan tanda bahaya dari jauh.',
    komponen: TelingaVisualIcon,
    bgBadge: 'bg-amber-50 text-amber-800 border-amber-200',
    primaryColor: '#D97706',
    iconColor: 'text-amber-600',
    emoji: '👂',
  },
  {
    id: 'hidung',
    indera: 'Hidung',
    aksi: 'Mencium',
    organ: 'Organ Penciuman',
    filosofiDesain: 'Aliran Zamrud Mint dengan liukan uap partikel aroma olfaktori (scent wafts) yang melayang di udara.',
    detailFungsi: 'Mendeteksi partikel kimia aroma tak kasat mata di udara (wangi, busuk, gosong, sedap) ke reseptor saraf.',
    komponen: HidungVisualIcon,
    bgBadge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    primaryColor: '#059669',
    iconColor: 'text-emerald-600',
    emoji: '👃',
  },
  {
    id: 'lidah',
    indera: 'Lidah',
    aksi: 'Mengecap',
    organ: 'Organ Pengecapan',
    filosofiDesain: 'Senyum Ceria Coral & Merah Stroberi dengan detail bintik papila perasa dan kilau cita rasa.',
    detailFungsi: 'Menganalisis rasa larutan atau serbuk: manis, asin, asam, pahit, dan umami lewat papila lidah.',
    komponen: LidahVisualIcon,
    bgBadge: 'bg-rose-50 text-rose-800 border-rose-200',
    primaryColor: '#E11D48',
    iconColor: 'text-rose-600',
    emoji: '👅',
  },
  {
    id: 'kulit',
    indera: 'Kulit',
    aksi: 'Meraba',
    organ: 'Organ Perabaan',
    filosofiDesain: 'Sensor Taktil Violet dengan siluet telapak tangan, kontur sidik jari, dan gelombang sensasi tekstur.',
    detailFungsi: 'Membaca tekstur (halus/kasar), bentuk fisik, suhu (panas/dingin), tekanan, dan kebasahan objek.',
    komponen: KulitVisualIcon,
    bgBadge: 'bg-purple-50 text-purple-800 border-purple-200',
    primaryColor: '#9333EA',
    iconColor: 'text-purple-600',
    emoji: '✋',
  },
];
