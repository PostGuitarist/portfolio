/* empty css                                 */
import { i as createComponent, j as createAstro, p as renderComponent, q as renderScript, r as renderTemplate, v as renderSlot, l as addAttribute, w as renderHead, m as maybeRenderHead, x as Fragment } from '../chunks/astro/server_BpqQCR3y.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const basics = {"name":"Zaden Connell","label":"CS @ Liberty University","image":"/me_avatar.png","email":"me@zadenconnell.com","phone":"(828)773-9695","url":"https://zadenconnell.com","summary":"I am currently looking for a full-time software development position. I have experience in embedded development, web development, and AI development. I'm working on a few personal projects to further my skills, so check back soon!","theme":"default","location":{"city":"Boone","region":"North Carolina"},"profiles":[{"network":"LinkedIn","username":"zaden-connell","url":"https://linkedin.com/in/zaden-connell"},{"network":"X","username":"ConnellZaden","url":"https://x.com/ConnellZaden"},{"network":"GitHub","username":"PostGuitarist","url":"https://github.com/PostGuitarist"}]};
const work = [{"name":"SwiftSeg","position":"Full Stack Developer","location_type":"Remote","location":"Remote","url":"https://github.com/swiftseg","startDate":"2024-06-01","endDate":null,"summary":"Developed scalable web applications, integrated Supabase, and improved team efficiency at SwiftSeg.","responsibilities":["Developed and maintained scalable, responsive web applications using Next.js, enhancing user experience and reducing page load times by 40%.","Integrated Supabase as a backend and database solution for real-time data management, authentication, and storage, streamlining development.","Contributed to Agile Kanban workflows, improving team efficiency and workflow through effective communication."],"achievements":["Developed a web application from scratch that increased user engagement by 30%.","Reduced page load times by 40% through performance optimization.","Integrated Supabase as a backend and database solution, streamlining development."],"skills":["Web Development","Next.js","Supabase","Agile Development","Communication","Performance Optimization","User Experience","Scalability","Real-time Data Management","Authentication","Team Efficiency"]},{"name":"Liberty Analytical Support Initiative","position":"AI Developer & Advisor","location_type":"On site","location":"Lynchburg, Virginia","url":"https://www.liberty.edu","startDate":"2024-08-01","endDate":"2025-05-01","summary":"Presented on AI strategy, implementation, and ethical considerations in enhancing cultural competency to NATO Security Force Assistance leaders.","responsibilities":["Presented a custom trained AI chat-bot to NATO in Rome, Italy.","Led the development of a AI chatbot that equiped international security force advisors with the knowledge and skills to enhance cultural competency.","Created training materials and reccomendations for AI implementation in international security force assistance.","Analyzed current NATO SFA training programs and reccomended AI integration strategies."],"achievements":["Developed an AI chatbot that equipped international security force advisors with the knowledge and skills to enhance cultural competency.","Traveled to NATO SFA headquarters in Rome, Italy to present."],"skills":["AI Development","AI Strategy","Training & Development"]},{"name":"Samaritan's Purse","position":"Software Development Intern","location_type":"On site","location":"Boone, North Carolina","url":"https://www.samaritanspurse.org","startDate":"2023-05-01","endDate":"2023-08-04","summary":"Launched a major application, developed features and bug fixes, and improved data validation at Samaritan's Purse.","responsibilities":["Oversaw the launch of a significant ministry application.","Independently developed and deployed 14 feature releases and bug fixes for an internal-facing CRM application, which serves hundreds of users.","Implemented UI and backend features using Angular Typescript and C# to ensure validity and enhance UX.","Designed and implemented account data validator that accurately flagged over 500k accounts.","Increased data validator load and running efficiency by over 4x times."],"achievements":["Launched a major ministry application.","Developed and deployed 14 feature releases and bug fixes for an internal-facing CRM application.","Implemented account data validator that accurately flagged over 500k accounts.","Increased data validator load and running efficiency by over 4x times."],"skills":["Web Development","Angular","Typescript","C#","UI Design","MySQL","Data Validation"]}];
const education = [{"institution":"Liberty University","url":"https://www.liberty.edu","area":"Computer Science","studyType":"Bachelor","startDate":"2021-08-01","endDate":"2025-05-01","score":"3.89","courses":["CS101 - Introduction to Computer Science","CS102 - Data Structures"]}];
const certificates = [{"name":"Converge Leadership Program","date":"2024-04-01","issuer":"Canvas Credentials","url":"https://api.badgr.io/public/assertions/PJyXvHu3QiyfCnQAhOft4w"}];
const skills = [{"name":"HTML","level":"Intermediate","keywords":["Web Development","Frontend"]},{"name":"CSS","level":"Intermediate","keywords":["Web Development","Frontend","Responsive Design"]},{"name":"JavaScript","level":"Intermediate","keywords":["Web Development","Frontend","Backend","Fullstack"]},{"name":"Tailwind","level":"Intermediate","keywords":["Web Development","Frontend","CSS Framework","Responsive Design"]},{"name":"TypeScript","level":"Intermediate","keywords":["Web Development","Frontend","Backend","JavaScript Superset"]},{"name":"Node","level":"Intermediate","keywords":["Web Development","Backend","JavaScript","Server"]},{"name":"MySQL","level":"Intermediate","keywords":["Databases","SQL","Data Storage","Backend"]},{"name":"Git","level":"Intermediate","keywords":["Version Control","Collaboration","Source Code"]},{"name":"GitHub","level":"Intermediate","keywords":["Version Control","Collaboration","Source Code","Git"]},{"name":"Next.js","level":"Beginner","keywords":["Web Development","Frontend","React Framework","SSR","Static Generation"]},{"name":"React","level":"Intermediate","keywords":["Web Development","Frontend","JavaScript Library","UI"]}];
const projects = [{"name":"VSCode to Visual Studio Extension","isActive":true,"description":"VSCode extension to create the solution files needed for a Visual Studio C++ project with just source files.","highlights":["Built with TypeScript","VSCode API","File system operations"],"url":"https://marketplace.visualstudio.com/items?itemName=PostGuitarist.vscode-to-vs","github":"https://github.com/PostGuitarist/vscode-to-vs-extension"},{"name":"Simple Compiler v2","isActive":true,"description":"A simple LLVM compiler for a C-like language, built with C, C++, Yacc, and x86 assembly.","highlights":["Built with C, C++, Yacc, and x86 assembly","LLVM backend","Custom language syntax","Made as a part of Liberty University's CSCN 434"],"url":"mailto:me@zadenconnell.com?subject=Portfolio%20Website%20-%20Simple%20Compiler%20v2%20Question"},{"name":"Simple OS v3","isActive":true,"description":"A simple operating system kernel built with C and x86 assembly.","highlights":["Built with C and x86 assembly","Custom kernel","Memory management","File system support","Made as a part of Liberty University's CSCN 443"],"url":"mailto:me@zadenconnell.com?subject=Portfolio%20Website%20-%20Simple%20OS%20v3%20Question"},{"name":"Multithreaded Game of Life","isActive":true,"description":"A multi-threaded implementation of Conway's Game of Life in C++ using pthreads","highlights":["Built with C++ and pthreads","Multithreading","Game of Life algorithm"],"url":"https://github.com/PostGuitarist/multithreaded-gol","github":"https://github.com/PostGuitarist/multithreaded-gol"},{"name":"Availi","isActive":true,"description":"Meeting scheduler to find the perfect time to meet with everyone","highlights":["Built with Next.js, PostgreSQL, and Tailwind CSS","Responsive design","Dark mode support"],"url":"https://availi.zadenconnell.com","github":"https://github.com/PostGuitarist/availi"},{"name":"LU Computer Science Documentation","isActive":true,"description":"Guide to using MacOS devices in Liberty University's computer science classes","highlights":["Built with Next.js and Tailwind CSS","Responsive design","Dark mode support"],"url":"https://cs.cameron.rs","github":"https://github.com/PostGuitarist/liberty-macos-docs"},{"name":"Portfolio Website","isActive":false,"description":"My personal portfolio website showcasing my projects, skills, and experience.","highlights":["Built with Astro and Tailwind CSS","Responsive design","Dark mode support"],"url":"https://zadenconnell.com","github":"https://github.com/PostGuitarist/portfolio"}];

