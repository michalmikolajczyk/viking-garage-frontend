import * as React from 'react';
import { Link } from 'react-router';
import AppBar from '../AppBar';

export default function Privacy(props) {
  return (
    <div>
      <AppBar refresh={props.refresh} />
      <div className="privacy">
        <div className="title">Introduction</div>
        <p>
          VIKING GARAGE (“Company” or ”We”) respect your privacy and are committed to protecting it through our compliance with this policy.
          <br />
          This policy describes the types of information we may collect from you or that you may provide when you visit the website vikinggarage.com (our “Website”) and our practices for collecting, using, maintaining, protecting and disclosing that information.
          <br />
          This policy applies to information we collect on this Website, in e-mail, text and other electronic messages between you and this Website and, through mobile and desktop applications you download from this Website, which provide dedicated non-browser-based interaction between you and this Website. It does not apply to information collected by us offline or through any other means, including on any other website operated by Company or any third party; or any third party, including through any application or content (including advertising) that may link to or be accessible from the Website.
          <br />
          Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our Website. By accessing or using this Website, you agree to this privacy policy. This policy may change from time to time. Your continued use of this Website after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates.
        </p>
        <div className="title">Age restrictions</div>
        <p>
          Our Website is not intended for children under 13 years of age. No one under age 13 may provide any personal information to the Website. We do not knowingly collect personal information from children under 13. If you are under 13, do not use or provide any information on this Website or on or through any of its features/register on the Website, make any purchases through the Website, use any of the interactive or public comment features of this Website or provide any information about yourself to us, including your name, address, telephone number, e-mail address or any screen name or user name you may use. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 13, please contact us at info@vikinggarage.com
        </p>
        <div className="title">Information We Collect About You and How We Collect It</div>
        <p>
          We collect several types of information from and about users of our Website, including information:
        </p>
        <ul>
          <li>
            by which you may be personally identified, such as name, postal address, e-mail address, telephone number or ANY OTHER INFORMATION THE WEBSITE COLLECTS THAT IS DEFINED AS PERSONAL OR PERSONALLY IDENTIFIABLE INFORMATION UNDER AN APPLICABLE LAW/any other identifier by which you may be contacted online or offline (“personal information”); and/or
          </li>
          <li>
            about your internet connection, the equipment you use to access our Website, and usage details.
          </li>
        </ul>
        <p>
          We collect this information:
        </p>
        <ul>
          <li>
            Directly from you when you provide it to us.
          </li>
          <li>
            Automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses and information collected through cookies, and other tracking technologies.
          </li>
        </ul>
        <p>
          Information You Provide to Us. The information we collect on or through our Website may include:
        </p>
        <ul>
          <li>
            Information that you provide by filling in forms on our Website. This includes information provided at the time of registering to use our Website, subscribing to our service, or requesting further services. We may also ask you for information when you enter a contest or promotion sponsored by us, and when you report a problem with our Website.
          </li>
          <li>
            Records and copies of your correspondence (including e-mail addresses), if you contact us.
          </li>
          <li>
            Your responses to surveys that we might ask you to complete for research purposes.
          </li>
          <li>
            Details of transactions you carry out through our Website and of the fulfillment of your orders. You may be required to provide financial information before placing an order through our Website.
          </li>
        </ul>
        <p>
          You also may provide information to be published or displayed (hereinafter, “posted”) on public areas of the Website, or transmitted to other users of the Website or third parties (collectively, “User Contributions”). Your User Contributions are posted on and transmitted to others at your own risk. Although we limit access to certain pages, please be aware that no security measures are perfect or impenetrable. Additionally, we cannot control the actions of other users of the Website with whom you may choose to share your User Contributions. Therefore, we cannot and do not guarantee that your User Contributions will not be viewed by unauthorized persons.
          <br />
          Information We Collect Through Automatic Data Collection Technologies. As you navigate through and interact with our Website, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions and patterns, including:
        </p>
        <ul>
          <li>
            Details of your visits to our Website, including traffic data, location data, logs, and other communication data and the resources that you access and use on the Website.
          </li>
          <li>
            Information about your computer and internet connection, including your IP address, operating system and browser type.
          </li>
        </ul>
        <p>
          The technologies we use for this automatic data collection may include:
        </p>
        <ul>
          <li>
            Cookies (or browser cookies). A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to access certain parts of our Website. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Website.
          </li>
          <li>
            Flash Cookies. Certain features of our Website may use local stored objects (or Flash cookies) to collect and store information about your preferences and navigation to, from and on our Website. Flash cookies are not managed by the same browser settings as are used for browser cookies.
          </li>
        </ul>
        <div className="title">How We Use Your Information</div>
        <p>
          We use information that we collect about you or that you provide to us, including any personal information:
        </p>
        <ul>
          <li>
            To present our Website and its contents to you.
          </li>
          <li>
            To provide you with information, products or services that you request from us.
          </li>
          <li>
            To fulfill any other purpose for which you provide it.
          </li>
          <li>
            To provide you with notices about your account/subscription, including expiration and renewal notices.
          </li>
          <li>
            To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.
          </li>
          <li>
            To notify you about changes to our Website or any products or services we offer or provide though it.
          </li>
          <li>
            To allow you to participate in interactive features on our Website.
          </li>
          <li>
            In any other way we may describe when you provide the information.
          </li>
          <li>
            For any other purpose with your consent.
          </li>
        </ul>
        <div className="title">Disclosure of Your Information</div>
        <p>
          We may disclose aggregated information about our users, and information that does not identify any individual, without restriction.
          <br />
          We may disclose personal information that we collect or you provide as described in this privacy policy:
        </p>
        <ul>
          <li>
            To contractors, service providers and other third parties we use to support our business and who are bound by contractual obligations to keep personal information confidential and use it only for the purposes for which we disclose it to them.
          </li>
          <li>
            To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution or other sale or transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation or similar proceeding, in which personal information held by us about our Website users is among the assets transferred.
          </li>
          <li>
            To fulfill the purpose for which you provide it.
          </li>
          <li>
            For any other purpose disclosed by us when you provide the information.
          </li>
          <li>
            With your consent.
          </li>
        </ul>
        <p>
          We may also disclose your personal information:
        </p>
        <ul>
          <li>
            To comply with any court order, law or legal process, including to respond to any government or regulatory request.
          </li>
          <li>
            To enforce or apply our terms of use or terms of sale and other agreements, including for billing and collection purposes.
          </li>
          <li>
            If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of VIKING GARAGE, our customers or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction.
          </li>
        </ul>
        <p>
          We will not, under any circumstances, sell your personal information.
        </p>
        <div className="title">Choices About How We Use and Disclose Your Information</div>
        <p>
          We strive to provide you with choices regarding the personal information you provide to us. We have created mechanisms to provide you with the following control over your information:
        </p>
        <ul>
          <li>
            Tracking Technologies and Advertising. You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. To learn how you can manage your Flash cookie settings, visit the Flash player settings page on Adobe’s website. If you disable or refuse cookies, please note that some parts of this site may then be inaccessible or not function properly.
          </li>
          <li>
            Promotional Offers from the Company. If you do not wish to have your e-mail address/contact information used by the Company to promote the Company’s products or services, you can opt-out by clicking on the Unsubscribe link at the bottom of every email. This opt out does not apply to information provided to the Company as a result of a product purchase, warranty registration, product service experience or other transactions.
          </li>
        </ul>
        <div className="title">Accessing and Correcting Your Information</div>
        <p>
          You can review and change your personal information by logging into the Website and visiting your account profile page.
        </p>
        <div className="title">Changes to Our Privacy Policy</div>
        <p>
          It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users’ personal information, we will notify you by e-mail to the primary e-mail address specified in your account. The date the privacy policy was last revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date active and deliverable e-mail address for you, and for periodically visiting our Website and this privacy policy to check for any changes.
        </p>
        <div className="title">Contact Information</div>
        <p>
          To ask questions or comment about this privacy policy and our privacy practices, contact us at: info@vikinggarage.com
        </p>
      </div>
    </div>
  );
}
