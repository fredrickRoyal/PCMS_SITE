import Hero  from "@/components/shared/Hero";







export default function Home() {
  return (
    <main className="min-h-screen flex flex-col text-secondary">
      <Hero title={"Policy & Regulatory Frameworks"} description={"Upholding rights, ensuring safety, and strengthening refugee governance."} />
     <div className="max-w-screen bg-white  py-24 sm:px-6 lg:px-40">
     <h1 className="font-normal text-center text-lg mb-4">POLICY, REGULATIONS AND PROCEDURES</h1>
        <p className="mb-4 text-gray-700">Uganda’s refugee policy is anchored in human dignity, inclusion, and self-reliance. This section outlines key national laws, government frameworks, and international treaties that govern the protection and management of refugees.</p>
       
     </div>
      <div className="max-w-screen bg-[#EDF0F2] min-h-screen py-24 sm:px-6 lg:px-40">
        <form className="bg-white p-8 rounded-lg shadow-sm max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Organisation/Company Name</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Short Name (abbreviation)</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Office Phone No.</label>
              <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Physical Address or Main Office Location</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Postal Address if Any</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Organisation/Company Registration Number</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Permit to Operate No./Trading license No.</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Permit to Operate Issue Date</label>
              <div className="flex gap-2">
                <select className="w-1/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary">
                  <option>May</option>
                </select>
                <select className="w-1/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary">
                  <option>07</option>
                </select>
                <select className="w-1/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary">
                  <option>2023</option>
                </select>
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Permit to Operate/Trading license Expiry Date</label>
              <div className="flex gap-2">
                <select className="w-1/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary">
                  <option>May</option>
                </select>
                <select className="w-1/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary">
                  <option>07</option>
                </select>
                <select className="w-1/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary">
                  <option>2023</option>
                </select>
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Applicant First Name</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Applicant Last Name</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Applicant Phone Number</label>
              <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Applicant email</label>
              <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
          </div>
          <div className="mt-8 flex justify-end gap-4">
            <button type="button" className="px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">Back</button>
            <button type="submit" className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Submit</button>
          </div>
        </form>
      </div>
  
    </main>
  );
}