const $$Astro$6 = createAstro();
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/zadenconnell/Developer/Personal/portfolio/node_modules/.pnpm/@vercel+speed-insights@1.2.0/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/node_modules/.pnpm/@vercel+speed-insights@1.2.0/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$5 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const { image, summary, url, theme } = basics;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en"> <head><script async src="https://www.googletagmanager.com/gtag/js?id=G-K1K1E71L5Q"><\/script><script>\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n      gtag("js", new Date());\n      gtag("config", "G-K1K1E71L5Q");\n    <\/script><meta charset="UTF-8"><title>', '</title><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preload" as="image"', '><meta property="og:url"', '><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image" content=""><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain"', '><meta property="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image" content=""><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Itim"><link rel="stylesheet" href="/themes/themes.css">', "", "</head> <body", ' class="relative bg-skin-fill"> <div class="absolute top-0 -z-10 h-full w-full print:hidden"> <div class="bg-skin-hue/10 absolute bottom-auto left-[20%] right-auto top-0 h-[200px] w-[200px] -translate-x-[30%] translate-y-[20%] rounded-full blur-[80px] invert-0 dark:bg-white/5"></div> </div> ', "  </body> </html>"])), title, addAttribute(summary, "content"), addAttribute(image, "href"), addAttribute(url, "content"), addAttribute(title, "content"), addAttribute(summary, "content"), addAttribute(url.split("//")[1] ?? "", "content"), addAttribute(url, "content"), addAttribute(title, "content"), addAttribute(summary, "content"), renderComponent($$result, "SpeedInsights", $$Index$1, {}), renderHead(), addAttribute(theme, "data-theme"), renderSlot($$result, $$slots["default"]));
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Section;
  const { className, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["flex flex-col gap-4 print:gap-0", className], "class:list")}> ${title && renderTemplate`<h3 class="relative flex w-full items-center gap-3 pb-4 text-3xl print:gap-1 print:pb-0 print:text-xl">${title}</h3>`} ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/components/Section.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const { summary } = basics;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p> ${summary} </p> ` })}`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/components/sections/About.astro", void 0);

