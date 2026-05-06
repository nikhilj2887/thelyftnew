import { Plus, Trash2 } from 'lucide-react';
import type { Project } from '../types/resume';

interface Props {
  data: Project[];
  onChange: (data: Project[]) => void;
}

export default function ProjectsForm({ data, onChange }: Props) {
  const addProject = () => {
    onChange([
      ...data,
      { id: crypto.randomUUID(), name: '', description: '', technologies: '', link: '' },
    ]);
  };

  const removeProject = (id: string) => {
    onChange(data.filter((p) => p.id !== id));
  };

  const updateProject = (id: string, field: keyof Project, value: string) => {
    onChange(data.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-[#151515] font-heading">Projects</h3>
        <button
          type="button"
          onClick={addProject}
          className="inline-flex items-center px-3 py-1.5 text-sm bg-[#5392d5]/10 text-[#5392d5] border border-[#5392d5]/30 rounded-lg hover:bg-[#5392d5]/20 transition-colors font-heading font-semibold"
        >
          <Plus className="w-4 h-4 mr-1" /> Add
        </button>
      </div>

      {data.length === 0 && (
        <p className="text-sm text-[#4A4A4A] italic font-body">No projects added yet.</p>
      )}

      <div className="space-y-5">
        {data.map((project) => (
          <div key={project.id} className="p-5 bg-gray-50 border border-[#5392d5]/20 rounded-2xl space-y-4">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => removeProject(project.id)}
                className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                value={project.name}
                onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                placeholder="Project Name"
                className="w-full px-3 py-2.5 bg-white border-2 border-[#5392d5]/20 rounded-xl text-sm text-[#151515] placeholder-[#151515]/40 focus:outline-none focus:border-[#5392d5] transition-all duration-300 font-body"
              />
              <input
                type="text"
                value={project.link}
                onChange={(e) => updateProject(project.id, 'link', e.target.value)}
                placeholder="Project Link (optional)"
                className="w-full px-3 py-2.5 bg-white border-2 border-[#5392d5]/20 rounded-xl text-sm text-[#151515] placeholder-[#151515]/40 focus:outline-none focus:border-[#5392d5] transition-all duration-300 font-body"
              />
            </div>
            <input
              type="text"
              value={project.technologies}
              onChange={(e) => updateProject(project.id, 'technologies', e.target.value)}
              placeholder="Technologies used (e.g. React, Node.js, PostgreSQL)"
              className="w-full px-3 py-2.5 bg-white border-2 border-[#5392d5]/20 rounded-xl text-sm text-[#151515] placeholder-[#151515]/40 focus:outline-none focus:border-[#5392d5] transition-all duration-300 font-body"
            />
            <textarea
              value={project.description}
              onChange={(e) => updateProject(project.id, 'description', e.target.value)}
              placeholder="Brief description of the project and your role..."
              rows={3}
              className="w-full px-3 py-2.5 bg-white border-2 border-[#5392d5]/20 rounded-xl text-sm text-[#151515] placeholder-[#151515]/40 focus:outline-none focus:border-[#5392d5] transition-all duration-300 resize-none font-body"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
