"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowUpRight } from "lucide-react";
import { countries } from "@/data/countries";
import { HONEYPOT_FIELD, TIMESTAMP_FIELD } from "@/lib/spam-check";

const schema = z.object({
  email: z.string().email({ message: "valid email required" }),
  name: z.string().min(2, { message: "name required" }),
  practice: z.string().optional(),
  country: z.string().min(2, { message: "country required" }),
  consent: z.literal(true, {
    error: "consent required to share details with our local partner",
  }),
  newsletter: z.boolean().optional(),
});

type FormValues = z.infer<typeof schema>;

export function CadRegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { country: "India", newsletter: true },
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [serverError, setServerError] = React.useState<string | null>(null);
  const [honeypot, setHoneypot] = React.useState("");
  const mountedAtRef = React.useRef<number>(Date.now());

  const onSubmit = async (values: FormValues) => {
    setServerError(null);
    try {
      const res = await fetch("/api/cad-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          [HONEYPOT_FIELD]: honeypot,
          [TIMESTAMP_FIELD]: mountedAtRef.current,
        }),
      });
      if (!res.ok) throw new Error("submit failed");
      setSubmitted(true);
      reset();
      mountedAtRef.current = Date.now();
    } catch {
      setServerError("we could not submit your request. please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="border border-line p-10 md:p-14 bg-paper-2/40">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-walnut">
          access granted
        </p>
        <h3 className="mt-4 display text-3xl md:text-4xl font-light tracking-tight">
          welcome to the encore CAD library.
        </h3>
        <p className="mt-4 max-w-md text-ink-2 leading-relaxed">
          we have sent a signed download link to your inbox. our local partner
          will be in touch within two working days to support specification.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 border border-line p-8 md:p-10 bg-paper"
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

      <div className="space-y-1">
        <p className="eyebrow">cad library access</p>
        <p className="text-ink-2 text-sm leading-relaxed max-w-md">
          thank you for your interest in encore. to give you access to CAD
          data and technical documentation downloads, we require a few
          details.
        </p>
      </div>

      <Field
        label="email"
        error={errors.email?.message}
        input={
          <input
            type="email"
            autoComplete="email"
            placeholder="you@practice.com"
            className={fieldClass(!!errors.email)}
            {...register("email")}
          />
        }
      />

      <Field
        label="first & last name"
        error={errors.name?.message}
        input={
          <input
            type="text"
            autoComplete="name"
            placeholder="full name"
            className={fieldClass(!!errors.name)}
            {...register("name")}
          />
        }
      />

      <Field
        label="practice (optional)"
        input={
          <input
            type="text"
            placeholder="atelier / studio name"
            className={fieldClass(false)}
            {...register("practice")}
          />
        }
      />

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

      <label className="flex items-start gap-3 text-sm text-ink-2 leading-relaxed cursor-pointer">
        <input
          type="checkbox"
          className="mt-1 h-3.5 w-3.5 accent-walnut"
          {...register("consent")}
        />
        <span>
          i consent to my contact details being passed on to the encore sales
          partner responsible for my location, to enable them to send me
          relevant product information.
        </span>
      </label>
      {errors.consent && (
        <p className="text-xs text-walnut -mt-2">{errors.consent.message}</p>
      )}

      <label className="flex items-start gap-3 text-sm text-ink-2 leading-relaxed cursor-pointer">
        <input
          type="checkbox"
          className="mt-1 h-3.5 w-3.5 accent-walnut"
          {...register("newsletter")}
        />
        <span>please subscribe me to the encore newsletter.</span>
      </label>

      {serverError && (
        <p className="text-xs text-walnut">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink border-b border-ink pb-1 hover:text-walnut hover:border-walnut transition-colors disabled:opacity-60"
      >
        {isSubmitting ? "sending…" : "submit & access library"}
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