const $$Astro$3 = createAstro();
const $$Education = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Education;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "className": Astro2.props.className, "title": "Education" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul class="space-y-4 py-3 print:space-y-0"> ${education.map(({ institution, startDate, endDate, area, url }) => {
    const startYear = new Date(startDate).getFullYear();
    const endYear = endDate != null ? new Date(endDate).getFullYear() : "Actual";
    const years = `${startYear} - ${endYear}`;
    return renderTemplate`<div class="flex items-baseline"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 hidden h-5 w-5 self-start md:inline-block print:hidden"> <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path> <path d="M22 10v6"></path> <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path> </svg> <div class="relative w-full items-baseline justify-between gap-2"> <h3 class="mr-6 items-baseline gap-x-2 gap-y-0.5 font-medium"> <a target="_blank" class="hover:text-skin-hue group flex items-center gap-[6px] decoration-dotted underline-offset-[5px] hover:underline"${addAttribute(url, "href")}> ${institution} </a> </h3> <div class="text-sm text-skin-muted">${area}</div> <time class="right-0 top-0 text-xs text-skin-muted md:absolute md:block">${years}</time> </div> </div>`;
  })} </ul> ${certificates.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <h4>Certificates</h4> <ul class="space-y-4 py-3 print:space-y-0"> ${certificates.map(({ name, date, issuer, url }) => {
    const certificateYear = new Date(date).getFullYear();
    return renderTemplate`<div class="flex items-baseline"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 hidden h-5 w-5 self-start md:inline-block print:hidden"> <path d="M15 12h-5"></path> <path d="M15 8h-5"></path> <path d="M19 17V5a2 2 0 0 0-2-2H4"></path> <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path> </svg> <div class="relative w-full items-baseline justify-between gap-2"> <h3 class="mr-6 items-baseline gap-x-2 gap-y-0.5 font-medium"> <a class="hover:text-skin-hue group flex items-center gap-[6px] text-skin-base decoration-dotted underline-offset-[5px] hover:underline"${addAttribute(url, "href")} target="_blank"> ${name} </a> </h3> <div class="text-sm text-skin-muted">${issuer}</div> <time class="right-0 top-0 text-xs text-skin-muted md:absolute md:block">${certificateYear}</time> </div> </div>`;
  })} </ul> ` })}`}` })}`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/components/sections/Education.astro", void 0);

const $$Html = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/html.astro", void 0);

const $$Css = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/css.astro", void 0);

const $$Javascript = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M7.5 8h3v8l-2 -1"></path><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path></svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/javascript.astro", void 0);

const $$Type = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5"></path><path d="M9 12h4"></path><path d="M11 12v6"></path><path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z"></path></svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/type.astro", void 0);

const $$React = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path></svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/react.astro", void 0);

const $$Node = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0"></path><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5"></path></svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/node.astro", void 0);

const $$Sql = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3"></path><path d="M9 7h.01"></path></svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/sql.astro", void 0);

const $$Git = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 15v-6"></path><path d="M15 11l-2 -2"></path><path d="M11 7l-1.9 -1.9"></path><path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z"></path></svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/git.astro", void 0);

const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/GitHub.astro", void 0);

const $$Tailwind = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"></path></svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/tailwind.astro", void 0);

const $$Next = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path><path d="M15 12v-3"></path></svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/next.astro", void 0);

const $$Swift = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="svg-icon" style="width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M729.173 841.387c-100.693 58.026-238.506 64-378.026 4.266A589.099 589.099 0 0 1 85.333 618.667c28.587 23.466 62.294 42.666 98.134 59.733 143.786 66.987 287.146 62.293 388.266 0-143.786-110.507-266.24-254.293-357.12-371.627-19.2-19.2-33.28-43.093-47.786-64.426 353.28 258.133 337.92 323.84 102.826-43.094C478.293 410.027 672 529.493 672 529.493c6.827 3.84 10.667 6.827 15.36 9.387 4.267-10.667 8.107-21.76 11.093-33.28 33.707-121.6-4.693-261.12-88.746-375.893C803.84 247.04 919.04 467.2 870.827 651.947c-1.28 4.693-2.56 9.386-2.134 16.64 95.574 120.746 69.974 246.613 57.6 222.72-51.626-101.974-148.48-70.4-197.12-49.92z"></path></svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/swift.astro", void 0);

