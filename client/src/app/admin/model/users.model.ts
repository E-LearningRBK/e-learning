import { Material } from "./courses.model";
export interface users {
  id?: number;
  firstName?: string;
  lastName?: string;
  email ?: string;
  password?: string;
  role?: string;
  isactive? : string;
  activationcode? : string;
  imageUrl? : string;
  materials? : Material[];
}
