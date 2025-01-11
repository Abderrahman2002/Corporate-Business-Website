import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section id="contact" className="py-16 px-4 bg-white animate-fade-in">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2">CONTACT US</h2>
                          <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
                <p className="text-gray-600 text-center mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 m-10">
                    <div className="space-y-4">
                        <h3 className="font-bold mb-8">Contact Info</h3>
                        <p className="mb-2">Amazing Company, Inc.</p>
                        <p className="mb-2">12345 NewYork, Street 125</p>
                        <p className="mb-2">United States 94107</p>
                        <p className="mb-2">P: (123) 456-7890</p>
                    </div>

                    <form className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-sky-400 focus:outline-none transition duration-300"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-sky-400 focus:outline-none transition duration-300"
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-sky-400 focus:outline-none transition duration-300"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows="6"
                            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-sky-400 focus:outline-none transition duration-300"
                        ></textarea>
                        <button
                            className="bg-blue-400 text-black px-6 py-3 rounded shadow-lg hover:bg-sky-500 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;