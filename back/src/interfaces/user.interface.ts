import { Document } from "mongoose";

export interface User extends Document {
  readonly email: string;
  readonly password: string;
}

export interface UserEdited {
  email: string;
}
