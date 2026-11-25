import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
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

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mahmoudhosni2000/", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/MahmoudHosni2000", Icon: Github },
];

const line = "1px solid rgba(200,180,60,.45)";

function TopBar() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-3 w-full">
      <span className="text-[13px] lg:text-[15px] tracking-[3px] uppercase text-[#d8b93c] leading-tight">
        Mahmoud Hosny
      </span>
      <nav
        aria-label="Main"
        className="flex items-center justify-center lg:justify-start gap-1 rounded-full px-4 lg:px-3 py-2.5 lg:py-1.5 backdrop-blur-md bg-[rgba(10,14,16,.55)] self-stretch lg:self-auto"
        style={{ border: "1px solid rgba(216,185,60,.28)", boxShadow: "0 4px 24px rgba(0,0,0,.35)" }}
      >
        {navLinks.map((l) => (
          <Link key={l.label} href={l.href}
            className="px-2 lg:px-2.5 py-1.5 rounded-full text-[13px] lg:text-[14px] tracking-[.5px] text-[#e1e1e1] hover:text-[#f0d36a] hover:bg-[rgba(216,185,60,.12)] transition-colors">
            {l.label}
          </Link>
        ))}
        <span className="hidden lg:block w-px h-5 mx-1.5 bg-[rgba(216,185,60,.3)]" aria-hidden="true" />
        <div className="flex items-center gap-1">
        {socials.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="group relative w-8 h-8 rounded-full flex items-center justify-center text-[#e1e1e1] hover:text-[#f0d36a] hover:bg-[rgba(216,185,60,.12)] focus:text-[#f0d36a] transition-colors">
              <Icon className="w-[18px] h-[18px]" strokeWidth={1.6} />
              <span className="pointer-events-none absolute top-full mt-2 right-0 hidden group-hover:block group-focus:block px-2 py-1 rounded-md text-[12px] whitespace-nowrap text-[#e1e1e1] bg-[rgba(10,14,16,.92)] shadow-lg"
                style={{ border: "1px solid rgba(216,185,60,.3)" }}>
                {label}
              </span>
            </a>
          ))}
  </div>
      </nav>
    </div>
  );
}

