import { useTranslations } from "next-intl";

import ContactCard from "./contact-card";

import Github from "@/components/icons/github";
import Linkedin from "@/components/icons/linkedin";

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <div className="container mt-12 flex flex-wrap justify-around gap-10">
      <ContactCard
        username="Bastien Bocquet"
        icon={<Linkedin className="size-10" />}
        url="https://www.linkedin.com/in/bastien-bocquet/"
        linkCta={t("cardAction", { brand: "Linkedin" })}
      >
        {t("linkedinDescription")}
      </ContactCard>

      <ContactCard
        username="@FakeSkdr"
        icon={<Github className="size-10" />}
        url="https://github.com/FakeSkdr/portfolio"
        linkCta={t("cardAction", { brand: "Github" })}
      >
        {t("githubDescription")}
      </ContactCard>
    </div>
  );
}
