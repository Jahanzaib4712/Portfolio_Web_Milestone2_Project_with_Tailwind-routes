export default function PrivacyPolicy() {
    return (
        <div style={{
            backgroundColor: '#1e1e1e', 
            color: '#ffffff', 
            padding: '40px', 
            maxWidth: '800px', 
            margin: '0 auto',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
        }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '20px', textAlign: 'center', color: '#f0e68c' }}>
                Privacy Policy
            </h1>
            <p style={{ lineHeight: '1.6', fontSize: '1rem', marginBottom: '15px' }}>
                We value your privacy and are committed to protecting your personal information. This policy outlines 
                how we collect, use, and safeguard the data you provide to us through this website.
            </p>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#f0e68c' }}>Information Collection</h2>
            <p style={{ lineHeight: '1.6', fontSize: '1rem', marginBottom: '15px' }}>
                We may collect personal information, such as your name, email address, and any other information you 
                choose to provide through forms or other means on our website.
            </p>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#f0e68c' }}>Data Usage</h2>
            <p style={{ lineHeight: '1.6', fontSize: '1rem', marginBottom: '15px' }}>
                The information we collect is used solely for communication and providing better services. We do not 
                sell or share your data with third parties without your consent.
            </p>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#f0e68c' }}>Your Rights</h2>
            <p style={{ lineHeight: '1.6', fontSize: '1rem', marginBottom: '15px' }}>
                You have the right to request access to the data we hold about you, as well as to request the 
                modification or deletion of your information at any time.
            </p>
            <p style={{ lineHeight: '1.6', fontSize: '1rem' }}>
                For more information, please feel free to contact us. Thank you for visiting our website.
            </p>
        </div>
    );
}