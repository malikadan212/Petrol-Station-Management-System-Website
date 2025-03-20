import React from 'react';

const helpCards = [
  {
    title: "Email Us",
    icon: "✉️",
    description: "Reach out via email for any queries or support.",
    actionText: "Send Email",
    actionLink: "mailto:support@example.com"
  },
  {
    title: "Visit Our Office",
    icon: "📍",
    description: "Find our office location and drop by for a visit.",
    actionText: "View on Map",
    actionLink: "https://maps.google.com/?q=Your+Office+Location"
  },
  {
    title: "Call Us",
    icon: "📞",
    description: "Have a quick chat with our support team.",
    actionText: "Call Now",
    actionLink: "tel:+1234567890"
  },
  {
    title: "FAQ",
    icon: "❓",
    description: "Browse frequently asked questions and find answers.",
    actionText: "Read FAQ",
    actionLink: "/faq"
  },
  {
    title: "Live Chat",
    icon: "💬",
    description: "Chat live with our support for instant help.",
    actionText: "Start Chat",
    actionLink: "/livechat"
  },
  {
    title: "Feedback",
    icon: "📝",
    description: "We value your feedback. Let us know how we can improve.",
    actionText: "Submit Feedback",
    actionLink: "/feedback"
  }
];

const HelpContent = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Need Help?</h1>
      <p className="text-center text-gray-600 mb-8">
        We’re here to assist you. Choose an option below to get started.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {helpCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 flex flex-col justify-between hover:shadow-xl transition-shadow"
          >
            <div>
              <div className="text-4xl mb-4">{card.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
            <div className="mt-4">
              <a
                href={card.actionLink}
                className="inline-block bg-indigo-600 text-white font-medium px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
              >
                {card.actionText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpContent;
