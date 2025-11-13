import React from 'react';

// SVG components for each client logo
const CarlsbergLogo: React.FC = () => (
    <svg role="img" viewBox="0 0 150 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="serif" fontSize="24" fontWeight="bold">Carlsberg</text>
    </svg>
);

const AzureLogo: React.FC = () => (
    <svg role="img" viewBox="0 0 110 30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <path d="M16.992 6.243l-9.534 16.514h-5.917l15.451-22.757 15.451 22.757h-5.917l-9.534-16.514z"></path>
        <path d="M19.789 22.757l-6.236-10.8h12.472l-6.236 10.8z"></path>
        <text x="35" y="21" fontFamily="sans-serif" fontSize="20" fontWeight="600">Azure</text>
    </svg>
);

const CircleGasLogo: React.FC = () => (
    <svg role="img" viewBox="0 0 150 30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="monospace" fontSize="20" fontWeight="bold">CIRCLE K</text>
    </svg>
);

const AWSLogo: React.FC = () => (
    <svg role="img" viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontSize="30" fontWeight="bold">aws</text>
    </svg>
);

const NordicLogo: React.FC = () => (
    <svg role="img" viewBox="0 0 150 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontSize="18" fontWeight="bold">NORDIC</text>
        <text x="50%" y="75%" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontSize="8">SEMICONDUCTOR</text>
    </svg>
);

const BoschLogo: React.FC = () => (
    <svg role="img" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontSize="24" fontWeight="bold">BOSCH</text>
    </svg>
);

const clientLogos = [
    { name: 'Carlsberg', component: <CarlsbergLogo /> },
    { name: 'Azure', component: <AzureLogo /> },
    { name: 'CircleGas', component: <CircleGasLogo /> },
    { name: 'AWS', component: <AWSLogo /> },
    { name: 'Nordic', component: <NordicLogo /> },
    { name: 'Bosch', component: <BoschLogo /> },
];

const Clients: React.FC = () => {
    return (
        <section className="section clients-section">
            <div className="logo-ticker-container">
                <div className="logo-ticker-track">
                    {/* Render logos */}
                    {clientLogos.map((logo, index) => (
                        <div key={`${logo.name}-${index}`} className="client-logo-item" title={logo.name}>
                            {logo.component}
                        </div>
                    ))}
                    {/* Duplicate logos for a seamless loop */}
                    {clientLogos.map((logo, index) => (
                        <div key={`${logo.name}-duplicate-${index}`} className="client-logo-item" title={logo.name}>
                            {logo.component}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;