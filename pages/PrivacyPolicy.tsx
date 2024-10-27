// pages/privacy.tsx

import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <Head>
        <title>Privacy Policy - My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-5xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
      <p className="text-lg text-gray-600 mb-4">
        At My Portfolio, we respect your privacy and are committed to protecting your personal information. 
        This policy outlines our practices regarding the collection, use, and disclosure of your information.
      </p>
      <h2 className="text-3xl font-semibold text-gray-800 mt-4 mb-2">Information We Collect</h2>
      <p className="text-lg text-gray-600 mb-4">
        We may collect personal information such as your name and email address when you contact us or subscribe to our newsletter.
      </p>
      <h2 className="text-3xl font-semibold text-gray-800 mt-4 mb-2">How We Use Your Information</h2>
      <p className="text-lg text-gray-600 mb-4">
        Your information is used to improve our services, respond to inquiries, and send periodic updates.
      </p>
      <h2 className="text-3xl font-semibold text-gray-800 mt-4 mb-2">Protection of Your Information</h2>
      <p className="text-lg text-gray-600 mb-4">
        We implement various security measures to maintain the safety of your personal information.
      </p>
      <a href="/" className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
        Back to Home
      </a>
    </div>
  );
};

export default PrivacyPolicy;
