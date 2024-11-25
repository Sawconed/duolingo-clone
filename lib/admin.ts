import { auth } from "@clerk/nextjs/server"

const allowIds = ["user_2owtLUtKtGTWeZJBZSY7PAzTQbZ"];

export const getIsAdmin = async () => {
  const { userId } = await auth();

  if (!userId) return false;

  return allowIds.indexOf(userId) !== -1;
}
