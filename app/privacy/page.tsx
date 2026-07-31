import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Monoverse privacy policy and data collection practices.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-24 pb-32">
      <header className="mb-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
          Privacy Policy
        </h1>
        <p className="font-mono text-sm uppercase tracking-wider text-text-secondary">
          Last updated: August 1, 2026
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none 
                      prose-p:font-body prose-p:text-lg prose-p:leading-relaxed prose-p:text-text-secondary
                      prose-headings:font-display prose-headings:text-foreground prose-headings:font-semibold
                      prose-li:text-text-secondary prose-li:font-body">
        
        <p>
          At Monoverse, we believe that intellectual exploration requires a quiet, distraction-free environment. 
          That extends to your privacy. We are committed to protecting your personal information and being 
          transparent about any data we collect.
        </p>

        <h2>1. Zero Third-Party Trackers</h2>
        <p>
          This website is statically generated and hosted securely. We do not use invasive third-party analytics 
          (such as Google Analytics), advertising trackers, or behavioral profiling scripts. We believe that 
          your reading habits are your own business.
        </p>

        <h2>2. Data We Collect</h2>
        <p>
          We only collect data that you voluntarily provide to us. Currently, the only data collection mechanism 
          on Monoverse is our newsletter subscription form.
        </p>
        <ul>
          <li><strong>Email Addresses:</strong> If you choose to subscribe to our newsletter, we collect your email address. This is used exclusively to send you updates when new essays are published.</li>
          <li><strong>Server Logs:</strong> Like all websites, our hosting provider (Vercel) automatically collects basic server logs (such as IP addresses and browser types) for security, debugging, and infrastructure monitoring purposes. These logs are not used to identify individual readers.</li>
        </ul>

        <h2>3. How We Use Your Data</h2>
        <p>
          If you subscribe to our newsletter, we use your email address for the sole purpose of sending you 
          Monoverse content. We do not sell, rent, or trade your email address with any third parties. 
          We do not use your email for targeted advertising.
        </p>

        <h2>4. Your Rights</h2>
        <p>
          You have the right to unsubscribe from our newsletter at any time. Every email we send includes a 
          clear, one-click unsubscribe link. Upon unsubscribing, your email address will be securely removed 
          from our active mailing list.
        </p>

        <h2>5. Changes to This Policy</h2>
        <p>
          If we ever decide to implement minimal, privacy-friendly analytics (such as counting total page views) 
          or change our data practices, we will update this policy and explicitly state the changes here.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or how your data is handled, 
          please contact us at <strong>contact@monoverse.pub</strong>.
        </p>
      </div>
    </div>
  );
}
