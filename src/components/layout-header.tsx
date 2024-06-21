import Link from "next/link";

import { ModeToggle } from "./ui/mode-toggle";
import { Home } from "lucide-react";

export function LayoutHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-muted px-6">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <span className="text-lg font-semibold">
          <Home className="text-muted-foreground hover:text-foreground"></Home>
        </span>
      </Link>
      <nav className="flex items-center gap-6">
        <Link
          href="/"
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
      <ModeToggle />
    </header>
  );
}
