"use client";

import { useState, useRef } from "react";
import {
  Download,
  Eye,
  CreditCard as Edit3,
  FileText,
  LayoutGrid as Layout,
  Columns2 as Columns,
} from "lucide-react";

import PersonalInfoForm from './PersonalInfoForm';
import SummaryForm from './SummaryForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import ProjectsForm from './ProjectsForm';
import CertificationsForm from './CertificationsForm';
import AchievementsForm from './AchievementsForm';
import Navbar from "../components/Navbar";

import MinimalTemplate from './templates/MinimalTemplate';
import ModernTemplate from './templates/ModernTemplate';
import CompactTemplate from './templates/CompactTemplate';
import type { ResumeData, TemplateType } from '../types/resume';
import { defaultResumeData } from '../types/resume';

const TEMPLATES: { id: TemplateType; name: string; description: string }[] = [
  { id: 'minimal', name: 'Minimal Professional', description: 'Clean serif layout — traditional and ATS-optimized' },
  { id: 'modern', name: 'Modern Executive', description: 'Bold header with structured sections' },
  { id: 'compact', name: 'Compact Technical', description: 'Two-column layout maximizing space' },
];

type ViewMode = 'edit' | 'preview' | 'split';

export default function ResumeBuilderPage() {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [template, setTemplate] = useState<TemplateType>('minimal');
  const [viewMode, setViewMode] = useState<ViewMode>('split');
  const printRef = useRef<HTMLDivElement>(null);

  const handleExportPDF = () => {
    if (!printRef.current) return;
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const content = printRef.current.innerHTML;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${resumeData.personal.fullName || 'Resume'}</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Georgia', serif; }
            @media print {
              body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            }
          </style>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
          ${content}
          <script>
            setTimeout(() => { window.print(); window.close(); }, 500);
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const TemplateComponent = {
    minimal: MinimalTemplate,
    modern: ModernTemplate,
    compact: CompactTemplate,
  }[template];

  const renderForm = () => (
    <div className="space-y-8 p-6 overflow-y-auto max-h-[calc(100vh-12rem)]">
      <PersonalInfoForm
        data={resumeData.personal}
        onChange={(personal) => setResumeData({ ...resumeData, personal })}
      />
      <hr className="border-[#5392d5]/10" />
      <SummaryForm
        data={resumeData.summary}
        onChange={(summary) => setResumeData({ ...resumeData, summary })}
      />
      <hr className="border-[#5392d5]/10" />
      <ExperienceForm
        data={resumeData.experience}
        onChange={(experience) => setResumeData({ ...resumeData, experience })}
      />
      <hr className="border-[#5392d5]/10" />
      <EducationForm
        data={resumeData.education}
        onChange={(education) => setResumeData({ ...resumeData, education })}
      />
      <hr className="border-[#5392d5]/10" />
      <SkillsForm
        data={resumeData.skills}
        onChange={(skills) => setResumeData({ ...resumeData, skills })}
      />
      <hr className="border-[#5392d5]/10" />
      <ProjectsForm
        data={resumeData.projects}
        onChange={(projects) => setResumeData({ ...resumeData, projects })}
      />
      <hr className="border-[#5392d5]/10" />
      <CertificationsForm
        data={resumeData.certifications}
        onChange={(certifications) => setResumeData({ ...resumeData, certifications })}
      />
      <hr className="border-[#5392d5]/10" />
      <AchievementsForm
        data={resumeData.achievements}
        onChange={(achievements) => setResumeData({ ...resumeData, achievements })}
      />
    </div>
  );

  const renderPreview = () => (
    <div className="overflow-auto max-h-[calc(100vh-12rem)] p-4 bg-gray-100">
      <div className="w-[210mm] mx-auto shadow-xl" style={{ transform: viewMode === 'split' ? 'scale(0.6)' : 'scale(0.75)', transformOrigin: 'top center' }}>
        <TemplateComponent data={resumeData} />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      <Navbar />

      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#5392d5] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f0c831] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 pt-20">
        {/* Header */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <div className="inline-block px-4 py-2 bg-[#5392d5]/10 backdrop-blur-sm border border-[#5392d5]/30 rounded-full text-sm text-[#5392d5] mb-3 font-heading font-semibold">
                ATS Resume Builder
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold text-[#151515] font-heading">
                Build Your <span className="text-[#5392d5]">Perfect Resume</span>
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Template Selector */}
              <select
                value={template}
                onChange={(e) => setTemplate(e.target.value as TemplateType)}
                className="px-4 py-2.5 bg-white border-2 border-[#5392d5]/20 rounded-xl text-sm text-[#151515] focus:outline-none focus:border-[#5392d5] transition-all duration-300 font-body"
              >
                {TEMPLATES.map((t) => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-white border-2 border-[#5392d5]/20 rounded-xl overflow-hidden">
                <button
                  onClick={() => setViewMode('edit')}
                  className={`p-2.5 transition-colors ${viewMode === 'edit' ? 'bg-[#5392d5] text-white' : 'text-[#4A4A4A] hover:bg-[#5392d5]/10'}`}
                  title="Edit only"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('split')}
                  className={`p-2.5 transition-colors ${viewMode === 'split' ? 'bg-[#5392d5] text-white' : 'text-[#4A4A4A] hover:bg-[#5392d5]/10'}`}
                  title="Split view"
                >
                  <Columns className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('preview')}
                  className={`p-2.5 transition-colors ${viewMode === 'preview' ? 'bg-[#5392d5] text-white' : 'text-[#4A4A4A] hover:bg-[#5392d5]/10'}`}
                  title="Preview only"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Export Button */}
              <button
                onClick={handleExportPDF}
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-[#5392d5] to-[#2F6FB3] text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-[#5392d5]/30 transition-all duration-300 transform hover:-translate-y-0.5 font-heading"
              >
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </button>
            </div>
          </div>

          {/* Template Info */}
          <div className="mt-4 flex items-center gap-6">
            {TEMPLATES.map((t) => (
              <button
                key={t.id}
                onClick={() => setTemplate(t.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-all duration-300 font-body ${
                  template === t.id
                    ? 'bg-[#5392d5]/10 border border-[#5392d5]/40 text-[#5392d5] font-semibold'
                    : 'text-[#4A4A4A] hover:bg-gray-100'
                }`}
              >
                {t.id === 'minimal' && <FileText className="w-4 h-4" />}
                {t.id === 'modern' && <Layout className="w-4 h-4" />}
                {t.id === 'compact' && <Columns className="w-4 h-4" />}
                <span className="hidden sm:inline">{t.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className={`grid gap-6 ${
            viewMode === 'split' ? 'grid-cols-1 lg:grid-cols-2' :
            'grid-cols-1'
          }`}>
            {/* Form Panel */}
            {(viewMode === 'edit' || viewMode === 'split') && (
              <div className="bg-white backdrop-blur-xl border border-[#5392d5]/20 rounded-3xl shadow-lg overflow-hidden">
                {renderForm()}
              </div>
            )}

            {/* Preview Panel */}
            {(viewMode === 'preview' || viewMode === 'split') && (
              <div className="bg-white backdrop-blur-xl border border-[#5392d5]/20 rounded-3xl shadow-lg overflow-hidden">
                {renderPreview()}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hidden print area */}
      <div className="fixed top-[-9999px] left-[-9999px]" aria-hidden="true">
        <div ref={printRef}>
          <TemplateComponent data={resumeData} />
        </div>
      </div>
    </div>
  );
}
