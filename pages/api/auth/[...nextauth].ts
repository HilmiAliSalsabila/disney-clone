import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      // clientId: process.env.GOOGLE_CLIENT_ID as string,
      // clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      clientId:
        "764813777819-cg9u8c9j76bbpoac2um9gji04p5aest2.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async redirect({ url }) {
      // Allows relative callback URLs
      if (url.includes("/login")) return "/";
      if (!url.includes("/")) return "/login";
      return url;
    },
  },
});
