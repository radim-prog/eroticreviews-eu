import "next-auth";
import "next-auth/jwt";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    role?: "user" | "person" | "organization";
    profileSlug?: string;
    profileId?: string;
  }

  interface Session {
    user: {
      role?: "user" | "person" | "organization";
      profileSlug?: string;
      profileId?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: "user" | "person" | "organization";
    profileSlug?: string;
    profileId?: string;
  }
}
