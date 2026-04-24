"use client"

import InfographicHero from "@/components/shared/InfographicHero"
import { FileText } from "lucide-react"

export default function ResearchSubmissionsPage() {
  return (
    <div>
      <InfographicHero
        eyebrow="Publications · Research"
        title="Research"
        titleAccent="Submissions."
        description="Submit a research or study request to the OPM Department of Refugees."
        Icon={FileText}
        variant="authority"
      />
      <div className="container mx-auto my-16 md:my-24 px-4 py-8">
        <h1 className="font-display text-2xl md:text-3xl font-normal mb-6 text-foreground">Submission of research or study to OPM-DoR</h1>
        <div className="max-w-2xl">
          <p className="text-foreground-muted mb-4 leading-relaxed">
            Please enter your email address. A verification code will be sent to this address and you will enter the code to verify ownership.
          </p>
          <p className="text-foreground-muted mb-8 leading-relaxed">
            For further clarification contact 0777 123 456 for support.
          </p>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-foreground font-medium mb-2 text-sm">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full bg-surface border border-border rounded-md px-4 py-2.5 text-foreground placeholder:text-foreground-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div className="flex flex-row gap-3">
              <button type="button" className="bg-foreground text-background text-sm px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity">Home</button>
              <button type="submit" className="bg-civic text-civic-foreground text-sm px-8 py-2.5 rounded-full hover:bg-civic/90 transition-colors">Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}