import { useState, useEffect, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { motion } from 'framer-motion'

export function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [validToken, setValidToken] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    // Listen for auth state changes to handle the password reset token
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth event:', event, 'Session:', session)

      if (event === 'PASSWORD_RECOVERY') {
        setValidToken(true)
        if (timeoutId) clearTimeout(timeoutId)
      } else if (session) {
        setValidToken(true)
        if (timeoutId) clearTimeout(timeoutId)
      }
    })

    // Also check for existing session
    const checkSession = async () => {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession()
      console.log('Current session:', session, 'Error:', sessionError)

      if (session) {
        setValidToken(true)
      } else {
        // Wait a bit for the auth state change event to fire
        timeoutId = setTimeout(() => {
          setValidToken(prev => {
            if (!prev) {
              setError('Invalid or expired reset link. Please request a new one.')
            }
            return prev
          })
        }, 3000)
      }
    }

    checkSession()

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      authListener.subscription.unsubscribe()
    }
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (password.length < 6) {
      setError('Password must be at least 6 characters long')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setLoading(true)

    const { error } = await supabase.auth.updateUser({
      password: password
    })

    setLoading(false)

    if (error) {
      setError(error.message || 'Failed to update password')
    } else {
      setSuccess(true)
      setTimeout(() => {
        navigate('/admin')
      }, 2000)
    }
  }

  if (!validToken && !error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-800 px-4">
        <div className="text-white text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          <p className="mt-4">Verifying reset link...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {success ? 'Password Updated!' : 'Set New Password'}
            </h1>
            <p className="text-muted-foreground">
              {success ? 'Redirecting to login...' : 'Enter your new password below'}
            </p>
          </div>

          {success ? (
            <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg text-center">
              <p className="font-semibold">Your password has been updated successfully!</p>
              <p className="text-sm mt-2">You will be redirected to the login page shortly.</p>
            </div>
          ) : validToken ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                  New Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green focus:border-earthy-green"
                  placeholder="Enter new password (min 6 characters)"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-2">
                  Confirm New Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green focus:border-earthy-green"
                  placeholder="Confirm new password"
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-earthy-green text-white font-semibold py-3 rounded-lg hover:bg-earthy-green-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Updating Password...' : 'Update Password'}
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                {error}
              </div>
              <a
                href="/admin"
                className="block w-full text-center bg-earthy-green text-white font-semibold py-3 rounded-lg hover:bg-earthy-green-dark transition-colors"
              >
                Request New Reset Link
              </a>
            </div>
          )}

          <div className="mt-6 text-center">
            <a
              href="/admin"
              className="text-sm text-earthy-green hover:text-earthy-green-dark transition-colors"
            >
              ← Back to login
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
