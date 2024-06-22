import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { RetweetCreateNestedManyWithoutUsersInput } from "./RetweetCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  bio?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  password: string;
  profilePicture?: InputJsonValue;
  retweets?: RetweetCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