const $$Swiftui = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 50 50" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14.182 5C9.122 5 5 9.122 5 14.182v21.636C5 40.878 9.122 45 14.182 45h21.636C40.878 45 45 40.878 45 35.818V14.182C45 9.122 40.878 5 35.818 5H14.182zm0 2h21.636A7.166 7.166 0 0 1 43 14.182v21.636A7.166 7.166 0 0 1 35.818 43H14.182A7.166 7.166 0 0 1 7 35.818V14.182A7.166 7.166 0 0 1 14.182 7zm12.816 6.033c2.078 4.156 3.283 6.5 2.307 12.227C27.079 23.774 18.855 17.152 17 15c1.336 2.375 5.18 7.586 6.516 8.922-2.375-1.632-10.02-7.645-10.02-7.645s6.532 9.871 12.024 13.211c-2.078.668-6.59 3.398-14.457-1.425 2.003 2.745 5.55 8.255 14.234 7.736 3.043-.148 4.896-1.113 6.603-1.781 1.707-.668 3.34-.595 4.75 1.93.297-2.302.371-4.454-2.004-6.903 0 0 2.348-8.95-7.648-16.012z"></path></svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/swiftui.astro", void 0);

const $$Kotlin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="svg-icon" style="width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M55.467 1024 537.6 533.333 1024 1024zM0 0h512L0 533.333zm571.733 0L0 597.333V1024l512-512L1024 0z"></path></svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/kotlin.astro", void 0);

