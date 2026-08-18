import { useTranslations } from "next-intl";
import { LuArrowLeft } from "react-icons/lu";

import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="max-w-lg text-center">
        <p className="font-display text-6xl text-accent">404</p>
        <h1 className="mt-6 font-display text-3xl text-balance">
          {t("title")}
        </h1>
        <p className="mt-3 text-muted text-pretty">{t("description")}</p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          <LuArrowLeft className="size-4" aria-hidden />
          {t("cta")}
        </Link>
      </div>
    </main>
  );
}
