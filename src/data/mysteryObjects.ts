export interface MysteryObject {
  id: string;
  nama: string;
  kategori: string;
  emoji: string;
  deskripsi: string;
  observasi: {
    mata: string;
    telinga: string;
    hidung: string;
    lidah: string;
    kulit: string;
  };
}

export const MYSTERY_OBJECTS: MysteryObject[] = [
  {
    id: 'jeruk',
    nama: 'Jeruk Segar',
    kategori: 'Buah Alami',
    emoji: '🍊',
    deskripsi: 'Sebuah buah jeruk matang segar yang baru dipetik dari pohon.',
    observasi: {
      mata: 'Kulitnya berwarna jingga cerah, permukaannya berbintik halus menyerupai pori-pori, dan bentuknya bulat lonjong.',
      telinga: 'Terdengar bunyi gemerisik renyah saat kulitnya dikupas dan bunyi tetesan air "tik-tik" saat diperas perlahan.',
      hidung: 'Aroma minyak atsiri sitrus menyerbak harum dan segar saat kulitnya ditekan lembut.',
      lidah: 'Rasa bulir buahnya manis bercampur asam segar yang membuat liur terbit di lidah.',
      kulit: 'Permukaan luarnya terasa agak berpori dan agak bergelombang, sedangkan saat dikupas bagian dalamnya berair dingin.'
    }
  },
  {
    id: 'esbatu',
    nama: 'Balok Es Batu',
    kategori: 'Benda Sekitar',
    emoji: '🧊',
    deskripsi: 'Balok es kristal bening yang baru saja dikeluarkan dari pembeku.',
    observasi: {
      mata: 'Berbentuk kubus transparan berkilau terkena cahaya, dengan sedikit retakan kristal putih di tengahnya.',
      telinga: 'Terdengar bunyi gemeretak "krek" halus saat terkena udara ruangan hangat dan desis pelan saat mencair.',
      hidung: 'Hampir tidak berbau, hanya tercium aroma uap air dingin yang bersih dan segar.',
      lidah: 'Rasa air tawar yang sangat dingin membekukan ujung lidah hingga terasa kebas sejenak.',
      kulit: 'Sangat licin, keras, dan terasa dingin menggigit di ujung jari saat dipegang, lalu meleleh basah.'
    }
  },
  {
    id: 'lonceng',
    nama: 'Lonceng Kuningan',
    kategori: 'Alat Musik / Bunyi',
    emoji: '🔔',
    deskripsi: 'Lonceng kecil dari logam kuningan mengkilap dengan pendulum pemukul.',
    observasi: {
      mata: 'Berwarna kuning keemasan berkilauan, memantulkan bayangan di sekitarnya, berbentuk kerucut berongga.',
      telinga: 'Saat digoyang, berbunyi nyaring dan berdering panjang "Teng... kliling...!" yang bergema di telinga.',
      hidung: 'Tercium bau khas logam kuningan kering yang samar jika didekatkan ke hidung.',
      lidah: '(PERHATIAN KEAMANAN DETEKTIF: Logam tidak boleh dijilat demi kebersihan dan keamanan!).',
      kulit: 'Terasa keras, sangat halus, agak berat, dan terasa dingin saat pertama kali disentuh tangan.'
    }
  },
  {
    id: 'teh-melati',
    nama: 'Secangkir Teh Melati Hangat',
    kategori: 'Minuman',
    emoji: '🍵',
    deskripsi: 'Cangkir keramik berisi seduhan teh daun melati yang masih mengepulkan uap.',
    observasi: {
      mata: 'Warna air seduhan cokelat keemasan jernih dengan kepulan asap uap tipis meliuk-liuk di atas cangkir.',
      telinga: 'Terdengar desah uap hangat dan dentingan sendok saat diaduk perlahan di dalam cangkir.',
      hidung: 'Aroma wangi bunga melati yang menenangkan dan harum teh herbal sangat terasa saat dihirup.',
      lidah: 'Rasa sedikit sepat manis lembut yang hangat mengalir di tenggorokan saat diseruput pelan.',
      kulit: 'Dinding cangkir terasa hangat di telapak tangan, menghangatkan jari-jari saat dipegang.'
    }
  },
  {
    id: 'bunga-mawar',
    nama: 'Setangkai Bunga Mawar Merah',
    kategori: 'Tumbuhan',
    emoji: '🌹',
    deskripsi: 'Bunga mawar merah mekar dengan kelopak tersusun rapi dan tangkai berduri.',
    observasi: {
      mata: 'Kelopak berwarna merah tua beludru yang tersusun melingkar anggun, dengan daun hijau runcing dan duri tajam.',
      telinga: 'Terdengar gesekan daun yang berbisik lembut "srek-srek" saat disentuh angin sepoi-sepoi.',
      hidung: 'Aroma manis alami khas kelopak mawar yang semerbak dan harum lembut.',
      lidah: '(Tidak untuk dikonsumsi langsung, sebaiknya tidak dicicipi sembarangan).',
      kulit: 'Kelopaknya terasa sangat lembut seperti kain beludru sutra, namun tangkainya memiliki duri tajam yang harus dihindari.'
    }
  }
];
