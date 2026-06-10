import { Link as TLink } from "@tanstack/react-router";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  params?: Record<string, string>;
  search?: Record<string, unknown>;
  children?: ReactNode;
};

/**
 * Permissive Link wrapper that accepts any string `to`.
 * Uses TanStack Router Link for internal app routes (matched by the splat
 * catch-all if no explicit route exists). Falls back to a plain <a> for
 * external links, mailto/tel, and hash-only anchors.
 */
export default function SmartLink({ to, children, ...rest }: Props) {
  const isExternal =
    /^(https?:)?\/\//i.test(to) ||
    to.startsWith("mailto:") ||
    to.startsWith("tel:") ||
    to.startsWith("#");

  if (isExternal) {
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
