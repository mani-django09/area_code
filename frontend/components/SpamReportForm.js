import { useState } from 'react';
import axios from 'axios';

export default function SpamReportForm({ areaCode }) {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    reportType: 'spam',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('http://localhost:5000/api/reports/report', {
        areaCode,
        ...formData
      });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ phoneNumber: '', reportType: 'spam', description: '' });
    } catch (error) {
      console.error('Error submitting report:', error);
    }
  };

  return (
    <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 my-8">
      <h3 className="text-xl font-bold mb-4">Report Spam Call</h3>
      
      {submitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg">
          ✓ Thank you! Your report has been submitted.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
              placeholder={`${areaCode}-XXX-XXXX`}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Report Type
            </label>
            <select
              value={formData.reportType}
              onChange={(e) => setFormData({...formData, reportType: e.target.value})}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
            >
              <option value="spam">Spam/Telemarketer</option>
              <option value="scam">Scam/Fraud</option>
              <option value="robocall">Robocall</option>
              <option value="harassment">Harassment</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Description (Optional)
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows="3"
              placeholder="Tell us more about this call..."
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-3 rounded-lg hover:bg-yellow-600 transition"
          >
            Submit Report
          </button>
        </form>
      )}
    </div>
  );
}
