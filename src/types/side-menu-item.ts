import type { SVGProps } from "@flowui/react/icons";

export type SideMenuItem = {
  label: string;
  slug: string;
  order: number;
};

export type SideMenuItemsGroup = {
  title: string;
  slug: string;
  icon: (props: SVGProps) => JSX.Element;
  links: SideMenuItem[];
  order: number;
};
