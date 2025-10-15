-- Create menu_items table
CREATE TABLE IF NOT EXISTS menu_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  cuisine TEXT NOT NULL,
  allergens TEXT[] DEFAULT '{}',
  may_contain TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on cuisine and category for faster filtering
CREATE INDEX IF NOT EXISTS idx_menu_items_cuisine ON menu_items(cuisine);
CREATE INDEX IF NOT EXISTS idx_menu_items_category ON menu_items(category);

-- Enable Row Level Security (RLS)
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read menu items
CREATE POLICY "Anyone can view menu items"
  ON menu_items FOR SELECT
  USING (true);

-- Create policy to allow authenticated users to insert menu items
CREATE POLICY "Authenticated users can insert menu items"
  ON menu_items FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create policy to allow authenticated users to update menu items
CREATE POLICY "Authenticated users can update menu items"
  ON menu_items FOR UPDATE
  TO authenticated
  USING (true);

-- Create policy to allow authenticated users to delete menu items
CREATE POLICY "Authenticated users can delete menu items"
  ON menu_items FOR DELETE
  TO authenticated
  USING (true);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to call the function
CREATE TRIGGER update_menu_items_updated_at BEFORE UPDATE ON menu_items
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
