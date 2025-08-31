import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
const Privacy = () => {
  const { i18n } = useTranslation();
  const imagebyLanguage = () => {
    switch (i18n.language) {
      case "az":
        return "/img/privacy.png";
      case "en":
        return "/img/privacy-eng.png";
      case "ru":
        return "/img/privacy-rus.png";
    }
  };

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <img
        src={imagebyLanguage()}
        alt="privacy"
        className={`ml-[4%] mt-[16px] h-[35px] ${
          scrollY >= 103 ? "mt-[127px]" : ""
        }`}
      />
      <div className="flex justify-center px-[10px] py-[10px] slide-in">
        <div className="py-[20px] max-w-[1140px] mb-[15px] text-[#757575]">
          <p>
            This site is owned by HiTech Prime Private Limited. This Privacy
            Policy is designed to tell you about our practices regarding
            collection, use, and disclosure of information that you may provide
            via this site. Please be sure to read this entire Privacy Policy
            before using or submitting information to this site.
          </p>

          <p className="font-[700] text-[#716b6b]">Consent:</p>
          <p>
            By using this site, you agree to the terms of this Privacy Policy.
            Whenever you submit information via this site, you consent to the
            collection, use, preserving/storing and disclosure of the
            information in accordance with this Privacy Policy.
          </p>
          <p>
            Except as otherwise stated, we may use information collected via
            this site to improve the content of our site, to customize the site
            to your preferences, to communicate information to you (if you have
            requested it), and for any other purpose specified. Domino’s Pizza
            may use the personal information that you submit to store and
            process that information in order to provide goods and services.
          </p>

          <p>
            Generally, we may use your personal information in the ways in which
            you would expect, including but not limited to any of the following
            purposes:
          </p>

          <ul className="list-disc ml-10 space-y-1">
            <li>To process any job application you may submit</li>
            <li>
              To provide you with any restaurant or promotion information you
              may request
            </li>
            <li>To process any online ordering</li>
            <li>
              To determine the number of visitors to our websites and conduct
              reviews of our sites
            </li>
            <li>To fulfill prizes, awards and purchases</li>
            <li>To respond to specific requests from visitors</li>
            <li>To subscribe to our mailing list</li>
            <li>To keep you informed about any changes to our websites</li>
            <li>To submit website feedback</li>
            <li>To conduct marketing research</li>
            <li>
              To occasionally send you offers or information on products or
              services that we consider will be of interest to you
            </li>
          </ul>

          <p>
            When using the Domino's Pizza internet ordering system, additional
            information is collected when you order a pizza online. This
            information assists in the delivery to your door and to verify your
            credit card payment. The internet order system also stores
            information about your order to help you remember and re-order the
            same menu in future.
          </p>

          <p className="font-[700] text-[#716b6b]">Card Details:</p>
          <p>Domino’s Pizza does not store any of your credit card details.</p>

          <p className="font-[700] text-[#716b6b]">Third Party Disclosure:</p>
          <p>
            Domino’s Pizza may share statistics and personal information between
            themselves and with companies that are related to Domino’s Pizza
            including our international branches. Personal information that you
            submit to Domino’s Pizza may be disclosed to a third party, such as:
          </p>

          <ul className="list-disc ml-10 space-y-1">
            <li>
              If you have provided your express consent to share the
              information.
            </li>
            <li>
              If Domino’s Pizza is required or authorized by law to disclose the
              information.
            </li>
            <li>
              If your personal information is collected in connection with a
              joint promoter, to that joint promoter for marketing and research
              purposes.
            </li>
            <li>
              If Domino’s Pizza feels you might like to know about a third
              party's goods and services, we may supply that personal
              information to that third party. Or if you place an order via our
              internet order system, your details will be passed on to Azericard
              LLC, who receive your credit card details for internet order
              payment. Azericard is a secure internet payment gateway that
              secures your credit card number during transmission. Azericard is
              completely certified by International Payment Systems: MasterCard,
              Visa, American Express, Diners Club, UnionPay, and JCB. See:{" "}
              <a
                href="https://www.azericard.com/"
                className="text-blue-700 "
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.azericard.com/
              </a>{" "}
              for further details.
            </li>
          </ul>

          <p className="font-[700] text-[#716b6b]">
            Access, Accuracy and Security:
          </p>
          <p>
            Domino’s Pizza will take reasonable steps to ensure that the
            personal information collected is accurate, complete, and
            up-to-date.
          </p>

          <p className="font-[700] bg-[#0078ac] py-[5px] pl-[20px] pr-[8px] mb-[12px] text-[28px]  mt-[34px] text-white">
            INFORMATION COLLECTION
          </p>
          <p className="font-[700] text-[#716b6b]">Information You Provide:</p>
          <p>
            Domino's Pizza collects information you provide directly via the
            Website and Applications. The information we collect includes
            information that identifies, relates to, describes, is reasonably
            capable of being associated with, or could reasonably be linked,
            directly or indirectly, to you.
          </p>

          <ul className="list-disc ml-10 space-y-1">
            <li>
              <span className="font-[700] text-[#716b6b]">Contact Data:</span>{" "}
              We collect your first and last name, postal address, email
              address, mobile number, birth date, and gender.
            </li>
            <li>
              <span className="font-[700] text-[#716b6b]">
                Account Credentials:
              </span>{" "}
              We employ one-time password (OTP) provided by an SMS provider
              company which is used for authentication and account access. The
              OTP is not kept by Domino’s Pizza.
            </li>
            <li>
              <span className="font-[700] text-[#716b6b]">Payment Data:</span>{" "}
              If you place an order via our internet order system, your details
              will be passed on to Azericard LLC, who receive your credit card
              details for internet order payment. Azericard is a secure internet
              payment gateway that secures your credit card number during
              transmission.
            </li>
            <li>
              <span className="font-[700] text-[#716b6b]">
                Order Information:
              </span>{" "}
              We collect information about your orders and food choices.
            </li>
            <li>
              <span className="font-[700] text-[#716b6b]">Profile Data:</span>{" "}
              We collect your interests, favorites, and preferences.
            </li>
            <li>
              <span className="font-[700] text-[#716b6b]">Content:</span> We
              collect the content of messages you send to us, such as feedback
              and product reviews you may write, or questions and information
              you provide to customer support.
            </li>
            <li>
              <span className="font-[700] text-[#716b6b]">Applicant Data:</span>{" "}
              We collect data as necessary to consider you for a job opening if
              you submit an application to us, including your employment and
              education history, transcript, writing samples, and references.
            </li>
          </ul>
          <p>
            We collect information you provide at various points of the Web
            Sites and Applications, such as the following:
          </p>

          <ul className="list-disc ml-10 space-y-2">
            <li>
              <span className="font-[700] text-[#716b6b]">Payment Data:</span>{" "}
              If you place an order via our internet order system, your details
              will be passed on to Azericard LLC, who receive your credit card
              details for internet order payment. Azericard is a secure internet
              payment gateway that secures your credit card number during
              transmission.
            </li>
            <li>
              <span className="font-[700] text-[#716b6b]">Online Orders:</span>{" "}
              You can place an online order for carryout or delivery through
              your registered account. If you place a carryout order, you will
              need to provide your first name and mobile number, and order
              information. If you pay online, you will also need to provide your
              payment data. If you place an order for delivery, you will also
              need to provide your postal address in addition to the information
              above.
            </li>
            <li>
              <span className="font-[700] text-[#716b6b]">
                Rewards Programs:
              </span>{" "}
              We may offer rewards programs, sweepstakes, contests, surveys, or
              other promotions ("Promotions") through our Websites or
              Applications. In order to participate in a Promotion, you may be
              required to register an account and/or provide contact data,
              profile data, and other information.
            </li>
            <li>
              <span className="font-[700] text-[#716b6b]">
                Other Transactions:
              </span>{" "}
              We may offer you other opportunities to transact with us through
              the Web Sites or Applications. If you conduct transactions through
              the Web Sites or Applications, we will collect information you
              provide directly about the transactions you engage in while on the
              Web Sites or Applications (including any data gathered through the
              Application while located in a Domino's Pizza store and when you
              speak to and use voice ordering services). This information may
              include payment and billing information as well as the nature,
              quantity and price of the goods or services you exchange,
              transcripts of any words that you speak while using voice ordering
              services, and the individuals or entities with whom you
              communicate or transact business.
            </li>
            <li>
              <span className="font-[700] text-[#716b6b]">
                Email and other voluntary communications:
              </span>{" "}
              You may also choose to communicate with us through email, via the
              Web Sites, via the Applications (including through voice ordering
              services), or through other means. Such communications may be in
              connection with our customer service efforts, your questions, or
              for other purposes. We collect the information in these
              communications, and such information may include information that
              personally identifies you.
            </li>
            <li>
              <span className="font-[700] text-[#716b6b]">
                Information Collected Automatically:
              </span>{" "}
              When you visit the Web Sites or Applications (including when you
              use the Applications in a Domino's Pizza store), we automatically
              collect information about your device and how your device
              interacts with our Web Sites or Applications.
            </li>
          </ul>
          <p>
            The categories of information we have collected about you include
            the following:
          </p>

          <ul className="list-disc ml-10 space-y-2">
            <li>
              <span className="font-[700] text-[#716b6b]">
                Service Use Data:
              </span>{" "}
              We collect data about the features you use, the emails and
              advertisements you view, the products you consider and purchase,
              the date and time you access the Web Sites or Applications, the
              pages you access while using the Web Sites or Applications, and
              the internet address of the websites, if any, from which you
              linked directly to the Web Sites or Applications, and other
              similar information.
            </li>
            <li>
              <span className="font-[700] text-[#716b6b]">
                Device Connectivity and Configuration Data:
              </span>{" "}
              We collect data about the type of device you use, the operating
              system and browser you use, your internet service provider, your
              device's regional and language settings, and other similar
              information. This data also includes IP address, MAC address,
              device advertising ID (e.g., IDFA or AAID), and other device
              identifiers.
            </li>
            <li>
              <span className="font-[700] text-[#716b6b]">
                Rider Application Data:
              </span>{" "}
              If you are a Driver, we collect data about your use of the
              Domino’s Rider Application, such as the time you log in and out of
              the Application, delivery updates, and customer service
              information such as the time it takes a Driver to leave the store
              for a delivery and enter the store after a delivery.
            </li>
            <li>
              <span className="font-[700] text-[#716b6b]">Location Data:</span>{" "}
              We collect data about your device's location, which can be precise
              (e.g., latitude/longitude data) or imprecise (e.g., location
              derived from an IP address or data that indicates a city or postal
              code level).
            </li>
          </ul>

          <p>
            A Domino’s Pizza application may seek to activate location tracking
            services on your smart device. This function may result in your
            location being used for purposes such as:
          </p>

          <ul className="list-disc ml-10 space-y-2">
            <li>Marketing (i.e. a nearby store sending you a special deal).</li>
            <li>Identification of your closest Domino’s store.</li>
            <li>
              Identification of your delivery address during placing an order.
            </li>
          </ul>
          <p>
            We may install GPS trackers in delivery vehicles in order to monitor
            the progress of order deliveries and to ensure safety. In connection
            with a tracked order delivery, a GPS driver tracker page may be
            available in order to track your order in real time.
          </p>
          <p>
            We use cookies and other tracking technologies now and hereafter
            developed to automatically collect this information, including the
            following:
          </p>

          <ul className="list-disc ml-10 space-y-2">
            <li>
              <span className="font-[700] text-[#716b6b]">Log Files:</span> A
              log file is a file that records events that occur in connection
              with your use of the Web Sites and Applications, such as IP
              address, browser type, internet service provider, referring/exit
              pages, operating system, date/time stamps, and related data.
            </li>
            <li>
              <span className="font-[700] text-[#716b6b]">Cookies:</span>{" "}
              Domino's Pizza servers, or the servers of other entities, may
              place a "cookie" on your device, store data in your device's
              browser or access pre-existing removable tracking features on your
              device in order to allow you to use the Web Sites and Applications
              and to personalize your experience. A "cookie" is a small piece of
              data that can be sent by a web server to your device, which then
              may be stored by your browser on your device's hard drive. Cookies
              and browser storage allow us to recognize your device while you
              are on our Web Sites and Applications and help customize your
              online experience and support security features. Cookies and
              browser storage are also useful in allowing more efficient log-in
              for users, tracking transaction histories and preserving
              information between sessions. The information collected from
              cookies and browser storage may also be used to improve the
              functionality of the Web Sites and Applications, analyze your use
              of the Web Sites and Applications, or bring you advertising. Types
              of cookies and tags on our Web Sites and Applications include:
              <ul className="list-disc ml-8 mt-2 space-y-1">
                <li>
                  <span className="font-[700]">Functionality:</span> Used to
                  remember your preferences and for facilitating transactions
                  such as purchases.
                </li>
                <li>
                  <span className="font-[700]">Performance or Analytics:</span>{" "}
                  Used to measure site activity to improve user experience.
                </li>
                <li>
                  <span className="font-[700]">Targeting:</span> Used to display
                  information and offers that specifically interest you.
                </li>
              </ul>
              With most Internet Browsers, you can erase Cookies from your
              computer hard drive, block all Cookies, or receive a warning
              before a Cookie is stored. If you want to do this, refer to your
              Browser instructions or help screen to learn more. If you disable
              all cookies, you may be able to take advantage of all the features
              of our sites.
            </li>
            <li>
              <span className="font-[700] text-[#716b6b]">Local Storage:</span>{" "}
              We use Local Storage, such as HTML5 storage, to store information
              related to whether the user has chosen to "Remain Logged In" as
              well as tokens if other services are used. Various browsers may
              offer their own management tools for removing HTML5 Local Storage.
            </li>
          </ul>
          <p className="font-[700] bg-[#0078ac] py-[5px] pl-[20px] pr-[8px] mb-[12px] mt-[34px] text-[28px] text-white">
            INFORMATION USE
          </p>
          <p>
            Domino's Pizza collects and uses information for business and
            commercial purposes in accordance with the practices described in
            this Privacy Policy. Our business purposes for collecting and using
            information include the following:
          </p>
          <ul className="list-disc ml-10 space-y-2">
            <li>
              Operating and managing our Web Sites and Applications, such as
              providing you with products, services, and Promotions, opening,
              maintaining, administering and servicing users' accounts or
              memberships.
            </li>
            <li>
              Performing services requested by you, such as responding to your
              comments and requests, processing, servicing or enforcing
              transactions and sending related communications; maintaining the
              security and integrity of our systems, and preventing and
              addressing fraud, unlawful access, and breach of our policies and
              terms.
            </li>
            <li>
              Sending you technical notices, updates, security alerts,
              information about our policy changes and administrative messages.
            </li>
            <li>
              Analyzing trends and usage, such as the efficiency of deliveries
              and store operations.
            </li>
            <li>To fulfill prizes, awards and purchases.</li>
            <li>Helping to establish and verify the identity of users.</li>
            <li>
              Improving our Web Sites, Applications, stores, advertisements,
              products, Promotions and services.
            </li>
            <li>
              Sending you promotional newsletters, offers, advertisements and
              marketing communications and other information about Domino's
              Pizza and its affiliates.
            </li>
            <li>
              Sending and serving you advertising; and fulfilling any other
              business or commercial purposes at your direction or with your
              consent.
            </li>
          </ul>
          <p>
            You can access and request correction of any personal information
            concerning you at any time. You may also request that your personal
            information be deleted at any time. Any such requests should be made
            directly by contacting us. Domino’s Pizza will take reasonable steps
            to protect personal information from misuse, loss and unauthorized
            access, modification or disclosure.
          </p>
          <span className="font-[700] text-[#716b6b]">
            Sensitive Information:
          </span>
          <p>
            Domino’s Pizza will not collect, use or disclose sensitive
            information except with your specific consent.
          </p>
          <span className="font-[700] text-[#716b6b]">Click stream Data:</span>
          <p>
            Each time you visit the Domino’s Pizza site our server collects some
            anonymous information, known as click-stream data, including the
            type of browser and system you are using, the address of the site
            you have come from and move to after your visit, the date and time
            of your visit, and your server's IP address. Domino’s Pizza may
            collect this information for statistical purposes to find out how
            the websites is used and navigated, including the number of hits,
            the frequency and duration of visits, most popular session times.
            Domino’s Pizza may use this information to evaluate and improve the
            Domino’s Pizza websites.
          </p>
          <span className="font-[700] text-[#716b6b]">Analytics:</span>
          <p>
            We may use third-party Service providers to monitor and analyze the
            use of our Service.
          </p>
          <span className="font-[700] text-[#716b6b]">Google Analytics:</span>
          <p>
            Google Analytics is a web analytics service offered by Google that
            tracks and reports website traffic. Google uses the data collected
            to track and monitor the use of our Service. This data is shared
            with other Google services. Google may use the collected data to
            contextualize and personalize the ads of its own advertising
            network. You may opt-out of certain Google Analytics features
            through your mobile device settings, such as your device advertising
            settings or by following the instructions provided by Google in
            their Privacy Policy:{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-blue-700 "
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy
            </a>
            .
          </p>
          <span className="font-[700] text-[#716b6b]">Advertising:</span>
          <p>
            We may use Service providers to show advertisements to You to help
            support and maintain Our Service.
          </p>
          <span className="font-[700] text-[#716b6b]">
            Google AdSense & DoubleClick Cookie:
          </span>
          <p>
            Google, as a third party vendor, uses cookies to serve ads on our
            Service. Google's use of the DoubleClick cookie enables it and its
            partners to serve ads to our users based on their visit to our
            Service or other websites on the Internet. You may opt out of the
            use of the DoubleClick Cookie for interest-based advertising by
            visiting the Google Ads Settings web page:{" "}
            <a
              href="http://www.google.com/ads/preferences/"
              className="text-blue-700 "
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.google.com/ads/preferences/
            </a>
            .
          </p>
          <span className="font-[700] text-[#716b6b]">AdMob by Google:</span>
          <p>
            AdMob by Google is provided by Google Inc. You can opt-out from the
            AdMob by Google service by following the instructions described by
            Google:{" "}
            <a
              href="https://support.google.com/ads/answer/2662922?hl=en"
              className="text-blue-700 "
              target="_blank"
              rel="noopener noreferrer"
            >
              https://support.google.com/ads/answer/2662922?hl=en
            </a>
            . For more information on how Google uses the collected information,
            please visit the "How Google uses data when you use our partners'
            sites or app" page:{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className="text-blue-700 "
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/technologies/partner-sites
            </a>{" "}
            or visit the Privacy Policy of Google:{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-blue-700 "
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy
            </a>
            .
          </p>
          <span className="font-[700] text-[#716b6b]">
            Behavioral Remarketing:
          </span>
          <p>
            The Company uses remarketing services to advertise on third party
            websites to You after You visited our Service. We and Our
            third-party vendors use cookies to inform, optimize and serve ads
            based on Your past visits to our Service.
          </p>
          <span className="font-[700] text-[#716b6b]">
            Google Ads (AdWords):
          </span>
          <p>
            Google Ads (AdWords) remarketing service is provided by Google Inc.
            You can opt-out of Google Analytics for Display Advertising and
            customize the Google Display Network ads by visiting the Google Ads
            Settings page:{" "}
            <a
              href="http://www.google.com/settings/ads"
              className="text-blue-700 "
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.google.com/settings/ads
            </a>
            . Google also recommends installing the Google Analytics Opt-out
            Browser Add-on -{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              className="text-blue-700 "
              target="_blank"
              rel="noopener noreferrer"
            >
              https://tools.google.com/dlpage/gaoptout
            </a>{" "}
            - for your web browser. Google Analytics Opt-out Browser Add-on
            provides visitors with the ability to prevent their data from being
            collected and used by Google Analytics. For more information on the
            privacy practices of Google, please visit the Google Privacy & Terms
            web page:{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-blue-700 "
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy
            </a>
            .
          </p>
          <span className="font-[700] text-[#716b6b]">Facebook:</span>
          <p>
            Facebook remarketing service is provided by Facebook Inc. You can
            learn more about interest-based advertising from Facebook by
            visiting this page:{" "}
            <a
              href="https://www.facebook.com/help/516147308587266"
              className="text-blue-700 "
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/help/516147308587266
            </a>
            . To opt-out from Facebook's interest-based ads, follow these
            instructions from Facebook:{" "}
            <a
              href="https://www.facebook.com/help/568137493302217"
              className="text-blue-700 "
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/help/568137493302217
            </a>
            .
          </p>
          <span className="font-[700]">Changes:</span>
          <p>
            If this Privacy Policy is changed, the revised policy will be posted
            on this site. Please check back periodically, and especially before
            you provide any personally identifiable information. This Privacy
            Policy was last updated on Oct 15, 2020.
          </p>
        </div>
      </div>
    </>
  );
};
export default Privacy;
