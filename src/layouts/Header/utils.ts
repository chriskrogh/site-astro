export const PATHS = ["/", "/about", "/work", "/projects"] as const;

export const PATH_NAMES: Record<(typeof PATHS)[number], string> = {
  "/": "Home",
  "/about": "About",
  "/work": "Work",
  "/projects": "Projects",
};

export type PathClassNames = Record<(typeof PATHS)[number], string | undefined>;

export const INITIAL_CLASS_NAMES: PathClassNames = {
  "/": undefined,
  "/about": undefined,
  "/work": undefined,
  "/projects": undefined,
};
