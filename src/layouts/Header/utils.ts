export const PATHS = ["/", "/work"] as const;

export const PATH_NAMES: Record<(typeof PATHS)[number], string> = {
  "/": "Home",
  "/work": "Work",
  // "/projects": "Projects",
};

export type PathClassNames = Record<(typeof PATHS)[number], string | undefined>;

export const INITIAL_CLASS_NAMES: PathClassNames = {
  "/": undefined,
  "/work": undefined,
  // "/projects": undefined,
};
