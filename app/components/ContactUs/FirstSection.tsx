"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import AnimatedTextButton from "../button";

// Define a proper type for confetti options
interface ConfettiOptions {
  particleCount?: number;
  angle?: number;
  spread?: number;
  startVelocity?: number;
  decay?: number;
  scalar?: number;
  origin?: { x: number; y: number };
}

const FirstSection: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const shootConfetti = () => {
    const count = 200;
    const defaults: ConfettiOptions = { origin: { x: 0.8, y: 0.2 } };

    function fire(particleRatio: number, opts: ConfettiOptions) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendEmail = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("🎉 Message sent successfully!");
        shootConfetti();

        // Reset the form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("❌ Failed to send message. Try again later.");
      }
    } catch (err) {
      alert("⚠️ Error sending message.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen px-4 py-12 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h2>
          <p className="text-gray-500 text-lg">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        <div className="flex flex-col md:flex-row lg:h-[600px] bg-white shadow-lg rounded-2xl overflow-hidden">
          {/* Left Side */}
          <div
            className="md:w-1/2 bg-cover bg-center text-white p-8 relative"
            style={{ backgroundImage: `url('/images/contact-bg.png')` }}
          >
            <div className="absolute inset-0 z-0 rounded-2xl bg-black/40" />
            <div className="relative z-10">
              <h3 className="text-[28px] font-semibold mb-2">Contact Information</h3>
              <p className="mb-6 text-[18px]">Say something to start a live chat!</p>
              <div className="space-y-5 text-[16px]">
                <div className="flex items-center space-x-4">
                  <Image src="/icons/phone-w.png" alt="phone" width={20} height={20} />
                  <span>+8875999999</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Image src="/icons/email-w.png" alt="email" width={20} height={20} />
                  <span>what@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Image src="/icons/location-w.png" alt="location" width={20} height={20} />
                  <span>132 Dartmouth Street, Boston, Massachusetts 02156, USA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="md:w-1/2 p-8 bg-white">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 border-b border-gray-300 focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 border-b border-gray-300 focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 border-b border-gray-300 focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    minLength={10}
                    maxLength={10}
                    className="w-full mt-1 border-b border-gray-300 focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message..."
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-black resize-none"
                />
              </div>

              <AnimatedTextButton
                text={loading ? "Sending..." : "Send Message"}
                disabled={loading}
                onClick={handleSendEmail}
                className="bg-[#0a253b] border-2 border-white text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
