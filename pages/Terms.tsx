// pages/terms.js
export default function Terms() {
    return (
        <div style={{
        backgroundColor: '#1e1e1e', 
        color: '#ffffff', 
        padding: '40px', 
        maxWidth: '800px', 
        margin: '0 auto',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '20px', textAlign: 'center', color: '#f0e68c' }} >Terms & Conditions</h1>
            <p>
                Welcome to my portfolio website. By accessing and using this website, 
                you agree to comply with the following terms and conditions.
            </p>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#f0e68c' }} >Usage</h2>
            <p style={{ lineHeight: '1.6', fontSize: '1rem', marginBottom: '15px' }}>
                The content of this website is for your general information and personal use only. 
                It is subject to change without notice.
            </p>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#f0e68c' }}>Intellectual Property</h2>
            <p style={{ lineHeight: '1.6', fontSize: '1rem', marginBottom: '15px' }}>
                All content, images, and projects on this website are the intellectual property of the owner 
                unless otherwise stated. Unauthorized use of these materials is prohibited.
            </p>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#f0e68c' }}>Privacy</h2>
            <p style={{ lineHeight: '1.6', fontSize: '1rem', marginBottom: '15px' }}>
                Your privacy is important. Any personal information shared through this website will be treated 
                with confidentiality and used solely for communication purposes.
            </p>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#f0e68c' }}>Changes to Terms</h2>
            <p style={{ lineHeight: '1.6', fontSize: '1rem', marginBottom: '15px' }}>
                The owner reserves the right to modify these terms at any time. Please review this page periodically 
                for updates.
            </p>
        </div>
    );
}
