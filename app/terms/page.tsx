import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Monoverse terms of service and intellectual property guidelines.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-24 pb-32">
      <header className="mb-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
          Terms of Service
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
          Welcome to Monoverse. By accessing or using this website, you agree to be bound by these Terms of Service. 
          If you do not agree with any part of these terms, please do not use our website.
        </p>

        <h2>1. Intellectual Property Rights</h2>
        <p>
          All content published on Monoverse—including but not limited to essays, research articles, text, original graphics, 
          and site design—is the exclusive intellectual property of Monoverse and its respective authors, protected by 
          international copyright laws.
        </p>
        <ul>
          <li>You may read, share, and link to our content for personal, non-commercial use.</li>
          <li>You may quote brief excerpts of our articles (up to 150 words) provided you give clear attribution and link back to the original article on Monoverse.</li>
          <li>You may <strong>not</strong> scrape, scrape, republish, reproduce, or distribute full articles without explicit, written permission from Monoverse.</li>
          <li>You may <strong>not</strong> use our content to train artificial intelligence models without our explicit consent.</li>
        </ul>

        <h2>2. Disclaimer of Warranties</h2>
        <p>
          The content on Monoverse is provided for educational and intellectual exploration purposes only. While we strive 
          for accuracy and rigorous research, the ideas and arguments presented are those of the authors. Monoverse makes 
          no guarantees regarding the absolute accuracy, completeness, or timeliness of the information provided.
        </p>

        <h2>3. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Monoverse and its creators shall not be liable for any direct, indirect, 
          incidental, or consequential damages resulting from your use of this website, or your reliance on any information 
          published here. You consume and apply the ideas presented on this site entirely at your own risk.
        </p>

        <h2>4. User Conduct</h2>
        <p>
          When interacting with Monoverse (e.g., subscribing to the newsletter or sharing our content), you agree to do so 
          lawfully and respectfully. You must not attempt to compromise the site's security, interfere with its operation, 
          or extract data through automated scraping mechanisms.
        </p>

        <h2>5. Changes to These Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon 
          posting to this page, with the "Last updated" date revised accordingly. Your continued use of the site following 
          the posting of revised terms constitutes your acceptance of those changes.
        </p>

        <h2>6. Contact</h2>
        <p>
          If you have any questions regarding these Terms of Service, or if you would like to request permission to republish 
          our content, please contact us at <strong>contact@monoverse.pub</strong>.
        </p>
      </div>
    </div>
  );
}
