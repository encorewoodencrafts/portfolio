import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "terms of use",
  description:
    "the terms governing your use of the encorewoodcrafts.in website.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "3 may 2026";

export default function TermsPage() {
  return (
    <div className="space-y-10 text-ink-2 leading-relaxed">
      <header>
        <p className="eyebrow">terms</p>
        <h1 className="display-tight mt-3 text-4xl md:text-5xl text-ink leading-tight">
          terms of use
        </h1>
        <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-2">
          last updated · {LAST_UPDATED}
        </p>
        <div className="mt-8 border border-walnut/40 bg-walnut/5 p-5">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-walnut">
            working draft
          </p>
          <p className="mt-2 text-sm text-ink leading-relaxed">
            these terms are a working draft pending review by our legal
            counsel. they govern only your use of this website and the
            information provided here — they do not form, and are not part
            of, any commercial agreement for doors, sliders, railings or
            installation work, which is documented separately in our written
            quotation and contract.
          </p>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="display text-2xl text-ink">acceptance</h2>
        <p>
          by visiting and using encorewoodcrafts.in (the &ldquo;site&rdquo;)
          you agree to these terms. if you do not agree, please discontinue
          use of the site.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="display text-2xl text-ink">information on the site</h2>
        <p>
          the site presents information about encore&rsquo;s wooden door,
          glass door and railing programmes, completed projects, partner
          network and atelier. all dimensions, performance figures, lead
          times and prices are indicative; binding figures are issued only
          in a written quotation for a specific project.
        </p>
        <p>
          photographs of completed projects credit the architect, location
          and photographer where available. published case studies are used
          with the permission of the project architect and may not be
          reproduced without permission.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="display text-2xl text-ink">intellectual property</h2>
        <p>
          all content on the site — text, photography, drawings, cad
          libraries, system diagrams, the encore name, logo and product
          family names (wooden doors, glass doors, aluminium doors, railings and the
          customised collection codes ENCORE-D01 through ENCORE-D23) — is
          the property of encore wood crafts llp or its licensors and is
          protected by copyright, trade-mark and design right. you may view
          and download for the sole purpose of specifying an encore
          project; all other use requires our prior written consent.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="display text-2xl text-ink">cad library</h2>
        <p>
          access to the encore cad library is granted to qualified
          architects and specifiers who register through the site. cad
          downloads are provided to support specification of encore systems;
          you may not redistribute, sub-license or use them to reproduce or
          imitate our products.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="display text-2xl text-ink">no warranty</h2>
        <p>
          the site is provided &ldquo;as is&rdquo; without warranty of any
          kind. we make commercially reasonable efforts to keep information
          current and accurate, but do not warrant that the site will be
          uninterrupted, error-free, or free of viruses. we are not liable
          for any decisions made on the basis of information found here in
          the absence of a written quotation from the atelier.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="display text-2xl text-ink">third-party links</h2>
        <p>
          the site may link to third-party websites — partner pages,
          architectural publications, photographer portfolios. those sites
          are governed by their own terms; we are not responsible for their
          content.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="display text-2xl text-ink">governing law</h2>
        <p>
          these terms are governed by the laws of india. any dispute arising
          out of or in connection with these terms is subject to the
          exclusive jurisdiction of the courts of hyderabad, telangana.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="display text-2xl text-ink">changes</h2>
        <p>
          we may update these terms from time to time. material changes
          will be reflected in the &ldquo;last updated&rdquo; date above.
          continued use of the site after a change constitutes acceptance of
          the revised terms.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="display text-2xl text-ink">contact</h2>
        <p>
          questions about these terms?{" "}
          <a
            href="mailto:studio@encorewoodcrafts.in"
            className="underline underline-offset-2"
          >
            studio@encorewoodcrafts.in
          </a>
        </p>
      </section>
    </div>
  );
}
