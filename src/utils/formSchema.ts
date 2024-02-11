import * as z from "zod";

const phoneRegex = new RegExp(/^[0-9]*$/);
const passwordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])[A-Za-z\d!@#$%^&*()\-_=+{};:,<.>.]{8,}$/
);

export const customerFormSchema = z.object({
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email({
      message: "Email is not valid",
    }),
});

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

export const contactFormSchema = z.object({
  name: z.string().refine((value) => !!value, { message: "Name is required." }),
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email({
      message: "Email is not valid",
    }),
  message: z.string().optional(),
});

const addressSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  address_1: z.string(),
  address_2: z.string().optional(),
  city: z.string(),
  state: z.string(),
  postcode: z.string(),
  country: z.string(),
  email: z.string(),
  phone: z.string(),
});

const lineItemSchema = z.object({
  product_id: z.number(),
  variation_id: z.number().optional(),
  quantity: z.number(),
});

const shippingLineSchema = z.object({
  method_id: z.string(),
  method_title: z.string(),
  total: z.string(),
});

export const couponSchema = z.object({
  code: z.string(),
});

export const orderSchema = z.object({
  payment_method: z.string(),
  payment_method_title: z.string(),
  set_paid: z.boolean(),
  billing: addressSchema,
  line_items: z.array(lineItemSchema),
  shipping_lines: z.array(shippingLineSchema),
  order_note: z.string().optional(),
  includeCouponLines: z.boolean(),
  coupon_lines: z
    .object({
      code: z.string(),
      amount: z.string(),
    })
    .refine((data) => data && data.code && data.amount, {
      path: ["coupon_lines"],
      message: "Coupon lines are required when includeCouponLines is checked",
    })
    .optional(),
});

export const orderInformationSchema = z.object({
  step: z.literal(1),
  shipping: addressSchema,
});

export const orderDispatchSchema = z.object({
  step: z.literal(2),
  shipping_lines: z.array(shippingLineSchema),
});

export const orderPaymentSchema = z.object({
  step: z.literal(3),
  payment_method: z.string(),
  payment_method_title: z.string(),
});

export const buyInBulkSchema = z.object({
  full_name: z
    .string()
    .refine((value) => !!value, { message: "Name is required." }),
  company_name: z.string().optional(),
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email({
      message: "Email is not valid",
    }),
  phone: z.string(),
  product_of_interest: z.string().optional(),
  estimated_qty: z.string().optional(),
  shipping_destination: z.string().optional(),
  notes: z.string().optional(),
});