const $$Flutter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="svg-icon" style="width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M610.73 0 98.134 512 256 669.867 925.184.512H611.285L610.731 0zm.598 472.405L335.232 747.904l276.053 276.053h314.582L650.24 747.99l275.627-275.626H611.37z"></path></svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/flutter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Experience;
  const SKILLS_ICONS = {
    HTML: $$Html,
    CSS: $$Css,
    JavaScript: $$Javascript,
    TypeScript: $$Type,
    React: $$React,
    Node: $$Node,
    MySQL: $$Sql,
    Git: $$Git,
    GitHub: $$GitHub,
    Next: $$Next,
    Tailwind: $$Tailwind,
    Swift: $$Swift,
    SwiftUI: $$Swiftui,
    Kotlin: $$Kotlin,
    Flutter: $$Flutter
  };
  return renderTemplate(_a || (_a = __template(["", ' <script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/collapse@3.x.x/dist/cdn.min.js"><\/script> <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"><\/script> '])), renderComponent($$result, "Section", $$Section, { "className": Astro2.props.className, "title": "Experience", "data-astro-cid-ghubstuj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul class="flex flex-col" data-astro-cid-ghubstuj> ${work.map(({ name, startDate, endDate, position, summary, responsibilities, achievements, url, skills, location, location_type }) => {
    const startYear = new Date(startDate).getFullYear();
    const endYear = endDate != null ? new Date(endDate).getFullYear() : "Present";
    return renderTemplate`<li class="relative print:py-2" data-astro-cid-ghubstuj> <div class="group relative grid pb-1 print:pb-0 transition-all print:grid-cols-1 print:gap-1 sm:grid-cols-12 sm:gap-8 md:gap-6 lg:hover:!opacity-100 " data-astro-cid-ghubstuj> <header class="relative mt-1 text-xs font-semibold sm:col-span-2" data-astro-cid-ghubstuj> <time${addAttribute(startDate, "datetime")}${addAttribute(startDate, "data-title")} data-astro-cid-ghubstuj>${startYear}</time> - <time${addAttribute(endDate, "datetime")}${addAttribute(endDate, "data-title")} data-astro-cid-ghubstuj>${endYear}</time> </header> <div class="relative flex flex-col pb-6 print:pb-0 before:-ml-6 sm:col-span-10 before:w-px print:before:hidden before:absolute before:bg-skin-muted before:h-full before:mt-2" data-astro-cid-ghubstuj> <div class="absolute w-2 h-2 bg-skin-muted rounded-full mt-2 -translate-x-[1.71rem] ring print:hidden ring-skin-fill" data-astro-cid-ghubstuj></div> <h3 data-astro-cid-ghubstuj> <div class="inline-flex items-center text-lg print:text-base leading-tight group/link focus-visible:text-amber-500" aria-label="{position} - {company}" data-astro-cid-ghubstuj> <span data-astro-cid-ghubstuj>${position} <span data-astro-cid-ghubstuj>@</span> ${url ? renderTemplate`<a class="text-skin-hue"${addAttribute(url, "href")}${addAttribute(`Ver ${name}`, "title")} target="_blank" data-astro-cid-ghubstuj>${name}</a>` : renderTemplate`<span data-astro-cid-ghubstuj>${name}</span>`} ${url && renderTemplate`<span class="inline-block text-skin-hue print:[&>svg]:hidden" data-astro-cid-ghubstuj> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block w-4 h-4 ml-1 transition-transform translate-y-px shrink-0 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" aria-hidden="true" data-astro-cid-ghubstuj> <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" data-astro-cid-ghubstuj></path> </svg> </span>`} </span> </div> </h3> ${(location || location_type) && renderTemplate`<div class="text-xs text-skin-muted" data-astro-cid-ghubstuj> ${location} ${location && location_type && "-"} ${location_type} </div>`} <div class="mt-4  print:gap-0 flex flex-col gap-4 print:text-xs text-sm" x-data="{ expanded: false }" data-astro-cid-ghubstuj> ${summary && renderTemplate`<div class="flex flex-col gap-1" data-astro-cid-ghubstuj> <h4 data-astro-cid-ghubstuj>Summary:</h4> <ul class="text-skin-muted [&>li]:ml-4 flex list-disc flex-col gap-2" data-astro-cid-ghubstuj> ${Array.isArray(summary) ? summary.map((item) => ({ item })) : renderTemplate`<li data-astro-cid-ghubstuj>${summary}</li>`} </ul> </div>`} ${(responsibilities || achievements) && renderTemplate`<div class="md:after:from-skin-hue dark:md:after:to-skin-hue/0  flex relative flex-col max-sm:!h-auto print:!h-auto gap-4 print:gap-2 md:after:bg-gradient-to-t md:after:absolute md:after:bottom-0 md:after:w-full print:after:hidden md:after:h-12 md:after:content-[''] " :class="expanded ? 'after:hidden' : ''" x-show="expanded" x-collapse.min.50px data-astro-cid-ghubstuj> ${responsibilities && renderTemplate`<div class="flex flex-col gap-1" data-astro-cid-ghubstuj> <h4 data-astro-cid-ghubstuj>Responsibilities:</h4> <ul class="text-skin-muted [&>li]:ml-4 flex list-disc flex-col gap-2" data-astro-cid-ghubstuj> ${responsibilities.map((responsibility) => renderTemplate`<li data-astro-cid-ghubstuj>${responsibility}</li>`)} </ul> </div>`} ${achievements && renderTemplate`<div class="flex flex-col gap-1" data-astro-cid-ghubstuj> <h4 data-astro-cid-ghubstuj>Achievements:</h4> <ul class="text-skin-muted [&>li]:ml-4 flex list-disc flex-col gap-2" data-astro-cid-ghubstuj> ${achievements.map((achievement) => renderTemplate`<li data-astro-cid-ghubstuj>${achievement}</li>`)} </ul> </div>`} </div>
                
                <button @click="expanded = ! expanded" class="print:hidden group/more w-fit cursor-pointer items-center justify-center gap-1.5 text-xs underline text-skin-muted transition-all hover:text-skin-base flex" data-astro-cid-ghubstuj> <span x-text="expanded ? 'Show less' : 'Show more'" data-astro-cid-ghubstuj>Show more</span> <svg class="w-4 h-4 group-hover/more:translate-y-0.5 duration-200 ease-out" :class="{ 'rotate-180': expanded }" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ghubstuj><polyline points="6 9 12 15 18 9" data-astro-cid-ghubstuj></polyline></svg> </button>


                <ul class="flex print:hidden flex-wrap gap-2" aria-label="Technologies used" data-astro-cid-ghubstuj> ${skills && skills.map((skill) => {
      const iconName = skill === "Next.js" ? "Next" : skill;
      const Icon = SKILLS_ICONS[iconName];
      return renderTemplate`<li class="bg-skin-button-accent/20 border-skin-hue/20 text-skin-hue print:p-0 print:bg-transparent print:text-zinc-800 flex gap-1 items-center border-solid print:border-none border rounded-md px-2 py-0.5 text-xs" data-astro-cid-ghubstuj> ${Icon && renderTemplate`${renderComponent($$result2, "Icon", Icon, { "data-astro-cid-ghubstuj": true })}`} <span data-astro-cid-ghubstuj>${skill}</span> </li>`;
    })} </ul>`} </div> </div> </div> </li>`;
  })} </ul> ` }));
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/components/sections/Experience.astro", void 0);

const $$Mail = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail size-4"><title>Mail Icon</title><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/Mail.astro", void 0);

const $$Phone = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><title>Phone Icon</title><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/Phone.astro", void 0);

const $$X = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/X.astro", void 0);

const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/LinkedIn.astro", void 0);

const $$WorldMap = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10"></circle> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path> </svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/WorldMap.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const { name, label, image, location, profiles, phone, email } = basics;
  const { city, region } = location;
  const SOCIAL_ICONS = {
    GitHub: $$GitHub,
    LinkedIn: $$LinkedIn,
    X: $$X
  };
  const linkedInfo = profiles.find(({ network }) => network === "LinkedIn");
  const linkedUrl = linkedInfo?.url;
  const printInfo = [email, phone, linkedUrl].filter(Boolean).join(" \u2022 ");
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col-reverse gap-8" data-astro-cid-anhloy43> <div class="info" data-astro-cid-anhloy43> <h1 data-astro-cid-anhloy43>${name}</h1> <h2 data-astro-cid-anhloy43>${label}</h2> <div class="flex items-center gap-2 pt-2 text-sm text-skin-muted" data-astro-cid-anhloy43> ${renderComponent($$result2, "WorldMap", $$WorldMap, { "data-astro-cid-anhloy43": true })} ${city}, ${region} </div> <footer class="print" data-astro-cid-anhloy43> ${printInfo} </footer> <footer class="no-print" data-astro-cid-anhloy43> ${renderTemplate`<div${addAttribute(`{ copyText: '${email}', copyNotification: false, copyToClipboard() { navigator.clipboard.writeText(this.copyText); this.copyNotification = true; let that = this; setTimeout(function(){ that.copyNotification = false; }, 3000); } }`, "x-data")} class="relative flex items-center" data-astro-cid-anhloy43> <div x-show="copyNotification" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0 translate-y-3" x-transition:enter-end="opacity-100 translate-x-0" x-transition:leave="transition ease-in duration-300" x-transition:leave-start="opacity-100 translate-x-0" x-transition:leave-end="opacity-0 translate-y-2" style="display:none;" class="absolute left-0" x-cloak data-astro-cid-anhloy43> <div class="-mt-1.5 flex h-7 -translate-y-full items-center rounded border-r border-green-500 bg-green-500 px-3 text-xs text-white" data-astro-cid-anhloy43> <span class="!text-white" data-astro-cid-anhloy43>Copied!</span> <div class="absolute left-0 bottom-0 inline-block h-full translate-x-full translate-y-5 overflow-hidden" data-astro-cid-anhloy43> <div class="h-3 w-3 origin-center rotate-45 transform border border-transparent bg-green-500" data-astro-cid-anhloy43></div> </div> </div> </div> <button @click="copyToClipboard();" class="group flex h-8 w-9 cursor-pointer items-center justify-center rounded-md text-skin-muted hover:bg-skin-button-accent hover:text-skin-inverted [&>span]:hover:text-skin-inverted" data-astro-cid-anhloy43> <svg x-show="copyNotification" class="h-4 w-4 stroke-current text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" x-cloak data-astro-cid-anhloy43> <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" data-astro-cid-anhloy43></path> </svg> <span x-show="!copyNotification" data-astro-cid-anhloy43> ${renderComponent($$result2, "Mail", $$Mail, { "data-astro-cid-anhloy43": true })} </span> </button> </div>`} ${renderTemplate`<a${addAttribute(`tel:${phone}`, "href")}${addAttribute(`Call ${name} at ${phone}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-anhloy43> ${renderComponent($$result2, "Phone", $$Phone, { "data-astro-cid-anhloy43": true })} </a>`} ${profiles.map(({ network, url }) => {
    const Icon = SOCIAL_ICONS[network];
    return renderTemplate`<a${addAttribute(url, "href")}${addAttribute(`Visit ${name} profile on ${network}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-anhloy43> ${renderComponent($$result2, "Icon", Icon, { "data-astro-cid-anhloy43": true })} </a>`;
  })} <div class="no-print footer-button max-sm:hidden group flex h-8 w-9 cursor-pointer items-center justify-center rounded-md text-skin-hue hover:bg-skin-button-accent hover:text-skin-inverted [&>span]:hover:text-skin-inverted" data-astro-cid-anhloy43> <svg xmlns="http://www.w3.org/2000/svg" class="icon h-6 w-6 icon-tabler icon-tabler-command" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-anhloy43> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-anhloy43></path> <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10" data-astro-cid-anhloy43></path> </svg> </div> </footer> </div> <figure class="print:hidden w-fit relative" data-astro-cid-anhloy43> <img class="shadow-lg shadow-skin-hues"${addAttribute(image, "src")}${addAttribute(name, "alt")} data-astro-cid-anhloy43> <div class="pointer-events-none absolute -inset-2" data-astro-cid-anhloy43> <div class="absolute -inset-y-8 right-0 w-px bg-skin-hue/50 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" data-astro-cid-anhloy43></div> <div class="absolute -inset-y-8 left-0 w-px bg-skin-hue/50 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" data-astro-cid-anhloy43></div> <div class="absolute -inset-x-8 bottom-0 h-px bg-skin-hue/50 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]" data-astro-cid-anhloy43></div> <div class="absolute -inset-x-8 top-0 h-px bg-skin-hue/50 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]" data-astro-cid-anhloy43></div> </div> </figure> </div> ` })}  ${renderScript($$result, "/Users/zadenconnell/Developer/Personal/portfolio/src/components/sections/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/components/sections/Hero.astro", void 0);

const $$Arrow = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path> </svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/Arrow.astro", void 0);

const $$Astro$1 = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "className": Astro2.props.className, "title": "Projects", "data-astro-cid-44zkpkd5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 gap-3 md:grid-cols-2 print:flex print:flex-col" data-astro-cid-44zkpkd5> ${projects.map(({ url, description, highlights, name, isActive, github }) => {
    return renderTemplate`<div role="contentinfo" class="grid-span-1 ring-skin-muted relative flex flex-col rounded-md bg-skin-button-muted/50 p-5 shadow-sm ring-1" data-astro-cid-44zkpkd5> <div class="flex items-center justify-between space-x-[10px]" data-astro-cid-44zkpkd5> <div class="flex items-center gap-2" data-astro-cid-44zkpkd5> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder size-4" data-astro-cid-44zkpkd5> <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" data-astro-cid-44zkpkd5></path> </svg> <div class="flex items-center gap-[6px]" data-astro-cid-44zkpkd5> ${isActive ? renderTemplate`<a class="hover:text-skin-hue group flex items-center gap-[6px] text-lg decoration-dotted underline-offset-[5px] hover:underline"${addAttribute(url, "href")}${addAttribute(`Ver ${name}`, "title")} target="_blank" data-astro-cid-44zkpkd5> ${name} <span class="text-skin-hue transition ease-linear group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-astro-cid-44zkpkd5> ${renderComponent($$result2, "Arrow", $$Arrow, { "data-astro-cid-44zkpkd5": true })} </span> </a>` : renderTemplate`<span data-astro-cid-44zkpkd5>${name}</span>`} </div> </div> ${github && renderTemplate`<a${addAttribute(github, "href")} title="View slug repository on GitHub" target="_blank" rel="noopener" class="opacity-75 transition-opacity duration-100 hover:opacity-100" data-astro-cid-44zkpkd5> ${renderComponent($$result2, "Git", $$Git, { "data-astro-cid-44zkpkd5": true })} </a>`} </div> <p class="py-3 text-sm text-skin-base" data-astro-cid-44zkpkd5>${description}</p> <ul class="mt-1 text-sm text-skin-muted" data-astro-cid-44zkpkd5> ${highlights.map((highlight) => {
      return renderTemplate`<li data-astro-cid-44zkpkd5>${highlight}</li>`;
    })} </ul> </div>`;
  })} </div> ` })} `;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/components/sections/Projects.astro", void 0);

const $$Figma = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-figma"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/Figma.astro", void 0);

const $$Gitlab = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gitlab"><path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"></path></svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/Gitlab.astro", void 0);

const $$Astro = createAstro();
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Skills;
  const SKILLS_ICONS = {
    HTML: $$Html,
    CSS: $$Css,
    JavaScript: $$Javascript,
    TypeScript: $$Type,
    React: $$React,
    Node: $$Node,
    MySQL: $$Sql,
    Git: $$Git,
    GitHub: $$GitHub,
    Next: $$Next,
    Tailwind: $$Tailwind,
    Swift: $$Swift,
    SwiftUI: $$Swiftui,
    Kotlin: $$Kotlin,
    Flutter: $$Flutter,
    Figma: $$Figma,
    Gitlab: $$Gitlab
  };
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "className": Astro2.props.className, "title": "Skills" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul class="[&>li>svg]:text-skin-hue inline-flex flex-wrap gap-6 [&>li>svg]:size-5 [&>li]:text-sm"> ${skills.map(({ name }) => {
    const iconName = name === "Next.js" ? "Next" : name;
    const Icon = SKILLS_ICONS[iconName];
    return renderTemplate`<li class="border-skin-hue/20s bg-skin-button-accent/20s borders border-solids flex items-center gap-1 rounded-md px-2 py-0.5 text-xs text-skin-muted print:border-none print:bg-transparent print:p-0 print:text-zinc-800"> ${Icon && renderTemplate`${renderComponent($$result2, "Icon", Icon, {})}`} <span>${name}</span> </li>`;
  })} </ul> ` })}`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/components/sections/Skills.astro", void 0);

const $$Tail = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex w-full max-w-7xl justify-center md:col-span-6 print:hidden"> <a href="https://github.com/PostGuitarist" rel="noreferrer" target="_blank" class="group flex items-center space-x-1 text-xs"> <span class="hover:decoration- flex gap-1 underline decoration-dotted underline-offset-4 transition group-hover:underline-offset-4">
Made by Zaden
</span> </a> </div>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/components/sections/Tail.astro", void 0);

const $$KeyboardManager = createComponent(($$result, $$props, $$slots) => {
  const { profiles } = basics;
  const SOCIAL_ICONS = {
    GitHub: `<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  style="margin-right: 8px"
  ><path
    fill="currentColor"
    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  ></path></svg
