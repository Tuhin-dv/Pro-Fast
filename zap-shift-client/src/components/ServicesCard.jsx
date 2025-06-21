import { FaShippingFast, FaMapMarkedAlt, FaBoxes, FaMoneyBillWave, FaBuilding, FaUndo } from "react-icons/fa";

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: <FaShippingFast className="text-4xl text-white " />,
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: <FaMapMarkedAlt className="text-4xl text-white " />,
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: <FaBoxes className="text-4xl text-white " />,
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: <FaMoneyBillWave className="text-4xl text-white " />,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    icon: <FaBuilding className="text-4xl text-white " />,
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: <FaUndo className="text-4xl text-white " />,
  },
];

const ServicesCard = () => {
  return (
    <section className="py-12 mt-20 rounded-3xl px-4 md:px-10 lg:px-20 bg-[#03373D]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Our Services</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white hover:bg-[#CAEB66] transition-colors duration-300 p-6 rounded-xl shadow-md text-center"
          >
            <div className="flex justify-center bg-[#03373D] p-8 rounded-full w-fit mx-auto mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-700 text-[16px] font-medium">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCard;
