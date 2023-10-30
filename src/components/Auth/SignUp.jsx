import { useState } from "react";
import Button from "@/components/UI/Button";
import InputCard from "@/components/Input/InputCard";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirm_password: ''
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

      <InputCard
        label="Confirm Password"
        name="confirm_password"
        type="password"
        value={formData.confirm_password}
        onChange={updateFormData}
        placeholder="Your password again"
      />

      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default SignUp;
