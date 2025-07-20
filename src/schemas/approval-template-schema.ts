import * as z from "zod";

export const createApprovalTemplateFormSchema = z.object({
  templateName: z
    .string()
    .min(3, { message: "Template name must be at least 3 characters." }),
  templateType: z
    .string({ required_error: "Please select a template type." })
    .min(1, { message: "Please select a template type." }),
  steps: z
    .array(
      z.object({
        approverType: z.string(),
        approverId: z
          .string()
          .min(1, { message: "Please select an approver." }),
        isMandatory: z.boolean(),
      })
    )
    .min(1, { message: "At least one approval step is required." }),
});
