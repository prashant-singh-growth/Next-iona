"use client";

import React, { useEffect, useState } from "react";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormLandingPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    seniority: "",
    functional_area: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    gclid: "",
    fbclid: "",
  });

  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const portalId = "146385824";
  const formId = "eae9697d-396b-4497-88c0-49fd58c6bc13";

  // Capture UTM and tracking parameters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const updates = {};

    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "gclid", "fbclid"].forEach(
      (key) => {
        if (params.has(key)) updates[key] = params.get(key);
      }
    );

    setFormData((prev) => ({ ...prev, ...updates }));
  }, []);

  // Handle input changes with restrictions
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict phone to 10 digits
    if (name === "phone") {
      if (/^\d*$/.test(value) && value.length <= 12) {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form
  const validateForm = () => {
    const required = ["full_name", "email", "phone", "seniority", "functional_area"];

    for (let field of required) {
      if (!formData[field]?.trim()) {
       
         toast.error(`Please fill in ${field.replace("_", " ")}`)
        return false;
      }
    }

    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error('Please enter a valid email address.')
     
      return false;
    }

    // Block personal email domains
    const personalDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "rediffmail.com",
      "aol.com",
      "icloud.com",
      "protonmail.com",
    ];
    const emailDomain = formData.email.split("@")[1]?.toLowerCase();
    if (personalDomains.includes(emailDomain)) {
      toast.error("Please use your company email address (not a personal email).")
     
      return false;
    }

    return true;
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: Object.entries(formData).map(([name, value]) => ({ name, value })),
            context: {
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        }
      );

      if (response.ok) {
        setStatus({ loading: false, success: "✅ Thank you! Form submitted successfully.", error: null });
        setFormData({
          full_name: "",
          email: "",
          phone: "",
          seniority: "",
          functional_area: "",
          utm_source: "",
          utm_medium: "",
          utm_campaign: "",
          utm_term: "",
          gclid: "",
          fbclid: "",
        });
        window.location.href = "/thank-you";
      } else {
        throw new Error("HubSpot submission failed. Please check your form settings.");
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message });
    }
  };

  return (
    <div className="w-full bg-[#FEFEFD] border-[#C9C9C9] border shadow-[0px_4px_19.1px_0px_#00000040] rounded-lg relative overflow-hidden">
      
      <form onSubmit={handleSubmit} className="p-5 py-10 md:p-10 flex flex-col space-y-9">
        <div className="w-full grid grid-cols-1  gap-6">
          {[
            { name: "full_name", placeholder: "Full Name" },
            { name: "email", placeholder: "Enter Your Work Email", type: "email",  },
            { name: "phone", placeholder: "Phone Number", type: "tel", maxLength: 12 },
            { name: "seniority", placeholder: "Seniority" },
            { name: "functional_area", placeholder: "Functional Area",  },
          ].map((field) => (
            <input
              key={field.name}
              type={field.type || "text"}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              onWheel={(e) => e.target.blur()}
              required
              className={`border-[#D6D6D6] border rounded-lg px-3 py-2 text-sm text-primary placeholder:text-[#808080] font-lora `}
            />
          ))}
        </div>

        {/* Hidden UTM Fields */}
        {["utm_source", "utm_medium", "utm_campaign", "utm_term", "gclid", "fbclid"].map((field) => (
          <input key={field} type="hidden" name={field} value={formData[field]} />
        ))}
<div className="flex flex-col space-y-2">
 
        <button
          type="submit"
          disabled={status.loading}
          className="bg-primary px-5 py-3 font-bold leading-5 text-[14px] text-white flex items-center justify-center space-x-2 rounded hover:scale-95 transition duration-150 w-fit"
        >
          {status.loading ? "Submitting..." : "Schedule a Demo"}
        </button>
         <p className="text-[10px] !font-sans  text-black">*Ideal for 5000+ Employee Size Orgs*</p>
</div>

        {status.success && <p className="text-green-600 text-center">{status.success}</p>}
        {status.error && <p className="text-red-600 text-center">{status.error}</p>}
      </form>
    </div>
  );
}
