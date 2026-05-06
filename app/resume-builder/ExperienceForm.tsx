import { Plus, Trash2, GripVertical } from "lucide-react";
import type { WorkExperience } from "../types/resume";

interface Props {
  data: WorkExperience[];
  onChange: (data: WorkExperience[]) => void;
}

export default function ExperienceForm({
  data,
  onChange,
}: Props) {

  const addExperience = () => {
    onChange([
      ...data,
      {
        id: crypto.randomUUID(),
        company: "",
        position: "",
        location: "",
        startDate: "",
        endDate: "",
        current: false,
        description: [""],
      },
    ]);
  };

  const removeExperience = (id: string) => {
    onChange(
      data.filter((exp) => exp.id !== id)
    );
  };

  const updateExperience = (
    id: string,
    field: keyof WorkExperience,
    value: unknown
  ) => {
    onChange(
      data.map((exp) =>
        exp.id === id
          ? { ...exp, [field]: value }
          : exp
      )
    );
  };

  const updateBullet = (
    expId: string,
    index: number,
    value: string
  ) => {
    onChange(
      data.map((exp) => {
        if (exp.id !== expId) return exp;

        const desc = [...exp.description];
        desc[index] = value;

        return {
          ...exp,
          description: desc,
        };
      })
    );
  };

  const addBullet = (expId: string) => {
    onChange(
      data.map((exp) =>
        exp.id === expId
          ? {
              ...exp,
              description: [
                ...exp.description,
                "",
              ],
            }
          : exp
      )
    );
  };

  const removeBullet = (
    expId: string,
    index: number
  ) => {
    onChange(
      data.map((exp) => {
        if (exp.id !== expId) return exp;

        return {
          ...exp,
          description: exp.description.filter(
            (_, i) => i !== index
          ),
        };
      })
    );
  };

  const inputStyle =
    "w-full px-4 py-3 bg-white border-2 border-[#5392d5]/20 rounded-xl text-sm text-[#151515] placeholder:text-[#151515]/40 focus:outline-none focus:border-[#5392d5] transition-all duration-300";

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-[#151515]">
          Work Experience
        </h3>

        <button
          type="button"
          onClick={addExperience}
          className="inline-flex items-center px-5 py-2.5 text-sm bg-[#5392d5]/10 text-[#5392d5] border border-[#5392d5]/30 rounded-xl hover:bg-[#5392d5]/20 transition-all font-semibold"
        >
          <Plus className="w-4 h-4 mr-1.5" />
          Add
        </button>
      </div>

      {/* Empty State */}
      {data.length === 0 && (
        <div className="text-sm text-[#4A4A4A] italic">
          No experience added yet.
        </div>
      )}

      {/* Experience Cards */}
      <div className="space-y-6">

        {data.map((exp) => (
          <div
            key={exp.id}
            className="p-6 bg-[#f8fafc] border border-[#5392d5]/20 rounded-3xl shadow-sm space-y-6"
          >

            {/* Top Row */}
            <div className="flex items-center justify-between">

              <GripVertical className="w-5 h-5 text-[#4A4A4A] cursor-grab" />

              <button
                type="button"
                onClick={() =>
                  removeExperience(exp.id)
                }
                className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>

            </div>

            {/* Position + Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                type="text"
                value={exp.position}
                onChange={(e) =>
                  updateExperience(
                    exp.id,
                    "position",
                    e.target.value
                  )
                }
                placeholder="Job Title"
                className={inputStyle}
              />

              <input
                type="text"
                value={exp.company}
                onChange={(e) =>
                  updateExperience(
                    exp.id,
                    "company",
                    e.target.value
                  )
                }
                placeholder="Company Name"
                className={inputStyle}
              />

            </div>

            {/* Location + Dates */}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4">

              <input
                type="text"
                value={exp.location}
                onChange={(e) =>
                  updateExperience(
                    exp.id,
                    "location",
                    e.target.value
                  )
                }
                placeholder="Location"
                className={inputStyle}
              />

              <input
                type="text"
                value={exp.startDate}
                onChange={(e) =>
                  updateExperience(
                    exp.id,
                    "startDate",
                    e.target.value
                  )
                }
                placeholder="Start (e.g. Jan 2022)"
                className={inputStyle}
              />

              <input
                type="text"
                value={
                  exp.current
                    ? "Present"
                    : exp.endDate
                }
                onChange={(e) =>
                  updateExperience(
                    exp.id,
                    "endDate",
                    e.target.value
                  )
                }
                placeholder="End"
                disabled={exp.current}
                className={`${inputStyle} disabled:opacity-50`}
              />

            </div>

            {/* Current Checkbox */}
            <label className="flex items-center gap-3 text-sm text-[#4A4A4A] cursor-pointer">

              <input
                type="checkbox"
                checked={exp.current}
                onChange={(e) =>
                  updateExperience(
                    exp.id,
                    "current",
                    e.target.checked
                  )
                }
                className="w-4 h-4 rounded border-[#5392d5]/40 text-[#5392d5]"
              />

              Currently working here

            </label>

            {/* Responsibilities */}
            <div className="space-y-4">

              <p className="text-sm font-semibold text-[#151515]">
                Key Responsibilities & Achievements
              </p>

              {exp.description.map(
                (bullet, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >

                    <span className="text-[#5392d5] text-lg leading-none">
                      •
                    </span>

                    <input
                      type="text"
                      value={bullet}
                      onChange={(e) =>
                        updateBullet(
                          exp.id,
                          i,
                          e.target.value
                        )
                      }
                      placeholder="Describe your achievement or responsibility..."
                      className={inputStyle}
                    />

                    {exp.description.length > 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          removeBullet(
                            exp.id,
                            i
                          )
                        }
                        className="p-1 text-red-400 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}

                  </div>
                )
              )}

              <button
                type="button"
                onClick={() =>
                  addBullet(exp.id)
                }
                className="text-sm text-[#5392d5] hover:text-[#2F6FB3] font-semibold"
              >
                + Add bullet point
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}