import type { AppLayoutVariant } from "@versaur/core";

export interface LayoutTemplate {
  variant: AppLayoutVariant;
  name: string;
  description: string;
  showHeader: boolean;
  showSideLeft: boolean;
  showSideRight: boolean;
  showBottom: boolean;
  responsive?: {
    mobileVariant?: AppLayoutVariant;
    tabletVariant?: AppLayoutVariant;
  };
}

export const LAYOUT_TEMPLATES: Record<AppLayoutVariant, LayoutTemplate> = {
  classic: {
    variant: "classic",
    name: "Classic",
    description: "Header with left sidebar and main content area",
    showHeader: true,
    showSideLeft: true,
    showSideRight: false,
    showBottom: true,
    responsive: {
      mobileVariant: "mobile",
      tabletVariant: "classic",
    },
  },
  mobile: {
    variant: "mobile",
    name: "Mobile",
    description: "Optimized for mobile with bottom navigation",
    showHeader: true,
    showSideLeft: false,
    showSideRight: false,
    showBottom: true,
    responsive: {
      mobileVariant: "mobile",
      tabletVariant: "classic",
    },
  },
  split: {
    variant: "split",
    name: "Split",
    description: "Header with both left and right sidebars",
    showHeader: true,
    showSideLeft: true,
    showSideRight: true,
    showBottom: true,
  },
  full: {
    variant: "full",
    name: "Full Width",
    description: "Maximizes content area with minimal navigation",
    showHeader: true,
    showSideLeft: false,
    showSideRight: false,
    showBottom: false,
  },
};

/**
 * Get layout template configuration by variant
 */
export function getLayoutTemplate(variant: AppLayoutVariant): LayoutTemplate {
  return LAYOUT_TEMPLATES[variant];
}

/**
 * Get all available layout templates
 */
export function getAllLayoutTemplates(): LayoutTemplate[] {
  return Object.values(LAYOUT_TEMPLATES);
}

/**
 * Determine responsive variant based on viewport width
 */
export function getResponsiveVariant(
  baseVariant: AppLayoutVariant,
  viewportWidth: number,
): AppLayoutVariant {
  const template = getLayoutTemplate(baseVariant);

  if (!template.responsive) {
    return baseVariant;
  }

  if (viewportWidth < 768 && template.responsive.mobileVariant) {
    return template.responsive.mobileVariant;
  }

  if (viewportWidth >= 768 && template.responsive.tabletVariant) {
    return template.responsive.tabletVariant;
  }

  return baseVariant;
}
