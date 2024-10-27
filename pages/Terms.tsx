// pages/terms.tsx

import Head from 'next/head';

const TermsOfService = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <Head>
        <title>Terms of Service - My Portfolio</title>
      </Head>
      <h1 className="text-5xl font-bold text-gray-800 mb-6">Terms of Service</h1>
      <p className="text-lg text-gray-600 mb-4">
        Welcome to My Portfolio. By accessing our website, you agree to comply with the following terms and conditions.
      </p>
      <h2 className="text-3xl font-semibold text-gray-800 mt-4 mb-2">User Responsibilities</h2>
      <p className="text-lg text-gray-600 mb-4">
        Users are responsible for maintaining the confidentiality of their account details and for all activities that occur under their account.
      </p>
      <h2 className="text-3xl font-semibold text-gray-800 mt-4 mb-2">Limitations of Liability</h2>
      <p className="text-lg text-gray-600 mb-4">
        We will not be liable for any losses or damages arising from your use of our services.
      </p>
      <h2 className="text-3xl font-semibold text-gray-800 mt-4 mb-2">Changes to Terms</h2>
      <p className="text-lg text-gray-600 mb-4">
        We reserve the right to modify these terms at any time. Please check this page periodically for changes.
      </p>
      <a href="/" className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
        Back to Home
      </a>
    </div>
  );
};

export default TermsOfService;
