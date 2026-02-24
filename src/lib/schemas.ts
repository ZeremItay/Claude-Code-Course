import { z } from "zod/v4";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "שם מלא חייב להכיל לפחות 2 תווים")
    .max(100, "שם מלא ארוך מדי"),

  phone: z
    .string()
    .regex(/^0[2-9]\d{7,8}$/, "מספר טלפון לא תקין (פורמט ישראלי)"),

  email: z
    .string()
    .email("כתובת אימייל לא תקינה")
    .max(255),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
