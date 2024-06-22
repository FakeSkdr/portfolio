import { useTranslations } from "next-intl";

import ContactCard from "./contact-card";

import Github from "@/components/icons/github";
import Linkedin from "@/components/icons/linkedin";

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <main className="container flex flex-col gap-10">
      <h2 className="mt-4 self-start text-3xl font-bold">{t("whoAmI")}</h2>
      <section className="text-xl text-muted-foreground">
        <ul className="mx-24 list-disc">
          <li>{t("description1")}</li>
          <li>{t("description2")}</li>
          <li>{t("description3")}</li>
        </ul>
        <p className="m-12">{t("descriptionGlobal")}</p>
      </section>

      <section className="mb-24 flex flex-row flex-wrap justify-around gap-10">
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
      </section>
    </main>
  );
}
