import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { motion } from 'framer-motion'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [isForgotPassword, setIsForgotPassword] = useState(false)
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    const { error } = await signIn(email, password)

    if (error) {
      setError(error.message || 'Failed to sign in')
      setLoading(false)
    } else {
      navigate('/admin/dashboard')
    }
  }

  const handleForgotPassword = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/admin/reset-password`,
    })

    setLoading(false)

    if (error) {
      setError(error.message || 'Failed to send reset email')
    } else {
      setSuccess('Password reset email sent! Check your inbox.')
      setEmail('')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-earthy-brown px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {isForgotPassword ? 'Reset Password' : 'Admin Login'}
            </h1>
            <p className="text-muted-foreground">
              {isForgotPassword ? 'Enter your email to receive a reset link' : 'Sign in to manage menu items'}
            </p>
          </div>

          <form onSubmit={isForgotPassword ? handleForgotPassword : handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green focus:border-earthy-green"
                placeholder="admin@example.com"
              />
            </div>

            {!isForgotPassword && (
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green focus:border-earthy-green"
                  placeholder="Enter your password"
                />
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg">
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-earthy-green text-white font-semibold py-3 rounded-lg hover:bg-earthy-green-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (isForgotPassword ? 'Sending...' : 'Signing in...') : (isForgotPassword ? 'Send Reset Link' : 'Sign In')}
            </button>
          </form>

          <div className="mt-6 text-center space-y-3">
            {!isForgotPassword ? (
              <button
                onClick={() => {
                  setIsForgotPassword(true)
                  setError('')
                  setSuccess('')
                }}
                className="text-sm text-earthy-green hover:text-earthy-green-dark transition-colors block w-full"
              >
                Forgot password?
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsForgotPassword(false)
                  setError('')
                  setSuccess('')
                }}
                className="text-sm text-earthy-green hover:text-earthy-green-dark transition-colors block w-full"
              >
                ← Back to login
              </button>
            )}
            <a
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
            >
              ← Back to website
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