>`,
    LinkedIn: `<svg
  height="16"
  width="16"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  style="margin-right: 8px"
  ><title>LinkedIn</title><path
    fill="currentColor"
    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  ></path></svg
>`,
    X: `<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  style="margin-right: 8px"
  ><title>X</title><path
    fill="currentColor"
    d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
  ></path></svg
>
`
  };
  const profilesInfo = profiles.map(({ network, url }) => {
    const icon = SOCIAL_ICONS[network];
    const firstLetter = network[0].toUpperCase();
    return {
      id: network,
      section: "Social",
      title: `Visit ${network}`,
      url,
      icon,
      hotkey: `ctrl+${firstLetter}`
    };
  });
  return renderTemplate`<!-- <footer id="normal-footer" class="no-print flex flex-col gap-2">
	<div>
		Press <kbd>Cmd</kbd> + <kbd>K</kbd> to open the command palette.
	</div>
</footer> -->${maybeRenderHead()}<div class="footer-button no-print" data-astro-cid-5uazswxx> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-command" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#777" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5uazswxx> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-5uazswxx></path> <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10" data-astro-cid-5uazswxx></path> </svg> </div> <div id="hotkeypad" data-placeholder="Search Command"${addAttribute(JSON.stringify(profilesInfo), "data-info")} data-astro-cid-5uazswxx></div> ${renderScript($$result, "/Users/zadenconnell/Developer/Personal/portfolio/src/components/KeyboardManager.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/components/KeyboardManager.astro", void 0);

