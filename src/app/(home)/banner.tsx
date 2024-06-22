import { useTranslations } from "next-intl";

export default function Banner() {
  const t = useTranslations("Banner");

  return (
    <section className="relative flex h-[80vh] w-full items-center justify-center">
      <img
        src="assets/banner.jpg"
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="relative z-10 text-center text-white">
        <h1 className="mb-4 text-5xl font-bold">Bastien Bocquet</h1>
        <p className="mx-auto max-w-[600px] text-xl">{t("intro")}</p>
      </div>
    </section>
  );
}
