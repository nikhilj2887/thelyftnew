import {
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

import type { PersonalInfo } from "../types/resume";

interface Props {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}

interface FieldConfig {
  key: keyof PersonalInfo;
  label: string;
  icon: LucideIcon;
  placeholder: string;
  type?: string;
  required?: boolean;
}

export default function PersonalInfoForm({
  data,
  onChange,
}: Props) {
  const handleChange = (
    field: keyof PersonalInfo,
    value: string
  ) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  const fields: FieldConfig[] = [
    {
      key: "fullName",
      label: "Full Name",
      icon: User,
      placeholder: "John Doe",
      required: true,
    },
    {
      key: "jobTitle",
      label: "Job Title",
      icon: Briefcase,
      placeholder: "Senior Software Engineer",
    },
    {
      key: "email",
      label: "Email",
      icon: Mail,
      placeholder: "john@example.com",
      type: "email",
      required: true,
    },
    {
      key: "phone",
      label: "Phone",
      icon: Phone,
      placeholder: "+91 9876543210",
      type: "tel",
      required: true,
    },
    {
      key: "location",
      label: "Location",
      icon: MapPin,
      placeholder: "Mumbai, India",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      icon: Globe,
      placeholder: "linkedin.com/in/johndoe",
    },
    {
      key: "portfolio",
      label: "Portfolio / Website",
      icon: Globe,
      placeholder: "johndoe.dev",
    },
  ];

  return (
    <div className="space-y-5">
      <h3 className="text-lg font-bold text-[#151515]">
        Personal Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map((field) => {
          const Icon = field.icon;

          return (
            <div key={field.key}>
              <label className="block text-sm font-semibold text-[#151515] mb-1.5">
                {field.label}

                {field.required && (
                  <span className="text-[#5392d5]"> *</span>
                )}
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon className="w-4 h-4 text-[#5392d5]" />
                </div>

                <input
                  type={field.type || "text"}
                  value={data[field.key] || ""}
                  onChange={(e) =>
                    handleChange(field.key, e.target.value)
                  }
                  placeholder={field.placeholder}
                  className="w-full pl-10 pr-3 py-3 bg-gray-50 border-2 border-[#5392d5]/20 rounded-xl text-[#151515] placeholder-[#151515]/40 focus:outline-none focus:border-[#5392d5] focus:bg-white transition-all duration-300 text-sm"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}