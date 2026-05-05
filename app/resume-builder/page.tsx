"use client";

import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ResumeBuilder() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const [template, setTemplate] = useState("classic");

  const [form, setForm] = useState({
    name: "",
    title: "",
    summary: "",
    skills: "",
    experience: [{ company: "", role: "", duration: "", description: "" }],
    education: [{ institution: "", degree: "", year: "" }],
    projects: [{ name: "", description: "" }],
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // EXPERIENCE
  const handleExp = (i: number, field: string, value: string) => {
    const updated = [...form.experience];
    updated[i][field as keyof typeof updated[0]] = value;
    setForm({ ...form, experience: updated });
  };

  const addExp = () =>
    setForm({
      ...form,
      experience: [...form.experience, { company: "", role: "", duration: "", description: "" }],
    });

  const removeExp = (i: number) =>
    setForm({
      ...form,
      experience: form.experience.filter((_, idx) => idx !== i),
    });

  // EDUCATION
  const handleEdu = (i: number, field: string, value: string) => {
    const updated = [...form.education];
    updated[i][field as keyof typeof updated[0]] = value;
    setForm({ ...form, education: updated });
  };

  const addEdu = () =>
    setForm({
      ...form,
      education: [...form.education, { institution: "", degree: "", year: "" }],
    });

  const removeEdu = (i: number) =>
    setForm({
      ...form,
      education: form.education.filter((_, idx) => idx !== i),
    });

  // PROJECTS
  const handleProj = (i: number, field: string, value: string) => {
    const updated = [...form.projects];
    updated[i][field as keyof typeof updated[0]] = value;
    setForm({ ...form, projects: updated });
  };

  const addProj = () =>
    setForm({
      ...form,
      projects: [...form.projects, { name: "", description: "" }],
    });

  const removeProj = (i: number) =>
    setForm({
      ...form,
      projects: form.projects.filter((_, idx) => idx !== i),
    });

  // PDF
  const downloadPDF = async () => {
    if (!resumeRef.current) return;

    const canvas = await html2canvas(resumeRef.current);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save(`${form.name || "resume"}.pdf`);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-center">ATS-Friendly Resume Builder</h1>
      <p className="text-center text-gray-500 mb-6">
        Built for ATS systems used by top companies
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* FORM */}
        <div className="bg-white p-6 rounded-xl shadow overflow-y-auto max-h-screen">

          {/* TEMPLATE SELECT */}
          <select
            className="input"
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
          >
            <option value="classic">Classic</option>
            <option value="modern">Modern</option>
            <option value="fresher">Fresher</option>
          </select>

          <input name="name" placeholder="Full Name" className="input" onChange={handleChange} />
          <input name="title" placeholder="Job Title" className="input" onChange={handleChange} />
          <textarea name="summary" placeholder="Summary" className="input" onChange={handleChange} />
          <textarea name="skills" placeholder="Skills (comma separated)" className="input" onChange={handleChange} />

          {/* EXPERIENCE */}
          <h2 className="section">Experience</h2>
          {form.experience.map((exp, i) => (
            <div key={i} className="box">
              <input className="input" placeholder="Company" onChange={(e) => handleExp(i, "company", e.target.value)} />
              <input className="input" placeholder="Role" onChange={(e) => handleExp(i, "role", e.target.value)} />
              <input className="input" placeholder="Duration" onChange={(e) => handleExp(i, "duration", e.target.value)} />
              <textarea className="input" placeholder="Description (bullet points)" onChange={(e) => handleExp(i, "description", e.target.value)} />
              {i > 0 && <button onClick={() => removeExp(i)} className="remove">Remove</button>}
            </div>
          ))}
          <button onClick={addExp} className="add">+ Add Experience</button>

          {/* EDUCATION */}
          <h2 className="section">Education</h2>
          {form.education.map((edu, i) => (
            <div key={i} className="box">
              <input className="input" placeholder="Institution" onChange={(e) => handleEdu(i, "institution", e.target.value)} />
              <input className="input" placeholder="Degree" onChange={(e) => handleEdu(i, "degree", e.target.value)} />
              <input className="input" placeholder="Year" onChange={(e) => handleEdu(i, "year", e.target.value)} />
              {i > 0 && <button onClick={() => removeEdu(i)} className="remove">Remove</button>}
            </div>
          ))}
          <button onClick={addEdu} className="add">+ Add Education</button>

          {/* PROJECTS */}
          <h2 className="section">Projects</h2>
          {form.projects.map((proj, i) => (
            <div key={i} className="box">
              <input className="input" placeholder="Project Name" onChange={(e) => handleProj(i, "name", e.target.value)} />
              <textarea className="input" placeholder="Description" onChange={(e) => handleProj(i, "description", e.target.value)} />
              {i > 0 && <button onClick={() => removeProj(i)} className="remove">Remove</button>}
            </div>
          ))}
          <button onClick={addProj} className="add">+ Add Project</button>

          <button onClick={downloadPDF} className="download">Download PDF</button>
        </div>

        {/* PREVIEW */}
        <div ref={resumeRef}>
          {template === "classic" && <Classic form={form} />}
          {template === "modern" && <Modern form={form} />}
          {template === "fresher" && <Fresher form={form} />}
        </div>
      </div>

      <style jsx>{`
        .input { width: 100%; border: 1px solid #ddd; padding: 8px; margin-bottom: 8px; }
        .section { font-weight: bold; margin-top: 12px; }
        .box { border: 1px solid #eee; padding: 10px; margin-bottom: 10px; }
        .add { background: #eee; padding: 5px 10px; margin-bottom: 10px; }
        .remove { color: red; font-size: 12px; }
        .download { width: 100%; background: black; color: white; padding: 10px; }
      `}</style>
    </div>
  );
}

