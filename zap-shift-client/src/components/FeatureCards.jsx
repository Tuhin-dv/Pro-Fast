import React from 'react';
import trackingImg from '../assets/delivey/Rectangle (2).svg';
import safeDeliveryImg from '../assets/delivey/Rectangle (1).svg';
import supportImg from '../assets/delivey/Rectangle.svg';

const features = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: trackingImg,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: safeDeliveryImg,
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: supportImg,
  },
];

const FeatureCards = () => {
  return (
    <section className="py-12 px-4 md:px-10 mt-10 lg:px-20 rounded-3xl bg-white space-y-12">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row items-center gap-8 border p-6 border-gray-200 rounded-xl"
        >
          {/* Image */}
          <div className="">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-[300px] h-auto rounded-xl shadow"
            />
          </div>

          {/* Vertical dashed border */}
          <div className="hidden md:flex h-full">
            <div className="h-40 border-l-2 border-dashed border-gray-400 mx-4" />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeatureCards;
