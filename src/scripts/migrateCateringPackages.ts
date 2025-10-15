import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseServiceKey = process.env.VITE_SUPABASE_SERVICE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

const packages = [
  {
    name: "Essential",
    price: "Starting at $25/person",
    description: "Perfect for smaller gatherings and casual events",
    includes: [
      "Choice of 2 appetizers",
      "1 main course option",
      "2 side dishes",
      "Basic setup and cleanup",
      "Disposable serving ware"
    ],
    featured: false,
    display_order: 1
  },
  {
    name: "Premium",
    price: "Starting at $45/person",
    description: "Ideal for corporate events and celebrations",
    includes: [
      "Choice of 3 appetizers",
      "2 main course options",
      "3 side dishes",
      "Professional serving staff",
      "China and glassware",
      "Full setup and cleanup"
    ],
    featured: true,
    display_order: 2
  },
  {
    name: "Luxury",
    price: "Starting at $75/person",
    description: "The ultimate catering experience for prestigious events",
    includes: [
      "Premium appetizer selection",
      "3 gourmet main courses",
      "4 signature sides",
      "Dedicated event coordinator",
      "Premium tableware and linens",
      "Chef on-site",
      "Full-service experience"
    ],
    featured: false,
    display_order: 3
  }
]

async function migrate() {
  console.log('Starting catering packages migration...')

  try {
    // Insert packages
    const { data, error } = await supabase
      .from('catering_packages')
      .insert(packages)
      .select()

    if (error) {
      console.error('Error inserting packages:', error)
      process.exit(1)
    }

    console.log(`Successfully migrated ${data.length} catering packages:`)
    data.forEach(pkg => {
      console.log(`- ${pkg.name} (${pkg.price})`)
    })

    console.log('\nMigration completed successfully!')
  } catch (error) {
    console.error('Migration failed:', error)
    process.exit(1)
  }
}

migrate()
