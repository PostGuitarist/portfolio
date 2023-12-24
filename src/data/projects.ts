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
    title: "Caloric",
    techs: ["Swift", "UIKit", "CoreData"],
    link: "https://github.com/PostGuitarist/Caloric",
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
