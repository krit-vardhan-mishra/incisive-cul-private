import ContactPage from "@/components/pages/contact/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Incisive-Cul",
    description: "Get in touch with us to learn more about our unlearning and learning programs.",
};

export default function Page() {
    return <ContactPage />;
}