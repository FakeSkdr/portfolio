import React from "react";
import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ContactCardProps {
  icon: React.ReactNode;
  username: string;
  url: string;
  linkCta: string;
  children?: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  username,
  url,
  linkCta,
  children,
}) => {
  return (
    <Card className="flex max-w-md flex-col items-center rounded-lg bg-muted p-2 pb-1">
      <CardHeader className="flex self-start">
        <CardTitle className="flex items-center gap-4 align-middle">
          {icon} <span className="text-lg font-bold">{username}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[100px]">
        <CardDescription>{children}</CardDescription>
      </CardContent>
      <CardFooter className="flex self-end">
        <Button asChild>
          <Link href={url} target="_blank" prefetch={false}>
            {linkCta}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContactCard;
