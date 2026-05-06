import { Plus, Trash2 } from 'lucide-react';
import type { Certification } from '../../types/resume';

interface Props {
  data: Certification[];
  onChange: (data: Certification[]) => void;
}

export default function CertificationsForm({ data, onChange }: Props) {
  const addCertification = () => {
    onChange([
      ...data,
      { id: crypto.randomUUID(), name: '', issuer: '', date: '', link: '' },
    ]);
  };

  const removeCertification = (id: string) => {
    onChange(data.filter((c) => c.id !== id));
  };

  const updateCertification = (id: string, field: keyof Certification, value: string) => {
    onChange(data.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-[#151515] font-heading">Certifications</h3>
        <button
          type="button"
          onClick={addCertification}
          className="inline-flex items-center px-3 py-1.5 text-sm bg-[#5392d5]/10 text-[#5392d5] border border-[#5392d5]/30 rounded-lg hover:bg-[#5392d5]/20 transition-colors font-heading font-semibold"
        >
          <Plus className="w-4 h-4 mr-1" /> Add
        </button>
      </div>

      {data.length === 0 && (
        <p className="text-sm text-[#4A4A4A] italic font-body">No certifications added yet.</p>
      )}

      <div className="space-y-4">
        {data.map((cert) => (
          <div key={cert.id} className="p-5 bg-gray-50 border border-[#5392d5]/20 rounded-2xl space-y-4">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => removeCertification(cert.id)}
                className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                value={cert.name}
                onChange={(e) => updateCertification(cert.id, 'name', e.target.value)}
                placeholder="Certification Name"
                className="w-full px-3 py-2.5 bg-white border-2 border-[#5392d5]/20 rounded-xl text-sm text-[#151515] placeholder-[#151515]/40 focus:outline-none focus:border-[#5392d5] transition-all duration-300 font-body"
              />
              <input
                type="text"
                value={cert.issuer}
                onChange={(e) => updateCertification(cert.id, 'issuer', e.target.value)}
                placeholder="Issuing Organization"
                className="w-full px-3 py-2.5 bg-white border-2 border-[#5392d5]/20 rounded-xl text-sm text-[#151515] placeholder-[#151515]/40 focus:outline-none focus:border-[#5392d5] transition-all duration-300 font-body"
              />
              <input
                type="text"
                value={cert.date}
                onChange={(e) => updateCertification(cert.id, 'date', e.target.value)}
                placeholder="Date Issued"
                className="w-full px-3 py-2.5 bg-white border-2 border-[#5392d5]/20 rounded-xl text-sm text-[#151515] placeholder-[#151515]/40 focus:outline-none focus:border-[#5392d5] transition-all duration-300 font-body"
              />
              <input
                type="text"
                value={cert.link}
                onChange={(e) => updateCertification(cert.id, 'link', e.target.value)}
                placeholder="Credential URL (optional)"
                className="w-full px-3 py-2.5 bg-white border-2 border-[#5392d5]/20 rounded-xl text-sm text-[#151515] placeholder-[#151515]/40 focus:outline-none focus:border-[#5392d5] transition-all duration-300 font-body"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
