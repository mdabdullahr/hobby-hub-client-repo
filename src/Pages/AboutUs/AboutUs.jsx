import React from 'react';
import { Link } from 'react-router';

const AboutUs = () => {
    return (
        <div data-aos="fade-left" className="w-11/12 xl:w-10/12 2xl:w-8/12 mx-auto px-4 pt-32 pb-20 text-gray-700 space-y-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-orange-500">Who We Are & What Drives Us</h1>

            <p className="text-lg text-gray-600 dark:text-gray-300">
                <strong>HobbyHub</strong> is a community-driven platform where people with shared interests come together to explore, share, and grow their hobbies. Whether you're into painting, photography, coding, gardening, or reading — HobbyHub helps you discover like-minded groups and be a part of something you love.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300">
                আমাদের মিশন হলো একটি ‍সেফ, সাপোর্টিভ এবং ইন্টার‍্যাক্টিভ প্ল্যাটফর্ম তৈরি করা যেখানে মানুষ তাদের শখ, দক্ষতা এবং কন্টেন্ট শেয়ার করতে পারে। HobbyHub-এ আপনি বিভিন্ন লোকাল গ্রুপে জয়েন করতে পারেন, ইভেন্ট খুঁজে পেতে পারেন এবং নিজের অভিজ্ঞতা শেয়ার করতে পারেন।
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300">
                At HobbyHub, we believe that hobbies are more than just pastimes—they're a way to connect, learn, and inspire. We strive to create a welcoming environment where every hobbyist, from beginners to experts, feels valued and motivated to contribute.
            </p>

            <div>
                <h2 className="text-2xl font-semibold text-orange-500 mb-2">Why HobbyHub?</h2>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 dark:text-gray-300">
                    <li>🔍 Discover local hobby groups easily</li>
                    <li>👥 Join communities that match your passion</li>
                    <li>📅 Participate in events, workshops & meetups</li>
                    <li>🛡️ Safe and moderated environment</li>
                    <li>🌐 User-friendly, responsive & interactive interface</li>
                    <li>🤝 Connect with mentors and hobby experts</li>
                    <li>🎨 Share your own projects and get feedback</li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-orange-500 mb-2">Our Team</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    HobbyHub is proudly built by a group of passionate developers who love community, creativity, and collaboration. Our goal is to empower users to share their talents and meet others who share their enthusiasm.
                </p>
                <br />
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    We continuously work to improve the platform based on user feedback and emerging trends, ensuring that HobbyHub stays vibrant, inclusive, and relevant for everyone.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-orange-500 mb-2">Have Questions?</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Feel free to reach out to us at <span className="text-orange-600 font-medium">hobbyhub@gmail.com</span> 
                </p>
                <br />
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    We welcome your suggestions, partnership inquiries, and feedback to help make HobbyHub the best possible place for hobby enthusiasts everywhere.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
