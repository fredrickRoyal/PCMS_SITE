import Hero from "@/components/shared/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col text-secondary">
      <Hero
        title={"Policy & Regulatory Frameworks"}
        description={
          "Upholding rights, ensuring safety, and strengthening refugee governance."
        }
      />
      <div className="max-w-screen bg-white  py-24 sm:px-6 lg:px-40">
        <h1 className="font-normal text-center text-lg mb-4">
          POLICY, REGULATIONS AND PROCEDURES
        </h1>
        <p className="mb-4 text-gray-700">
          Uganda’s refugee policy is anchored in human dignity, inclusion, and
          self-reliance. This section outlines key national laws, government
          frameworks, and international treaties that govern the protection and
          management of refugees.
        </p>
      </div>
      <div className="max-w-screen bg-[#EDF0F2] min-h-screen py-24 sm:px-6 lg:px-40"></div>
    </main>
  );
}
