import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { supabase, MenuItemDB } from '../lib/supabase'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { CateringPackagesManager } from '../components/admin/CateringPackagesManager'

const categories = ["Starters", "Soups & Stews", "Rice Dishes", "Proteins", "Swallow & Sides", "Specials"]
const cuisines = ["Nigerian", "Caribbean", "European"]

type Tab = 'menu' | 'packages'

interface MenuItemForm {
  name: string
  description: string
  category: string
  cuisine: string
  allergens: string
  may_contain: string
}

export function AdminPage() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<Tab>('menu')
  const [menuItems, setMenuItems] = useState<MenuItemDB[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingItem, setEditingItem] = useState<MenuItemDB | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCuisine, setFilterCuisine] = useState('All')
  const [filterCategory, setFilterCategory] = useState('All')

  const [formData, setFormData] = useState<MenuItemForm>({
    name: '',
    description: '',
    category: categories[0],
    cuisine: cuisines[0],
    allergens: '',
    may_contain: ''
  })

  // Fetch menu items
  const fetchMenuItems = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('menu_items')
      .select('*')
      .order('cuisine')
      .order('category')
      .order('name')

    if (error) {
      console.error('Error fetching menu items:', error)
    } else {
      setMenuItems(data || [])
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchMenuItems()
  }, [])

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  const openAddModal = () => {
    setEditingItem(null)
    setFormData({
      name: '',
      description: '',
      category: categories[0],
      cuisine: cuisines[0],
      allergens: '',
      may_contain: ''
    })
    setShowModal(true)
  }

  const openEditModal = (item: MenuItemDB) => {
    setEditingItem(item)
    setFormData({
      name: item.name,
      description: item.description,
      category: item.category,
      cuisine: item.cuisine,
      allergens: item.allergens.join(', '),
      may_contain: item.may_contain.join(', ')
    })
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setEditingItem(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const menuItemData = {
      name: formData.name,
      description: formData.description,
      category: formData.category,
      cuisine: formData.cuisine,
      allergens: formData.allergens.split(',').map(a => a.trim()).filter(a => a),
      may_contain: formData.may_contain.split(',').map(a => a.trim()).filter(a => a)
    }

    if (editingItem) {
      // Update existing item
      const { error } = await supabase
        .from('menu_items')
        .update(menuItemData)
        .eq('id', editingItem.id)

      if (error) {
        console.error('Error updating item:', error)
        alert('Failed to update item')
      } else {
        await fetchMenuItems()
        closeModal()
      }
    } else {
      // Create new item
      const { error } = await supabase
        .from('menu_items')
        .insert([menuItemData])

      if (error) {
        console.error('Error creating item:', error)
        alert('Failed to create item')
      } else {
        await fetchMenuItems()
        closeModal()
      }
    }
  }

  const handleDelete = async (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      const { error } = await supabase
        .from('menu_items')
        .delete()
        .eq('id', id)

      if (error) {
        console.error('Error deleting item:', error)
        alert('Failed to delete item')
      } else {
        await fetchMenuItems()
      }
    }
  }

  // Filter menu items
  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCuisine = filterCuisine === 'All' || item.cuisine === filterCuisine
    const matchesCategory = filterCategory === 'All' || item.category === filterCategory
    return matchesSearch && matchesCuisine && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-slate-800 text-white py-6 px-8 shadow-lg">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              {activeTab === 'menu' ? 'Menu Management' : 'Catering Packages'}
            </h1>
            <p className="text-white/80 mt-1 text-sm md:text-base">Logged in as {user?.email}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={() => navigate('/')}
              className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors whitespace-nowrap text-center"
            >
              View Website
            </button>
            <button
              onClick={handleSignOut}
              className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors whitespace-nowrap text-center"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto max-w-7xl px-8">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('menu')}
              className={`px-6 py-4 font-semibold transition-colors border-b-2 ${
                activeTab === 'menu'
                  ? 'text-earthy-green border-earthy-green'
                  : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            >
              Menu Items
            </button>
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-6 py-4 font-semibold transition-colors border-b-2 ${
                activeTab === 'packages'
                  ? 'text-earthy-green border-earthy-green'
                  : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            >
              Catering Packages
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-8 py-8">
        {activeTab === 'packages' ? (
          <CateringPackagesManager />
        ) : (
          <>
        {/* Actions Bar */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <button
            onClick={openAddModal}
            className="bg-earthy-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-earthy-green-dark transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 4v16m8-8H4" />
            </svg>
            Add New Item
          </button>

          <div className="text-lg font-semibold text-foreground">
            Total Items: {filteredItems.length}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border-2 border-earthy-green bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green"
          />

          <div className="flex gap-4">
            <select
              value={filterCuisine}
              onChange={(e) => setFilterCuisine(e.target.value)}
              className="px-4 py-2 rounded-lg border-2 border-earthy-green bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green"
            >
              <option value="All">All Cuisines</option>
              {cuisines.map(c => <option key={c} value={c}>{c}</option>)}
            </select>

            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 rounded-lg border-2 border-earthy-green bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green"
            >
              <option value="All">All Categories</option>
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        {/* Menu Items Table */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-earthy-green"></div>
            <p className="mt-4 text-foreground">Loading menu items...</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Name</th>
                    <th className="px-6 py-4 text-left font-semibold">Description</th>
                    <th className="px-6 py-4 text-left font-semibold">Cuisine</th>
                    <th className="px-6 py-4 text-left font-semibold">Category</th>
                    <th className="px-6 py-4 text-left font-semibold">Allergens</th>
                    <th className="px-6 py-4 text-left font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map((item, index) => (
                    <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-semibold text-foreground">{item.name}</td>
                      <td className="px-6 py-4 text-foreground max-w-md">
                        <div className="line-clamp-2">{item.description}</div>
                      </td>
                      <td className="px-6 py-4 text-foreground">{item.cuisine}</td>
                      <td className="px-6 py-4 text-foreground">{item.category}</td>
                      <td className="px-6 py-4 text-foreground text-sm">
                        {item.allergens.length > 0 ? item.allergens.join(', ') : 'None'}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => openEditModal(item)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(item.id, item.name)}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredItems.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  No menu items found
                </div>
              )}
            </div>
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
                  {editingItem ? 'Edit Menu Item' : 'Add New Menu Item'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green"
                      placeholder="e.g., Jollof Rice"
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
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green"
                      placeholder="Describe the dish..."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Cuisine *
                      </label>
                      <select
                        value={formData.cuisine}
                        onChange={(e) => setFormData({ ...formData, cuisine: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green"
                      >
                        {cuisines.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Category *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green"
                      >
                        {categories.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Allergens (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={formData.allergens}
                      onChange={(e) => setFormData({ ...formData, allergens: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green"
                      placeholder="e.g., Gluten, Eggs, Milk"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Common allergens: Gluten, Eggs, Milk, Fish, Crustaceans, Nuts, Peanuts, Soya Beans, Celery, Mustard, Molluscs
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      May Contain (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={formData.may_contain}
                      onChange={(e) => setFormData({ ...formData, may_contain: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green"
                      placeholder="e.g., Nuts, Seeds"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-earthy-green text-white font-semibold py-3 rounded-lg hover:bg-earthy-green-dark transition-colors"
                    >
                      {editingItem ? 'Update Item' : 'Add Item'}
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
          </>
        )}
      </div>
    </div>
  )
}
