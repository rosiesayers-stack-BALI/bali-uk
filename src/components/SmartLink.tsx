import { Link as TLink } from "@tanstack/react-router";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  children?: ReactNode;
};

/**
 * Permissive Link wrapper that accepts any string `to`.
 * Uses TanStack Router Link for internal app routes,
 * and a plain <a> for external links, hash anchors, or routes that don't exist yet.
 */
export default function SmartLink({ to, children, ...rest }: Props) {
  const isExternal =
    /^(https?:)?\/\//i.test(to) ||
    to.startsWith("mailto:") ||
    to.startsWith("tel:") ||
    to.startsWith("#");

  // Only these app routes are real TanStack routes.
  const internalRoutes = new Set(["/", "/login", "/portal"]);
  const path = to.split(/[?#]/)[0];

  if (isExternal || !internalRoutes.has(path)) {
    return (
      <a href={to} {...rest}>
        {children}
      </a>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (
    <TLink to={to as any} {...(rest as any)}>
      {children}
    </TLink>
  );
}
