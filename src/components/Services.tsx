import React from 'react';

const Services: React.FC = () => {
    const servicesData = [
        { 
            icon: 'globe', 
            title: 'Research. Plan. Deliver Excellence.', 
            description: 'From domain analysis to scalable architecture, every solution is engineered for precision, performance, and long-term success.' 
        },
        { 
            icon: 'network', 
            title: 'Built with You, Not Just for You', 
            description: 'Built with your voice at the core — aligned on architecture, priorities, and outcomes that deliver lasting technical value.' 
        },
        { 
            icon: 'security', 
            title: 'Security Isn’t an Add-On — It’s the Blueprint', 
            description: 'Security is embedded from architecture to deployment—designed into every layer, not bolted on after. We build systems that meet compliance, resist threats, and scale securely by default.' 
        },
        { 
            icon: 'settings', 
            title: 'Smooth Integration Across Platforms', 
            description: 'Frictionless integration, minimal overhead, and seamless system communication — built for speed, stability, and scale across your stack.' 
        },
        { 
            icon: 'dollar', 
            title: 'Quality You Expect. Costs You Control.', 
            description: 'Engineering precision meets budget discipline to deliver high-quality outcomes — on spec, on time, without scope or cost drift.' 
        },
        { 
            icon: 'insights', 
            title: 'Live Insight. Swift Action. Solid Results.', 
            description: 'Real-time metrics drive fast, informed decisions—keeping systems optimized, projects aligned, and outcomes consistently strong.' 
        },
    ];

    const ServiceIcon = ({ name }: { name: string }) => {
        const icons: { [key: string]: React.ReactNode } = {
            globe: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.673 9h16.654M3.673 15h16.654M12 3c-3.418 0-6.388 2.04-7.73 5h15.46C18.388 5.04 15.418 3 12 3zM4.27 17c1.342 2.96 4.312 5 7.73 5s6.388-2.04 7.73-5H4.27z" /></svg>,
            settings: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.242 1.417l-1.07 1.071c-.084.083-.15.18-.21.285-.093.155-.143.335-.143.53V12c0 .194.05.375.143.53.06.105.126.202.21.285l1.07 1.072c.382.382.536.954.242 1.417l-1.296 2.247a1.125 1.125 0 01-1.37.49l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.332.183-.582.495-.645.87l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87a6.52 6.52 0 01-.22-.127c-.324-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.242-1.417l1.07-1.071c.084-.083.15-.18.21-.285.093-.155.143-.335.143-.53V12c0-.194-.05-.375-.143-.53a1.43 1.43 0 00-.21-.285l-1.07-1.071a1.125 1.125 0 01-.242-1.417l1.296-2.247a1.125 1.125 0 011.37-.49l1.217.456c.355.133.75.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.645-.87l.213-1.28z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
            dollar: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182.553-.44 1.278-.659 2.003-.659.85 0 1.6.279 2.26.815" /></svg>,
            insights: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
            network: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 013-3h.008c1.538 0 2.94.832 3.722 2.144m-6.75 0h3.75M12 15.75a3 3 0 003-3V4.5a3 3 0 00-3-3h-.008a4.502 4.502 0 00-4.422 3.722" /></svg>,
            security: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>,
        };
        return (
            <div className="service-icon-container">
                {icons[name]}
            </div>
        );
    };

    return (
        <section className="section services-section snap-section" id="services">
            <div className="container">
                <h2 className="section-title">Strategic Execution That Converts Tech Into Results</h2>
                
                <div className="services-grid">
                    {servicesData.map(service => (
                        <div key={service.title} className="service-card">
                            <ServiceIcon name={service.icon} />
                            <div>
                                <h3 className="service-card-title">{service.title}</h3>
                                <p className="service-card-text">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;