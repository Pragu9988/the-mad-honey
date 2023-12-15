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
