import type { ResumeData, TemplateType } from '../types/resume';
import MinimalTemplate from './templates/MinimalTemplate';
import ModernTemplate from './templates/ModernTemplate';
import CompactTemplate from './templates/CompactTemplate';

interface Props {
  data: ResumeData;
  template: TemplateType;
}

export default function ResumePreview({ data, template }: Props) {
  const templates: Record<TemplateType, React.ComponentType<{ data: ResumeData }>> = {
    minimal: MinimalTemplate,
    modern: ModernTemplate,
    compact: CompactTemplate,
  };

  const Template = templates[template];

  return (
    <div className="w-full overflow-auto bg-gray-100 rounded-2xl border border-[#5392d5]/20 p-4">
      <div className="w-[210mm] mx-auto shadow-lg transform origin-top scale-[0.55] lg:scale-[0.65] xl:scale-[0.75]">
        <Template data={data} />
      </div>
    </div>
  );
}
