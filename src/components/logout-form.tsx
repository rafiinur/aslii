"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { logout } from "@/features/auth/actions/auth.action";
import { toast } from "sonner";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/login"); // redirect manually on client
    } catch {
      toast.error("Failed to logout. Please try again.");
      console.error("Logout failed");
    }
  };

  return (
    <Button variant={"ghost"} onClick={handleLogout}>
      Logout
    </Button>
  );
}
