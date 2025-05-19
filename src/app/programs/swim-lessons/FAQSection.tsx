'use client';

import React from 'react';
import Link from 'next/link';

const FAQSection = ({id}: {id: string}) => {
  // Sample FAQ data - in a real app, this would come from CMS or database
  const faqs = [
    {
      question: "What should my child bring to swim lessons?",
      answer: "Your child should bring a swimsuit, towel, and goggles (optional but recommended). For younger children, we recommend swim diapers if not fully potty trained. We provide all necessary equipment for the lessons."
    },
    {
      question: "How long are the swim lessons?",
      answer: "Group lessons are 30 minutes long, once a week for 4 weeks. Private lessons are also 30 minutes per session, and can be scheduled as single sessions or packages."
    },
    {
      question: "We will need to miss a class, do you have a make-up class or refund for the day we miss?",
      answer: "There are no refunds for missed classes but a credit can be issued in some cases or a make-up class can be scheduled if possible. To ensure consistency and fairness for all families and instructors, our cancellation policy is summarized below:"
    },
    {
      question: "",
      answer: "• Lessons take place rain or shine unless conditions become unsafe. No refunds for missed lessons due to weather, but in the chance conditions are deemed unsafe a credit may be issued to use for future lessons.\n• In case of sickness or medical emergency a credit can be issued under certain circumstances or a make up class scheduled if available.\n• No credit or make-up class will be offered after the class has started.\n• Classes may be canceled or moved to a different time in the event of insufficient registration."
    },
    {
      question: "How do I know which level is right for my child?",
      answer: "If you&apos;re unsure about which level is appropriate for your child, we recommend looking at the class descriptions to get a basic idea. In most cases we can adjust accordingly."
    },
    {
      question: "Is there a waitlist for full classes?",
      answer: "Yes, we maintain waitlists for all our classes. We recommend joining the waitlist as spots often open up. You&apos;ll receive an email notification if a spot becomes available."
    },
    {
      question: "Can parents stay and watch the lessons?",
      answer: "Absolutely! We have designated viewing areas where parents can observe lessons. For some younger children, we find they focus better when parents aren&apos;t in their direct line of sight."
    }
  ];

  return (
    <div id={id} className="py-16 bg-white">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-[#0A3D73] sm:text-4xl text-center">Frequently Asked Questions</h2>
        
        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              {faq.question && (
                <h3 className="text-lg font-medium text-[#0A3D73]">{faq.question}</h3>
              )}
              <div 
                className="mt-2 text-gray-600"
                dangerouslySetInnerHTML={{ 
                  __html: faq.answer.replace(/\n• /g, '<br/>• ').replace(/\n/g, '<br/>') 
                }}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-lg font-medium text-gray-600">Have more questions?</p>
          <Link 
            href="/contact" 
            className="mt-2 inline-flex items-center text-[#0A3D73] hover:text-[#0A3D73]/80"
          >
            Contact our front desk
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;