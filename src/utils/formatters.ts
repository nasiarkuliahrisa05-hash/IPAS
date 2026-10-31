import { LkpdData } from '../types/lkpd';

/**
 * Format the LKPD state exactly as requested by the user prompt
 */
export function formatLkpdToPlainText(data: LkpdData): string {
  // Format anggota into a clean single or multi-line string
  const cleanAnggota = data.anggota.trim() || '-';
  const cleanKelompok = data.kelompok.trim() || '-';
  const cleanKelas = data.kelas.trim() || '-';
  const cleanTanggal = data.tanggal.trim() || '-';

  const m1 = data.misi1;
  const c1 = data.misi2[0] || { judul: '', indra: '', penjelasan: '' };
  const c2 = data.misi2[1] || { judul: '', indra: '', penjelasan: '' };
  const c3 = data.misi2[2] || { judul: '', indra: '', penjelasan: '' };
  const c4 = data.misi2[3] || { judul: '', indra: '', penjelasan: '' };

  const lines = [
    'LKPD DIGITAL DETEKTIF INDERA',
    `Kelompok: ${cleanKelompok}`,
    `Anggota: ${cleanAnggota.includes('\n') ? '\n' + cleanAnggota : cleanAnggota}`,
    `Kelas: ${cleanKelas}`,
    `Tanggal: ${cleanTanggal}`,
    '',
    'HASIL MISI 1:',
    `👁️ Mata (Melihat): ${m1.mata || '-'}`,
    `👂 Telinga (Mendengar): ${m1.telinga || '-'}`,
    `👃 Hidung (Mencium): ${m1.hidung || '-'}`,
    `👅 Lidah (Mengecap): ${m1.lidah || '-'}`,
    `✋ Kulit (Meraba): ${m1.kulit || '-'}`,
    '',
    'HASIL MISI 2:',
    `Kasus 1: ${c1.judul || c1.skenario || '-'}`,
    `Indra: ${c1.indra || '-'}`,
    `Penjelasan: ${c1.penjelasan || '-'}`,
    `Kasus 2: ${c2.judul || c2.skenario || '-'}`,
    `Indra: ${c2.indra || '-'}`,
    `Penjelasan: ${c2.penjelasan || '-'}`,
    `Kasus 3: ${c3.judul || c3.skenario || '-'}`,
    `Indra: ${c3.indra || '-'}`,
    `Penjelasan: ${c3.penjelasan || '-'}`,
    `Kasus 4: ${c4.judul || c4.skenario || '-'}`,
    `Indra: ${c4.indra || '-'}`,
    `Penjelasan: ${c4.penjelasan || '-'}`,
    '',
    'KESIMPULAN:',
    `1. ${data.kesimpulan.poin1 || '-'}`,
    `2. ${data.kesimpulan.poin2 || '-'}`,
    `3. ${data.kesimpulan.poin3 || '-'}`,
    `Perasaan: ${data.perasaan || 'Senang sekali! 😍'}`
  ];

  return lines.join('\n');
}
