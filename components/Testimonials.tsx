export default function Testimonials() {
  const reviews = [
    {
      name: "Priya Sharma",
      review:
        "My hair fall reduced within weeks. The oils feel extremely premium.",
    },
    {
      name: "Ananya Kapoor",
      review:
        "Beautiful packaging and luxurious formulations. My scalp feels healthier.",
    },
    {
      name: "Riya Mehta",
      review:
        "The shine oil made my hair softer and shinier after just few uses.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#081510]">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-[#d4af37] mb-4">
            Testimonials
          </p>

          <h2 className="text-5xl font-light text-white">
            Loved By Customers
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#13271f] border border-[#d4af3720] rounded-[2rem] p-8"
            >

              <div className="flex gap-1 mb-6 text-[#d4af37] text-xl">
                ★★★★★
              </div>

              <p className="text-gray-300 leading-relaxed mb-8">
                "{review.review}"
              </p>

              <h3 className="text-[#f3deb0] text-lg font-semibold">
                {review.name}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Verified Customer
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}