export interface HeroImageResponse {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
  heroimage: HeroImage;
  herotitle: string;
}

export interface HeroImage {
  _type: "image";
  asset: HeroImageAsset;
}

export interface HeroImageAsset {
  _ref: string;
  _type: "reference";
}
