import {z} from 'zod'

export type ReactChildren = {
  children: React.ReactNode;
};

type PrimaryCard = {
  title: string;
  slug: string;
  sub_title: string;
  image: string;
  exerpt: string;
};



type TextCard = {
  title: string;
  slug: string;
  sub_title: string;
  excerpt: string;
};

type HeadingCard = {
  title: string;
  slug: string;
};

export type heroType = {
  title: string;
  primarycard: PrimaryCard;
}[]

export type portfolioType = {
  title: string;
  textcard: TextCard;
  primarycard: PrimaryCard[];
}[];

export type whychooseusType = {
  title: string;
  textcard: TextCard;
  textcardarray: TextCard[];
}[];

export type analyticsType = {
  title: string;
  primarycard: PrimaryCard;
  textcard: TextCard;
  headingcard: HeadingCard[];
}[];

export type settingsType = {
  comp_name: string;
  comp_location: string;
  comp_email: string;
  phone1: string;
  phone2: string;
  phone3: string;
  facebook: string;
  twitter: string;
  instagram: string;
  youtube: string;
  logo: string;
  googlemap: string;
  digitaladdress: string;
}[];

export type aboutusType = {
  title: string;
  textcard: TextCard;
  primarycard: PrimaryCard[];
}[];

export type servicesType = {
  title: string;
  textcard: TextCard;
  primarycard: TextCard[];
}[];


export const contactSchema = z.object({
  name: z.string().min(2, "Name field required!"),
  email: z.string().email(), 
  message: z.string().min(2, "Message field required!")
})
