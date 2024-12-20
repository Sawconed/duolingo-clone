// "use client";

import { getIsAdmin } from "@/lib/admin";
import { redirect } from "next/navigation";
import App from "./app";

// const App = dynamic(() => import("./app"), { ssr: false })

const AdminPage = async () => {

  const isAdmin = await getIsAdmin();

  if (!isAdmin) redirect("/");

  return (
    <App />
  )
}

export default AdminPage;