const $$ThemeSwitch$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-moon"><path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"></path><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.9 4.9 1.4 1.4"></path><path d="m17.7 17.7 1.4 1.4"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.3 17.7-1.4 1.4"></path><path d="m19.1 4.9-1.4 1.4"></path></svg>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/icons/themeSwitch.astro", void 0);

const $$ThemeSwitch = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="no-print inline-flex items-center" data-astro-cid-g6q3pnbr> <div class="group/theme flex items-center gap-2" data-astro-cid-g6q3pnbr> <label for="themeSwitch" class="flex items-center gap-1 text-sm font-medium leading-6 text-skin-base transition-transform ease-in-out group-hover/theme:rotate-45" data-astro-cid-g6q3pnbr> ${renderComponent($$result, "Theme", $$ThemeSwitch$1, { "data-astro-cid-g6q3pnbr": true })}</label> <select id="themeSwitch" name="themeSwitch" class="focus:ring-skin-hue ring-skin-muted block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-skin-base ring-1 ring-inset focus:ring-2 sm:text-sm sm:leading-6 bg-skin-fill dark:bg-skin-fill" data-astro-cid-g6q3pnbr> <option value="system" data-astro-cid-g6q3pnbr>System</option> <option value="dark" data-astro-cid-g6q3pnbr>Dark</option> <option value="light" data-astro-cid-g6q3pnbr>Light</option> </select> </div>  ${renderScript($$result, "/Users/zadenconnell/Developer/Personal/portfolio/src/components/ThemeSwitch.astro?astro&type=script&index=0&lang.ts")} </div>`;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/components/ThemeSwitch.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const { name, label } = basics;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${name} Portfolio - ${label}`, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative grid max-w-7xl gap-12 p-8 max-sm:py-16 md:grid-cols-6 md:p-16 xl:gap-24 print:max-w-none print:grid-cols-1 print:gap-6" data-astro-cid-j7pv25f6> <div class="space-y-6 md:col-span-2 print:col-span-1 print:grid print:grid-cols-2 print:gap-5 print:space-y-0" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "About", $$About, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ThemeSwitch", $$ThemeSwitch, { "data-astro-cid-j7pv25f6": true })} </div> <div class="space-y-12 md:col-span-4 print:col-span-1 print:grid print:grid-cols-4 print:gap-2 print:space-y-0" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Experience", $$Experience, { "className": "print:col-span-3", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Projects", $$Projects, { "className": "print:hidden", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Skills", $$Skills, { "className": "print:hidden", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Education", $$Education, { "className": "order-first", "data-astro-cid-j7pv25f6": true })} </div> ${renderComponent($$result2, "Tail", $$Tail, { "data-astro-cid-j7pv25f6": true })} </main> ${renderComponent($$result2, "KeyboardManager", $$KeyboardManager, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/Users/zadenconnell/Developer/Personal/portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/zadenconnell/Developer/Personal/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
