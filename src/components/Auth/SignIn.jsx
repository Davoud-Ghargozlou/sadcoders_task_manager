import { useState } from "react";
import Button from "@/components/UI/Button";
import InputCard from "@/components/Input/InputCard";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const updateFormData = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    // if (value == "ali" && valuepass == "hassan") {
    //   navigate("/");
    // }
  };
  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      <InputCard
        label="Username"
        name="username"
        placeholder="Your username"
        value={formData.username}
        onChange={updateFormData}
      />

      <InputCard
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={updateFormData}
        placeholder="Your password"
      />

      <Button type="submit">Sign In</Button>
    </form>
  );
};

export default SignIn;
