import { Sparkle } from "lucide-react";
import React from "react";

const ProfessionalSummaryForm = ({ data, onChange, setResumeData }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font">
            Professional Summery
          </h3>
          <p className="text-sm text-gray-500">
            Add summery for your resume here
          </p>
        </div>
        <button className="flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50">
          <Sparkle className="size-4" />
          AI Enhance
        </button>
      </div>
      <div className="mt-6">
        <textarea
          value={data || ""}
          onChange={(e) => onChange(e.target.value)}
          rows={7}
          className="w-full p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
          placeholder="Write a compelling professional summery that highlights your key strength and career objectives..."
        />
        <p className="text-xs text-gray-500 max-w-[80%] mx-auto text-center">
          Tips: keep it concise (3-4 sentences) and focus on your most relevant
          achievement and skills.
        </p>
      </div>
    </div>
  );
};

export default ProfessionalSummaryForm;
