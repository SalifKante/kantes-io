import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SectionRouter } from "@/components/section-router";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Credentials } from "@/components/sections/credentials";
import { Hero } from "@/components/sections/hero";
import { Profile } from "@/components/sections/profile";
import { Projects } from "@/components/sections/projects";
import { Research } from "@/components/sections/research";
import { Skills } from "@/components/sections/skills";
import type { SectionId } from "@/content/sections";

/**
 * The whole site is one document. Every `/[locale]/[section]` route renders
 * this same tree and differs only in where it starts scrolled.
 */
export function PageContent({ section }: { section?: SectionId }) {
  return (
    <>
      <SectionRouter section={section} />
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Profile />
        <Research />
        <Projects />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
