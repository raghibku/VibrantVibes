import React, { useState } from 'react';

const FAQ = () => {
    const [faqs, setFaqs] = useState([
        {
            question: 'What is your event management company all about?',
            answer: 'We specialize in arranging unforgettable music experiences, including Concerts and Music Festivals. Our mission is to bring music to life and curate immersive events for music lovers of all genres.',
        },
        {
            question: 'How can I contact your team?',
            answer: 'You can reach us via email at GlamourGatherBD@gmail.com or by phone at 01558457331. We look forward to hearing from you!',
        },
        {
            question: 'Do you offer custom event planning services?',
            answer: 'Yes, we provide tailored event planning services to meet your specific needs and preferences. Contact us to discuss your requirements.',
        },
        {
            question: 'What types of music events have you organized?',
            answer: 'We have organized a wide range of music events, including rock concerts, EDM festivals, classical music performances, and more. Check out our portfolio for examples.',
        },
    ]);

    return (
        <div name="faq" className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <img src="/images/undraw_Questions_re_1fy7.png" className="hidden lg:flex max-w-sm rounded-lg shadow-[0_35px_60px_-15px_rgba(58,191,248,0.3)]" />
                <section id="faq" className=" py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-5xl font-semibold mb-6 text-primary">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <div className="collapse collapse-arrow bg-base-200">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title text-xl font-medium">
                                        {faq.question}
                                    </div>
                                    <div className="collapse-content text-primary-focus">
                                        {faq.answer}
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>

    );
};

export default FAQ;
