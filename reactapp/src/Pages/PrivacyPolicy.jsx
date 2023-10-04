import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="page-title">Privacy Policy</h1>
      <p>Last updated: 23/09/2023</p>

      <section>
        <h2 className="section-heading">1. Information We Collect</h2>

        <strong>1.1 Information You Provide</strong>
        <p>
          When you register for an account on our platform, we may collect your
          name, email address, password, and other optional information you
          choose to provide.
        </p>
        <p>
          Artisans may create a profile that includes their brand information,
          product listings, images, descriptions, pricing, and shipping details.
        </p>
        <p>
          Customers may provide shipping information and payment details during
          the checkout process.
        </p>

        <strong>1.2 Information Automatically Collected</strong>
        <p>
          We may collect information about your device and how you interact with
          our Service, such as your IP address, browser type, and operating
          system.
        </p>
        <p>
          We may use cookies and similar tracking technologies to collect data
          about your browsing behavior and preferences. You can manage your
          cookie preferences through your browser settings.
        </p>
      </section>

      <section>
        <h2 className="section-heading">2. How We Use Your Information</h2>
        <p>We use your personal information for the following purposes:</p>
        <ul>
          <li>To provide and maintain the Service.</li>
          <li>To process and fulfill orders, including payment processing.</li>
          <li>
            To communicate with you, respond to your inquiries, and provide
            customer support.
          </li>
          <li>To personalize and improve your experience on our platform.</li>
          <li>
            To send you marketing communications, promotions, and updates with
            your consent.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="section-heading">3. How We Share Your Information</h2>
        <p>
          We may share your personal information with the following parties:
        </p>
        <ul>
          <li>
            With artisans and customers to facilitate transactions and
            communications on our platform.
          </li>
          <li>
            With service providers who assist us in delivering the Service,
            including payment processors, shipping partners, and marketing
            service providers.
          </li>
          <li>
            With legal authorities if required by law or to protect our rights
            and safety.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="section-heading">4. Your Rights and Choices</h2>
        <p>
          You have the following rights regarding your personal information:
        </p>
        <ul>
          <li>
            Access: You can request access to your personal data and information
            about how it is processed.
          </li>
          <li>
            Rectification: You can request that inaccuracies in your personal
            information be corrected.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="section-heading">5. Security</h2>
        <p>
          We take appropriate measures to protect your personal information, but
          no method of transmission over the internet or electronic storage is
          entirely secure. We cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2 className="section-heading">6. Changes to this Privacy Policy</h2>
        <p>
          We may update this Privacy Policy to reflect changes in our practices
          or for other operational, legal, or regulatory reasons. We will notify
          you of any changes by posting the updated Privacy Policy on our
          website or within the application.
        </p>
      </section>

      <section>
        <h2 className="section-heading">7. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or our data practices, please contact us at
          shophomemade@gmail.com.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
