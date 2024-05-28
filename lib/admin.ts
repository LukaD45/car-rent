import { auth } from "@clerk/nextjs/server";

const adminIds = ["user_2gW6xpFla69F1p0Zfm8Z2U6jbPU"];

export const getisAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
