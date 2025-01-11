import { useState, useEffect } from 'react';

const BusinessStats = () => {
  const stats = [
    { value: 6850, label: 'Clients' },
    { value: 1465, label: 'Completed' },
    { value: 4325, label: 'In Progress' },
    { value: 2568, label: 'Revenue' }
  ];

  const [counterValues, setCounterValues] = useState(
    stats.map(() => 0)
  );

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const target = stat.value; // Use the specific target value for each stat
      let count = 0;
      const interval = setInterval(() => {
        count += Math.ceil(target / 100); // Increment the value gradually
        if (count >= target) {
          clearInterval(interval); // Stop when it reaches or exceeds the target
          count = target; // Ensure the value is exactly the target
        }
        setCounterValues((prevValues) => {
          const newValues = [...prevValues];
          newValues[index] = count;
          return newValues;
        });
      }, 20); // Adjust speed of the animation by changing this interval time
      return interval;
    });

    // Cleanup the intervals when the component unmounts
    return () => intervals.forEach(clearInterval);
  }, [stats]);

  return (
    <section className="bg-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">BUSINESS STATS</h2>
        <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
        <p className="text-blue-800 text-center mb-12">
          Discover our achievements and ongoing projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="w-24 h-24 mx-auto border-4 border-blue-900 bg-blue-50 rounded-full flex items-center justify-center mb-4 shadow-md">
                <span className="text-2xl font-bold text-blue-900">
                  {counterValues[index]}
                </span>
              </div>
              <p className="text-blue-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessStats;
