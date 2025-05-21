"use client"

import Hero2 from "@/components/shared/Hero2"

export default function ResearchSubmissionsPage() {
  return (<div>
<Hero2 title="Research Submissions"/>
    <div className="container mx-auto my-24 px-4 py-8">
      <h1 className="text-3xl font-normal mb-6">SUBMISSION OF RESEARCH OR STUDY TO OPM-DOR</h1>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-4">
          Please enter your email address,a verification code shall be sent to this email address and you shall enter the code to verify your email address.
        </p>
        <p className="text-gray-600 mb-8">
         Incase of further clarifications you may contact 077712345698/077712345698 for support.
        </p>
        {/* Add research submissions listing or content here */}
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tonyanguen@gmail.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
        <div className="flex flex-row gap-8">
          <button className="bg-black text-white text-sm px-8 py-2 rounded-lg">Home</button>
          <button className="bg-destructive text-white text-sm px-12 py-2 rounded-lg">Next</button>
          </div>  
          </form>
      </div>
    </div>
  </div>
  );
}