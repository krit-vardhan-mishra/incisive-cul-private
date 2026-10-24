import ContactPage from "@/components/pages/contact/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Inquiries",
  description:
    "Get in touch with INCISIVE – Centre for Unlearning and Learning in Dehradun. Connect with us for consultations, inquiries, and admissions.",
};

export default function Page() {
  return <ContactPage />;
}