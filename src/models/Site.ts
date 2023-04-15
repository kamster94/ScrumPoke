export interface AvatarImage {
  name: string;
  path: string;
}

export interface SiteProperties {
  siteName: string;
  avatars: AvatarImage[];
}
