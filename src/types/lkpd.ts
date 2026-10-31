export interface Misi1Data {
  mata: string;
  telinga: string;
  hidung: string;
  lidah: string;
  kulit: string;
}

export interface KasusItem {
  id: number;
  judul: string;
  skenario: string;
  indra: string;
  penjelasan: string;
  kunciIndra: string;
  petunjuk: string;
  icon: string;
}

export interface KesimpulanData {
  poin1: string;
  poin2: string;
  poin3: string;
}

export interface LkpdData {
  kelompok: string;
  anggota: string;
  kelas: string;
  tanggal: string;
  misi1: Misi1Data;
  misi2: KasusItem[];
  kesimpulan: KesimpulanData;
  perasaan: string;
}

export const INDERA_OPTIONS = [
  { id: 'Mata', label: '👁️ Mata (Melihat)', name: 'Mata', action: 'Melihat', icon: 'Eye', color: 'bg-blue-500' },
  { id: 'Telinga', label: '👂 Telinga (Mendengar)', name: 'Telinga', action: 'Mendengar', icon: 'Ear', color: 'bg-amber-500' },
  { id: 'Hidung', label: '👃 Hidung (Mencium)', name: 'Hidung', action: 'Mencium', icon: 'Flame', color: 'bg-emerald-500' },
  { id: 'Lidah', label: '👅 Lidah (Mengecap)', name: 'Lidah', action: 'Mengecap', icon: 'Smile', color: 'bg-rose-500' },
  { id: 'Kulit', label: '✋ Kulit (Meraba)', name: 'Kulit', action: 'Meraba', icon: 'Hand', color: 'bg-purple-500' },
];

export const DEFAULT_CASES: KasusItem[] = [
  {
    id: 1,
    judul: 'Misteri Bau Gosong di Lantai Dua',
    skenario: 'Ibu sedang memanggang bolu di oven dapur. Doni yang sedang asyik belajar di kamar lantai 2 tiba-tiba mendeteksi ada kue yang hangus terbakar dan bergegas turun ke dapur mematikan oven.',
    indra: '',
    penjelasan: '',
    kunciIndra: 'Hidung',
    petunjuk: 'Gas atau asap dari masakan yang terbakar menyebar lewat udara dan dihirup oleh organ ini.',
    icon: '👃'
  },
  {
    id: 2,
    judul: 'Misteri Sepeda di Kegelapan Malam',
    skenario: 'Saat listrik padam total dan ruangan gelap gulita, Siti dengan cepat mengetahui adiknya baru saja pulang menaiki sepeda karena mendengar suara "Kring-kring!" dan deru rantai sepeda di teras depan.',
    indra: '',
    penjelasan: '',
    kunciIndra: 'Telinga',
    petunjuk: 'Benda menghasilkan getaran gelombang suara yang ditangkap oleh organ di samping kepala kita.',
    icon: '👂'
  },
  {
    id: 3,
    judul: 'Misteri Serbuk Putih yang Tertukar',
    skenario: 'Di meja dapur terdapat dua toples kaca tanpa label. Keduanya berisi serbuk kristal putih halus dengan tampilan visual yang sama persis. Rani ingin memastikan mana yang gula pasir manis dan mana yang garam dapur asin.',
    indra: '',
    penjelasan: '',
    kunciIndra: 'Lidah',
    petunjuk: 'Warna dan bentuknya kembar di mata, namun papila organ ini memiliki reseptor khusus perasa manis dan asin.',
    icon: '👅'
  },
  {
    id: 4,
    judul: 'Misteri Kotak Misterius Bertutup Kain',
    skenario: 'Budi diminta meraba sebuah benda di dalam kotak tertutup tanpa boleh mengintip. Begitu menyentuhnya, Budi merasakan tekstur benda itu sangat dingin, licin, keras, dan perlahan mencair membasahi telapak tangannya.',
    indra: '',
    penjelasan: '',
    kunciIndra: 'Kulit',
    petunjuk: 'Ujung-ujung saraf pada permukaan tubuh ini peka terhadap rasa dingin, suhu, tekstur licin, dan basah.',
    icon: '✋'
  }
];

