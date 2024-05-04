import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Softwareentwicklung EB",
  DESCRIPTION:
    "Willkommen auf meiner Portfolio Seite. Schau dir meine Projekte an und kontaktiere mich für professionelle Webseiten, Software- oder App-Entwicklung.",
  AUTHOR: "Erik Blank",
};

// Work Page
export const WORK: Page = {
  TITLE: "Erfahrungen",
  DESCRIPTION: "Hier habe ich gearbeitet.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION:
    "Hier schreibe ich über Themen, die mich besonders interessieren oder ich mit euch teilen möchte.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projekte",
  DESCRIPTION:
    "Eine Übersicht über die aktuellsten Projekte, die ich realisiert habe oder an denen ich arbeite.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Suche",
  DESCRIPTION: "Durchsuche die Posts nach Keywords.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Erfahrung",
    HREF: "/work",
  },
  // {
  //   TEXT: "Blog",
  //   HREF: "/blog",
  // },
  {
    TEXT: "Projekte",
    HREF: "/projects",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "servus@erikblank.de",
    HREF: "mailto:servus@erikblank.de",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "erikblank",
    HREF: "https://github.com/erikblank",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Erik Blank",
    HREF: "https://www.linkedin.com/in/erik-blank-923786196/",
  },
];
