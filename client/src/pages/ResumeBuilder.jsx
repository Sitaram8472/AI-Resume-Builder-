import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { dummyResumeData } from "../assets/assets";
import {
  ArrowLeftIcon,
  Briefcase,
  FileText,
  FolderIcon,
  GraduationCap,
  Sparkle,
  User,
} from "lucide-react";

const ResumeBuilder = () => {
  const { resumeId } = useParams();
  const [resumeData, setResumeData] = useState({
    _id: "",
    title: "",
    personal_info: {},
    professional_summery: "",
    experience: [],
    education: [],
    project: [],
    skills: [],
    template: "classic",
    accent_color: "#3882F6",
    public: false,
  });

  const loadExitingResume = async () => {
    const resume = dummyResumeData.find((resume) => resume._id === resumeId);
    if (resume) {
      setResumeData(resume);
      document.title = resume.title;
    }
  };

  const [activeSectionsIndex, setActiveSectionIndex] = useState(0);
  const [removeBackGround, setRemoveBackground] = useState(false);

  const sections = [
    { id: "personal", name: "personal Info", icon: User },
    { id: "summery", name: "summery", icon: FileText },
    { id: "experience", name: "experience", icon: Briefcase },
    { id: "education", name: "education", icon: GraduationCap },
    { id: "projects", name: "projects", icon: FolderIcon },
    { id: "skills", name: "skills", icon: Sparkle },
  ];

  const activeSections = sections[activeSectionsIndex];

  useEffect(() => {
    loadExitingResume();
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link
          to={`/app`}
          className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all"
        >
          <ArrowLeftIcon className="size-4" />
          Back to DashBoard
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* left panel form */}
          <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
            <div className="bg-white rounded-lg shadow-sm border border-green-200 p-6 pt-1">
              {/* progess bar using activesectionsindex */}
              <hr className="absolute top-0 left-0 right-0 border-2 border-gray-200" />
              <hr
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-500 to-green-600 border-none transition-all duration-2000"
                style={{
                  width: `${(activeSectionsIndex * 100) / (sections.length - 1)}%`,
                }}
              />
            </div>
          </div>

          {/* right panel form */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
