import type { ResumeData } from '../../types/resume';

interface Props {
  data: ResumeData;
}

export default function ModernTemplate({ data }: Props) {
  const { personal, summary, experience, education, skills, projects, certifications, achievements } = data;

  return (
    <div className="font-['Helvetica_Neue',Arial,sans-serif] text-[11px] leading-[1.5] text-[#333] bg-white min-h-[297mm] w-full">
      {/* Header with accent */}
      <header className="bg-[#1a365d] text-white px-8 py-6">
        {personal.fullName && (
          <h1 className="text-2xl font-bold tracking-wide mb-1">{personal.fullName}</h1>
        )}
        {personal.jobTitle && (
          <p className="text-sm text-blue-200 mb-3">{personal.jobTitle}</p>
        )}
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-[10px] text-blue-100">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.linkedin && <span>{personal.linkedin}</span>}
          {personal.portfolio && <span>{personal.portfolio}</span>}
        </div>
      </header>

      <div className="px-8 py-6">
        {/* Summary */}
        {summary && (
          <section className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#1a365d] border-b-2 border-[#1a365d] pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-[#444]">{summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#1a365d] border-b-2 border-[#1a365d] pb-1 mb-2">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-[#1a365d]">{exp.position}</h3>
                    <span className="text-[10px] text-[#666] whitespace-nowrap ml-4">
                      {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <p className="text-[#555] font-medium">
                    {exp.company}{exp.location && ` | ${exp.location}`}
                  </p>
                  {exp.description.filter(Boolean).length > 0 && (
                    <ul className="mt-1.5 ml-4 list-disc text-[#444] space-y-0.5">
                      {exp.description.filter(Boolean).map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {/* Education */}
            {education.length > 0 && (
              <section className="mb-5">
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1a365d] border-b-2 border-[#1a365d] pb-1 mb-2">
                  Education
                </h2>
                <div className="space-y-3">
                  {education.map((edu) => (
                    <div key={edu.id}>
                      <h3 className="font-bold text-[#111]">
                        {edu.degree}{edu.field && ` in ${edu.field}`}
                      </h3>
                      <p className="text-[#555]">{edu.institution}</p>
                      <p className="text-[10px] text-[#666]">
                        {edu.startDate} — {edu.endDate}
                        {edu.gpa && ` | GPA: ${edu.gpa}`}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Certifications */}
            {certifications.length > 0 && (
              <section className="mb-5">
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1a365d] border-b-2 border-[#1a365d] pb-1 mb-2">
                  Certifications
                </h2>
                <div className="space-y-1.5">
                  {certifications.map((cert) => (
                    <div key={cert.id}>
                      <span className="font-bold text-[#111]">{cert.name}</span>
                      {cert.issuer && <span className="text-[#555]"> — {cert.issuer}</span>}
                      {cert.date && <span className="text-[10px] text-[#666] ml-2">{cert.date}</span>}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div>
            {/* Skills */}
            {skills.length > 0 && (
              <section className="mb-5">
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1a365d] border-b-2 border-[#1a365d] pb-1 mb-2">
                  Skills
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill, i) => (
                    <span key={i} className="px-2 py-0.5 bg-[#edf2f7] text-[#1a365d] rounded text-[10px]">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Achievements */}
            {achievements.length > 0 && (
              <section className="mb-5">
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#1a365d] border-b-2 border-[#1a365d] pb-1 mb-2">
                  Achievements
                </h2>
                <ul className="ml-4 list-disc text-[#444] space-y-0.5">
                  {achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>

        {/* Projects */}
        {projects.length > 0 && (
          <section className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#1a365d] border-b-2 border-[#1a365d] pb-1 mb-2">
              Projects
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-[#111]">{proj.name}</h3>
                    {proj.link && <span className="text-[10px] text-[#1a365d]">{proj.link}</span>}
                  </div>
                  {proj.technologies && (
                    <p className="text-[10px] text-[#666] italic">{proj.technologies}</p>
                  )}
                  {proj.description && <p className="text-[#444] mt-0.5">{proj.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
