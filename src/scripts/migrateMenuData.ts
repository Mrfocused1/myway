import { supabase } from '../lib/supabase'
import { allMenuItems } from '../data/menuItems'

async function migrateMenuData() {
  console.log('Starting menu data migration...')
  console.log(`Total items to migrate: ${allMenuItems.length}`)

  // Transform the data to match database schema (mayContain -> may_contain)
  const itemsToInsert = allMenuItems.map(item => ({
    name: item.name,
    description: item.description,
    category: item.category,
    cuisine: item.cuisine,
    allergens: item.allergens,
    may_contain: item.mayContain
  }))

  // Insert items in batches of 50
  const batchSize = 50
  let successCount = 0
  let errorCount = 0

  for (let i = 0; i < itemsToInsert.length; i += batchSize) {
    const batch = itemsToInsert.slice(i, i + batchSize)
    console.log(`Inserting batch ${Math.floor(i / batchSize) + 1}...`)

    const { data, error } = await supabase
      .from('menu_items')
      .insert(batch)
      .select()

    if (error) {
      console.error('Error inserting batch:', error)
      errorCount += batch.length
    } else {
      console.log(`Successfully inserted ${data?.length || 0} items`)
      successCount += data?.length || 0
    }
  }

  console.log('\n=== Migration Complete ===')
  console.log(`✅ Successfully migrated: ${successCount} items`)
  console.log(`❌ Failed: ${errorCount} items`)
}

// Run the migration
migrateMenuData()
  .then(() => {
    console.log('\n✨ Migration script finished')
    process.exit(0)
  })
  .catch((error) => {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
  })
