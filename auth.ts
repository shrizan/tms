import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PRISMA_CLIENT } from "./prisma";
import { compareHash } from "./common/password.encoder";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                // setting up front end field parameter
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                // getting user from the data based on the email
                const user = await PRISMA_CLIENT.user.findFirst({ where: { email: credentials.email ?? "" } });

                // if the user will email address does not exist in the database just returning empty
                if (!user) throw new Error("Invalid user credentials!!!");
                else {

                    const password = credentials.password as string ?? "";
                    // returning user if password match other return empty user
                    if (await compareHash(password, user.password)) {
                        return user;
                    }
                    else {
                        throw new Error("Invalid user credentials!!!");
                    }
                }
            },
        }),
    ],
})