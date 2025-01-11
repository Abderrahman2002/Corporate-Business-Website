const Pricing = () => {
    const plans = [
      {
        name: 'BASIC',
        price: 45,
        features: ['1 DOMAIN', '100GB DISK SPACE', 'UNLIMITED BANDWIDTH', 'SHARED SSL CERTIFICATE', '10 EMAIL ADDRESS', '24/7 SUPPORT']
      },
      {
        name: 'BUSINESS',
        price: 85,
        features: ['5 DOMAIN', '500GB DISK SPACE', 'UNLIMITED BANDWIDTH', 'SHARED SSL CERTIFICATE', '20 EMAIL ADDRESS', '24/7 SUPPORT']
      },
      {
        name: 'PROFESSIONAL',
        price: 125,
        features: ['10 DOMAIN', '2GB DISK SPACE', 'UNLIMITED BANDWIDTH', 'SHARED SSL CERTIFICATE', '50 EMAIL ADDRESS', '24/7 SUPPORT']
      },
      {
        name: 'EXTENDED',
        price: 185,
        features: ['15 DOMAIN', '10GB DISK SPACE', 'UNLIMITED BANDWIDTH', 'SHARED SSL CERTIFICATE', '100 EMAIL ADDRESS', '24/7 SUPPORT']
      }
    ];
  
    return (
      <section id="pricing" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">PRICING</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>

          <p className="text-gray-600 text-center mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`border p-8 text-center ${index === 1 ? 'bg-blue-400 text-white' : ''}`}>
                <div className="mb-8">
                  <p className="text-2xl font-bold">${plan.price}</p>
                  <p className="text-sm">per month</p>
                </div>
                <h3 className="font-bold mb-8">{plan.name}</h3>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button className={`px-6 py-2 rounded ${index === 1 ? 'bg-white text-black' : 'bg-blue-400 text-black'}`}>
                  Get it Now!
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Pricing;