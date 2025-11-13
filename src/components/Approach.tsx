import React from 'react';
import { 
    RocketIcon, 
    CashIcon, 
    UserCogIcon, 
    TrendingUpIcon, 
    LightBulbIcon,
    ChartIcon, 
    AIIcon
} from './Icons';

const Approach: React.FC = () => {

    const cards = [
        {
            icon: <LightBulbIcon />,
            title: 'Product Incubation Services',
            description: 'Turn ideas into impact with our Product Incubation Services. We help you validate concepts, prototype rapidly, and build market-ready solutions—combining technical rigor with strategic insight to accelerate innovation from zero to launch.',
            linkText: 'Accurate Project Cost Estimation in Days with AI',
            linkHref: '#'
        },
        {
            icon: <ChartIcon />,
            title: 'Strategy Consulting',
            description: 'Our Strategy Consulting services help you navigate complexity with clarity. We align business goals with technical execution—identifying opportunities, mitigating risks, and crafting actionable roadmaps that drive growth, innovation, and long-term value.',
            linkText: 'Smarter Excavation Decisions with Data Visualization',
            linkHref: '#'
        },
        {
            icon: <AIIcon />,
            title: 'Enterprise AI Innovation Catalyst',
            description: 'We accelerate AI adoption for complex enterprises—driving innovation through automation, analytics, and adaptive systems. Our scalable, secure approach unlocks real value with minimal friction and maximum impact.',
            linkText: 'Elevating Experiences with Cloud-Powered Technology',
            linkHref: '#'
        }
    ];

    return (
        <section className="section approach-section snap-section" id="approach">
            <div className="container">
                <div className="approach-content-wrapper">
                    <div className="approach-main-card">
                        <div className="approach-pills-container">
                            <h2 className="approach-title">Blueprint to Breakthrough—Incubate, Innovate, Integrate</h2>
                            <p className="approach-subtitle">
                                Baysquare is the most preferred product development and incubation company specializing in building intelligent, future-ready products. 
                                We build scalable, high-performance software—from AI-powered platforms to robust web and mobile solutions—tailored for Supply Chain, Telecom, and Fintech industries. Delivered on time, on budget, and built for modern enterprise demands.
                            </p>
                        </div>
                    </div>

                    <div className="approach-cards-grid">
                        {cards.map((card, index) => (
                            <div key={index} className="approach-sub-card">
                                <div className="approach-sub-card-icon-container">
                                    {card.icon}
                                </div>
                                <h4 className="approach-sub-card-title">{card.title}</h4>
                                <p className="approach-sub-card-text">{card.description}</p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Approach;