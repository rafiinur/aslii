"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { updateApprovalStatus } from "@/features/approval/actions/approval.action";
import { approvalSchema } from "@/schemas/update-approval-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

export function AcceptApprovalDialog() {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof approvalSchema>>({
    resolver: zodResolver(approvalSchema),
    defaultValues: {
      note: "",
    },
  });

  const { mutate, isPending } = useMutation({
    // Perbaikan: Tipe data disesuaikan dengan apa yang dibutuhkan oleh server action
    mutationFn: (values: z.infer<typeof approvalSchema>) =>
      updateApprovalStatus(123, "approve", values.note),
    onSuccess: () => {
      form.reset();
      setIsOpen(false);
    },
    onError: (error) => {
      console.error("Failed to accept approval:", error);
    },
  });

  const handleAcceptApproval = (data: z.infer<typeof approvalSchema>) => {
    mutate(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-success-300 hover:bg-success-400 text-white">
          <Check className="mr-2 h-4 w-4" />
          Accept Approval
        </Button>
      </DialogTrigger>
      <DialogContent onCloseAutoFocus={() => form.reset()}>
        <DialogHeader>
          <DialogTitle>Accept Approval</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleAcceptApproval)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="note">Note (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      id="note"
                      placeholder="Type your note..."
                      className="min-h-[80px] max-h-[120px] resize-none"
                      maxLength={500}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="submit"
                className="bg-success-300 hover:bg-success-400 text-white"
                disabled={isPending}
              >
                {isPending ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                Accept
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
