import Link from "next/link";
import LiveScene from "@/components/landing/LiveScene";
const bgUrl = "url(/background/home-background.png)";

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

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mahmoudhosni2000/", Icon: LinkedInIcon },
  { label: "GitHub", href: "https://github.com/MahmoudHosni2000", Icon: GitHubIcon },
];

const line = "1px solid rgba(200,180,60,.45)";

function TopBar() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 w-full">
      <span className="text-[13px] lg:text-[15px] tracking-[3px] uppercase text-[#d8b93c] leading-tight">
        Mahmoud Hosny
      </span>
      <nav
        aria-label="Main"
        className="flex items-center justify-between lg:justify-start gap-1 lg:gap-2 rounded-full px-2 lg:px-3 py-1.5 backdrop-blur-md bg-[rgba(10,14,16,.55)] self-stretch lg:self-auto"
        style={{ border: "1px solid rgba(216,185,60,.28)", boxShadow: "0 4px 24px rgba(0,0,0,.35)" }}
      >
        {navLinks.map((l) => (
          <Link key={l.label} href={l.href}
            className="px-3 lg:px-4 py-1.5 rounded-full text-[13px] lg:text-[14px] tracking-[.5px] text-[#e1e1e1] hover:text-[#f0d36a] hover:bg-[rgba(216,185,60,.12)] transition-colors">
            {l.label}
          </Link>
        ))}
        <span className="w-px h-5 mx-1 bg-[rgba(216,185,60,.3)]" aria-hidden="true" />
        {socials.map(({ label, href, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#e1e1e1] hover:text-[#f0d36a] hover:bg-[rgba(216,185,60,.12)] transition-colors">
            <Icon />
          </a>
        ))}
      </nav>
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
          style={{ backgroundImage: bgUrl, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundColor: "#101417" }}
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

      {/* Desktop: original forest scene full-viewport (like /wizard), layout on top */}
      <div className="hidden lg:block relative min-h-screen overflow-hidden bg-[#1b1b1b]">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: bgUrl, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.8 }}
        />
        <LiveScene />
        <div className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,12,14,.78) 0%, rgba(8,12,14,.55) 28%, rgba(8,12,14,0) 44%, rgba(8,12,14,0) 62%, rgba(8,12,14,.6) 100%)",
          }} />
        <div className="relative z-10 mx-auto w-[1280px] max-w-full h-screen min-h-[720px]">
          <div className="absolute left-14 right-14 top-[34px]">
            <TopBar />
          </div>
          <div className="absolute left-14 top-[130px]">
            <Info desktop />
          </div>
          <div className="absolute right-14 top-[110px]">
            <Projects desktop />
          </div>
          <div className="absolute left-0 right-0 bottom-[26px]">
            <Cta desktop />
          </div>
        </div>
      </div>
    </main>
  );
}
