import Link from "next/link";
import LiveScene from "@/components/landing/LiveScene";
import { bgUrl } from "@/components/landing/bg";

const projects = [
  {
    name: "Rayaa360",
    badge: "private repo",
    desc: "Clinic and patient management platform in Arabic. Live site.",
    tags: "Next.js · React",
    grad: "linear-gradient(135deg,#0f5a55,#1c9a8c)",
    link: "https://rayaa360.cloud",
  },
  {
    name: "Menu.Web API",
    desc: "Ordering REST API with JWT, Redis and Stripe.",
    tags: "ASP.NET Core · SQL Server",
    grad: "linear-gradient(135deg,#2c2f6b,#5a55c0)",
    link: "https://github.com/MahmoudHosni2000/Menu.Web",
  },
  {
    name: "E.Commerce API",
    desc: "Catalog API with search, filters, sorting and paging.",
    tags: "ASP.NET Core · EF Core",
    grad: "linear-gradient(135deg,#7a3a10,#c98a22)",
    link: "https://github.com/MahmoudHosni2000/E.Commerce",
  },
  {
    name: "Gym Management",
    desc: "Admin app for members, trainers, plans and sessions.",
    tags: "ASP.NET MVC · SQL Server",
    grad: "linear-gradient(135deg,#6a1c45,#b83a7c)",
    link: "https://github.com/MahmoudHosni2000/GymManagementSystem_MVC",
  },
];

const chips = ["React", "Next.js", "TypeScript", "Tailwind", "C#", "ASP.NET Core", "SQL Server", "Three.js"];

const icons = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "in", href: "https://www.linkedin.com/in/mahmoudhosni2000/", ext: true },
  { label: "GH", href: "https://github.com/MahmoudHosni2000", ext: true },
];

const line = "1px solid rgba(200,180,60,.45)";

