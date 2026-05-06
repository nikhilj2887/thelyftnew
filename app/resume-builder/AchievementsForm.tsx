import { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface Props {
  data: string[];
  onChange: (data: string[]) => void;
}

export default function AchievementsForm({ data, onChange }: Props) {
  const [input, setInput] = useState('');

  const addAchievement = () => {
    const trimmed = input.trim();
    if (trimmed) {
      onChange([...data, trimmed]);
      setInput('');
    }
  };

  const removeAchievement = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addAchievement();
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-[#151515] font-heading">Achievements</h3>
      <p className="text-sm text-[#4A4A4A] font-body">
        Add notable achievements, awards, or recognitions.
      </p>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g. Employee of the Year 2023, Published 3 research papers"
          className="flex-1 px-3 py-2.5 bg-gray-50 border-2 border-[#5392d5]/20 rounded-xl text-sm text-[#151515] placeholder-[#151515]/40 focus:outline-none focus:border-[#5392d5] focus:bg-white transition-all duration-300 font-body"
        />
        <button
          type="button"
          onClick={addAchievement}
          className="inline-flex items-center px-4 py-2.5 bg-[#5392d5]/10 text-[#5392d5] border border-[#5392d5]/30 rounded-xl hover:bg-[#5392d5]/20 transition-colors font-heading font-semibold text-sm"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {data.length > 0 && (
        <ul className="space-y-2 pt-2">
          {data.map((achievement, index) => (
            <li
              key={index}
              className="flex items-center justify-between px-4 py-2.5 bg-gray-50 border border-[#5392d5]/20 rounded-xl"
            >
              <span className="text-sm text-[#151515] font-body">{achievement}</span>
              <button
                type="button"
                onClick={() => removeAchievement(index)}
                className="ml-3 text-[#5392d5] hover:text-red-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
