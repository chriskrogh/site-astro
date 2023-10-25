import { useEffect, useState } from "react";

import * as styles from "./Header.css";
import {
  INITIAL_CLASS_NAMES,
  PATH_NAMES,
  type PathClassNames,
  PATHS,
} from "./utils";

export const Header: React.FC = () => {
  const [classNames, setClassNames] =
    useState<PathClassNames>(INITIAL_CLASS_NAMES);

  useEffect(() => {
    setClassNames(
      PATHS.reduce(
        (acc, path) => ({ ...acc, [path]: getLinkStyle(path) }),
        INITIAL_CLASS_NAMES,
      ),
    );
  }, []);

  return (
    <>
      {PATHS.map((path) => (
        <a key={path} href={path} className={styles.link}>
          <p className={classNames[path]}>{PATH_NAMES[path]}</p>
        </a>
      ))}
    </>
  );
};

const getLinkStyle = (path: string) => {
  return window?.location.pathname === path ? styles.activeText : undefined;
};
