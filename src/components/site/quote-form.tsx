"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowUpRight } from "lucide-react";
import { countries } from "@/data/countries";
import { products } from "@/data/products";
import { HONEYPOT_FIELD, TIMESTAMP_FIELD } from "@/lib/spam-check";
import { useFormTimestamp } from "@/lib/use-form-timestamp";

const schema = z.object({
  name: z.string().min(2, { message: "name required" }),
  email: z.string().email({ message: "valid email required" }),
  phone: z.string().optional(),
  practice: z.string().optional(),
  country: z.string().min(2),
  system: z.string().min(2),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z
    .string()
    .min(20, { message: "please describe your project (20+ characters)" }),
  consent: z.literal(true, {
    error: "please confirm consent to be contacted",
  }),
});

type FormValues = z.infer<typeof schema>;

export function QuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      country: "India",
      system: products[0].name,
    },
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [serverError, setServerError] = React.useState<string | null>(null);
  const [honeypot, setHoneypot] = React.useState("");
  const { getMountedAt, reset: resetMountedAt } = useFormTimestamp();

  const onSubmit = async (values: FormValues) => {
    setServerError(null);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          [HONEYPOT_FIELD]: honeypot,
          [TIMESTAMP_FIELD]: getMountedAt(),
        }),
      });
      if (!res.ok) throw new Error("submit failed");
      setSubmitted(true);
      reset();
      resetMountedAt();
    } catch {
      setServerError("we could not submit your enquiry. please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="border border-line p-10 md:p-14 bg-paper-2/40">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-walnut">
          thank you
        </p>
        <h3 className="mt-4 display text-3xl md:text-4xl font-light tracking-tight">
          your enquiry is with the atelier.
        </h3>
        <p className="mt-4 max-w-md text-ink-2 leading-relaxed">
          we will reply within five working days with an initial proposal,
          drawings request and timeline.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
    >
      <div
        aria-hidden="true"
        className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
      >
        <label>
          do not fill this field
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            name="website"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field
          label="full name"
          error={errors.name?.message}
          input={
            <input
              type="text"
              autoComplete="name"
              className={fieldClass(!!errors.name)}
              {...register("name")}
            />
          }
        />
        <Field
          label="email"
          error={errors.email?.message}
          input={
            <input
              type="email"
              autoComplete="email"
              className={fieldClass(!!errors.email)}
              {...register("email")}
            />
          }
        />
        <Field
          label="phone (optional)"
          input={
            <input
              type="tel"
              autoComplete="tel"
              className={fieldClass(false)}
              {...register("phone")}
            />
          }
        />
        <Field
          label="practice / company (optional)"
          input={
            <input
              type="text"
              className={fieldClass(false)}
              {...register("practice")}
            />
          }
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field
          label="country"
          error={errors.country?.message}
          input={
            <select
              className={fieldClass(!!errors.country)}
              {...register("country")}
            >
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          }
        />
        <Field
          label="encore system of interest"
          input={
            <select
              className={fieldClass(false)}
              {...register("system")}
            >
              {products.map((p) => (
                <option key={p.slug} value={p.name}>
                  {p.name} — {p.tagline}
                </option>
              ))}
              <option value="not sure">not sure yet — please advise</option>
            </select>
          }
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field
          label="indicative budget (optional)"
          input={
            <select
              className={fieldClass(false)}
              {...register("budget")}
            >
              <option value="">prefer not to say</option>
              <option value="<25l">{"< ₹25 lakh"}</option>
              <option value="25l-1cr">₹25 lakh – ₹1 crore</option>
              <option value="1cr-5cr">₹1 crore – ₹5 crore</option>
              <option value="5cr+">₹5 crore+</option>
              <option value="usd-quote">international project (USD/EUR)</option>
            </select>
          }
        />
        <Field
          label="timeline (optional)"
          input={
            <select
              className={fieldClass(false)}
              {...register("timeline")}
            >
              <option value="">flexible</option>
              <option value="design">in design — 6–18 months out</option>
              <option value="construction">on site this year</option>
              <option value="urgent">{"< 3 months"}</option>
            </select>
          }
        />
      </div>

      <Field
        label="tell us about the project"
        error={errors.message?.message}
        input={
          <textarea
            rows={5}
            placeholder="brief, location, architect, opening sizes — or simply a sentence on what you are dreaming of."
            className={fieldClass(!!errors.message) + " resize-y"}
            {...register("message")}
          />
        }
      />

      <label className="flex items-start gap-3 text-sm text-ink-2 leading-relaxed cursor-pointer">
        <input
          type="checkbox"
          className="mt-1 h-3.5 w-3.5 accent-walnut"
          {...register("consent")}
        />
        <span>
          i would like a member of the encore atelier or the regional partner to
          contact me about this project.
        </span>
      </label>
      {errors.consent && (
        <p className="text-xs text-walnut -mt-2">{errors.consent.message}</p>
      )}

      {serverError && <p className="text-xs text-walnut">{serverError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors disabled:opacity-60"
      >
        {isSubmitting ? "sending…" : "submit enquiry"}
        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
      </button>
    </form>
  );
}

function fieldClass(error: boolean) {
  return [
    "w-full bg-transparent border-b border-line py-2 text-ink",
    "placeholder:text-ink-2/60 focus:outline-none focus:border-ink",
    error ? "border-walnut" : "",
  ].join(" ");
}

function Field({
  label,
  input,
  error,
}: {
  label: string;
  input: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      <label className="block font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-2 mb-2">
        {label}
      </label>
      {input}
      {error && <p className="mt-1 text-xs text-walnut">{error}</p>}
    </div>
  );
}
