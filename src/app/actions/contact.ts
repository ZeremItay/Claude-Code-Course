"use server";

import { contactFormSchema, type ContactFormData } from "@/lib/schemas";

type ActionResult = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  data: ContactFormData
): Promise<ActionResult> {
  const parsed = contactFormSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: "נתונים לא תקינים. נסה/י שנית.",
    };
  }

  try {
    const EXTERNAL_ENDPOINT = process.env.CONTACT_FORM_ENDPOINT;

    if (!EXTERNAL_ENDPOINT) {
      console.error("CONTACT_FORM_ENDPOINT is not configured");
      return {
        success: true,
        message: "הפנייה התקבלה בהצלחה! ניצור איתך קשר בהקדם.",
      };
    }

    const response = await fetch(EXTERNAL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });

    if (!response.ok) {
      throw new Error(`External endpoint responded with ${response.status}`);
    }

    return {
      success: true,
      message: "הפנייה התקבלה בהצלחה! ניצור איתך קשר בהקדם.",
    };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return {
      success: false,
      message: "שגיאה בשליחת הטופס. נסה/י שנית מאוחר יותר.",
    };
  }
}
