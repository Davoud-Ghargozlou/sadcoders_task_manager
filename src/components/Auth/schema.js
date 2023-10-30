import { z } from "zod";

const userNameSchema = z
  .string()
  .min(4)
  .regex(/[A-z0-9]/);

const passwordSchema = z.string().min(8);

const signInSchema = z.object({
  username: userNameSchema,
  password: passwordSchema,
});

const signUpSchema = z
  .object({
    username: userNameSchema,
    password: passwordSchema,
    confirm_password: passwordSchema,
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"], // path of error
  });

export { signUpSchema, signInSchema };
