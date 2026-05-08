'use client';

import { useState } from 'react';

export default function FAQ() {

  const faqs = [
    {
      question: "Are Keshvique oils suitable for all hair types?",
      answer:
        "Yes, our Ayurvedic formulations are designed for all hair types.",
    },
    {
      question: "How often should I use the oils?",
      answer:
        "For best results, use 2-3 times weekly with gentle scalp massage.",
    },
    {
      question: "Are the products sulphate and paraben free?",
      answer:
        "Yes, all products are sulphate, silicone and paraben free.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-[#10211a]">

      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-[#d4af37] mb-4">
            FAQ
          </p>

          <h2 className="text-5xl text-white font-light">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="space-y-6">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="border border-[#d4af3720] rounded-2xl overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full text-left p-6 flex justify-between items-center bg-[#13271f]"
              >

                <span className="text-lg text-[#f3deb0]">
                  {faq.question}
                </span>

                <span className="text-[#d4af37] text-2xl">
                  {openIndex === index ? '-' : '+'}
                </span>

              </button>

              {openIndex === index && (
                <div className="p-6 text-gray-400 leading-relaxed bg-[#0d1d17]">
                  {faq.answer}
                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}