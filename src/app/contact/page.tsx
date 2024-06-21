import ContactCard from "./contact-card";
import { GithubIcon, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mt-12 flex flex-wrap justify-around gap-10">
      <ContactCard
        label="LinkedIn"
        username="Bastien Bocquet"
        icon={
          <div className="rounded-full bg-[#0077B5] p-3 text-white">
            <Linkedin className="size-4" />
          </div>
        }
        url="https://www.linkedin.com/in/bastien-bocquet/"
      >
        Connect with me on LinkedIn to learn more about my professional
        experience and projects.
      </ContactCard>

      <ContactCard
        label="Github"
        username="@FakeSkdr"
        icon={
          <div className="rounded-full bg-black p-3 text-white">
            <GithubIcon className="size-4" />
          </div>
        }
        url="https://github.com/FakeSkdr"
      >
        Browse though my GitHub repositories to see some unfinished projects and
        the source code of this website.
      </ContactCard>
    </div>
  );
}
