import { FaShippingFast } from "react-icons/fa";

const steps = [
  {
    title: "Booking Pick & Drop",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Cash On Delivery",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Delivery Hub",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Booking SME & Corporate",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
];

const HowItWork = () => {
  return (
    <section className=" py-12 px-4 md:px-10 lg:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">How it Works</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white  rounded-xl shadow p-8 text-center hover:shadow-lg transition"
          >
            <div className="flex justify-center text-green-600 mb-4">
              <FaShippingFast className="text-3xl" />
            </div>
            <h3 className="text-2xl  font-bold text-gray-800 mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWork;
