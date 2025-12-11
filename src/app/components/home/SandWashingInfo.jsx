import React from "react";
import { CheckCircle } from "lucide-react";

const impurities = [
  {
    title: "Silt and Clay",
    desc: "Hinder the adhesion of cement and sand."
  },
  {
    title: "Organic Matters",
    desc: "Decayed vegetation, humus, coal, industrial waste etc. that retard the setting time of cement and reduce strength & durability."
  },
  {
    title: "Salts and Chlorides",
    desc: "Lead to corrosion of steel reinforcement."
  },
  {
    title: "Mica",
    desc: "Causes poor adhesion to cement paste."
  },
  {
    title: "Light Materials",
    desc: "Shells, shales, soft fragments resulting in weak bonding."
  },
  {
    title: "Sulfides and Sulfates",
    desc: "Iron pyrites, gypsum that corrode cement and decrease structure durability."
  },
  {
    title: "Fine Dust / Mud",
    desc: "These particles coat sand grains and interfere with the bonding process."
  }
];

const SandWashingInfo = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-10 text-[#15324A]">
        Impurities Removed by Our Washing Process
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {impurities.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-5 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="font-bold text-lg text-[#15324A]">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-700 mt-12 text-lg">
        Washing the sand with clean water is an effective method to remove all harmful substances
        and bring the sand within acceptable standards for construction and other applications.
      </p>
    </section>
  );
};

export default SandWashingInfo;