export const DEMO_LKPD: LkpdData = {
  kelompok: 'Tim Detektif Elang',
  anggota: '1. Alif Pratama\n2. Nabila Zahra\n3. Rizky Fauzan\n4. Putri Syakila',
  kelas: 'IV (Empat) B',
  tanggal: '31 Oktober 2026',
  misi1: {
    mata: 'Melihat warna kulit jeruk kuning kehijauan cerah, bentuknya bulat, dan terdapat bintik-bintik pori halus.',
    telinga: 'Mendengar bunyi tetesan air jeruk yang jatuh "tik-tik" dan suara renyah saat kulit jeruk dikupas.',
    hidung: 'Mencium aroma khas sitrus yang wangi segar menyengat saat kulitnya diperas.',
    lidah: 'Mengecap rasa bulir jeruk yang manis berpadu asam segar di lidah.',
    kulit: 'Meraba permukaan kulit jeruk yang agak bertekstur, agak kasar di luar namun daging buahnya terasa basah dan kenyal.'
  },
  misi2: [
    {
      id: 1,
      judul: 'Misteri Bau Gosong di Lantai Dua',
      skenario: 'Ibu sedang memanggang bolu di oven dapur. Doni yang sedang asyik belajar di kamar lantai 2 tiba-tiba mendeteksi ada kue yang hangus terbakar dan bergegas turun ke dapur mematikan oven.',
      indra: 'Hidung (Mencium)',
      penjelasan: 'Doni menggunakan indera pembau/penciuman (hidung) karena partikel aroma gosong dari kue terbawa oleh aliran udara sampai ke lantai dua dan ditangkap oleh reseptor olfaktori di rongga hidung.',
      kunciIndra: 'Hidung',
      petunjuk: 'Gas atau asap dari masakan yang terbakar menyebar lewat udara dan dihirup oleh organ ini.',
      icon: '👃'
    },
    {
      id: 2,
      judul: 'Misteri Sepeda di Kegelapan Malam',
      skenario: 'Saat listrik padam total dan ruangan gelap gulita, Siti dengan cepat mengetahui adiknya baru saja pulang menaiki sepeda karena mendengar suara "Kring-kring!" dan deru rantai sepeda di teras depan.',
      indra: 'Telinga (Mendengar)',
      penjelasan: 'Meskipun mata Siti tidak dapat melihat dalam kegelapan, indera pendengaran (telinga) Siti menangkap getaran gelombang bunyi dari bel sepeda yang berdering.',
      kunciIndra: 'Telinga',
      petunjuk: 'Benda menghasilkan getaran gelombang suara yang ditangkap oleh organ di samping kepala kita.',
      icon: '👂'
    },
    {
      id: 3,
      judul: 'Misteri Serbuk Putih yang Tertukar',
      skenario: 'Di meja dapur terdapat dua toples kaca tanpa label. Keduanya berisi serbuk kristal putih halus dengan tampilan visual yang sama persis. Rani ingin memastikan mana yang gula pasir manis dan mana yang garam dapur asin.',
      indra: 'Lidah (Mengecap)',
      penjelasan: 'Karena wujud fisik gula dan garam sama persis jika hanya dilihat mata, Rani perlu mencicipi sedikit dengan indera pengecap (lidah) untuk membedakan rasa manis dari gula atau asin dari garam.',
      kunciIndra: 'Lidah',
      petunjuk: 'Warna dan bentuknya kembar di mata, namun papila organ ini memiliki reseptor khusus perasa manis dan asin.',
      icon: '👅'
    },
    {
      id: 4,
      judul: 'Misteri Kotak Misterius Bertutup Kain',
      skenario: 'Budi diminta meraba sebuah benda di dalam kotak tertutup tanpa boleh mengintip. Begitu menyentuhnya, Budi merasakan tekstur benda itu sangat dingin, licin, keras, dan perlahan mencair membasahi telapak tangannya.',
      indra: 'Kulit (Meraba)',
      penjelasan: 'Ujung-ujung saraf pada kulit telapak tangan dan jari Budi peka terhadap rangsangan suhu dingin (reseptor krause) dan tekstur licin dari es batu yang meleleh.',
      kunciIndra: 'Kulit',
      petunjuk: 'Ujung-ujung saraf pada permukaan tubuh ini peka terhadap rasa dingin, suhu, tekstur licin, dan basah.',
      icon: '✋'
    }
  ],
  kesimpulan: {
    poin1: 'Manusia memiliki lima panca indera utama yaitu mata (melihat), telinga (mendengar), hidung (mencium), lidah (mengecap), dan kulit (meraba).',
    poin2: 'Setiap indera memiliki fungsi khusus dan saling melengkapi untuk mengenali lingkungan sekitar dan mengidentifikasi benda atau bahaya.',
    poin3: 'Ketika salah satu indera terbatas (misalnya di tempat gelap atau mata tertutup), indera lainnya seperti telinga, hidung, atau kulit tetap bekerja secara akurat membantu kita menyelidiki objek.'
  },
  perasaan: 'Senang sekali! 😍'
};

export const REFLECTION_EMOTIONS = [
  'Senang sekali! 😍',
  'Sangat seru dan menantang! 🕵️‍♂️',
  'Paham banget tentang panca indera! 💡',
  'Kompak dan bersemangat bersama tim! 🤝',
  'Ingin pecahkan kasus sains lainnya! 🚀'
];
