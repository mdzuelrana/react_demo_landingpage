import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      duration: "/month",
      features: [
        "Basic Access",
        "Limited Storage",
        "Community Support",
      ],
      button: "Get Started",
    },
    {
      name: "Monthly",
      price: "$9",
      duration: "/month",
      features: [
        "Full Access",
        "10GB Storage",
        "Priority Support",
      ],
      button: "Choose Plan",
    },
    {
      name: "Yearly",
      price: "$90",
      duration: "/year",
      features: [
        "Full Access",
        "100GB Storage",
        "Premium Support",
        "2 Months Free",
      ],
      button: "Choose Plan",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Choose Your Plan
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>

            <p className="text-4xl font-bold">
              {plan.price}
              <span className="text-sm text-gray-500">
                {plan.duration}
              </span>
            </p>

            <ul className="mt-6 space-y-2 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>

            <button className="mt-6 cursor-pointer w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;