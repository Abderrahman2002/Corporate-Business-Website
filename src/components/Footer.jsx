const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <div className="text-2xl font-bold flex items-center mb-4">
                            <img src="./logo.png" alt="Logo" className="h-12" />
                        </div>
                        <p className="text-sm leading-relaxed">
                            Amazing Company, Inc. provides innovative solutions to elevate your business to the next level. We believe in excellence and customer satisfaction.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {[
                                { href: "#home", label: "Home" },
                                { href: "#services", label: "Services" },
                                { href: "#about", label: "About" },
                                { href: "#contact", label: "Contact" },
                                { href: "#products", label: "Produits" },
                                { href: "#portfolio", label: "Portfolio" },
                                { href: "#team", label: "Team" },
                                { href: "#pricing", label: "Pricing" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="hover:text-sky-400 transition duration-300"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                        <div className="flex flex-col space-y-2">
                            {[
                                { href: "https://facebook.com", label: "Facebook", icon: "fab fa-facebook-f" },
                                { href: "https://twitter.com", label: "Twitter", icon: "fab fa-twitter" },
                                { href: "https://linkedin.com", label: "LinkedIn", icon: "fab fa-linkedin-in" },
                            ].map((social) => (
                                <a
                                    key={social.href}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 hover:text-sky-400 transition duration-300"
                                >
                                    <i className={social.icon}></i>
                                    <span>{social.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Amazing Company, Inc. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
