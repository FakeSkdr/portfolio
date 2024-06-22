import { useTranslations } from "next-intl";

export default function AboutMe() {
  const t = useTranslations("AboutMe");

  return (
    <section className="bg-background py-20">
      <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-6">
        <div>
          <img
            src="assets/photo.jpg"
            alt="Profile Photo"
            className="h-auto w-full max-w-96 self-center rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="mb-4 text-3xl font-bold">{t("aboutMe")}</h2>
          <p className="text-muted-foreground">
            {t("introduction")}
            <br />
            <br />
            {t("hobbies")}
          </p>
        </div>
      </div>
    </section>
  );
}
