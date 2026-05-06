import { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface Props {
  data: string[];
  onChange: (data: string[]) => void;
}

export default function SkillsForm({ data, onChange }: Props) {
  const [input, setInput] = useState('');

  const addSkill = () => {
    const trimmed = input.trim();
    if (trimmed && !data.includes(trimmed)) {
      onChange([...data, trimmed]);
      setInput('');
    }
  };

  const removeSkill = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-[#151515] font-heading">Skills</h3>
      <p className="text-sm text-[#4A4A4A] font-body">
        Add your technical and soft skills. Press Enter or click Add after each skill.
      </p>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a skill (e.g. React, Python, Leadership)"
          className="flex-1 px-3 py-2.5 bg-gray-50 border-2 border-[#5392d5]/20 rounded-xl text-sm text-[#151515] placeholder-[#151515]/40 focus:outline-none focus:border-[#5392d5] focus:bg-white transition-all duration-300 font-body"
        />
        <button
          type="button"
          onClick={addSkill}
          className="inline-flex items-center px-4 py-2.5 bg-[#5392d5]/10 text-[#5392d5] border border-[#5392d5]/30 rounded-xl hover:bg-[#5392d5]/20 transition-colors font-heading font-semibold text-sm"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {data.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {data.map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#5392d5]/10 border border-[#5392d5]/30 rounded-lg text-sm text-[#151515] font-body"
            >
              {skill}
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="text-[#5392d5] hover:text-red-500 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
