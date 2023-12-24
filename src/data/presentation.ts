type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "zaden.connell@gmail.com",
  title: "Hi, I’m Zaden 👋",
  // profile: "/profile.webp",
  description:
    "Hey, I'm a *computer science student* with over *a year* of experience. I am currently working with *Astro and C++*. Outside of school, I weightlift and play guitar.",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/zaden-connell/",
    },
    {
      label: "Instagram",
      link: "https://www.instagram.com/zaden_connell/",
    },
    {
      label: "GitHub",
      link: "https://github.com/PostGuitarist",
    },
  ],
};

export default presentation;
