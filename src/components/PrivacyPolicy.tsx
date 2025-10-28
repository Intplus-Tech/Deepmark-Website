import React from "react";

type PrivacyPolicyProps = {
  lastUpdated?: string;
  email?: string;
};

export default function PrivacyPolicy({
  lastUpdated = "15 / 10 / 2025",
  email = "info@deepmarkinsight.com",
}: PrivacyPolicyProps) {
  return (
    <article className="max-w-2xl mx-auto px-8 py-12 font-sans text-sm text-gray-800">
      <header className="mb-6">
        <h1 className="text-3xl font-medium tracking-tight text-gray-900">
          Privacy Policy
        </h1>
        <p className="mt-2 text-xs text-gray-500 uppercase tracking-wider">
          Last Updated: <time>{lastUpdated}</time>
        </p>
      </header>

      <section className="mb-4">
        <h2 className="text-xs font-semibold text-gray-900 mb-2">
          1. Introduction
        </h2>
        <p className="leading-relaxed text-[13px] text-gray-700">
          Deepmark Insight Data ("we," "our," or "us") is committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our
          website (the "Site"). Please read this policy carefully. If you do not
          agree with the terms, please do not access the Site.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xs font-semibold text-gray-900 mb-2">
          2. Information We Collect
        </h2>
        <p className="leading-relaxed text-[13px] text-gray-700">
          We may collect information about you in a variety of ways. The
          information we may collect via the Site includes:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-2 text-[13px] text-gray-700">
          <li>
            <strong>Personal Data:</strong> Personally identifiable information,
            such as your name, email address, company name, and telephone
            number, that you voluntarily give to us when you register with the
            Site or when you choose to participate in various activities related
            to the Site, such as downloading content or requesting a
            consultation.
          </li>
          <li>
            <strong>Derived Data:</strong> Information our servers automatically
            collect when you access the Site, such as your IP address, your
            browser type, your operating system, your access times, and the
            pages you have viewed directly before and after accessing the Site.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> We may use
            cookies, web beacons, and other tracking technologies to collect
            information about you and your interaction with our Site, including
            your browsing behavior.
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xs font-semibold text-gray-900 mb-2">
          3. Use of Your Information
        </h2>
        <p className="leading-relaxed text-[13px] text-gray-700">
          Having accurate information about you permits us to provide you with a
          smooth, efficient, and customized experience. Specifically, we may use
          information collected about you via the Site to:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-2 text-[13px] text-gray-700">
          <li>Respond to your inquiries and provide customer support.</li>
          <li>
            Send you marketing communications about our services and insights,
            where you have consented to receive them.
          </li>
          <li>Improve the functionality and user experience of our Site.</li>
          <li>
            Compile anonymous statistical data and analysis for our own internal
            use.
          </li>
          <li>Protect the Site from abuse and enforce our Terms of Use.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xs font-semibold text-gray-900 mb-2">
          4. Disclosure of Your Information
        </h2>
        <p className="leading-relaxed text-[13px] text-gray-700">
          We may share information we have collected about you in certain
          situations. Your information may be disclosed as follows:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-2 text-[13px] text-gray-700">
          <li>
            <strong>By Law or to Protect Rights:</strong> If we believe the
            release of information about you is necessary to respond to legal
            process, to investigate or remedy potential violations of our
            policies, or to protect the rights, property, and safety of others,
            we may share your information as permitted or required by any
            applicable law.
          </li>
          <li>
            <strong>Third-Party Service Providers:</strong> We may share your
            information with third parties that perform services for us or on
            our behalf, including data analysis, email delivery, and hosting
            services. These parties are prohibited from using your Personal Data
            for any other purpose.
          </li>
          <li>
            <strong>Business Transfers:</strong> We may share or transfer your
            information in connection with, or during negotiations of, any
            merger, sale of company assets, financing, or acquisition of all or
            a portion of our business to another company.
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xs font-semibold text-gray-900 mb-2">
          5. Tracking Technologies
        </h2>
        <p className="leading-relaxed text-[13px] text-gray-700">
          <strong>Cookies:</strong> We may use cookies to understand how you use
          our Site and to personalize your experience. You can set your browser
          to refuse all or some browser cookies, but this may impair the
          functionality of the Site.
        </p>
        <p className="leading-relaxed text-[13px] text-gray-700 mt-2">
          <strong>Analytics:</strong> We may use third-party service providers,
          such as Google Analytics, to monitor and analyze Site traffic.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xs font-semibold text-gray-900 mb-2">
          6. Data Security
        </h2>
        <p className="leading-relaxed text-[13px] text-gray-700">
          We use administrative, technical, and physical security measures to
          help protect your personal information. While we have taken reasonable
          steps to secure the personal information you provide to us, please be
          aware that despite our efforts, no security measures are perfect or
          impenetrable, and no method of data transmission can be guaranteed
          against any interception or other type of misuse.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xs font-semibold text-gray-900 mb-2">
          7. Your Data Protection Rights
        </h2>
        <p className="leading-relaxed text-[13px] text-gray-700">
          Depending on your location, you may have the following rights
          regarding your personal data:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-2 text-[13px] text-gray-700">
          <li>The right to access and receive a copy of your personal data.</li>
          <li>The right to rectify or update any inaccurate personal data.</li>
          <li>The right to request the erasure of your personal data.</li>
          <li>
            The right to restrict or object to our processing of your personal
            data.
          </li>
          <li>The right to data portability.</li>
        </ul>
        <p className="leading-relaxed text-[13px] text-gray-700 mt-2">
          To exercise these rights, please contact us using the information
          provided in Section 10.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xs font-semibold text-gray-900 mb-2">
          8. Policy for Children
        </h2>
        <p className="leading-relaxed text-[13px] text-gray-700">
          We do not knowingly solicit information from or market to children
          under the age of 18. If you become aware of any data we have collected
          from children under age 18, please contact us immediately.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xs font-semibold text-gray-900 mb-2">
          9. Changes to This Privacy Policy
        </h2>
        <p className="leading-relaxed text-[13px] text-gray-700">
          We may update this Privacy Policy from time to time in order to
          reflect changes to our practices or for other operational, legal, or
          regulatory reasons. We will notify you of any changes by updating the
          "Last Updated" date of this Privacy Policy. You are encouraged to
          periodically review this Privacy Policy to stay informed of updates.
        </p>
      </section>

      <footer className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-xs font-semibold text-gray-900">10. Contact Us</h3>
        <p className="leading-relaxed text-[13px] text-gray-700">
          If you have questions or comments about this Privacy Policy, please
          contact us at:{" "}
          <a className="underline" href={`mailto:${email}`}>
            {email}
          </a>
        </p>
      </footer>
    </article>
  );
}
