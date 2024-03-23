"use client";

import React, { Fragment, useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/elements/Buttons/Button";
import { Button as SButton } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import * as z from "zod";
import { couponSchema, orderSchema, addressSchema } from "@/utils/formSchema";
import { cn } from "@/utils";
import CardCart from "@/components/modules/Cards/CardCart";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CheckoutNav from "@/components/modules/Checkout/CheckoutNav";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/context/cart.context";
import { useAuth } from "@/context/auth.context";
import { ICartItem } from "@/types";
import { retriveCoupon } from "@/services/order.service";
import { isNull } from "lodash";
import SkeletonProductCard from "@/components/modules/Skeleton/SkeletonProductCard";
import { Checkbox } from "@/components/ui/checkbox";

const CheckoutForm = () => {
  const { toast } = useToast();
  const { cart, loading } = useCart();
  const { user } = useAuth();
  const [couponHidden, setCouponHidden] = useState(true);
  const [couponLoading, setCouponLoading] = useState(false);
  const [showShippingFields, setShowShippingFields] = useState(false);

  useEffect(() => {}, []);

  const form = useForm<z.infer<typeof orderSchema>>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      payment_method: "",
      payment_method_title: "",
      set_paid: false,
      // line_items: [
      //   {
      //     product_id: 1,
      //     quantity: 1,
      //   },
      // ],
    },
  });

  const handleShowCouponForm = () => {
    setCouponHidden(false);
  };

  const couponForm = useForm<z.infer<typeof couponSchema>>({
    resolver: zodResolver(couponSchema),
    defaultValues: {
      code: "",
    },
  });

  function onCheckoutSubmit(values: z.infer<typeof orderSchema>) {
    console.log("values", values);
  }

  function onCouponSubmit(values: z.infer<typeof couponSchema>) {
    setCouponLoading(true);
    try {
      const response = retriveCoupon(values.code);
      console.log(response);
      toast({
        description: "Coupon applied successfully",
      });
    } catch (error) {
      console.error("Retrive coupon error: ", error);
    } finally {
      setCouponLoading(false);
    }
  }

  const handleShowShipping = (event: any) => {
    console.log("checked", event);
    setShowShippingFields(!showShippingFields);
  };

  const billingFields = Object.keys(addressSchema.shape);
  
  console.log("billing", billingFields);

  return (
    <section className="checkout-page">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="col-span-1 lg:col-span-3 pl-5 pr-5 pt-6 md:pt-8 lg:pt-12 lg:pl-0 lg:pr-12 lg:border-r lg:border-gray-200 space-y-4">
            <CheckoutNav />
            <h2 className="text-2xl font-medium text-gray-800">
              Billing Details
            </h2>
          </div>
          <div className="col-span-1 lg:col-span-2 p-4 md:p-8 lg:pt-12 bg-primary-50 space-y-6 lg:space-y-8 order-column">
            {couponHidden ? (
              <p className="text-base">
                Do you have a coupon code?{" "}
                <span
                  className="text-accent hover:text-gray-700 cursor-pointer"
                  onClick={handleShowCouponForm}
                >
                  Apply now
                </span>
              </p>
            ) : (
              <div className="coupon-form space-y-4">
                <h3 className="text-xl font-medium text-gray-700">
                  Apply Coupon
                </h3>
                <Form {...couponForm}>
                  <form
                    onSubmit={couponForm.handleSubmit(onCouponSubmit)}
                    className="flex w-full items-center space-x-2"
                  >
                    <FormField
                      control={couponForm.control}
                      name="code"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Coupon code" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <SButton type="submit" className="text-white">
                      Apply
                    </SButton>
                  </form>
                </Form>
              </div>
            )}

            <hr />
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onCheckoutSubmit)}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="col-span-1 lg:col-span-3 pl-5 pr-5 pb-6 md:pb-8 lg:pb-12 lg:pl-0 lg:pr-12 lg:border-r lg:border-gray-200 space-y-4">
                <div className="billing-address">
                  <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-4">
                    <FormField
                      control={form.control}
                      name="billing.first_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="first_name">First Name</FormLabel>
                          <FormControl>
                            <Input
                              className="h-12 bg-white"
                              type="text"
                              id="first_name"
                              placeholder="First Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    ></FormField>
                    <FormField
                      control={form.control}
                      name="billing.last_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="last_name">Last Name</FormLabel>
                          <FormControl>
                            <Input
                              className="h-12 bg-white"
                              type="text"
                              id="last_name"
                              placeholder="Last Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    ></FormField>
                  </div>
                  <div className="grid w-full items-center gap-4">
                    <FormField
                      control={form.control}
                      name="billing.email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <FormControl>
                            <Input
                              className="h-12 bg-white"
                              type="email"
                              id="email"
                              placeholder="Email Address"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    ></FormField>
                  </div>
                  <div className="grid w-full items-center gap-2">
                    <FormField
                      control={form.control}
                      name="billing.phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="phone">Phone</FormLabel>
                          <FormControl>
                            <Input
                              className="h-12 bg-white"
                              type="text"
                              id="phone"
                              placeholder="Phone Number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    ></FormField>
                  </div>
                  <div className="grid w-full items-center gap-2">
                    <FormField
                      control={form.control}
                      name="billing.address_1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="address_1">
                            Street Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="h-12 bg-white"
                              type="text"
                              id="address_1"
                              placeholder="House number and street name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    ></FormField>
                    <FormField
                      control={form.control}
                      name="billing.address_2"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="h-12 bg-white"
                              type="text"
                              id="address_2"
                              placeholder="Apartment, suite, unit, etc. (optional)"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    ></FormField>
                  </div>
                  <div className="grid w-full items-center gap-2">
                    <FormField
                      control={form.control}
                      name="billing.city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="city">Town/City</FormLabel>
                          <FormControl>
                            <Input
                              className="h-12 bg-white"
                              type="text"
                              id="city"
                              placeholder="Town/City"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    ></FormField>
                  </div>
                  <div className="grid w-full items-center gap-2">
                    <FormField
                      control={form.control}
                      name="billing.state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="state">State</FormLabel>
                          <FormControl>
                            <Input
                              className="h-12 bg-white"
                              type="text"
                              id="state"
                              placeholder="State"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    ></FormField>
                  </div>
                  <div className="grid w-full items-center gap-2">
                    <FormField
                      control={form.control}
                      name="billing.postcode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="postcode">Postcode</FormLabel>
                          <FormControl>
                            <Input
                              className="h-12 bg-white"
                              type="text"
                              id="postcode"
                              placeholder="Postcode"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    ></FormField>
                  </div>
                  <div className="grid w-full items-center gap-2">
                    <FormField
                      control={form.control}
                      name="billing.country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="country">Country</FormLabel>
                          <FormControl>
                            <Input
                              className="h-12 bg-white"
                              type="text"
                              id="country"
                              placeholder="Country"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    ></FormField>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="showShipping"
                    checked={showShippingFields}
                    onCheckedChange={handleShowShipping}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Add different shipping details
                  </label>
                </div>
                {showShippingFields && <div>Show shipping form</div>}
                <hr />
                <div className="grid w-full items-center gap-2">
                  <h3 className="text-xl font-medium text-gray-700">
                    Additional Infomation
                  </h3>
                  <div className="input-row">
                    <FormField
                      control={form.control}
                      name="order_note"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base" htmlFor="order_note">
                            Order Note{" "}
                            <span className="text-gray-400">(optional)</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Add order note"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-1 lg:col-span-2 p-4 md:p-8 lg:pt-4 lg:pb-8 bg-primary-50 space-y-6 lg:space-y-8 order-column">
                <div className="border border-primary-200 pl-5 pr-5 py-6 rounded-md space-y-5 bg-white">
                  {loading ? (
                    Array.from({ length: 2 }, (_, index) => (
                      <SkeletonProductCard key={index} alignment="horizontal" />
                    ))
                  ) : (
                    <>
                      {cart?.items.map((product: ICartItem, index: number) => {
                        return (
                          <Fragment key={product.id}>
                            <CardCart
                              product={product}
                              key={product.id}
                              isCheckout={true}
                            />
                            <div key={index}>
                              <FormField
                                control={form.control}
                                name={`line_items.${index}.product_id`}
                                defaultValue={product.id}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        className="h-12 bg-white"
                                        type="hidden"
                                        id={`line_item-id-${index}`}
                                        placeholder="Country"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              ></FormField>
                              <FormField
                                control={form.control}
                                name={`line_items.${index}.quantity`}
                                defaultValue={product.quantity.value}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        className="h-12 bg-white"
                                        type="hidden"
                                        id={`line_item-quantity-${index}`}
                                        placeholder="Country"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              ></FormField>
                            </div>
                          </Fragment>
                        );
                      })}
                      <hr />
                      {cart && (
                        <div className="cart-total space-y-4">
                          <div className="flex items-baseline justify-between text-gray-800">
                            <h5 className="text-sm font-medium">Subtotal</h5>
                            <div className="text-sm font-semibold">
                              {cart?.totals?.subtotal / 100}
                            </div>
                          </div>
                          <div className="flex items-baseline justify-between text-gray-800">
                            <h5 className="text-sm font-medium">
                              Shipping Cost
                            </h5>
                            <div className="text-sm font-semibold">0</div>
                          </div>
                          <hr />
                          <div className="flex items-end justify-between text-gray-800">
                            <div className="flex flex-col gap-0">
                              <h4 className="text-base font-medium">Total</h4>
                              <span className="text-xs text-gray-500">
                                Incl. VAT
                              </span>
                            </div>
                            <div className="text-2xl font-semibold">
                              {cart?.totals?.total / 100}
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
                <div className="card-payment-method">
                  <FormField
                    control={form.control}
                    name="payment_method"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <h2 className="text-lg font-medium text-gray-800">
                          Payment Method
                        </h2>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col gap-0 bg-white"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0 p-4 border">
                              <FormControl>
                                <RadioGroupItem
                                  value="cash_on_delivery"
                                  checked
                                />
                              </FormControl>
                              <FormLabel className="font-medium text-base text-gray-700">
                                Cash on Delivery
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0 p-4 border opacity-60">
                              <FormControl>
                                <RadioGroupItem
                                  value="bank_transfer"
                                  disabled
                                />
                              </FormControl>
                              <FormLabel className="font-medium text-base text-gray-700">
                                Direct bank transfer
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="place-order">
                  <Button
                    type="submit"
                    variant={"accent"}
                    disabled={isNull(cart)}
                  >
                    Confirm Order
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default CheckoutForm;
