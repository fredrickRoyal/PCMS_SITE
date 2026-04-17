import { systemResponsibilities } from './data/systemData';

const SystemInfo = () => {
  return (
    <div className="w-full bg-white p-8 lg:px-60 lg:py-24">
      <div>
        <h1 className="font-normal text-center text-lg mb-4">UGANDA REFUGEE RESPONSE MONITORING E-SYSTEM</h1>
        <p className="mb-4 text-gray-700">Government through office of the prime minister plays a lead role in refuge management in accordance with article 189 (1) and sixth schedule item 5,of the 1995 constitution</p>
        <ul className="space-y-2">
          {systemResponsibilities.map((responsibility, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black"></span>
              <span className="text-gray-700">{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SystemInfo;