"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Plus,
  Trash2,
  CheckCircle2,
  FileText,
  Clock,
  Loader2,
} from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// --- Data Dummy & Tipe ---
const DUMMY_USERS = [
  { value: "user_1", label: "John Doe" },
  { value: "user_2", label: "Jane Smith" },
  { value: "user_3", label: "Peter Jones" },
  { value: "user_4", label: "Mary Williams" },
];

const APPROVER_TYPES = [
  { label: "User", value: "user", icon: "👤" },
  { label: "Role", value: "role", icon: "🎭" },
];

const TEMPLATE_TYPES = [
  {
    label: "Leave Request",
    value: "leave_request",
    icon: <FileText className="h-4 w-4" />,
  },
  { label: "Overtime", value: "overtime", icon: <Clock className="h-4 w-4" /> },
];

type Role = {
  r_role_id: string;
  r_role_nama: string;
};

type CreateTemplateFormProps = {
  roles: Role[];
};

// --- Langkah 1: Definisikan Schema Validasi dengan Zod ---
const formSchema = z.object({
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

type FormValues = z.infer<typeof formSchema>;

const CreateTemplateForm = ({ roles }: CreateTemplateFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      templateName: "",
      templateType: "",
      steps: [{ approverType: "role", approverId: "", isMandatory: true }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "steps",
  });

  const onSubmit = (values: FormValues) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const payload = {
          templateName: values.templateName,
          templateType: values.templateType,
          steps: values.steps.map((step, index) => ({
            step_order: index + 1,
            approver_type: step.approverType,
            approver_id: step.approverId,
            is_mandatory: step.isMandatory,
          })),
        };
        console.log("Submit Payload:", payload);
        alert(
          "Template submitted successfully! Check the console for the payload."
        );
        resolve(payload);
      }, 1000);
    });
  };

  const isSubmitting = form.formState.isSubmitting;

  return (
    <>
      {/* --- Langkah 5: Bungkus Form dengan Komponen Form dari Shadcn --- */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="templateName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Template Name <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., Purchase Order Approval"
                      {...field}
                      className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="templateType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Template Type <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select a template type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TEMPLATE_TYPES.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center gap-2">
                            {type.icon} {type.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-4">Approval Steps</h3>
            <div className="space-y-4">
              {fields.map((field, index) => {
                // Watch approverType untuk render kondisional
                const approverType = form.watch(`steps.${index}.approverType`);
                return (
                  <Card
                    key={field.id}
                    className="border border-gray-200 shadow-sm"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start md:items-center gap-4 flex-col md:flex-row">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                          <FormField
                            control={form.control}
                            name={`steps.${index}.approverType`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                                  Approver Type
                                </FormLabel>
                                <Select
                                  onValueChange={(value) => {
                                    field.onChange(value);
                                    form.setValue(
                                      `steps.${index}.approverId`,
                                      ""
                                    ); // Reset approverId saat tipe berubah
                                  }}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {APPROVER_TYPES.map((type) => (
                                      <SelectItem
                                        key={type.value}
                                        value={type.value}
                                      >
                                        <div className="flex items-center gap-2">
                                          <span>{type.icon}</span>
                                          {type.label}
                                        </div>
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`steps.${index}.approverId`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                                  Approver{" "}
                                  <span className="text-red-500">*</span>
                                </FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue
                                        placeholder={
                                          approverType === "role"
                                            ? "Select a role"
                                            : "Select a user"
                                        }
                                      />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {approverType === "role"
                                      ? roles.map((role) => (
                                          <SelectItem
                                            key={role.r_role_id}
                                            value={role.r_role_id}
                                          >
                                            {role.r_role_nama}
                                          </SelectItem>
                                        ))
                                      : DUMMY_USERS.map((user) => (
                                          <SelectItem
                                            key={user.value}
                                            value={user.value}
                                          >
                                            {user.label}
                                          </SelectItem>
                                        ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="flex items-center gap-2 ml-auto">
                          <Badge
                            variant={
                              field.isMandatory ? "default" : "secondary"
                            }
                            className={
                              field.isMandatory
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-600"
                            }
                          >
                            {field.isMandatory ? "Required" : "Optional"}
                          </Badge>
                          {fields.length > 1 && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2"
                              onClick={() => remove(index)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <Button
              type="button"
              onClick={() =>
                append({
                  approverType: "role",
                  approverId: "",
                  isMandatory: true,
                })
              }
              variant="outline"
              className="mt-4 w-full h-12 border-dashed border-2 border-gray-300 hover:border-primary-400 hover:bg-primary-100 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Approval Step
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 h-12"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Save Template
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default CreateTemplateForm;
