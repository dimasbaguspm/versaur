import { forwardRef, createContext, useContext } from "react";
import { attributeListStyles } from "@versaur/core";
import "@versaur/core/attribute-list.css";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import type { AttributeListProps } from "./attribute-list.types";

/**
 * Context for passing column configuration to Item children
 */
interface AttributeListContextType {
  columns: string;
}

const AttributeListContext = createContext<
  AttributeListContextType | undefined
>(undefined);

export const useAttributeListContext = () => {
  const context = useContext(AttributeListContext);
  if (!context) {
    throw new Error(
      "AttributeList.Item must be used within an AttributeList component",
    );
  }
  return context;
};

/**
 * AttributeList root component for displaying key-value pairs in a grid layout
 *
 * @example
 * ```tsx
 * <AttributeList columns="4">
 *   <AttributeList.Item span="4" title="Bio">
 *     Full-stack developer with 8+ years of experience
 *   </AttributeList.Item>
 *   <AttributeList.Item span="2" title="Name">
 *     John Doe
 *   </AttributeList.Item>
 *   <AttributeList.Item span="2" title="Email">
 *     john.doe@example.com
 *   </AttributeList.Item>
 * </AttributeList>
 * ```
 */
export const AttributeList = forwardRef<HTMLDListElement, AttributeListProps>(
  ({ columns = "3", children, ...rest }, ref) => {
    const dataAttrs = useDataAttrs({
      columns,
    });

    return (
      <AttributeListContext.Provider value={{ columns }}>
        <dl
          ref={ref}
          className={attributeListStyles["attribute-list"]}
          {...dataAttrs}
          {...rest}
        >
          {children}
        </dl>
      </AttributeListContext.Provider>
    );
  },
);

AttributeList.displayName = "AttributeList";
