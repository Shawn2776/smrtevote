import RegisterFormB from "@/components/Forms/RegistrationForms/RegisterFormB";
import { verifyToken } from "@/lib/actions";
import React from "react";

const RegisterNewPage = () => {
  return (
    <section className="flex items-center justify-center w-full h-screen bg-bg">
      <RegisterFormB />
    </section>
  );
};

export default RegisterNewPage;
