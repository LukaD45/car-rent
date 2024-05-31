import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import SimpleForm from "./contact-form";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <Hero title="Kontakt" />
      <SimpleForm />
    </div>
  );
};

export default ContactPage;
