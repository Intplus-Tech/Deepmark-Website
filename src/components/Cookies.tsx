import React, { useEffect } from "react";
import Header from "./ContactHeader";
import Footer from "./Footer";

type CookiesProps = {
  lastUpdated?: string;
  email?: string;
};

export default function Cookies({
  lastUpdated = "15 / 10 / 2025",
  email = "info@deepmarkinsight.com",
}: CookiesProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Header />
      <article className="max-w-3xl mx-auto px-8 py-12 font-sans text-sm text-gray-800 pt-32">
        <header className="mb-6">
          <h1 className="text-3xl font-medium tracking-tight text-gray-900">
            Cookies Policy
          </h1>
          <p className="mt-2 text-xs text-gray-500 uppercase tracking-wider">
            Last Updated: <time>{lastUpdated}</time>
          </p>
        </header>

        <section className="mb-6">
          <h2 className="text-xs font-semibold text-gray-900 mb-2">
            1. Introduction
          </h2>
          <p className="leading-relaxed text-[13px] text-gray-700">
            This Cookies Policy explains how Deepmark Insight Data ("we," "us,"
            or "our") uses cookies and similar tracking technologies on our
            website, www.deepmarkdata.com. By using our website, you consent to
            the use of cookies as described in this policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xs font-semibold text-gray-900 mb-2">
            2. What Are Cookies?
          </h2>
          <p className="leading-relaxed text-[13px] text-gray-700">
            Cookies are small text files that are placed on your device
            (computer, tablet, or mobile) when you visit our website. They are
            widely used to make websites work more efficiently, as well as to
            provide information to the website owners. Cookies cannot be used to
            run programs or deliver viruses to your device.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xs font-semibold text-gray-900 mb-2">
            3. How We Use Cookies
          </h2>
          <p className="leading-relaxed text-[13px] text-gray-700">
            We use cookies for the following purposes:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-2 text-[13px] text-gray-700">
            <li>
              <strong>Essential Cookies:</strong> These are necessary for the
              website to function and cannot be switched off. They are usually
              only set in response to actions you take, such as setting your
              privacy preferences, logging in, or filling in forms.
            </li>
            <li>
              <strong>Performance and Analytics Cookies:</strong> These allow us
              to count visits and traffic sources so we can measure and improve
              the performance of our site. The information is aggregated and
              anonymous.
            </li>
            <li>
              <strong>Functionality Cookies:</strong> These enable the website
              to provide enhanced functionality and personalization, such as
              remembering your preferred language or region.
            </li>
            <li>
              <strong>Targeting Cookies:</strong> These cookies may be set
              through our site by our advertising partners. They may be used by
              those companies to build a profile of your interests and show you
              relevant adverts on other sites.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xs font-semibold text-gray-900 mb-2">
            4. Types of Cookies We Use
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left text-[13px] text-gray-700 border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 pr-4 font-medium">Cookie Name</th>
                  <th className="py-2 pr-4 font-medium">Provider</th>
                  <th className="py-2 pr-4 font-medium">Purpose</th>
                  <th className="py-2 pr-4 font-medium">Type</th>
                  <th className="py-2 pr-4 font-medium">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">session_id</td>
                  <td className="py-2">Deepmark Insight Data</td>
                  <td className="py-2">Maintain your user session</td>
                  <td className="py-2">Essential</td>
                  <td className="py-2">Session</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">cookie_consent</td>
                  <td className="py-2">Deepmark Insight Data</td>
                  <td className="py-2">Stores your cookie preferences</td>
                  <td className="py-2">Essential</td>
                  <td className="py-2">1 year</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">_ga</td>
                  <td className="py-2">Google Analytics</td>
                  <td className="py-2">Distinguishes unique users</td>
                  <td className="py-2">Performance</td>
                  <td className="py-2">2 years</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">_gid</td>
                  <td className="py-2">Google Analytics</td>
                  <td className="py-2">Distinguishes unique users</td>
                  <td className="py-2">Performance</td>
                  <td className="py-2">24 hours</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">_gat</td>
                  <td className="py-2">Google Analytics</td>
                  <td className="py-2">Throttles request rate</td>
                  <td className="py-2">Performance</td>
                  <td className="py-2">1 minute</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xs font-semibold text-gray-900 mb-2">
            5. How to Control Cookies
          </h2>
          <p className="leading-relaxed text-[13px] text-gray-700">
            You can set or amend your web browser controls to accept or refuse
            cookies. If you choose to disable cookies, some features of our
            website may not operate as intended.
          </p>
          <ul className="list-disc ml-4 mt-2 space-y-1 text-[13px] text-gray-700">
            <li>
              <strong>Browser Controls:</strong> Most browsers allow you to
              change cookie settings in the "Options", "Tools", or "Preferences"
              menu.
            </li>
            <li>
              <strong>Specific Opt-Out:</strong> You can opt out of Google
              Analytics by installing the Google Analytics Opt-out Browser
              Add-on.
            </li>
            <li>
              <strong>Consent Management:</strong> Upon your first visit you may
              be presented with a cookie banner that allows you to manage your
              preferences for non-essential cookies. You can adjust these
              settings at any time by clicking the cookie settings link in the
              website footer.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xs font-semibold text-gray-900 mb-2">
            6. Changes to This Cookies Policy
          </h2>
          <p className="leading-relaxed text-[13px] text-gray-700">
            We may update this Cookies Policy from time to time to reflect
            changes in technology, legislation, or our data practices. We will
            post any changes on this page and update the "Last Updated" date.
          </p>
        </section>

        <footer className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-xs font-semibold text-gray-900">7. Contact Us</h3>
          <p className="leading-relaxed text-[13px] text-gray-700">
            If you have questions or comments about this Cookies Policy, please
            contact us at:{" "}
            <a className="underline" href={`mailto:${email}`}>
              {email}
            </a>
          </p>
        </footer>
      </article>
      <Footer />
    </div>
  );
}
