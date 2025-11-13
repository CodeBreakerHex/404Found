import React from 'react';
import { CheckIcon } from './Icons';

const Pricing: React.FC = () => {
    const plans = [
        {
            type: 'TRY NOW',
            name: 'Personal',
            price: 0,
            features: ['Full Access', '100 User Accounts', '1 Year License', '24/7 Support'],
            buttonColor: 'bg-blue-600 hover:bg-blue-700',
            popular: false,
        },
        {
            type: 'MOST POPULAR',
            name: 'Professional',
            price: 19,
            features: ['Premium Plugins', 'SEO Features', 'Full Access', '100 User Accounts', '1 Year License', '24/7 Support'],
            buttonColor: 'bg-red-500 hover:bg-red-600',
            popular: true,
        },
        {
            type: 'FULL FEATURED',
            name: 'Enterprise',
            price: 49,
            features: ['55+ Niche Demos', 'Drag-n-Drop Builder', 'Premium Plugins', 'SEO Features', 'Full Access', '100 User Accounts', '1 Year License', '24/7 Support'],
            buttonColor: 'bg-custom-teal hover:bg-teal-600',
            popular: false,
        },
    ];

    return (
        <section className="py-16 sm:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">Products</h2>
                <p className="text-gray-500 mt-2">We offer Flexible Pricing Options.</p>
                <div className="w-16 h-1 bg-gray-300 mx-auto mt-6 mb-16"></div>
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <div key={index} className={`bg-white rounded-lg p-8 text-left border w-full ${plan.popular ? 'shadow-2xl border-t-4 border-red-500 lg:-translate-y-4' : 'border-gray-200'}`}>
                            <p className={`text-xs font-bold ${plan.popular ? 'text-red-500' : 'text-gray-400'}`}>{plan.type}</p>
                            <h3 className="text-2xl font-semibold text-gray-800 mt-2">{plan.name}</h3>
                            <div className="mt-4">
                                <span className="text-5xl font-bold text-gray-900">€{plan.price}</span>
                                <span className="text-gray-500">monthly</span>
                            </div>
                            <ul className="mt-8 space-y-4">
                                {plan.features.map(feature => (
                                    <li key={feature} className="flex items-center text-gray-600">
                                        <CheckIcon className="text-custom-teal mr-3" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className={`${plan.buttonColor} text-white w-full py-3 rounded-md mt-8 font-semibold transition-colors`}>
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
