"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/actions/auth";
import { Button } from "./ui/button";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/login"); // redirect manually on client
    } catch {
      alert("Logout gagal, coba lagi.");
    }
  };

  return (
    <Button variant={"ghost"} onClick={handleLogout}>
      Logout
    </Button>
  );
}
