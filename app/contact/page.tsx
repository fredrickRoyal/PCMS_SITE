import type { Metadata } from "next";
import InfographicHero from "@/components/shared/InfographicHero";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, MapPin, Clock, Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach the OPM PCMS team — partnership applications, reporting support, technical help, and general enquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen text-secondary">
      <InfographicHero
        eyebrow="Reach the Team"
        title="Contact"
        titleAccent="Us."
        description="Questions about PCMS, partnership applications, or reporting? We route enquiries to the right team and respond within two business days."
        Icon={MessageCircle}
        variant="civic"
      />

      <section className="max-w-7xl mx-auto py-16 sm:px-6 lg:px-16">
        <div className="grid lg:grid-cols-3 gap-10 px-4 md:px-0">
          {/* Contact info */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Get in touch
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We respond to all enquiries within two business days. For
              partnership applications, please also review the{" "}
              <a
                href="/partner-requirements"
                className="text-emerald-700 underline hover:text-emerald-900"
              >
                partnership requirements
              </a>{" "}
              before reaching out.
            </p>

            <InfoRow icon={<Mail className="w-5 h-5" />} title="Email">
              <a
                href="mailto:opmpartnerships@gmail.com"
                className="hover:text-emerald-700"
              >
                opmpartnerships@gmail.com
              </a>
            </InfoRow>

            <InfoRow icon={<MapPin className="w-5 h-5" />} title="Address">
              <span>
                4th Floor, Office of the Prime Minister Building
                <br />
                Sir Apollo Kaggwa Road
                <br />
                P.O. Box 341, Kampala, Uganda
              </span>
            </InfoRow>

            <InfoRow icon={<Phone className="w-5 h-5" />} title="General Line">
              <a href="tel:+256417770500" className="hover:text-emerald-700">
                0417 770 500
              </a>
            </InfoRow>

            <InfoRow icon={<Clock className="w-5 h-5" />} title="Hours">
              Monday – Friday, 8 AM – 5 PM
            </InfoRow>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoRow({
  icon,
  title,
  children,
}: Readonly<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
          {title}
        </p>
        <div className="text-gray-800 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
