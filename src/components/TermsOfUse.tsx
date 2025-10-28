import React from "react";

type TermsOfUseProps = {
  lastUpdated?: string;
  email?: string;
};

export default function TermsOfUse({
  lastUpdated = "15 / 10 / 2025",
  email = "info@deepmarkdata.com",
}: TermsOfUseProps) {
  return (
    <article className="max-w-2xl mx-auto px-8 py-12 font-sans text-sm text-gray-800">
      <header className="mb-6">
        <h1 className="text-3xl font-medium tracking-tight text-gray-900">
          Terms of Use
        </h1>
        <p className="mt-2 text-xs text-foreground uppercase tracking-wider font-semibold">
          Last Updated: <time className="font-normal">{lastUpdated}</time>
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-xs font-semibold text-gray-900 mb-2">
          Acceptance of Terms
        </h2>
        <p className="leading-relaxed text-[13px] text-gray-700">
          Welcome to the Deepmark Insight Data website. By accessing and using
          this website, you accept and agree to be bound by the terms and
          provisions of this agreement. If you do not agree to these Terms of
          Use, you must not access or use the website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xs font-semibold text-gray-900 mb-2">
          Use License
        </h2>
        <ol className="list-decimal list-inside leading-relaxed text-[13px] text-gray-700 space-y-2">
          <li>
            Permission is granted to temporarily access the materials
            (information or software) on Deepmark Insight Data's website for
            personal, non-commercial transitory viewing only.
          </li>
          <li>
            This is the grant of a license, not a transfer of title, and under
            this license you may not:
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-[13px] text-gray-700">
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose, or for any public
                display (commercial or non-commercial);
              </li>
              <li>
                attempt to decompile or reverse engineer any software contained
                on Deepmark Insight Data's website;
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <li>
                transfer the materials to another person or "mirror" the
                materials on any other server.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xs font-semibold text-gray-900 mb-2">
          Intellectual Property
        </h2>
        <p className="leading-relaxed text-[13px] text-gray-700">
          All content, features, and functionality on this website, including
          but not limited to text, graphics, logos, images, data compilations,
          and software, are the exclusive property of Deepmark Insight Data and
          are protected by international copyright, trademark, and other
          intellectual property laws. The "Deepmark Insight Data" name and logo
          are trademarks of Communication and Marketing Research Group Limited.
          All other trademarks referenced on the website are the property of
          their respective owners.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xs font-semibold text-gray-900 mb-2">
          User-Generated Content
        </h2>
        <p className="leading-relaxed text-[13px] text-gray-700">
          Users may not submit, post, or transmit any material that is illegal,
          threatening, defamatory, obscene, or otherwise objectionable. Deepmark
          Insight Data reserves the right to remove any such content without
          notice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xs font-semibold text-gray-900 mb-2">Disclaimer</h2>
        <p className="leading-relaxed text-[13px] text-gray-700">
          The materials on Deepmark Insight Data's website are provided on an
          'as is' basis. Deepmark Insight Data makes no warranties, expressed or
          implied, and hereby disclaims and negates all other warranties
          including, without limitation, implied warranties or conditions of
          merchantability, fitness for a particular purpose, or non-infringement
          of intellectual property or other violation of rights.
        </p>

        <h3 className="mt-4 text-xs font-semibold text-gray-900">
          Limitations
        </h3>
        <p className="leading-relaxed text-[13px] text-gray-700">
          In no event shall Deepmark Insight Data or its suppliers be liable for
          any damages (including, without limitation, damages for loss of data
          or profit, or due to business interruption) arising out of the use or
          inability to use the materials on Deepmark Insight Data's website,
          even if Deepmark Insight Data or a Deepmark Insight Data authorized
          representative has been notified orally or in writing of the
          possibility of such damage.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xs font-semibold text-gray-900 mb-2">
          Revisions and Errata
        </h2>
        <p className="leading-relaxed text-[13px] text-gray-700">
          The materials appearing on Deepmark Insight Data's website could
          include technical, typographical, or photographic errors. Deepmark
          Insight Data does not warrant that any of the materials on its website
          are accurate, complete, or current. Deepmark Insight Data may make
          changes to the materials contained on its website at any time without
          notice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xs font-semibold text-gray-900 mb-2">Links</h2>
        <p className="leading-relaxed text-[13px] text-gray-700">
          Deepmark Insight Data has not reviewed all of the sites linked to its
          website and is not responsible for the contents of any such linked
          site. The inclusion of any link does not imply endorsement by Deepmark
          Insight Data of the site. Use of any such linked website is at the
          user's own risk.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xs font-semibold text-gray-900 mb-2">
          Governing Law
        </h2>
        <p className="leading-relaxed text-[13px] text-gray-700">
          These terms and conditions are governed by and construed in accordance
          with the laws of the Federal Republic of Nigeria and you irrevocably
          submit to the exclusive jurisdiction of the courts in that location.
        </p>
      </section>

      <footer className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-xs font-semibold text-gray-900">
          Contact Information
        </h3>
        <p className="leading-relaxed text-[13px] text-gray-700">
          Questions about these Terms of Use should be sent to us at:{" "}
          <a className="underline" href={`mailto:${email}`}>
            {email}
          </a>
        </p>
      </footer>
    </article>
  );
}
