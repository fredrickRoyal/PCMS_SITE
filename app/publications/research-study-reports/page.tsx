import InfographicHero from "@/components/shared/InfographicHero";
import { BookOpen } from "lucide-react";

export default function ResearchStudyReportsPage() {
  return (
    <div>
      <InfographicHero
        eyebrow="Publications · Research"
        title="Research Study"
        titleAccent="Reports."
        description="Detailed research studies commissioned and reviewed by the OPM Department of Refugees."
        Icon={BookOpen}
        variant="authority"
      />
      <div className="container mx-auto px-4 py-16">
        <p className="text-foreground-muted max-w-2xl leading-relaxed">
          Explore detailed research study reports on refugee response and
          partnership-related topics. New reports are added as they are cleared
          for publication.
        </p>
      </div>
    </div>
  );
}
