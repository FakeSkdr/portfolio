import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ContactCardProps {
  icon: React.ReactNode;
  username: string;
  url: string;
  label: string;
  children?: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({
  label,
  icon,
  username,
  url,
  children,
}) => {
  return (
    <Card className="flex max-w-md flex-col items-center rounded-lg bg-muted p-2 pb-1">
      <CardHeader className="flex self-start">
        <CardTitle className="flex items-center gap-4 align-middle">
          {icon} <h3 className="text-lg font-bold">{username}</h3>
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[100px]">
        <CardDescription>{children}</CardDescription>
      </CardContent>
      <CardFooter className="flex self-end">
        <Button asChild>
          <Link href={url} target="_blank" prefetch={false}>
            View my {label}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContactCard;
