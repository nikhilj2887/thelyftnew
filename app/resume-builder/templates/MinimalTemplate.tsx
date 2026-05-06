import type { ResumeData } from '../../types/resume';

interface Props {
  data: ResumeData;
}

export default function MinimalTemplate({ data }: Props) {
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
    <div className="font-['Georgia',serif] text-[11px] leading-[1.5] text-[#333] p-8 bg-white min-h-[297mm] w-full">
      {/* Header */}
      <header className="text-center border-b-2 border-[#333] pb-4 mb-5">
        {personalInfo.fullName && (
          <h1 className="text-2xl font-bold tracking-wide uppercase text-[#111] mb-1">
            {personalInfo.fullName}
          </h1>
        )}

        {personalInfo.jobTitle && (
          <p className="text-sm text-[#555] mb-2">
            {personalInfo.jobTitle}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[10px] text-[#555]">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.portfolio && <span>{personalInfo.portfolio}</span>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest border-b border-[#ccc] pb-1 mb-2 text-[#111]">
            Professional Summary
          </h2>

          <p className="text-[#444]">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest border-b border-[#ccc] pb-1 mb-2 text-[#111]">
            Work Experience
          </h2>

          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[#111]">
                    {exp.position}
                  </h3>

                  <span className="text-[10px] text-[#666]">
                    {exp.startDate} —{" "}
                    {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>

                <p className="text-[#555] italic">
                  {exp.company}
                  {exp.location && `, ${exp.location}`}
                </p>

                {exp.description.filter(Boolean).length > 0 && (
                  <ul className="mt-1 ml-4 list-disc text-[#444]">
                    {exp.description
                      .filter(Boolean)
                      .map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest border-b border-[#ccc] pb-1 mb-2 text-[#111]">
            Education
          </h2>

          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[#111]">
                    {edu.degree}
                    {edu.field && ` in ${edu.field}`}
                  </h3>

                  <span className="text-[10px] text-[#666]">
                    {edu.startDate} — {edu.endDate}
                  </span>
                </div>

                <p className="text-[#555]">
                  {edu.institution}
                  {edu.gpa && ` | GPA: ${edu.gpa}`}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest border-b border-[#ccc] pb-1 mb-2 text-[#111]">
            Skills
          </h2>

          <p className="text-[#444]">
            {skills.join(' • ')}
          </p>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest border-b border-[#ccc] pb-1 mb-2 text-[#111]">
            Projects
          </h2>

          <div className="space-y-3">
            {projects.map((proj) => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[#111]">
                    {proj.title}
                  </h3>

                  {proj.link && (
                    <span className="text-[10px] text-[#666]">
                      {proj.link}
                    </span>
                  )}
                </div>

                {proj.technologies && (
                  <p className="text-[10px] text-[#666] italic">
                    {proj.technologies}
                  </p>
                )}

                {proj.description && (
                  <p className="text-[#444] mt-0.5">
                    {proj.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest border-b border-[#ccc] pb-1 mb-2 text-[#111]">
            Certifications
          </h2>

          <div className="space-y-1">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between">
                <span className="text-[#444]">
                  <span className="font-bold">
                    {cert.name}
                  </span>

                  {cert.issuer && ` — ${cert.issuer}`}
                </span>

                {cert.date && (
                  <span className="text-[10px] text-[#666]">
                    {cert.date}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest border-b border-[#ccc] pb-1 mb-2 text-[#111]">
            Achievements
          </h2>

          <ul className="ml-4 list-disc text-[#444]">
            {achievements.map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}