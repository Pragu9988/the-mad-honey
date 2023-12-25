import * as z from "zod";

const phoneRegex = new RegExp(/^[0-9]*$/);
const passwordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])[A-Za-z\d!@#$%^&*()\-_=+{};:,<.>.]{8,}$/
);

export const registerFormSchema = z
  .object({
    first_name: z.string().refine((value) => !!value, {
      message: "First name is required.",
    }),
    last_name: z
      .string()
      .refine((value) => !!value, { message: "Last name is required." }),
    email: z
      .string()
      .min(1, {
        message: "Email is required.",
      })
      .email({
        message: "Email is not valid",
      }),
    username: z
      .string()
      .refine((value) => !!value, { message: "Username is required." }),
    password: z
      .string()
      .min(1, {
        message: "Password is required",
      })
      .regex(passwordRegex, {
        message:
          "The password must include at least 1 lower-case letter, 1 upper-case letter, 1 number and 1 special character",
      }),
    confirm_password: z
      .string()
      .min(1, {
        message: "Confirm password is required",
      })
      .regex(passwordRegex, {
        message:
          "The password must include at least 1 lower-case letter, 1 upper-case letter, 1 number and 1 special character",
      }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Password and Confirm password didn't match",
    path: ["confirm_password"],
  });

export const loginFormSchema = z.object({
  username: z.string().refine((value) => !!value, {
    message: "Username is required.",
  }),
  password: z.string().refine((value) => !!value, {
    message: "Password is required.",
  }),
});

export const changePasswordFormSchema = z
  .object({
    old_password: z.string().refine((value) => !!value, {
      message: "Password is required.",
    }),
    new_password: z.string().refine((value) => !!value, {
      message: "Password is required.",
    }),
    confirm_new_password: z.string().refine((value) => !!value, {
      message: "Password is required.",
    }),
  })
  .refine((data) => data.new_password === data.confirm_new_password, {
    message: "Password and Confirm password didn't match",
    path: ["confirm_password"],
  });
