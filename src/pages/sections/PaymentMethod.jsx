import React from "react";

const PaymentMethod = () => {
  const payments = [
    "https://upload.wikimedia.org/wikipedia/commons/9/98/Visa_Inc._logo_%282005%E2%80%932014%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
    "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e7/Payoneer_logo.svg",
  ];

  return (
    <section className="py-16 bg-base-200 overflow-hidden">
      

      <div className="overflow-hidden">
        <div className="marquee gap-16">

          {[...payments, ...payments].map((logo, index) => (
            
                <img
                key={index}
                src={logo}
                className="h-12 w-auto"
                />
            
          ))}

        </div>
      </div>
    </section>
  );
};

export default PaymentMethod;