'use client'

import { useEffect, useState } from 'react'
import { createBrowserClient } from '@/lib/supabase'

interface Booking {
  id: string
  session_date: string
  duration_minutes: number
  total_amount: number
  status: string
  payment_status: string
  zoom_link: string | null
  notes: string | null
}

interface Deliverable {
  id: string
  booking_id: string
  title: string
  description: string | null
  file_url: string
  file_type: string | null
  created_at: string
}

export default function ClientPortal() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [deliverables, setDeliverables] = useState<Deliverable[]>([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const supabase = createBrowserClient()
    
    // Get user
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        setUser(data.user)
        fetchData(data.user.id)
      } else {
        // Redirect to login
        window.location.href = '/auth/login'
      }
    })
  }, [])

  const fetchData = async (userId: string) => {
    try {
      const [bookingsRes, deliverablesRes] = await Promise.all([
        fetch(`/api/bookings?user_id=${userId}`),
        fetch(`/api/deliverables?user_id=${userId}`),
      ])

      const bookingsData = await bookingsRes.json()
      const deliverablesData = await deliverablesRes.json()

      setBookings(bookingsData.bookings || [])
      setDeliverables(deliverablesData.deliverables || [])
    } catch (error) {
      console.error('Failed to fetch data:', error)
    } finally {
      setLoading(false)
    }
  }

  const upcomingSessions = bookings.filter(
    (b) => new Date(b.session_date) > new Date() && b.status !== 'cancelled'
  )

  const pastSessions = bookings.filter(
    (b) => new Date(b.session_date) <= new Date() || b.status === 'completed'
  )

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your portal...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Client Portal</h1>
              <p className="text-gray-600 mt-1">Welcome back, {user?.email}</p>
            </div>
            <button
              onClick={() => {
                const supabase = createBrowserClient()
                supabase.auth.signOut()
                window.location.href = '/'
              }}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <a
            href="/book"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition"
          >
            <div className="text-3xl mb-2">📅</div>
            <h3 className="font-semibold text-lg">Book Another Session</h3>
            <p className="text-sm text-purple-100 mt-1">Schedule your next consultation</p>
          </a>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl mb-2">⏱️</div>
            <h3 className="font-semibold text-lg text-gray-900">Sessions Booked</h3>
            <p className="text-3xl font-bold text-purple-600 mt-2">{bookings.length}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl mb-2">📦</div>
            <h3 className="font-semibold text-lg text-gray-900">Deliverables</h3>
            <p className="text-3xl font-bold text-purple-600 mt-2">{deliverables.length}</p>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Sessions</h2>
          {upcomingSessions.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <div className="text-5xl mb-4">📅</div>
              <p className="text-gray-600">No upcoming sessions scheduled</p>
              <a
                href="/book"
                className="inline-block mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Book a Session
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {upcomingSessions.map((booking) => (
                <div key={booking.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Strategy Session
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {new Date(booking.session_date).toLocaleString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: 'numeric',
                          minute: '2-digit',
                          timeZoneName: 'short',
                        })}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Duration: {booking.duration_minutes} minutes
                      </p>
                      {booking.notes && (
                        <p className="text-sm text-gray-600 mt-2 italic">{booking.notes}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-block px-3 py-1 text-sm rounded-full ${
                          booking.payment_status === 'paid'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {booking.payment_status}
                      </span>
                      <p className="text-lg font-semibold text-gray-900 mt-2">
                        ${booking.total_amount}
                      </p>
                    </div>
                  </div>
                  {booking.zoom_link && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <a
                        href={booking.zoom_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      >
                        🎥 Join Zoom Meeting
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Past Sessions */}
        {pastSessions.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Past Sessions</h2>
            <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
              {pastSessions.map((booking) => (
                <div key={booking.id} className="p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-900">Strategy Session</p>
                      <p className="text-sm text-gray-600">
                        {new Date(booking.session_date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 text-sm rounded-full ${
                        booking.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Deliverables */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Deliverables</h2>
          {deliverables.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <div className="text-5xl mb-4">📦</div>
              <p className="text-gray-600">No deliverables yet</p>
              <p className="text-sm text-gray-500 mt-2">
                Deliverables will appear here after your sessions
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {deliverables.map((deliverable) => (
                <div key={deliverable.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
                  <div className="text-4xl mb-3">📄</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{deliverable.title}</h3>
                  {deliverable.description && (
                    <p className="text-sm text-gray-600 mb-4">{deliverable.description}</p>
                  )}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{deliverable.file_type || 'Document'}</span>
                    <span>{new Date(deliverable.created_at).toLocaleDateString()}</span>
                  </div>
                  <a
                    href={deliverable.file_url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
