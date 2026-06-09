export interface ProfileMenuItem {
  icon: string;
  label: string;
}

export interface Profile {
  name: string;
  email: string;
  avatar: string;
  menu: ProfileMenuItem[];
}
