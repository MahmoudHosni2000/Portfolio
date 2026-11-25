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
    img: "data:image/webp;base64,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",
    grad: "linear-gradient(135deg,#0f5a55,#1c9a8c)",
    link: "https://rayaa360.cloud",
  },
  {
    name: "Menu.Web API",
    desc: "Ordering REST API with JWT, Redis and Stripe.",
    tags: "ASP.NET Core · SQL Server",
    img: "data:image/webp;base64,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",
    grad: "linear-gradient(135deg,#2c2f6b,#5a55c0)",
    link: "https://github.com/MahmoudHosni2000/Menu.Web",
  },
  {
    name: "E.Commerce API",
    desc: "Catalog API with search, filters, sorting and paging.",
    tags: "ASP.NET Core · EF Core",
    img: "data:image/webp;base64,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",
    grad: "linear-gradient(135deg,#7a3a10,#c98a22)",
    link: "https://github.com/MahmoudHosni2000/E.Commerce",
  },
  {
    name: "Gym Management",
    desc: "Admin app for members, trainers, plans and sessions.",
    tags: "ASP.NET MVC · SQL Server",
    img: "data:image/webp;base64,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",
    grad: "linear-gradient(135deg,#6a1c45,#b83a7c)",
    link: "https://gymmanagementsystemmvc.runasp.net/",
    demo: { email: "MahmoudHosni0007@gmail.com", pass: "P@ssw0rd" },
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
        {[...socials].reverse().map(({ label, href, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
            className="group relative w-[44px] h-[44px] lg:w-[46px] lg:h-[46px] rounded-sm flex items-center justify-center text-[#e1e1e1] bg-[rgba(27,27,27,.6)] hover:text-[#f0d36a] hover:bg-[rgba(216,185,60,.12)] focus:text-[#f0d36a] transition-colors"
            style={{ border: line }}>
            <Icon className="w-[20px] h-[20px]" strokeWidth={1.6} />
            <span className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block group-focus:block px-2 py-1 rounded-md text-[12px] whitespace-nowrap text-[#e1e1e1] bg-[rgba(10,14,16,.92)] shadow-lg"
              style={{ border: "1px solid rgba(216,185,60,.3)" }}>
              {label}
            </span>
          </a>
        ))}
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
          {p.img ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.img} alt={`${p.name} preview`} width={92} height={64} loading="lazy"
              className="w-[92px] h-16 flex-none rounded-sm object-cover object-top" style={{ border: line }} />
          ) : (
            <div className="w-[92px] h-16 flex-none rounded-sm" style={{ background: p.grad, border: line }} />
          )}
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
            {p.demo && (
              <div className="mt-2 px-2 py-1.5 rounded-sm text-[11px] leading-[1.5] text-[#e1e1e1] bg-[rgba(216,185,60,.08)]" style={{ border: "1px dashed rgba(216,185,60,.45)" }}>
                <span className="text-[#d8b93c] tracking-[1px] uppercase text-[10px] block">Demo login · try it live</span>
                <span className="text-[#a9aeb0]">Email: </span><span className="break-all select-all">{p.demo.email}</span>
                <br />
                <span className="text-[#a9aeb0]">Password: </span><span className="select-all">{p.demo.pass}</span>
              </div>
            )}
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
