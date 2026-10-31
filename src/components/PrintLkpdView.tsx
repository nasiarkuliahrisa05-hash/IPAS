import React from 'react';
import { LkpdData } from '../types/lkpd';

interface PrintLkpdViewProps {
  data: LkpdData;
}

export const PrintLkpdView: React.FC<PrintLkpdViewProps> = ({ data }) => {
  const c1 = data.misi2[0] || { judul: '', indra: '', penjelasan: '' };
  const c2 = data.misi2[1] || { judul: '', indra: '', penjelasan: '' };
  const c3 = data.misi2[2] || { judul: '', indra: '', penjelasan: '' };
  const c4 = data.misi2[3] || { judul: '', indra: '', penjelasan: '' };

  return (
    <div className="hidden print:block text-black bg-white p-6 font-sans text-xs leading-relaxed max-w-4xl mx-auto">
      {/* Kop Lembar Kerja */}
      <div className="text-center border-b-2 border-black pb-3 mb-4">
        <h1 className="text-base font-bold uppercase tracking-wider">
          LEMBAR KERJA PESERTA DIDIK (LKPD) DIGITAL
        </h1>
        <h2 className="text-sm font-bold uppercase">
          DETEKTIF INDERA — INVESTIGASI PANCA INDERA MANUSIA
        </h2>
        <p className="text-[11px] text-gray-700 mt-0.5">
          Mata Pelajaran: Ilmu Pengetahuan Alam dan Sosial (IPAS) / Tematik Sains
        </p>
      </div>

      {/* Identitas Kelompok */}
      <div className="border border-black p-3 mb-4 rounded-xs">
        <table className="w-full text-xs">
          <tbody>
            <tr>
              <td className="w-28 font-bold py-1">Kelompok</td>
              <td className="w-4">:</td>
              <td className="font-semibold">{data.kelompok || '................................................'}</td>
              <td className="w-20 font-bold py-1">Kelas</td>
              <td className="w-4">:</td>
              <td>{data.kelas || '......................'}</td>
            </tr>
            <tr>
              <td className="font-bold py-1 align-top">Anggota</td>
              <td className="align-top">:</td>
              <td className="whitespace-pre-line">
                {data.anggota || '................................................'}
              </td>
              <td className="font-bold py-1 align-top">Tanggal</td>
              <td className="align-top">:</td>
              <td className="align-top">{data.tanggal || '......................'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* HASIL MISI 1 */}
      <div className="mb-4">
        <h3 className="font-bold text-xs uppercase bg-gray-200 px-2 py-1 border border-black mb-1">
          HASIL MISI 1: PENGAMATAN 5 PANCA INDERA
        </h3>
        <div className="border border-black p-2.5 space-y-1.5 text-xs">
          <p>
            <span className="font-bold">👁️ Mata (Melihat):</span>{' '}
            {data.misi1.mata || '....................................................................................................................'}
          </p>
          <p>
            <span className="font-bold">👂 Telinga (Mendengar):</span>{' '}
            {data.misi1.telinga || '....................................................................................................................'}
          </p>
          <p>
            <span className="font-bold">👃 Hidung (Mencium):</span>{' '}
            {data.misi1.hidung || '....................................................................................................................'}
          </p>
          <p>
            <span className="font-bold">👅 Lidah (Mengecap):</span>{' '}
            {data.misi1.lidah || '....................................................................................................................'}
          </p>
          <p>
            <span className="font-bold">✋ Kulit (Meraba):</span>{' '}
            {data.misi1.kulit || '....................................................................................................................'}
          </p>
        </div>
      </div>

      {/* HASIL MISI 2 */}
      <div className="mb-4">
        <h3 className="font-bold text-xs uppercase bg-gray-200 px-2 py-1 border border-black mb-1">
          HASIL MISI 2: MEMECAHKAN KASUS DETEKTIF INDERA
        </h3>
        <div className="border border-black divide-y divide-black text-xs">
          {/* Kasus 1 */}
          <div className="p-2">
            <p className="font-bold">
              Kasus 1: <span className="font-normal">{c1.judul || c1.skenario}</span>
            </p>
            <p className="mt-1">
              <span className="font-bold">Indra:</span> {c1.indra || '..............................'}
            </p>
            <p className="mt-0.5">
              <span className="font-bold">Penjelasan:</span>{' '}
              {c1.penjelasan || '....................................................................................................................'}
            </p>
          </div>

          {/* Kasus 2 */}
          <div className="p-2">
            <p className="font-bold">
              Kasus 2: <span className="font-normal">{c2.judul || c2.skenario}</span>
            </p>
            <p className="mt-1">
              <span className="font-bold">Indra:</span> {c2.indra || '..............................'}
            </p>
            <p className="mt-0.5">
              <span className="font-bold">Penjelasan:</span>{' '}
              {c2.penjelasan || '....................................................................................................................'}
            </p>
          </div>

          {/* Kasus 3 */}
          <div className="p-2">
            <p className="font-bold">
              Kasus 3: <span className="font-normal">{c3.judul || c3.skenario}</span>
            </p>
            <p className="mt-1">
              <span className="font-bold">Indra:</span> {c3.indra || '..............................'}
            </p>
            <p className="mt-0.5">
              <span className="font-bold">Penjelasan:</span>{' '}
              {c3.penjelasan || '....................................................................................................................'}
            </p>
          </div>

          {/* Kasus 4 */}
          <div className="p-2">
            <p className="font-bold">
              Kasus 4: <span className="font-normal">{c4.judul || c4.skenario}</span>
            </p>
            <p className="mt-1">
              <span className="font-bold">Indra:</span> {c4.indra || '..............................'}
            </p>
            <p className="mt-0.5">
              <span className="font-bold">Penjelasan:</span>{' '}
              {c4.penjelasan || '....................................................................................................................'}
            </p>
          </div>
        </div>
      </div>

      {/* KESIMPULAN */}
      <div className="mb-4">
        <h3 className="font-bold text-xs uppercase bg-gray-200 px-2 py-1 border border-black mb-1">
          KESIMPULAN:
        </h3>
        <div className="border border-black p-2.5 text-xs space-y-1">
          <p>1. {data.kesimpulan.poin1 || '....................................................................................................................'}</p>
          <p>2. {data.kesimpulan.poin2 || '....................................................................................................................'}</p>
          <p>3. {data.kesimpulan.poin3 || '....................................................................................................................'}</p>
          <p className="pt-1 font-bold">
            Perasaan: <span className="font-normal">{data.perasaan || 'Senang sekali! 😍'}</span>
          </p>
        </div>
      </div>

      {/* Tanda Tangan */}
      <div className="grid grid-cols-2 gap-8 text-center text-xs mt-6 pt-2">
        <div>
          <p>Mengetahui,</p>
          <p className="font-bold mb-14">Guru Pembimbing Sains / Wali Kelas</p>
          <p>( .................................................... )</p>
          <p className="text-[10px] text-gray-600">NIP: .......................................</p>
        </div>
        <div>
          <p>{data.tanggal || '........................, 2026'}</p>
          <p className="font-bold mb-14">Ketua Tim Penyelidik / Detektif</p>
          <p>( .................................................... )</p>
          <p className="text-[10px] text-gray-600">Kelompok: {data.kelompok || '..................'}</p>
        </div>
      </div>
    </div>
  );
};
