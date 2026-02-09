import { getIconNames, getIcon } from "@versaur/icons";
import styles from "./icon-grid.module.css";

export interface IconGridProps {
  searchTerm?: string;
  tags?: string[];
}

export function IconGrid({ searchTerm = "", tags = [] }: IconGridProps) {
  const iconNames = getIconNames();

  const filteredIcons = iconNames.filter((name) => {
    const icon = getIcon(name);
    if (!icon) return false;

    const matchesSearch =
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      icon.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTags =
      tags.length === 0 || tags.some((tag) => icon.tags.includes(tag));

    return matchesSearch && matchesTags;
  });

  return (
    <div className={styles["icon-grid"]}>
      {filteredIcons.map((name) => {
        const icon = getIcon(name);
        if (!icon) return null;

        const Component = icon.component;

        return (
          <div key={name} className={styles["icon-grid-item"]}>
            <div className={styles["icon-grid-display"]}>
              <Component className={styles["icon-svg"]} />
            </div>
            <div className={styles["icon-grid-info"]}>
              <p className={styles["icon-name"]}>{icon.name}</p>
              <p className={styles["icon-id"]}>
                <code>{name}</code>
              </p>
              <div className={styles["icon-tags"]}>
                {icon.tags.map((tag) => (
                  <span key={tag} className={styles["tag"]}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
