import type { ResumeData } from '../../types/resume';

interface Props {
  data: ResumeData;
}

export default function CompactTemplate({ data }: Props) {
  const {
  personalInfo,
  summary,
  experience,
  education,
  skills,
  projects,
  certifications,
  achievements,
} = data;

  return (
    <div className="font-['Roboto',sans-serif] text-[10px] leading-[1.45] text-[#333] p-6 bg-white min-h-[297mm] w-full">
      {/* Header - compact inline */}
      <header className="mb-4">
        <div className="flex items-baseline justify-between border-b border-[#222] pb-2">
          <div>
            {personalInfo..fullName && (
              <h1 className="text-xl font-bold text-[#111]">{personalInfo..fullName}</h1>
            )}
            {personalInfo..jobTitle && (
              <p className="text-[11px] text-[#555]">{personalInfo..jobTitle}</p>
            )}
          </div>
          <div className="text-right text-[9px] text-[#555] space-y-0.5">
            {personalInfo..email && <p>{personalInfo..email}</p>}
            {personalInfo..phone && <p>{personalInfo..phone}</p>}
            {personalInfo..location && <p>{personalInfo..location}</p>}
            {personalInfo..linkedin && <p>{personalInfo..linkedin}</p>}
            {personalInfo..portfolio && <p>{personalInfo..portfolio}</p>}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-[1fr_0.4fr] gap-5">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Summary */}
          {summary && (
            <section>
              <h2 className="text-[10px] font-bold uppercase tracking-wider text-[#111] mb-1 pb-0.5 border-b border-[#ddd]">
                Summary
              </h2>
              <p className="text-[#444]">{summary}</p>
            </section>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <section>
              <h2 className="text-[10px] font-bold uppercase tracking-wider text-[#111] mb-1 pb-0.5 border-b border-[#ddd]">
                Experience
              </h2>
              <div className="space-y-3">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-[#111]">{exp.position}</span>
                      <span className="text-[9px] text-[#888]">
                        {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    <p className="text-[#555]">
                      {exp.company}{exp.location && `, ${exp.location}`}
                    </p>
                    {exp.description.filter(Boolean).length > 0 && (
                      <ul className="mt-0.5 ml-3 list-disc text-[#444] space-y-0">
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

          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h2 className="text-[10px] font-bold uppercase tracking-wider text-[#111] mb-1 pb-0.5 border-b border-[#ddd]">
                Projects
              </h2>
              <div className="space-y-2">
                {projects.map((proj) => (
                  <div key={proj.id}>
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-[#111]">{proj.name}</span>
                      {proj.technologies && (
                        <span className="text-[9px] text-[#888]">[{proj.technologies}]</span>
                      )}
                    </div>
                    {proj.description && <p className="text-[#444]">{proj.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h2 className="text-[10px] font-bold uppercase tracking-wider text-[#111] mb-1 pb-0.5 border-b border-[#ddd]">
                Skills
              </h2>
              <div className="space-y-0.5">
                {skills.map((skill, i) => (
                  <p key={i} className="text-[#444]">• {skill}</p>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section>
              <h2 className="text-[10px] font-bold uppercase tracking-wider text-[#111] mb-1 pb-0.5 border-b border-[#ddd]">
                Education
              </h2>
              <div className="space-y-2">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <p className="font-bold text-[#111]">{edu.degree}</p>
                    {edu.field && <p className="text-[#444]">{edu.field}</p>}
                    <p className="text-[#555]">{edu.institution}</p>
                    <p className="text-[9px] text-[#888]">
                      {edu.startDate} — {edu.endDate}
                      {edu.gpa && ` | ${edu.gpa}`}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <section>
              <h2 className="text-[10px] font-bold uppercase tracking-wider text-[#111] mb-1 pb-0.5 border-b border-[#ddd]">
                Certifications
              </h2>
              <div className="space-y-1">
                {certifications.map((cert) => (
                  <div key={cert.id}>
                    <p className="font-bold text-[#111]">{cert.name}</p>
                    <p className="text-[9px] text-[#666]">
                      {cert.issuer}{cert.date && ` • ${cert.date}`}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Achievements */}
          {achievements.length > 0 && (
            <section>
              <h2 className="text-[10px] font-bold uppercase tracking-wider text-[#111] mb-1 pb-0.5 border-b border-[#ddd]">
                Achievements
              </h2>
              <div className="space-y-0.5">
                {achievements.map((ach, i) => (
                  <p key={i} className="text-[#444]">• {ach}</p>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
