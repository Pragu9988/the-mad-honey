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
