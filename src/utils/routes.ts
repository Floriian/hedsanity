export type Route = {
  title: string;
  href: string;
};

export const routes: Route[] = [
  {
    title: "Főoldal",
    href: "/",
  },
  {
    title: "Galléria",
    href: "/gallery",
  },
  {
    title: "Rólam",
    href: "/about-me",
  },
  {
    title: "Kapcsolat",
    href: "/contact",
  },
];