function TopBar() {
  return (
    <div className="flex items-center justify-between gap-2.5 w-full">
      <span className="text-[13px] lg:text-[15px] tracking-[2px] uppercase text-[#d8b93c] leading-tight">
        Mahmoud Hosny
      </span>
      <div className="flex gap-2 lg:gap-3">
        {icons.map((i) =>
          i.ext ? (
            <a key={i.label} href={i.href} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 lg:w-11 lg:h-11 rounded-full flex items-center justify-center text-[11px] lg:text-[13px] text-[#e1e1e1] bg-[rgba(27,27,27,.55)]"
              style={{ border: line }}>
              {i.label}
            </a>
          ) : (
            <Link key={i.label} href={i.href}
              className="w-9 h-9 lg:w-11 lg:h-11 rounded-full flex items-center justify-center text-[11px] lg:text-[13px] text-[#e1e1e1] bg-[rgba(27,27,27,.55)]"
              style={{ border: line }}>
              {i.label}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

function Info({ desktop }) {
  return (
    <div className={desktop ? "w-[440px]" : "w-full"}>
      <span className="inline-block text-[#d8b93c] text-[12.5px] tracking-[.4px] px-3 py-1.5 rounded-sm bg-[rgba(27,27,27,.55)]" style={{ border: line }}>
        Open to remote or relocation
      </span>
      <h1 className={`font-bold tracking-tight ${desktop ? "text-[50px] leading-[1.05] mt-5 mb-2.5" : "text-[34px] leading-[1.08] mt-4 mb-2"}`}>
        Hi, I&apos;m <span className="text-[#d8b93c]">Mahmoud Hosny</span>
      </h1>
      <div className={desktop ? "text-[17px] mb-4 whitespace-nowrap" : "text-[16px] mb-3"}>
        Full-Stack Developer · React/Next.js + ASP.NET Core
      </div>
      <p className={`text-[#a9aeb0] leading-[1.6] ${desktop ? "text-[15px] mb-[22px]" : "text-[14px] mb-[18px]"}`}>
        I build fast React and Next.js front ends and the ASP.NET Core APIs behind them. Cairo based, shipping real apps for real users, and looking for my next full-stack role.
      </p>
      <div className={`flex flex-wrap gap-2 ${desktop ? "mb-[26px]" : "mb-5"}`}>
        {chips.map((c) => (
          <b key={c} className="font-medium text-[12px] lg:text-[12.5px] px-2.5 py-[5px] rounded-sm bg-[rgba(27,27,27,.6)]" style={{ border: line }}>
            {c}
          </b>
        ))}
      </div>
      <div className="flex flex-wrap gap-2.5 lg:gap-3">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
          className="px-[18px] lg:px-[22px] py-[11px] lg:py-3 text-[14px] lg:text-[14.5px] rounded-sm text-[#f5e7a0] bg-[rgba(216,185,60,.18)]"
          style={{ border: "1px solid #d8b93c" }}>
          Download CV
        </a>
        <a href="https://github.com/MahmoudHosni2000" target="_blank" rel="noopener noreferrer"
          className="px-[18px] lg:px-[22px] py-[11px] lg:py-3 text-[14px] lg:text-[14.5px] rounded-sm bg-[rgba(27,27,27,.6)]" style={{ border: line }}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/mahmoudhosni2000/" target="_blank" rel="noopener noreferrer"
          className="px-[18px] lg:px-[22px] py-[11px] lg:py-3 text-[14px] lg:text-[14.5px] rounded-sm bg-[rgba(27,27,27,.6)]" style={{ border: line }}>
          LinkedIn
        </a>
      </div>
    </div>
  );
}

function Projects({ desktop }) {
  return (
    <div className={desktop ? "w-[372px]" : "w-full"}>
      <h2 className="text-[13px] tracking-[2px] uppercase text-[#d8b93c] mb-3 font-semibold">Featured projects</h2>
      {projects.map((p) => (
        <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer"
          className="flex gap-3.5 p-3 mb-3 rounded-sm bg-[rgba(20,24,26,.72)] backdrop-blur-[3px] hover:bg-[rgba(20,24,26,.9)] transition-colors"
          style={{ border: line }}>
          <div className="w-[92px] h-16 flex-none rounded-sm" style={{ background: p.grad, border: line }} />
          <div>
            <h3 className="text-[15px] mb-0.5">
              {p.name}
              {p.badge && (
                <span className="text-[10px] px-1.5 py-[1px] ml-1.5 text-[#a9aeb0] font-normal" style={{ border: line }}>
                  {p.badge}
                </span>
              )}
            </h3>
            <p className="text-[12px] text-[#a9aeb0] leading-[1.4]">{p.desc}</p>
            <em className="not-italic text-[11px] text-[#d8b93c] block mt-[5px]">{p.tags}</em>
          </div>
        </a>
      ))}
    </div>
  );
}

function Cta({ desktop }) {
  return (
    <div className={`text-center text-[12px] lg:text-[13px] text-[#a9aeb0] tracking-[1px] ${desktop ? "" : "mt-2 pb-2"}`}>
      THE WIZARD STAYS. CLICK HIM OR THE ICONS TO EXPLORE THE FULL 3D WORLD
      <br />
      <Link href="/wizard"
        className="inline-block mt-1.5 px-[18px] py-2 rounded-sm bg-[rgba(27,27,27,.6)] text-[#e1e1e1]"
        style={{ border: line }}>
        Enter the 3D experience →
      </Link>
    </div>
  );
}


export default function Home() {
  return (
    <main className="min-h-screen bg-[#1b1b1b] text-[#e1e1e1]">
      {/* Mobile: wizard scene banner, then stacked info layer */}
      <div className="lg:hidden flex flex-col min-h-screen">
        <div
          className="relative h-[420px] w-full overflow-hidden"
          style={{ backgroundImage: bgUrl, backgroundSize: "auto 420px", backgroundPosition: "center top", backgroundRepeat: "no-repeat", backgroundColor: "#101417" }}
        >
          <LiveScene modelScale={0.62} />
          <div className="absolute inset-0 z-[2] pointer-events-none"
            style={{ background: "linear-gradient(180deg, rgba(8,12,14,.88) 0%, rgba(8,12,14,.1) 22%, rgba(8,12,14,.05) 40%, rgba(8,12,14,.55) 55%, rgba(8,12,14,.96) 62%, rgba(8,12,14,.97) 100%)" }} />
          <div className="relative z-10 px-[18px] pt-[18px]">
            <TopBar />
          </div>
        </div>
        <div className="flex flex-col gap-6 px-[18px] pt-0 pb-8 -mt-24 relative z-10">
          <Info />
          <Projects />
          <Cta />
        </div>
      </div>

      {/* Desktop: approved fixed-canvas composition, centered */}
      <div className="hidden lg:flex min-h-screen items-center justify-center">
        <div
          className="relative w-[1280px] h-[720px] max-w-full overflow-hidden"
          style={{ backgroundImage: bgUrl, backgroundSize: "1280px 720px", backgroundPosition: "center top", backgroundRepeat: "no-repeat", backgroundColor: "#101417" }}
        >
          <LiveScene />
          <div className="absolute inset-0 z-[2] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(8,12,14,.93) 0%, rgba(8,12,14,.8) 33%, rgba(8,12,14,.05) 48%, rgba(8,12,14,.05) 62%, rgba(8,12,14,.82) 100%), radial-gradient(transparent 50%, rgba(0,5,10,.5) 100%)",
            }} />
          <div className="absolute left-14 right-14 top-[34px] z-10">
            <TopBar />
          </div>
          <div className="absolute left-14 top-[130px] z-10">
            <Info desktop />
          </div>
          <div className="absolute right-14 top-[110px] z-10">
            <Projects desktop />
          </div>
          <div className="absolute left-0 right-0 bottom-[26px] z-10">
            <Cta desktop />
          </div>
        </div>
      </div>
    </main>
  );
}
