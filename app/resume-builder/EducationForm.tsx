import { Plus, Trash2 } from 'lucide-react';
import type { Education } from '../../types/resume';

interface Props {
  data: Education[];
  onChange: (data: Education[]) => void;
}

export default function EducationForm({ data, onChange }: Props) {
  const addEducation = () => {
    onChange([
      ...data,
      {
        id: crypto.randomUUID(),
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        gpa: '',
      },
    ]);
  };

  const removeEducation = (id: string) => {
    onChange(data.filter((edu) => edu.id !== id));
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    onChange(data.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)));
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-[#151515] font-heading">Education</h3>
        <button
          type="button"
          onClick={addEducation}
          className="inline-flex items-center px-3 py-1.5 text-sm bg-[#5392d5]/10 text-[#5392d5] border border-[#5392d5]/30 rounded-lg hover:bg-[#5392d5]/20 transition-colors font-heading font-semibold"
        >
          <Plus className="w-4 h-4 mr-1" /> Add
        </button>
      </div>

      {data.length === 0 && (
        <p className="text-sm text-[#4A4A4A] italic font-body">No education added yet.</p>
      )}

      <div className="space-y-5">
        {data.map((edu) => (
          <div key={edu.id} className="p-5 bg-gray-50 border border-[#5392d5]/20 rounded-2xl space-y-4">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => removeEducation(edu.id)}
                className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                placeholder="University / Institution"
                className="w-full px-3 py-2.5 bg-white border-2 border-[#5392d5]/20 rounded-xl text-sm text-[#151515] placeholder-[#151515]/40 focus:outline-none focus:border-[#5392d5] transition-all duration-300 font-body"
              />
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                placeholder="Degree (e.g. B.Tech, MBA)"
                className="w-full px-3 py-2.5 bg-white border-2 border-[#5392d5]/20 rounded-xl text-sm text-[#151515] placeholder-[#151515]/40 focus:outline-none focus:border-[#5392d5] transition-all duration-300 font-body"
              />
              <input
                type="text"
                value={edu.field}
                onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                placeholder="Field of Study"
                className="w-full px-3 py-2.5 bg-white border-2 border-[#5392d5]/20 rounded-xl text-sm text-[#151515] placeholder-[#151515]/40 focus:outline-none focus:border-[#5392d5] transition-all duration-300 font-body"
              />
              <input
                type="text"
                value={edu.gpa}
                onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                placeholder="GPA / Percentage (optional)"
                className="w-full px-3 py-2.5 bg-white border-2 border-[#5392d5]/20 rounded-xl text-sm text-[#151515] placeholder-[#151515]/40 focus:outline-none focus:border-[#5392d5] transition-all duration-300 font-body"
              />
              <input
                type="text"
                value={edu.startDate}
                onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                placeholder="Start Year"
                className="w-full px-3 py-2.5 bg-white border-2 border-[#5392d5]/20 rounded-xl text-sm text-[#151515] placeholder-[#151515]/40 focus:outline-none focus:border-[#5392d5] transition-all duration-300 font-body"
              />
              <input
                type="text"
                value={edu.endDate}
                onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                placeholder="End Year"
                className="w-full px-3 py-2.5 bg-white border-2 border-[#5392d5]/20 rounded-xl text-sm text-[#151515] placeholder-[#151515]/40 focus:outline-none focus:border-[#5392d5] transition-all duration-300 font-body"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
