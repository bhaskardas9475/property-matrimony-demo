import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Property Matrimony",
  description: "At Property Matrimony, we are dedicated to transforming the real estate experience for our clients As a premier real estate platform, we specialize in offering a wide range of premium plots, villas, and apartments, tailored to meet the diverse needs of our discerning clientele. Backed by a committed team of professionals, we leverage advanced technology and comprehensive market insights to guide our clients through every step of their property journey—from the initial search to the final possession.",
  // other metadata
};

const ContactPage = () => {
  return (
    <div className="py-20 lg:py-25 xl:py-30">
      <PageHeader title="Contact Us" />
      <Contact />
    </div>
  );
};

export default ContactPage;
