import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { JSON_HEADER } from "./lib/constants/api.constant";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        // Add logic here to look up the user from the credentials supplied
        const baseUrl = process.env.API + "/auth/signin";
        // Make the API call to sign in the user
        const response = await fetch(baseUrl, {
          method: "POST",
          body: JSON.stringify({ email: credentials?.email, password: credentials?.password }),
          headers: {
            ...JSON_HEADER,
          },
        });

        // Parse the response
        const payload: APIResponse<LoginResponse> = await response.json();

        // If the response contains an error, throw it
        if ("error_msg" in payload) {
          throw new Error(payload.error_msg);
        }

        return {
          ...payload.user,
          token: payload.token,
        };
      },
    }),
  ],

  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.token = user.token;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.email = user.email;
      }

      return token;
    },

    session: ({ session, token }) => {
      session.firstName = token.firstName;
      session.lastName = token.lastName;
      session.email = token.email || "";

      return session;
    },
  },
};
