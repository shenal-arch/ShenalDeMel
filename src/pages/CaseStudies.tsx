import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ExternalLink,
  Users,
  Trophy,
  Utensils,
  Layers,
  ArrowRight,
  Shield,
  Smartphone,
  Sparkles,
  Calendar,
  MessageSquare,
  DollarSign,
  Activity,
  Bot,
  Image as ImageIcon,
  CheckCircle2,
  FileCheck2,
  Store,
  ChevronRight,
  Maximize2,
  X
} from "lucide-react";
import { caseStudies, CaseStudy } from "../data/caseStudies";

export default function CaseStudies() {
  const location = useLocation();
  const [activeStudyId, setActiveStudyId] = useState<string>("koachhub");
  const [previewImage, setPreviewImage] = useState<{
    src: string;
    title: string;
    caption: string;
  } | null>(null);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "koachhub" || hash === "esana") {
      setActiveStudyId(hash);
    }
  }, [location.hash]);

  const currentStudy: CaseStudy =
    caseStudies.find((c) => c.id === activeStudyId) || caseStudies[0];

  const handleStudyChange = (id: string) => {
    setActiveStudyId(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="flex flex-col w-full pb-28">
      {/* Hero Header */}
      <section className="pt-32 pb-14 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-primary/5 blur-[130px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-primary mb-6"
          >
            <Sparkles size={13} className="text-primary" />
            Product Design & UX Case Studies
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6"
          >
            Deep-Dive Case Studies
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed"
          >
            In-depth analysis of end-to-end product architecture, multi-role UX strategy, and interface design for enterprise and consumer platforms.
          </motion.p>
        </div>
      </section>

      {/* Case Study Selection Tabs */}
      <section className="px-6 mb-12 sticky top-20 z-40 py-4 bg-zinc-950/85 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2 sm:gap-3 p-1 bg-zinc-900/80 rounded-xl border border-white/10">
            {caseStudies.map((study) => {
              const isActive = activeStudyId === study.id;
              return (
                <button
                  key={study.id}
                  onClick={() => handleStudyChange(study.id)}
                  className={`flex items-center gap-2.5 px-4 sm:px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary text-zinc-950 font-semibold shadow-lg shadow-primary/20"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {study.id === "koachhub" ? (
                    <Trophy size={16} />
                  ) : (
                    <Utensils size={16} />
                  )}
                  <span>{study.title}</span>
                  <span
                    className={`hidden sm:inline-block text-xs px-2 py-0.5 rounded-full ${
                      isActive
                        ? "bg-black/20 text-zinc-900"
                        : "bg-white/5 text-zinc-400"
                    }`}
                  >
                    {study.domain}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-4 text-xs font-mono text-zinc-500">
            <span>FULL PRODUCT SCOPE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
            <span>END-TO-END UI/UX</span>
          </div>
        </div>
      </section>

      {/* Active Case Study Content */}
      <div className="max-w-[1440px] mx-auto px-6 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStudy.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-16 lg:gap-20"
          >
            {/* Header Card */}
            <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-zinc-900/60 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-mono font-medium tracking-widest text-primary uppercase">
                    {currentStudy.badge}
                  </span>
                  <span className="font-mono text-sm text-zinc-500">
                    CASE STUDY / {currentStudy.pageNumber}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white">
                    {currentStudy.title}
                  </h2>
                  <p className="text-xl sm:text-2xl text-zinc-300 font-normal max-w-3xl leading-snug">
                    {currentStudy.tagline}
                  </p>
                </div>

                {/* Metadata Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-6 border-t border-white/10 mt-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase font-mono text-zinc-500 tracking-wider">
                      My Role
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {currentStudy.role}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase font-mono text-zinc-500 tracking-wider">
                      Design Scope
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {currentStudy.scope}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase font-mono text-zinc-500 tracking-wider">
                      Domain
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-primary">
                      {currentStudy.domain}
                    </span>
                  </div>
                  {currentStudy.productModel && (
                    <div className="flex flex-col gap-1">
                      <span className="text-xs uppercase font-mono text-zinc-500 tracking-wider">
                        Product Model
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-white">
                        {currentStudy.productModel}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sample UI Mockups Gallery (Placeholder Slots) */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-display font-semibold text-white">
                    Design Artifacts & Interface Gallery
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Sample UI preview placeholders (ready for high-resolution mockup assets).
                  </p>
                </div>
                <span className="text-xs font-mono text-zinc-500 bg-white/5 border border-white/5 px-3 py-1 rounded-full hidden sm:inline-block">
                  {currentStudy.sampleImages.length} Artifact Slots
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentStudy.sampleImages.map((slot, index) => (
                  <div
                    key={slot.id}
                    className="group flex flex-col rounded-2xl bg-zinc-900/50 border border-white/10 overflow-hidden hover:border-primary/40 transition-all duration-300"
                  >
                    {slot.image ? (
                      <div
                        onClick={() =>
                          setPreviewImage({
                            src: slot.image!,
                            title: slot.title,
                            caption: slot.caption
                          })
                        }
                        className="relative aspect-[16/11] bg-zinc-950 overflow-hidden border-b border-white/10 cursor-pointer"
                      >
                        <img
                          src={slot.image}
                          alt={slot.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                          <span className="text-xs font-mono text-primary flex items-center gap-1.5">
                            <Sparkles size={12} /> Click to expand
                          </span>
                          <span className="p-1.5 rounded-lg bg-black/60 text-white backdrop-blur-sm border border-white/10">
                            <Maximize2 size={13} />
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Mockup Frame Graphic */
                      <div
                        className={`relative aspect-[16/10] bg-gradient-to-br ${slot.accentColor} flex flex-col items-center justify-center p-6 border-b border-white/5 overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

                        {/* Mockup Window Header */}
                        <div className="w-full max-w-[240px] bg-zinc-950/80 rounded-t-lg border border-white/10 px-3 py-1.5 flex items-center justify-between mb-0 shadow-xl">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-rose-500/80"></span>
                            <span className="w-2 h-2 rounded-full bg-amber-500/80"></span>
                            <span className="w-2 h-2 rounded-full bg-emerald-500/80"></span>
                          </div>
                          <span className="text-[10px] font-mono text-zinc-500">
                            {slot.screenType}
                          </span>
                        </div>

                        {/* Mockup Screen Body */}
                        <div className="w-full max-w-[240px] h-24 bg-zinc-950/90 rounded-b-lg border-x border-b border-white/10 p-3 flex flex-col items-center justify-center text-center shadow-2xl relative group-hover:scale-[1.02] transition-transform">
                          <ImageIcon className="text-zinc-500 mb-1" size={24} />
                          <span className="text-[11px] font-medium text-zinc-300">
                            {slot.title}
                          </span>
                          <span className="text-[9px] text-zinc-500 mt-0.5">
                            Sample UI Mockup • Slot #{index + 1}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Metadata & Description */}
                    <div className="p-5 flex flex-col flex-1 justify-between gap-2">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                            {slot.title}
                          </h4>
                          <span className="text-[10px] font-mono text-zinc-500 bg-white/5 px-2 py-0.5 rounded">
                            {slot.screenType}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {slot.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overview & Contribution Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left Column: Overview & Problem */}
              <div className="lg:col-span-7 flex flex-col gap-10">
                <section className="flex flex-col gap-4">
                  <h3 className="text-xs uppercase font-mono tracking-widest text-primary flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Overview
                  </h3>
                  <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                    {currentStudy.overview}
                  </p>
                  {currentStudy.overviewAdditional && (
                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                      {currentStudy.overviewAdditional}
                    </p>
                  )}
                </section>

                {/* Challenge or Problem Block */}
                {currentStudy.challenge && (
                  <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/10 flex flex-col gap-3">
                    <h4 className="text-sm font-mono uppercase tracking-wider text-white">
                      The Design Challenge
                    </h4>
                    <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                      {currentStudy.challenge}
                    </p>
                    {currentStudy.challengeDetails && (
                      <p className="text-zinc-400 leading-relaxed text-sm pt-2 border-t border-white/5">
                        {currentStudy.challengeDetails}
                      </p>
                    )}
                  </section>
                )}

                {currentStudy.problem && (
                  <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/10 flex flex-col gap-3">
                    <h4 className="text-sm font-mono uppercase tracking-wider text-rose-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                      The Problem
                    </h4>
                    <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                      {currentStudy.problem}
                    </p>
                    {currentStudy.problemChallenge && (
                      <div className="mt-2 p-4 rounded-xl bg-black/40 border border-white/5 text-sm text-primary font-medium">
                        "{currentStudy.problemChallenge}"
                      </div>
                    )}
                  </section>
                )}

                {/* Users & Responsibilities */}
                <section className="flex flex-col gap-4">
                  <h3 className="text-xs uppercase font-mono tracking-widest text-primary flex items-center gap-2">
                    <Users size={14} />
                    {currentStudy.id === "koachhub"
                      ? "Who the Experience Serves"
                      : "Users and Responsibilities"}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentStudy.usersServed.map((user, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl bg-zinc-900/50 border border-white/5 flex flex-col gap-2 hover:border-white/20 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          <span className="text-sm font-semibold text-white">
                            {user.role}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                          {user.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right Column: Contribution & Scope */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/80 border border-white/10 flex flex-col gap-5 sticky top-36">
                  <h3 className="text-xs uppercase font-mono tracking-widest text-primary flex items-center gap-2">
                    <Shield size={14} />
                    My Contribution
                  </h3>

                  <div className="flex flex-col gap-4">
                    {currentStudy.contribution.map((para, i) => (
                      <p
                        key={i}
                        className="text-sm sm:text-base text-zinc-300 leading-relaxed"
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Highlights checklist */}
                  <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                    <div className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      <span>End-to-end UX Strategy & Information Architecture</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      <span>Mobile & Web High-Fidelity UI Systems</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      <span>Stakeholder Prototypes & QA Implementation Support</span>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* KOACHHUB SPECIFIC: Product Areas & Capabilities */}
            {currentStudy.productAreas && (
              <section className="flex flex-col gap-6">
                <div>
                  <h3 className="text-xs uppercase font-mono tracking-widest text-primary mb-2">
                    KOACHHUB / EXPERIENCE SCOPE
                  </h3>
                  <h4 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Connecting Club Operations and Player Development
                  </h4>
                  <p className="text-sm text-zinc-400 mt-1">
                    The platform unifies operational tasks and youth talent development into a seamless ecosystem.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-white/10 bg-zinc-900/40">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5">
                        <th className="py-4 px-6 text-xs font-mono uppercase tracking-wider text-zinc-400 w-1/3">
                          Product Area
                        </th>
                        <th className="py-4 px-6 text-xs font-mono uppercase tracking-wider text-zinc-400 w-2/3">
                          Published Capabilities
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {currentStudy.productAreas.map((item, index) => (
                        <tr
                          key={index}
                          className="hover:bg-white/[0.02] transition-colors"
                        >
                          <td className="py-4 px-6 text-sm font-semibold text-white align-top flex items-center gap-2">
                            {index === 0 && <Users size={15} className="text-primary" />}
                            {index === 1 && <Calendar size={15} className="text-primary" />}
                            {index === 2 && <Trophy size={15} className="text-primary" />}
                            {index === 3 && <MessageSquare size={15} className="text-primary" />}
                            {index === 4 && <DollarSign size={15} className="text-primary" />}
                            <span>{item.area}</span>
                          </td>
                          <td className="py-4 px-6 text-sm text-zinc-300 leading-relaxed">
                            {item.capabilities}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* KOACHHUB SPECIFIC: Design Considerations */}
            {currentStudy.designConsiderations && (
              <section className="flex flex-col gap-6">
                <div>
                  <h3 className="text-xs uppercase font-mono tracking-widest text-primary mb-2">
                    ARCHITECTURAL PRINCIPLES
                  </h3>
                  <h4 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Design Considerations
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {currentStudy.designConsiderations.map((item, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10 flex flex-col gap-3"
                    >
                      <span className="font-mono text-xs text-primary font-bold">
                        0{i + 1}
                      </span>
                      <h5 className="text-base font-semibold text-white">
                        {item.title}
                      </h5>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ESANA SPECIFIC: Three Connected Journeys */}
            {currentStudy.connectedJourneys && (
              <section className="flex flex-col gap-8">
                <div>
                  <h3 className="text-xs uppercase font-mono tracking-widest text-primary mb-2">
                    ESANA / CORE EXPERIENCE
                  </h3>
                  <h4 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Three Connected Journeys
                  </h4>
                  <p className="text-sm text-zinc-400 mt-1">
                    Summarising key requirements from restaurant onboarding to multi-channel customer ordering.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {currentStudy.connectedJourneys.map((journey) => (
                    <div
                      key={journey.step}
                      className="p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-white/10 flex flex-col justify-between gap-6 relative overflow-hidden"
                    >
                      <div className="flex flex-col gap-3">
                        <span className="font-mono text-xs text-primary font-bold">
                          {journey.step}
                        </span>
                        <h5 className="text-lg font-bold text-white">
                          {journey.title}
                        </h5>
                        <p className="text-sm text-zinc-300 leading-relaxed">
                          {journey.description}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-1.5 mt-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-primary">
                          Design Focus
                        </span>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {journey.focus}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ESANA SPECIFIC: Status Matrix */}
            {currentStudy.statusMatrix && (
              <section className="flex flex-col gap-6">
                <div>
                  <h3 className="text-xs uppercase font-mono tracking-widest text-primary mb-2">
                    DATA ARCHITECTURE
                  </h3>
                  <h4 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    One Order Needs More Than One Status
                  </h4>
                  <p className="text-sm text-zinc-400 mt-1">
                    A single generic status label hides crucial operational state. Three decoupled dimensions ensure clarity.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-white/10 bg-zinc-900/40">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5">
                        <th className="py-4 px-6 text-xs font-mono uppercase tracking-wider text-zinc-400">
                          Status Dimension
                        </th>
                        <th className="py-4 px-6 text-xs font-mono uppercase tracking-wider text-zinc-400">
                          Question It Answers
                        </th>
                        <th className="py-4 px-6 text-xs font-mono uppercase tracking-wider text-zinc-400">
                          Examples From Guide
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {currentStudy.statusMatrix.map((item, index) => (
                        <tr
                          key={index}
                          className="hover:bg-white/[0.02] transition-colors"
                        >
                          <td className="py-4 px-6 text-sm font-semibold text-white">
                            <span className="inline-block px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono">
                              {item.dimension}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-sm text-zinc-300">
                            {item.question}
                          </td>
                          <td className="py-4 px-6 text-sm">
                            <span className="text-primary font-mono text-xs">
                              {item.examples}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {currentStudy.statusMatrixNote && (
                  <p className="text-xs sm:text-sm text-zinc-400 italic">
                    Note: {currentStudy.statusMatrixNote}
                  </p>
                )}
              </section>
            )}

            {/* ESANA SPECIFIC: Design Priorities Grid */}
            {currentStudy.designPriorities && (
              <section className="flex flex-col gap-6">
                <div>
                  <h3 className="text-xs uppercase font-mono tracking-widest text-primary mb-2">
                    ESANA / DESIGN PRIORITIES
                  </h3>
                  <h4 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Turning Complex Rules into Clear Experiences
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {currentStudy.designPriorities.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10 flex flex-col gap-3"
                    >
                      <h5 className="text-sm font-bold text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {item.priority}
                      </h5>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {item.response}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ESANA SPECIFIC: AI Ordering Workflow */}
            {currentStudy.aiWorkflow && (
              <section className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-zinc-900/90 to-zinc-950 border border-white/10 flex flex-col gap-4 relative overflow-hidden">
                <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider">
                  <Bot size={15} />
                  {currentStudy.aiWorkflow.title}
                </div>
                <div className="flex flex-col gap-3 max-w-4xl text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {currentStudy.aiWorkflow.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            )}

            {/* ESANA SPECIFIC: Proposed Validation */}
            {currentStudy.validation && (
              <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/10 flex flex-col gap-4">
                <h4 className="text-sm font-mono uppercase tracking-wider text-white">
                  Proposed Validation & Metrics
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-mono text-primary uppercase">
                      Useful Test Scenarios
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {currentStudy.validation.scenarios}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-mono text-primary uppercase">
                      Potential Measures
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {currentStudy.validation.measures}
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Outcome & Reference Footer Card */}
            <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900/70 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex flex-col gap-2 max-w-2xl">
                <h4 className="text-xs font-mono uppercase tracking-wider text-primary">
                  Outcome & Verification
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {currentStudy.outcome}
                </p>
                {currentStudy.references && currentStudy.references.length > 0 && (
                  <div className="mt-2 flex flex-col gap-1">
                    {currentStudy.references.map((ref, idx) => (
                      <div key={idx} className="text-xs text-zinc-500">
                        {ref.link ? (
                          <a
                            href={ref.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center gap-1 font-mono"
                          >
                            {ref.note} <ExternalLink size={11} />
                          </a>
                        ) : (
                          <span>{ref.note}</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick switch button to the other study */}
              <button
                onClick={() =>
                  handleStudyChange(
                    activeStudyId === "koachhub" ? "esana" : "koachhub"
                  )
                }
                className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono flex items-center gap-2 transition-colors whitespace-nowrap self-stretch md:self-auto justify-center"
              >
                <span>
                  Switch to{" "}
                  {activeStudyId === "koachhub" ? "Esana" : "KoachHub"}
                </span>
                <ChevronRight size={14} className="text-primary" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* High-Resolution Image Preview Lightbox */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl cursor-default"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-zinc-950/80">
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-white">
                    {previewImage.title}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    {previewImage.caption}
                  </p>
                </div>
                <button
                  onClick={() => setPreviewImage(null)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Close image modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Image Container */}
              <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-zinc-950">
                <img
                  src={previewImage.src}
                  alt={previewImage.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
