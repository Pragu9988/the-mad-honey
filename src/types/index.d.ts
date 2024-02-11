export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export interface BannerType {
  title: any;
  subtitle?: string;
  btnLabel?: string;
  link?: string;
}

export interface IProduct {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  type: "simple" | "grouped" | "external" | "variable";
  status: "draft" | "pending" | "private" | "publish";
  featured: boolean;
  catalog_visibility: "visible" | "catalog" | "search" | "hidden";
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  date_on_sale_from?: string | null;
  date_on_sale_from_gmt?: string | null;
  date_on_sale_to?: string | null;
  date_on_sale_to_gmt?: string | null;
  price_html: string;
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  virtual: boolean;
  downloadable: boolean;
  downloads: any[]; // Define the type of downloadable files as needed
  download_limit: number;
  download_expiry: number;
  external_url: string;
  button_text: string;
  tax_status: "taxable" | "shipping" | "none";
  tax_class: string;
  manage_stock: boolean;
  stock_quantity: number;
  stock_status: "instock" | "outofstock" | "onbackorder";
  backorders: "no" | "notify" | "yes";
  backorders_allowed: boolean;
  backordered: boolean;
  sold_individually: boolean;
  weight: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  shipping_required: boolean;
  shipping_taxable: boolean;
  shipping_class: string;
  shipping_class_id: number;
  reviews_allowed: boolean;
  average_rating: string;
  rating_count: number;
  related_ids: number[];
  upsell_ids: number[];
  cross_sell_ids: number[];
  parent_id: number;
  purchase_note: string;
  categories: any[]; // Define the type of categories as needed
  tags: any[]; // Define the type of tags as needed
  images: any[]; // Define the type of images as needed
  attributes: any[]; // Define the type of attributes as needed
  default_attributes: any[]; // Define the type of default attributes as needed
  variations: number[];
  grouped_products: number[];
  menu_order: number;
  meta_data: any[]; // Define the type of meta data as needed
}

// Ref: CONTEXT INTERFACES
export interface AuthContextProps {
  user: IUser | null;
  setUser: any;
  login: (values: { username: string; password: string }) => Promise<any>;
  signup: (values: any) => Promise<any>;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
  setLoading: any;
}

export interface CartContextProps {
  cart: any;
  setCart: any;
  addToCart: (values: AddToCartProps) => Promise<string>;
  loading: boolean;
  openCart: boolean;
  setOpenCart: any;
  loadingProduct: any;
  setLoadingProduct: any;
  clearCart: () => Promise<string>;
  error?: string | null;
}

export interface IUser {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  email: string;
  first_name?: string;
  last_name?: string;
  role: string;
  username: string;
  password: string;
  billing?: IAddressData;
  shipping?: IAddressData;
  is_paying_customer: boolean;
  avatar_url: string;
  meta_data?: MetaDataProperty[];
}

interface IAddressData {
  first_name: string;
  last_name: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  email: string;
  phone: string;
}

interface MetaDataProperty {
  id: number;
  key: string;
  value: string;
}

interface ICurrency {
  currency_code: "USD";
  currency_symbol: "$";
  currency_minor_unit: 2;
  currency_decimal_separator: ".";
  currency_thousand_separator: ",";
  currency_prefix: "$";
  currency_suffix: "";
}

interface BillingAddress {
  billing_first_name: string;
  billing_last_name: string;
  billing_company: string;
  billing_country: string;
  billing_address_1: string;
  billing_address_2: string;
  billing_city: string;
  billing_state: string;
  billing_postcode: string;
  billing_phone: string;
  billing_email: string;
}

interface ShippingAddress {
  shipping_first_name: string;
  shipping_last_name: string;
  shipping_company: string;
  shipping_country: string;
  shipping_address_1: string;
  shipping_address_2: string;
  shipping_city: string;
  shipping_state: string;
  shipping_postcode: string;
}

interface CartTotal {
  subtotal: string;
  subtotal_tax: string;
  fee_total: string;
  fee_tax: string;
  discount_total: string;
  discount_tax: string;
  shipping_total: string;
  shipping_tax: string;
  total: string;
  total_tax: string;
}

export interface ICartItem {
  item_key: string;
  id: number;
  name: string;
  title: string;
  price: string;
  quantity: {
    value: number;
    min_purchase: number;
    max_purchase: number;
  };
  totals: {
    subtotal: number;
    subtotal_tax: number;
    total: number;
    tax: number;
  };
  slug: string;
  meta: {
    product_type: "simple" | "variant" | "grouped";
    sku?: string;
    dimensions: {
      length?: string;
      width?: string;
      height?: string;
      unit?: string;
    };
    weight: number;
    variation: any[];
  };
  backorders?: string;
  cart_item_data?: any[];
  featured_image: string;
}

export interface ICart {
  cart_hash: string;
  cart_key: string;
  currency: ICurrency;
  customer: {
    billing_address?: BillingAddress;
    shipping_address?: ShippingAddress;
  };
  items?: ICartItem[];
  item_count: number;
  items_weight: number;
  coupons: any[];
  needs_payment: boolean;
  needs_shipping: boolean;
  shipping: any;
  fees: any[];
  taxes: any[];
  totals: CartTotal;
  removed_items: any[];
  cross_sells: any[];
  notices?: any;
}

export interface AddToCartProps {
  id: string | number;
  quantity?: number;
  return_item?: boolean;
  variation?: any;
  item_data?: any;
}
