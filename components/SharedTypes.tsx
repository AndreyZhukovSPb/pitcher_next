interface MyTypeImage {
  image?: string;
  cols?: number;
  rows?: number;
  index?: number
}

interface MyTypeTeam {
  id: number;
  image: string;
  name: string;
  role: string;
  about: string;
  about_mobile: string;
  begining?: string
}

interface MyTypeMainPhoto {
  pictureId?: number;
  image?: string;
  text_1?: string;
  text_2?: string;
  text_3?: string;
  number?: string;
  type?: string;
}

interface MyTypeInstaPhoto {
  id: string;
  // media_type: string;
  // media_url: string;
  // caption: string;
  // timestamp: string;
  permaLink: string;
  // thumbnail_url?: string;
  storageLink: string;
}

interface MyTypeAboutProps {
  [key: string]: any
}

export type { 
  MyTypeImage, 
  MyTypeTeam, 
  MyTypeMainPhoto,
  MyTypeInstaPhoto,
  MyTypeAboutProps
}
