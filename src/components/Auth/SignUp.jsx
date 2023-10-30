import axios from "axios";
import { useState } from "react";
import { signUpSchema } from "./schema";
import Button from "@/components/UI/Button";
import InputCard from "@/components/Input/InputCard";

const SignUp = () => {
  const [unknownError, setUnknownError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirm_password: "",
  });

  const updateFormData = (e) => {
    setErrors((s) => ({ ...s, [e.target.name]: null }));
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setUnknownError(null);

    const { success, error, data } = signUpSchema.safeParse(formData);

    if (!success) {
      setErrors(error.format());
      return;
    }

    try {
      setLoading(true);

      const result = await axios.post(
        "http://demo2578450.mockable.io/auth/register",
        data
      );

      console.log(result);
    } catch (error) {
      console.log(error);
      setUnknownError("Something wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      <InputCard
        label="Username"
        name="username"
        value={formData.username}
        onChange={updateFormData}
        placeholder="Your username"
        error={errors.username?._errors[0]}
      />

      <InputCard
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={updateFormData}
        placeholder="Your password"
        error={errors.password?._errors[0]}
      />

      <InputCard
        type="password"
        label="Confirm Password"
        name="confirm_password"
        value={formData.confirm_password}
        onChange={updateFormData}
        placeholder="Your password again"
        error={errors.confirm_password?._errors[0]}
      />

      <Button type="submit" loading={loading}>
        Sing Up
      </Button>

      {unknownError && (
        <div className="bg-yellow-100 px-4 py-2 rounded-lg border-l-4 border-yellow-500">
          {unknownError}
        </div>
      )}
    </form>
  );
};

export default SignUp;
