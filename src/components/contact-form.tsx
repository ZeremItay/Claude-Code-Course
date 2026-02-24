"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import { submitContactForm } from "@/app/actions/contact";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(data);
      if (result.success) {
        toast.success(result.message);
        reset();
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error("שגיאה בשליחת הטופס. נסה/י שנית.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-md space-y-6">
      <div className="space-y-2">
        <Label htmlFor="fullName">שם מלא</Label>
        <Input
          id="fullName"
          {...register("fullName")}
          placeholder="ישראל ישראלי"
          className="bg-surface border-border"
        />
        {errors.fullName && (
          <p className="text-sm text-error">{errors.fullName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">טלפון</Label>
        <Input
          id="phone"
          type="tel"
          dir="ltr"
          {...register("phone")}
          placeholder="0501234567"
          className="bg-surface border-border text-start"
        />
        {errors.phone && (
          <p className="text-sm text-error">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">אימייל</Label>
        <Input
          id="email"
          type="email"
          dir="ltr"
          {...register("email")}
          placeholder="email@example.com"
          className="bg-surface border-border text-start"
        />
        {errors.email && (
          <p className="text-sm text-error">{errors.email.message}</p>
        )}
      </div>

      {/* Honeypot field for bot prevention */}
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-l from-neon-pink to-neon-purple px-8 py-6 text-lg font-bold text-white hover:opacity-90"
      >
        {isSubmitting ? (
          <Loader2 className="animate-spin" />
        ) : (
          <>
            <span className="font-mono me-2">{"{ "}</span>
            Run_Code | שלח פנייה
            <span className="font-mono ms-2">{" }"}</span>
          </>
        )}
      </Button>
    </form>
  );
}
