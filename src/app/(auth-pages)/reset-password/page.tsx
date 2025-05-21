"use client";

import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const ResetPasswordPage = () => {
  const [otp, setOtp] = useState("");

  return (
    <div className="w-full max-w-md sm:max-w-lg">
      <div className="flex flex-col gap-4 mb-11">
        <h1 className="text-4xl font-bold text-primary">
          Reset Password via Code
        </h1>
        <p className="text-muted-foreground text-sm text-balance">
          Masukan kode yang sudah kamu terima untuk reset password.
        </p>
      </div>
      <div className="w-full">
        <InputOTP
          maxLength={4}
          value={otp}
          onChange={setOtp}
          className="w-full gap-4"
        >
          <InputOTPGroup className="w-full flex justify-between">
            <InputOTPSlot index={0} className="w-full h-20 text-2xl border-2" />
            <InputOTPSlot index={1} className="w-full h-20 text-2xl border-2" />
            <InputOTPSlot index={2} className="w-full h-20 text-2xl border-2" />
            <InputOTPSlot index={3} className="w-full h-20 text-2xl border-2" />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
