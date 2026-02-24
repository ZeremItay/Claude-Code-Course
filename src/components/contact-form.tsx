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
import { Loader2, User, Phone, Mail } from "lucide-react";

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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <Label
          htmlFor="fullName"
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <User className="h-3.5 w-3.5" />
          שם מלא
        </Label>
        <Input
          id="fullName"
          {...register("fullName")}
          placeholder="ישראל ישראלי"
          className="border-border bg-surface/50 transition-all duration-200 focus:border-neon-pink/30 focus:bg-surface"
        />
        {errors.fullName && (
          <p className="font-mono text-xs text-error">
            {"// "}{errors.fullName.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="phone"
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Phone className="h-3.5 w-3.5" />
          טלפון
        </Label>
        <Input
          id="phone"
          type="tel"
          dir="ltr"
          {...register("phone")}
          placeholder="0501234567"
          className="border-border bg-surface/50 text-start transition-all duration-200 focus:border-neon-pink/30 focus:bg-surface"
        />
        {errors.phone && (
          <p className="font-mono text-xs text-error">
            {"// "}{errors.phone.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="email"
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Mail className="h-3.5 w-3.5" />
          אימייל
        </Label>
        <Input
          id="email"
          type="email"
          dir="ltr"
          {...register("email")}
          placeholder="email@example.com"
          className="border-border bg-surface/50 text-start transition-all duration-200 focus:border-neon-pink/30 focus:bg-surface"
        />
        {errors.email && (
          <p className="font-mono text-xs text-error">
            {"// "}{errors.email.message}
          </p>
        )}
      </div>

      {/* Honeypot */}
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="pt-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="neon-glow w-full bg-gradient-to-l from-neon-pink to-neon-purple px-8 py-6 text-base font-bold text-white transition-all hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(233,30,140,0.4)]"
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin" />
          ) : (
            <>
              <span className="font-mono me-2 text-white/60">{"{"}</span>
              Run_Code | שלח פנייה
              <span className="font-mono ms-2 text-white/60">{"}"}</span>
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
