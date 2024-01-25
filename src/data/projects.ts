export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "VSCode to VS Extension",
    techs: ["Typescript", "VSCode API"],
    link: "https://github.com/PostGuitarist/vscode-to-vs-extension",
    isComingSoon: false,
  },
  {
    title: "LU CS Docs",
    techs: ["NextJS", "MDX", "Typescript"],
    link: "https://github.com/PostGuitarist/liberty-macos-docs",
    isComingSoon: false,
  },
  {
    title: "Weatherly",
    techs: ["Swift", "UIKit", "CoreLocation"],
    link: "https://github.com/PostGuitarist/Weatherly",
    isComingSoon: false,
  },
  {
    title: "ShookWeather",
    techs: ["Python", "OpenWeatherMap API"],
    link: "https://github.com/PostGuitarist/ShookWeather",
    isComingSoon: false,
  },
];

export default projects;
