import { useState, useEffect } from 'react'
import { supabase, CateringPackageDB } from '../../lib/supabase'
import { motion, AnimatePresence } from 'framer-motion'

interface PackageForm {
  name: string
  price: string
  description: string
  includes: string
  featured: boolean
  display_order: number
}

export function CateringPackagesManager() {
  const [packages, setPackages] = useState<CateringPackageDB[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingPackage, setEditingPackage] = useState<CateringPackageDB | null>(null)

  const [formData, setFormData] = useState<PackageForm>({
    name: '',
    price: '',
    description: '',
    includes: '',
    featured: false,
    display_order: 0
  })

  const fetchPackages = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('catering_packages')
      .select('*')
      .order('display_order')

    if (error) {
      console.error('Error fetching packages:', error)
    } else {
      setPackages(data || [])
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchPackages()
  }, [])

  const openAddModal = () => {
    setEditingPackage(null)
    setFormData({
      name: '',
      price: '',
      description: '',
      includes: '',
      featured: false,
      display_order: packages.length + 1
    })
    setShowModal(true)
  }

  const openEditModal = (pkg: CateringPackageDB) => {
    setEditingPackage(pkg)
    setFormData({
      name: pkg.name,
      price: pkg.price,
      description: pkg.description,
      includes: pkg.includes.join('\n'),
      featured: pkg.featured,
      display_order: pkg.display_order
    })
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setEditingPackage(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const packageData = {
      name: formData.name,
      price: formData.price,
      description: formData.description,
      includes: formData.includes.split('\n').map(i => i.trim()).filter(i => i),
      featured: formData.featured,
      display_order: formData.display_order
    }

    if (editingPackage) {
      const { error } = await supabase
        .from('catering_packages')
        .update(packageData)
        .eq('id', editingPackage.id)

      if (error) {
        console.error('Error updating package:', error)
        alert('Failed to update package')
      } else {
        await fetchPackages()
        closeModal()
      }
    } else {
      const { error } = await supabase
        .from('catering_packages')
        .insert([packageData])

      if (error) {
        console.error('Error creating package:', error)
        alert('Failed to create package')
      } else {
        await fetchPackages()
        closeModal()
      }
    }
  }

  const handleDelete = async (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete "${name}" package?`)) {
      const { error } = await supabase
        .from('catering_packages')
        .delete()
        .eq('id', id)

      if (error) {
        console.error('Error deleting package:', error)
        alert('Failed to delete package')
      } else {
        await fetchPackages()
      }
    }
  }

  return (
    <div>
      {/* Actions Bar */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <button
          onClick={openAddModal}
          className="bg-earthy-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-earthy-green-dark transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 4v16m8-8H4" />
          </svg>
          Add New Package
        </button>

        <div className="text-lg font-semibold text-foreground">
          Total Packages: {packages.length}
        </div>
      </div>

      {/* Packages Display */}
      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-earthy-green"></div>
          <p className="mt-4 text-foreground">Loading packages...</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative p-6 rounded-2xl border-2 ${
                pkg.featured
                  ? 'border-earthy-green bg-white shadow-lg'
                  : 'border-border bg-background'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-4 bg-earthy-green text-white px-4 py-1 rounded-full text-xs font-bold">
                  FEATURED
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-2xl font-bold text-earthy-green mb-2">{pkg.price}</p>
                <p className="text-sm text-muted-foreground mb-3">{pkg.description}</p>
                <div className="text-xs text-muted-foreground mb-3">Order: {pkg.display_order}</div>
              </div>

              <div className="space-y-2 mb-4">
                <p className="text-sm font-semibold text-foreground">Includes:</p>
                <ul className="space-y-1">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-earthy-green mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2 pt-4 border-t border-border">
                <button
                  onClick={() => openEditModal(pkg)}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(pkg.id, pkg.name)}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {packages.length === 0 && !loading && (
        <div className="text-center py-12 text-muted-foreground">
          No catering packages found. Create your first one!
        </div>
      )}

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  {editingPackage ? 'Edit Package' : 'Add New Package'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Package Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green"
                      placeholder="e.g., Premium"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Price *
                    </label>
                    <input
                      type="text"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green"
                      placeholder="e.g., Starting at $45/person"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Description *
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                      rows={2}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green"
                      placeholder="Brief description of the package..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      What's Included * (one item per line)
                    </label>
                    <textarea
                      value={formData.includes}
                      onChange={(e) => setFormData({ ...formData, includes: e.target.value })}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green"
                      placeholder="Choice of 3 appetizers&#10;2 main course options&#10;3 side dishes&#10;Professional serving staff"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Each line will appear as a separate item in the package
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Display Order
                      </label>
                      <input
                        type="number"
                        value={formData.display_order}
                        onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green"
                        min="0"
                      />
                    </div>

                    <div className="flex items-center pt-8">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.featured}
                          onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                          className="w-5 h-5 rounded border-border text-earthy-green focus:ring-earthy-green"
                        />
                        <span className="text-sm font-medium text-foreground">Featured Package</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-earthy-green text-white font-semibold py-3 rounded-lg hover:bg-earthy-green-dark transition-colors"
                    >
                      {editingPackage ? 'Update Package' : 'Add Package'}
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="flex-1 bg-gray-200 text-foreground font-semibold py-3 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
