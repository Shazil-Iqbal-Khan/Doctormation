import { createFileRoute } from "@tanstack/react-router";

import { Benefits } from "@/components/site/benefits";
import { Comparison } from "@/components/site/comparison";
import { CtaSection } from "@/components/site/cta-section";
import { DashboardShowcase } from "@/components/site/dashboard";
import { Features } from "@/components/site/features";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { HowItWorks } from "@/components/site/how-it-works";
import { HumanAi } from "@/components/site/human-ai";
import { Nav } from "@/components/site/nav";
import { Problem } from "@/components/site/problem";
import { Trust } from "@/components/site/trust";
import { WhatsAppSection } from "@/components/site/whatsapp";

const title = "Medrelay — AI Automation for Hospitals & Clinics";
const description =
  "Automate patient communication, appointment booking, reminders and follow-ups on WhatsApp and voice — so your staff can focus on care.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Medrelay",
          description,
          url: "/",
          contactPoint: {
            "@type": "ContactPoint",
            email: "hello@medrelay.ai",
            contactType: "sales",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <DashboardShowcase />
        <HowItWorks />
        <Features />
        <WhatsAppSection />
        <Comparison />
        <HumanAi />
        <Benefits />
        <Trust />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
