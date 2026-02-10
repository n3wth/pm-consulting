import BookingForm from '@/components/BookingForm'

export default function BookPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Book Your Strategy Session
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            60-minute focused consultation to level up your product roadmap, prioritization, and
            stakeholder alignment.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl mb-2">⏱️</div>
              <div className="font-semibold text-gray-900">60 Minutes</div>
              <div className="text-sm text-gray-600">Focused Session</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl mb-2">💰</div>
              <div className="font-semibold text-gray-900">$300</div>
              <div className="text-sm text-gray-600">One-time Fee</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-semibold text-gray-900">Actionable</div>
              <div className="text-sm text-gray-600">Immediate Value</div>
            </div>
          </div>

          <div className="mb-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">What You'll Get:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Expert review of your product roadmap or prioritization challenge</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Practical frameworks you can implement immediately</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Stakeholder alignment strategies that actually work</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Follow-up summary with key recommendations</span>
              </li>
            </ul>
          </div>

          <BookingForm />
        </div>

        <div className="text-center mt-6 text-sm text-gray-500">
          <p>Secure payment powered by Stripe. Your session will be confirmed instantly.</p>
        </div>
      </div>
    </main>
  )
}
