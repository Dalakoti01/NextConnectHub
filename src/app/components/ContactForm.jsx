"use client"
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Loader2, ChevronDown } from "lucide-react"; // Make sure you have lucide-react installed
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'




const ContactForm = ({className}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const body = {
        fullName: formData.fullName,
        email: formData.email,
        message: formData.message,
        phoneNumber: formData.phoneNumber,
        subject: formData.subject,
      };
      console.log(body);
      
      const res = await axios.post(
        `/api/users/createUser`,
        body,
        { withCredentials: true }
      );
      console.log("Api Hittet Successfully");
      console.log(body);
      
      if (res.data.success) {
        toast.success(res.data.message);
      }else{
        toast.error(res.data.message)
      }

    } catch (error) {
      const message =
        error?.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 px-4 ">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">
            Have a project in mind? Fill out the form below, and we'll get
            back to you soon.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="block text-gray-700 font-medium mb-2">
                  Your Name
                </div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                />
              </div>
              <div>
                <div className="block text-gray-700 font-medium mb-2">
                  Email Address
                </div>
                <input
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </div>
               <PhoneInput
    defaultCountry="IN"
    international
    countryCallingCodeEditable={false}
    placeholder="+91 9876543210"
    value={formData.phoneNumber}
    onChange={(value) =>
      setFormData((prev) => ({ ...prev, phoneNumber: value }))
    }
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
  />
              </div>
              <div>
                <div className="block text-gray-700 font-medium mb-2">
                  Service Interested In
                </div>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors appearance-none bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="mern">MERN Stack Website</option>
                    <option value="wordpress">WordPress Development</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="ai-chatbot">
                      AI Chatbot Integration
                    </option>
                    <option value="database">Database Support</option>
                    <option value="payment">Payment Integration</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div>
              <div className="block text-gray-700 font-medium mb-2">
                Your Message
              </div>
              <textarea
                rows={6}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Tell us about your project requirements..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-vertical"
              ></textarea>
            </div>
            {loading ? (
              <button className="w-full flex items-center justify-center bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300" disabled>
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Please Wait
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="w-full cursor-pointer bg-[#146fb9] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;