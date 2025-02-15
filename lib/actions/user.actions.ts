"use server";

import { createAdminClient } from "@/lib/appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { Query, ID } from "node-appwrite";
import { parseStringify } from "@/lib/utils";

const getUserByEmail = async (email: string) => {
  const { databases } = await createAdminClient();

  const result = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    [Query.equal("email", [email])],
  );

  return result.total > 0 ? result.documents[0] : null;
};

const handleError = (error: unknown, message: string) => {
  console.log(error, message);
  throw error;
};

export const sendEmailOTP = async ({ email }: { email: string }) => {
  const { account } = await createAdminClient();

  try {
    const session = await account.createEmailToken(ID.unique(), email);

    return session.userId;
  } catch (error) {
    handleError(error, "Failed to send email OTP");
  }
};

export const createAccount = async ({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) => {
  const existingUser = await getUserByEmail(email);
  const accountId = await sendEmailOTP({ email });

  if (!accountId) throw new Error("Failed to send an OTP");

  if (!existingUser) {
    const { databases } = await createAdminClient();

    await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      {
        fullName,
        email,
        avatar:
          "https://www.google.com/imgres?q=avatar%20images%20user&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1300845620%2Fvector%2Fuser-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DyBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fuser-avatar&docid=ne4MxN7a6h2k7M&tbnid=7uu-EJt8ZSmvrM&vet=12ahUKEwi5mejDu8aLAxUce_UHHfR4EOYQM3oECGkQAA..i&w=612&h=612&hcb=2&ved=2ahUKEwi5mejDu8aLAxUce_UHHfR4EOYQM3oECGkQAA",
        accountId,
      },
    );
  }

  return parseStringify({ accountId });
};