// ---------- TEMPLATES ----------

function Classic({ form }: any) {
  return (
    <div className="bg-white p-8 text-sm">
      <h2 className="text-xl font-bold">{form.name}</h2>
      <p>{form.title}</p>

      <Section title="Summary" content={form.summary} />
      <Section title="Skills" content={form.skills} />

      <h3 className="mt-4 font-semibold">Experience</h3>
      {form.experience.map((exp: any, i: number) => (
        <div key={i}>
          <p className="font-medium">{exp.company}</p>
          <p>{exp.role} | {exp.duration}</p>
          <ul>{exp.description.split("\n").map((d: string, idx: number) => <li key={idx}>{d}</li>)}</ul>
        </div>
      ))}

      <h3 className="mt-4 font-semibold">Education</h3>
      {form.education.map((edu: any, i: number) => (
        <p key={i}>{edu.degree}, {edu.institution} ({edu.year})</p>
      ))}
    </div>
  );
}

function Modern({ form }: any) {
  return (
    <div className="bg-white p-8 text-sm">
      <h2 className="text-2xl font-bold border-b">{form.name}</h2>
      <p>{form.title}</p>

      <Section title="Summary" content={form.summary} />

      <h3 className="mt-4 font-semibold">Experience</h3>
      {form.experience.map((exp: any, i: number) => (
        <div key={i}>
          <p className="font-medium">{exp.role} - {exp.company}</p>
          <p>{exp.duration}</p>
          <p>{exp.description}</p>
        </div>
      ))}

      <Section title="Skills" content={form.skills} />
    </div>
  );
}

function Fresher({ form }: any) {
  return (
    <div className="bg-white p-8 text-sm">
      <h2 className="text-xl font-bold">{form.name}</h2>
      <p>{form.title}</p>

      <h3 className="mt-4 font-semibold">Education</h3>
      {form.education.map((edu: any, i: number) => (
        <p key={i}>{edu.degree}, {edu.institution}</p>
      ))}

      <h3 className="mt-4 font-semibold">Projects</h3>
      {form.projects.map((proj: any, i: number) => (
        <div key={i}>
          <p className="font-medium">{proj.name}</p>
          <p>{proj.description}</p>
        </div>
      ))}

      <Section title="Skills" content={form.skills} />
    </div>
  );
}

function Section({ title, content }: any) {
  if (!content) return null;
  return (
    <div className="mt-4">
      <h3 className="font-semibold">{title}</h3>
      <p>{content}</p>
    </div>
  );
}