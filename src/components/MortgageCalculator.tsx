import React, { useState, useEffect } from 'react';

const MortgageCalculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState({
    homePrice: 350000,
    downPayment: 70000,
    loanTerm: 30,
    interestRate: 6.5
  });
  const [results, setResults] = useState({
    monthlyPayment: 0,
    totalInterest: 0,
    totalPayment: 0
  });

  const calculateMortgage = () => {
    const principal = values.homePrice - values.downPayment;
    const monthlyRate = values.interestRate / 100 / 12;
    const numberOfPayments = values.loanTerm * 12;

    if (principal <= 0 || monthlyRate <= 0) {
      setResults({ monthlyPayment: 0, totalInterest: 0, totalPayment: 0 });
      return;
    }

    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    setResults({
      monthlyPayment: Math.round(monthlyPayment),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment)
    });
  };

  useEffect(() => {
    calculateMortgage();
  }, [values]);

  const handleInputChange = (field: string, value: number) => {
    setValues(prev => ({ ...prev, [field]: value }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <>
      {/* Floating Calculator Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-teal text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all z-40 group"
        aria-label="Open mortgage calculator"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H9v-2h5v2zm0-4H9v-2h5v2zm0-4H9V7h5v2zm5 8h-3V7h3v10z"/>
        </svg>
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Mortgage Calculator
        </span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-bold text-navy">Mortgage Calculator</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close calculator"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-navy">Loan Details</h4>
                  
                  {/* Home Price */}
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">Home Price</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        value={values.homePrice}
                        onChange={(e) => handleInputChange('homePrice', Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-accent focus:border-transparent"
                        min="0"
                        step="1000"
                      />
                    </div>
                  </div>

                  {/* Down Payment */}
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">Down Payment</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        value={values.downPayment}
                        onChange={(e) => handleInputChange('downPayment', Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-accent focus:border-transparent"
                        min="0"
                        step="1000"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {((values.downPayment / values.homePrice) * 100).toFixed(1)}% of home price
                    </p>
                  </div>

                  {/* Loan Term */}
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">Loan Term</label>
                    <select
                      value={values.loanTerm}
                      onChange={(e) => handleInputChange('loanTerm', Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-accent focus:border-transparent"
                    >
                      <option value={15}>15 years</option>
                      <option value={20}>20 years</option>
                      <option value={25}>25 years</option>
                      <option value={30}>30 years</option>
                    </select>
                  </div>

                  {/* Interest Rate */}
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">Interest Rate</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={values.interestRate}
                        onChange={(e) => handleInputChange('interestRate', Number(e.target.value))}
                        className="w-full px-4 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-accent focus:border-transparent"
                        min="0"
                        max="20"
                        step="0.1"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-navy">Monthly Payment Breakdown</h4>
                  
                  {/* Monthly Payment */}
                  <div className="bg-cream p-4 rounded-lg">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-1">Monthly Payment</p>
                      <p className="text-3xl font-bold text-navy">{formatCurrency(results.monthlyPayment)}</p>
                    </div>
                  </div>

                  {/* Loan Summary */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Loan Amount</span>
                      <span className="font-semibold">{formatCurrency(values.homePrice - values.downPayment)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Total Interest</span>
                      <span className="font-semibold">{formatCurrency(results.totalInterest)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Total Payment</span>
                      <span className="font-semibold">{formatCurrency(results.totalPayment)}</span>
                    </div>
                  </div>

                  {/* Contact CTA */}
                  <div className="bg-light-blue p-4 rounded-lg">
                    <p className="text-sm text-navy mb-3">
                      Ready to get pre-approved? Our team can connect you with trusted lenders.
                    </p>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        window.location.href = '#contact';
                      }}
                      className="w-full bg-navy text-white py-2 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                    >
                      Contact Our Team
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MortgageCalculator;