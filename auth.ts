import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import {FirestoreAdapter} from "@auth/firebase-adapter";
import { adminAuth, adminDb } from "./firebase-admin";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        // here we have added the id from google in session
        session: async({session, token}) => {
            if(session?.user) {
                if(token?.sub) {
                    session.user.id = token?.sub;
                    //making custom token then user can authenticate to firebase
                    const firebaseToken = await adminAuth.createCustomToken(token.sub);
                    session.firebaseToken = firebaseToken
                }
            }
            return session;
        },
        jwt: async({user, token}) => {
            if(user) {
                token.sub = user.id;
            }
            return token;
        }
    },
    session: {
        strategy: "jwt"
    },
    adapter: FirestoreAdapter(adminDb),
} satisfies NextAuthOptions;