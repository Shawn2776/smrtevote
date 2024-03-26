import RegisterFormC from "@/components/Forms/RegistrationForms/RegisterFormC";
import { fetchIndustries } from "@/lib/data";
import React from "react";

const RegisterConfPage = async () => {
  const industries = await fetchIndustries();
  return (
    <section className="flex items-center justify-center w-full h-screen bg-bg">
      <RegisterFormC />
    </section>
  );
};

export default RegisterConfPage;