function Info({ desktop, part }) {
  const head = part !== "body";
  const body = part !== "head";
  return (
    <div className={desktop ? "w-[440px]" : "w-full"}>
      {head && (<>
      <span className="inline-block text-[#d8b93c] text-[12.5px] tracking-[.4px] px-3 py-1.5 rounded-sm bg-[rgba(27,27,27,.55)]" style={{ border: line }}>
        Open to remote or relocation
      </span>
      <h1 className={`font-bold tracking-tight ${desktop ? "text-[50px] leading-[1.05] mt-5 mb-2.5" : "text-[34px] leading-[1.08] mt-4 mb-2"}`}>
        Hi, I&apos;m <span className="text-[#d8b93c]">Mahmoud Hosny</span>
      </h1>
      <div className={desktop ? "text-[17px] mb-4 whitespace-nowrap" : "text-[16px] mb-3"}>
        Full-Stack Developer · React/Next.js + ASP.NET Core
      </div>
      </>)}
      {body && (<>
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
      </>)}
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


const DESK_CSS = `
.desk{--z:1;zoom:var(--z);height:calc(100dvh / var(--z))}
@media (max-height:699px){.desk{--z:.9}}
@media (max-height:639px){.desk{--z:.82}}
@media (max-height:579px){.desk{--z:.74}}
@media (max-height:519px){.desk{--z:.66}}
`;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1b1b1b] text-[#e1e1e1]">
      {/* Mobile: wizard scene banner, then stacked info layer */}
      <div className="lg:hidden relative flex flex-col min-h-screen">
        <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -inset-10" style={{ backgroundImage: bgUrl, backgroundSize: "cover", backgroundPosition: "30% 80%", filter: "blur(22px) saturate(.8)", opacity: 0.4, transform: "scale(1.5)" }} />
          <div className="absolute inset-0" style={{ background: "rgba(8,12,14,.7)" }} />
          <style>{`
.amb-mist{position:absolute;left:-30%;width:160%;height:45%;border-radius:50%;filter:blur(40px);will-change:transform;opacity:.0}
.amb-mist.a{bottom:-8%;background:radial-gradient(ellipse at center,rgba(120,170,160,.16),transparent 65%);animation:ambMistA 38s ease-in-out infinite alternate;opacity:1}
.amb-mist.b{top:40%;background:radial-gradient(ellipse at center,rgba(216,185,60,.07),transparent 65%);animation:ambMistB 52s ease-in-out infinite alternate;opacity:1}
@keyframes ambMistA{from{transform:translate3d(-6%,0,0)}to{transform:translate3d(8%,-4%,0)}}
@keyframes ambMistB{from{transform:translate3d(7%,0,0)}to{transform:translate3d(-7%,5%,0)}}
.amb-fly{position:absolute;width:3px;height:3px;border-radius:50%;background:#f0d36a;box-shadow:0 0 8px 2px rgba(240,211,106,.55);opacity:0;will-change:transform,opacity;animation:ambFly 10s ease-in-out infinite}
@keyframes ambFly{0%{opacity:0;transform:translate3d(0,0,0)}20%{opacity:.95}50%{opacity:.4;transform:translate3d(14px,-26px,0)}80%{opacity:.85}100%{opacity:0;transform:translate3d(-10px,-52px,0)}}
@media (prefers-reduced-motion:reduce){.amb-mist,.amb-fly{animation:none}.amb-fly{opacity:.3}}
`}</style>
          <div className="amb-mist a" />
          <div className="amb-mist b" />
          <i className="amb-fly" style={{ left: "44%", top: "27%", width: 2, height: 2, animationDelay: "-6s", animationDuration: "8s" }} /><i className="amb-fly" style={{ left: "71%", top: "20%", width: 3, height: 3, animationDelay: "-5s", animationDuration: "8s" }} /><i className="amb-fly" style={{ left: "7%", top: "19%", width: 2, height: 2, animationDelay: "-6s", animationDuration: "14s" }} /><i className="amb-fly" style={{ left: "33%", top: "19%", width: 2, height: 2, animationDelay: "-8s", animationDuration: "14s" }} /><i className="amb-fly" style={{ left: "75%", top: "23%", width: 4, height: 4, animationDelay: "-3s", animationDuration: "8s" }} /><i className="amb-fly" style={{ left: "9%", top: "36%", width: 3, height: 3, animationDelay: "-0s", animationDuration: "10s" }} /><i className="amb-fly" style={{ left: "56%", top: "26%", width: 3, height: 3, animationDelay: "-8s", animationDuration: "9s" }} /><i className="amb-fly" style={{ left: "74%", top: "95%", width: 3, height: 3, animationDelay: "-2s", animationDuration: "9s" }} /><i className="amb-fly" style={{ left: "50%", top: "20%", width: 2, height: 2, animationDelay: "-8s", animationDuration: "9s" }} /><i className="amb-fly" style={{ left: "82%", top: "34%", width: 3, height: 3, animationDelay: "-7s", animationDuration: "14s" }} /><i className="amb-fly" style={{ left: "62%", top: "82%", width: 3, height: 3, animationDelay: "-14s", animationDuration: "15s" }} /><i className="amb-fly" style={{ left: "41%", top: "39%", width: 3, height: 3, animationDelay: "-12s", animationDuration: "10s" }} /><i className="amb-fly" style={{ left: "13%", top: "81%", width: 3, height: 3, animationDelay: "-4s", animationDuration: "15s" }} /><i className="amb-fly" style={{ left: "96%", top: "65%", width: 2, height: 2, animationDelay: "-4s", animationDuration: "9s" }} /><i className="amb-fly" style={{ left: "68%", top: "61%", width: 3, height: 3, animationDelay: "-2s", animationDuration: "13s" }} /><i className="amb-fly" style={{ left: "65%", top: "61%", width: 3, height: 3, animationDelay: "-0s", animationDuration: "9s" }} /><i className="amb-fly" style={{ left: "46%", top: "96%", width: 4, height: 4, animationDelay: "-5s", animationDuration: "15s" }} /><i className="amb-fly" style={{ left: "11%", top: "19%", width: 2, height: 2, animationDelay: "-4s", animationDuration: "15s" }} /><i className="amb-fly" style={{ left: "10%", top: "97%", width: 3, height: 3, animationDelay: "-4s", animationDuration: "15s" }} /><i className="amb-fly" style={{ left: "94%", top: "57%", width: 2, height: 2, animationDelay: "-14s", animationDuration: "13s" }} /><i className="amb-fly" style={{ left: "62%", top: "53%", width: 4, height: 4, animationDelay: "-2s", animationDuration: "9s" }} /><i className="amb-fly" style={{ left: "10%", top: "35%", width: 3, height: 3, animationDelay: "-12s", animationDuration: "12s" }} /><i className="amb-fly" style={{ left: "34%", top: "58%", width: 2, height: 2, animationDelay: "-6s", animationDuration: "15s" }} /><i className="amb-fly" style={{ left: "24%", top: "65%", width: 3, height: 3, animationDelay: "-6s", animationDuration: "12s" }} /><i className="amb-fly" style={{ left: "58%", top: "78%", width: 3, height: 3, animationDelay: "-4s", animationDuration: "14s" }} /><i className="amb-fly" style={{ left: "90%", top: "56%", width: 2, height: 2, animationDelay: "-3s", animationDuration: "10s" }} /><i className="amb-fly" style={{ left: "25%", top: "27%", width: 2, height: 2, animationDelay: "-3s", animationDuration: "11s" }} /><i className="amb-fly" style={{ left: "65%", top: "83%", width: 3, height: 3, animationDelay: "-2s", animationDuration: "12s" }} /><i className="amb-fly" style={{ left: "3%", top: "26%", width: 3, height: 3, animationDelay: "-6s", animationDuration: "13s" }} /><i className="amb-fly" style={{ left: "19%", top: "96%", width: 4, height: 4, animationDelay: "-13s", animationDuration: "8s" }} />
        </div>
        <div className="relative z-10 px-[20px] pt-[26px]">
          <TopBar />
          <div className="mt-4"><Info part="head" /></div>
        </div>
        <div
          className="relative z-10 w-full overflow-hidden -mt-2"
          style={{ height: "clamp(430px, 56svh, 520px)", backgroundImage: bgUrl, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundColor: "#1b1b1b", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 14%, #000 74%, transparent 100%)", maskImage: "linear-gradient(to bottom, transparent 0%, #000 14%, #000 74%, transparent 100%)" }}
        >
          <LiveScene modelScale={1.2} />
        </div>
        <div className="flex flex-col gap-6 px-[18px] pt-0 pb-8 -mt-6 relative z-10">
          <Info part="body" />
          <Projects />
          <Cta />
        </div>
      </div>

      {/* Desktop: original forest scene full-viewport (like /wizard), layout on top */}
      <div className="hidden lg:block relative overflow-hidden bg-[#1b1b1b]" style={{ height: "100vh" }}>
        <style>{DESK_CSS}</style>
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
        <div className="desk relative z-10 mx-auto w-[1280px] max-w-full">
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
