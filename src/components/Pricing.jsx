import React from 'react';

const Pricing = () => {
  const classicServices = [
    { name: "Express Doorstep Wash", desc: "Doorstep Service", mrp: "1,200", offer: "1,100", save: "100" },
    { name: "Interior Deep Cleaning", desc: "Doorstep Service", mrp: "2,750", offer: "2,500", save: "250" },
    { name: "Exterior Rubbing & Waxing", desc: "Doorstep Service", mrp: "3,250", offer: "2,900", save: "350" },
    { name: "Complete Car Spa", desc: "Interior + Exterior", mrp: "6,000", offer: "4,900", save: "1,100" }
  ];

  const eliteServices = [
    { name: "Express Doorstep Wash", desc: "Doorstep Service", mrp: "1,700", offer: "1,500", save: "200" },
    { name: "Interior Deep Cleaning", desc: "Doorstep Service", mrp: "3,500", offer: "2,900", save: "600" },
    { name: "Exterior Rubbing & Waxing", desc: "Doorstep Service", mrp: "4,000", offer: "3,500", save: "500" },
    { name: "Complete Car Spa", desc: "Interior + Exterior", mrp: "7,500", offer: "5,900", save: "1,600" }
  ];

  const addons = [
    { name: "Express Bike Wash", desc: "Doorstep · Standalone", mrp: "599", offer: "499", save: "100" },
    { name: "Upholstery Dry & Wet Vacuum", desc: "Cushions / Sofas", mrp: "599", offer: "499", save: "100" }
  ];

  return (
    <section className="py-16 bg-[#f8f9fa] font-sans text-slate-800" id="pricing" aria-label="Pricing Packages">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-[34px] font-medium mb-3 text-slate-900 tracking-tight">WynkWash — Doorstep Car Wash</h1>
          <h2 className="sr-only">Pricing Plans</h2>
          <p className="text-slate-600 mb-6 font-medium">Bengaluru · All Prices are Inclusive of 18% GST</p>
          <div className="inline-block bg-[#f6f8ec] text-[#4a5320] px-6 py-2 rounded-md font-medium text-sm border border-[#e8ead4]">
            Free Bike Wash Worth ₹550 Complimentary With Premium+ Services
          </div>
        </div>

        {/* Two Columns Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          {/* Classic Column */}
          <div className="bg-white rounded-xl border border-gray-300 overflow-hidden shadow-sm flex flex-col">
            <div className="p-6 pb-5">
              <h3 className="text-[26px] tracking-tight font-medium mb-2">Classic</h3>
              <p className="text-slate-600 text-[15px] mb-3 font-medium">Hatchbacks · Sedans · Small SUVs</p>
              <div className="flex gap-2 text-xs flex-wrap">
                <span className="bg-[#eaf4ea] text-green-800 px-2.5 py-0.5 border border-[#c3e3c6] rounded-full">Swift</span>
                <span className="bg-[#eaf4ea] text-green-800 px-2.5 py-0.5 border border-[#c3e3c6] rounded-full">i20</span>
                <span className="bg-[#eaf4ea] text-green-800 px-2.5 py-0.5 border border-[#c3e3c6] rounded-full">Creta</span>
                <span className="bg-[#eaf4ea] text-green-800 px-2.5 py-0.5 border border-[#c3e3c6] rounded-full">Nexon</span>
              </div>
            </div>

            <div className="bg-[#ebf4ea] px-6 py-2 text-[13px] text-green-800 border-y border-[#d3e8cf]">
              All Prices are Inclusive of 18% GST. No Hidden Charges.
            </div>

            <div className="px-6 py-3 border-b border-gray-100 flex justify-between text-[13px] text-slate-600 font-medium">
              <span>Service</span>
              <span>MRP → Offer</span>
            </div>

            <ul className="flex-1 flex flex-col">
              {classicServices.map((svc, idx) => (
                <li key={idx} className="flex justify-between px-6 py-4 border-b border-gray-100 last:border-0 hover:bg-slate-50 transition-colors">
                  <div>
                    <h4 className="font-medium text-slate-800 text-[17px] mb-1 tracking-tight">{svc.name}</h4>
                    <span className="text-sm text-slate-500 font-medium">{svc.desc}</span>
                  </div>
                  <div className="text-right flex flex-col items-end justify-center">
                    <div className="mb-1 flex items-center">
                      <span className="line-through text-slate-500 text-[15px] mr-2">₹{svc.mrp}</span>
                      <span className="text-[#a43b17] font-medium text-xl">₹{svc.offer}</span>
                    </div>
                    <span className="text-[#3b9348] text-[13px] font-medium tracking-tight">You Save ₹{svc.save}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Elite Column */}
          <div className="bg-white rounded-xl border border-[#40689b] overflow-hidden shadow-[0_0_15px_rgba(64,104,155,0.08)] flex flex-col">
            <div className="p-6 pb-5">
              <h3 className="text-[26px] tracking-tight font-medium mb-2">Elite</h3>
              <p className="text-slate-600 text-[15px] mb-3 font-medium">Luxury Cars · Large SUVs · 7-Seaters</p>
              <div className="flex gap-2 text-xs flex-wrap">
                <span className="bg-[#e9f0f9] text-[#1c4b82] px-2.5 py-0.5 border border-[#ccdef0] rounded-full">Innova</span>
                <span className="bg-[#e9f0f9] text-[#1c4b82] px-2.5 py-0.5 border border-[#ccdef0] rounded-full">Fortuner</span>
                <span className="bg-[#e9f0f9] text-[#1c4b82] px-2.5 py-0.5 border border-[#ccdef0] rounded-full">BMW</span>
                <span className="bg-[#e9f0f9] text-[#1c4b82] px-2.5 py-0.5 border border-[#ccdef0] rounded-full">Mercedes</span>
              </div>
            </div>

            <div className="bg-[#ebf4ea] px-6 py-2 text-[13px] text-green-800 border-y border-[#d3e8cf]">
              All Prices are Inclusive of 18% GST. No Hidden Charges.
            </div>

            <div className="px-6 py-3 border-b border-gray-100 flex justify-between text-[13px] text-slate-600 font-medium">
              <span>Service</span>
              <span>MRP → Offer</span>
            </div>

            <ul className="flex-1 flex flex-col">
              {eliteServices.map((svc, idx) => (
                <li key={idx} className="flex justify-between px-6 py-4 border-b border-gray-100 last:border-0 hover:bg-slate-50 transition-colors">
                  <div>
                    <h4 className="font-medium text-slate-800 text-[17px] mb-1 tracking-tight">{svc.name}</h4>
                    <span className="text-sm text-slate-500 font-medium">{svc.desc}</span>
                  </div>
                  <div className="text-right flex flex-col items-end justify-center">
                    <div className="mb-1 flex items-center">
                      <span className="line-through text-slate-500 text-[15px] mr-2">₹{svc.mrp}</span>
                      <span className="text-[#a43b17] font-medium text-xl">₹{svc.offer}</span>
                    </div>
                    <span className="text-[#3b9348] text-[13px] font-medium tracking-tight">You Save ₹{svc.save}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Add-Ons Section */}
        <div className="bg-white rounded-xl border border-gray-300 overflow-hidden shadow-sm mb-6 pb-2">
          <h3 className="sr-only">Add-Ons</h3>
          <div className="bg-[#ebf4ea] px-6 py-2.5 text-[13px] text-green-800 border-b border-[#d3e8cf]">
            All Prices are Inclusive of 18% GST. No Hidden Charges.
          </div>

          <div className="px-6 py-3 border-b border-gray-100 flex justify-between text-[13px] text-slate-600 font-medium">
            <span>Add-Ons</span>
            <span>MRP → Offer</span>
          </div>

          <ul className="flex flex-col">
            {addons.map((svc, idx) => (
              <li key={idx} className="flex justify-between px-6 py-4 border-b border-gray-100 last:border-0 hover:bg-slate-50 transition-colors">
                <div>
                  <h4 className="font-medium text-slate-800 text-[17px] mb-1 tracking-tight">{svc.name}</h4>
                  <span className="text-sm text-slate-500 font-medium">{svc.desc}</span>
                </div>
                <div className="text-right flex flex-col items-end justify-center">
                  <div className="mb-1 flex items-center">
                    <span className="line-through text-slate-500 text-[15px] mr-2">₹{svc.mrp}</span>
                    <span className="text-[#a43b17] font-medium text-xl">₹{svc.offer}</span>
                  </div>
                  <span className="text-[#3b9348] text-[13px] font-medium tracking-tight">You Save ₹{svc.save}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Info */}
        <div className="text-center text-[15px] font-medium text-slate-600 mb-8 pt-4">
          <p>6:00 AM – 9:00 PM · All Days · 88700 37600 · wynkwash.com</p>
        </div>

        {/* SEO Footer Text */}
        <div className="mt-8 text-[13px] text-slate-400 text-center max-w-4xl mx-auto leading-relaxed border-t border-gray-200 pt-8">
          <p>
            WynkWash provides professional doorstep car wash services in Bengaluru, including interior deep cleaning, exterior polishing, and complete car spa services for all vehicle types.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
