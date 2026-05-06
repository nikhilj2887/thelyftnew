interface Props {
  data: string;
  onChange: (data: string) => void;
}

export default function SummaryForm({ data, onChange }: Props) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-[#151515] font-heading">Professional Summary</h3>
      <p className="text-sm text-[#4A4A4A] font-body">
        Write a concise 2-3 sentence overview highlighting your experience, key skills, and career objectives.
      </p>
      <textarea
        value={data}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        placeholder="Results-driven software engineer with 5+ years of experience building scalable web applications..."
        className="w-full px-4 py-3 bg-gray-50 border-2 border-[#5392d5]/20 rounded-xl text-[#151515] placeholder-[#151515]/40 focus:outline-none focus:border-[#5392d5] focus:bg-white transition-all duration-300 resize-none text-sm font-body"
      />
    </div>
  );
}
