import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // In production, send to email service (Mailchimp, SendGrid, etc.)
    console.log('Subscribing:', email);
    setSubscribed(true);
    setEmail('');
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 my-12">
      <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
      <p className="text-blue-100 mb-4">
        Get notified about new area codes and phone scam alerts
      </p>
      
      {subscribed ? (
        <div className="bg-white text-green-600 p-4 rounded-lg font-semibold">
          ✓ Thanks for subscribing!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}