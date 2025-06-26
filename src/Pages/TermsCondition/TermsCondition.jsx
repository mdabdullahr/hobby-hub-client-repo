import React from "react";
import { Link } from "react-router";

const TermsCondition = () => {
  return (
    <div data-aos="fade-left" className="w-11/12 xl:w-10/12 2xl:w-8/12 mx-auto px-4 pt-32 pb-20 text-gray-600 dark:text-gray-300 space-y-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 mb-8">Terms and Conditions</h1>

            <p className="text-lg">
                Welcome to <strong>HobbyHub</strong>. By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our services.
            </p>

            <div>
                <h2 className="text-2xl font-semibold text-orange-500 mt-6 mb-2">1. Account Responsibility</h2>
                <p className="text-lg">
                    You are responsible for maintaining the confidentiality of your account information and password. Any activity under your account is your responsibility.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-orange-500 mt-6 mb-2">2. Acceptable Use</h2>
                <p className="text-lg">
                    Users must not post harmful, abusive, threatening, or illegal content. You agree not to misuse the platform or try to access unauthorized features or data.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-orange-500 mt-6 mb-2">3. Content Ownership</h2>
                <p className="text-lg">
                    Any content you share (text, images, videos) remains your own, but you grant HobbyHub the right to display and promote it within the platform. We do not claim ownership over your original content.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-orange-500 mt-6 mb-2">4. Termination</h2>
                <p className="text-lg">
                    HobbyHub reserves the right to suspend or terminate accounts that violate our terms or create a harmful environment for others.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-orange-500 mt-6 mb-2">5. Privacy Policy</h2>
                <p className="text-lg">
                    We are committed to protecting your privacy. Please refer to our <span className="text-orange-600 underline"><Link to="/privacy">Privacy Policy</Link></span> page to learn more about how we collect, use, and protect your data.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-orange-500 mt-6 mb-2">6. Changes to Terms</h2>
                <p className="text-lg">
                    HobbyHub reserves the right to update or change these terms at any time. Continued use of the site after changes indicates acceptance of the new terms.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-orange-500 mt-6 mb-2">7. Contact Us</h2>
                <p className="text-lg">
                    If you have any questions or concerns about these Terms and Conditions, please email us at <span className="text-orange-600 font-medium">hobbyhub@gmail.com / mdbadullah162005@gmail.com</span>.
                </p>
            </div>
        </div>
  );
};

export default TermsCondition;
