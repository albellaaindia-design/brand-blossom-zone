import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const schema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().min(5).max(30),
  company: z.string().trim().min(1).max(200),
  service: z.string().trim().max(200).optional().nullable(),
  message: z.string().trim().max(2000).optional().nullable(),
  source_page: z.string().trim().max(200).optional().nullable(),
});

export type InquiryInput = z.infer<typeof schema>;

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    // Persist to database (always works).
    const { error } = await supabaseAdmin.from("inquiries").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      service: data.service ?? null,
      message: data.message ?? null,
      source_page: data.source_page ?? null,
    });

    if (error) {
      console.error("Inquiry insert failed", error);
      throw new Error("Could not save your inquiry. Please try again.");
    }

    return { ok: true };
  });
