const Testimonial = () => {
    const testimonials = [
      {
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
        author: "John Bond",
        role: "Lorem ipsum simply"
      },
      {
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
        author: "John Bond",
        role: "Lorem ipsum simply"
      },
      {
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
        author: "John Bond",
        role: "Lorem ipsum simply"
      }
    ];
  
    return (
      <section className="bg-gray-800 py-16 px-4 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">TESTIMONIAL</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-center mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative p-6 bg-gray-700 rounded">
                <p className="mb-8">{testimonial.text}</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonial;