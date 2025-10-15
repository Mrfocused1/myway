# Admin Menu Management System - Setup Guide

This guide will walk you through setting up the admin system for managing your menu items.

## Overview

Your website now has a complete admin system with:
- **Authentication** - Password-protected admin access
- **Add Items** - Create new menu items
- **Edit Items** - Modify existing menu items
- **Delete Items** - Remove menu items
- **Real-time Database** - All changes are stored in Supabase

## Step 1: Create a Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up with your email or GitHub account
4. Verify your email if required

## Step 2: Create a New Project

1. Once logged in, click "New Project"
2. Fill in the project details:
   - **Name**: `myway-catering` (or any name you prefer)
   - **Database Password**: Create a strong password and save it securely
   - **Region**: Choose the region closest to your users
3. Click "Create new project"
4. Wait a few minutes for the project to be provisioned

## Step 3: Get Your API Credentials

1. In your Supabase project dashboard, click on the "⚙️ Settings" icon in the left sidebar
2. Click on "API" under Project Settings
3. You'll see two important values:
   - **Project URL** (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon/public key** (a long string starting with `eyJ...`)
4. Keep this page open, you'll need these values in the next step

## Step 4: Configure Environment Variables

1. Open the file `.env.local` in your project root folder
2. Replace the placeholder values with your actual Supabase credentials:

```env
VITE_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...
```

3. Save the file

## Step 5: Create the Database Table

1. In your Supabase dashboard, click on the "🗄️ SQL Editor" icon in the left sidebar
2. Click "New Query"
3. Open the file `supabase-schema.sql` in your project folder
4. Copy all the SQL code from that file
5. Paste it into the SQL Editor in Supabase
6. Click "Run" (or press Cmd/Ctrl + Enter)
7. You should see "Success. No rows returned"

## Step 6: Create Your Admin Account

1. In your Supabase dashboard, click on "🔒 Authentication" in the left sidebar
2. Click "Users"
3. Click "Add user" → "Create new user"
4. Fill in:
   - **Email**: Your admin email address
   - **Password**: Create a strong password (you'll use this to login)
   - **Auto Confirm User**: ✅ Check this box
5. Click "Create user"

## Step 7: Migrate Your Existing Menu Data

Now we'll populate the database with your existing 136 menu items:

1. Open a terminal in your project folder
2. Run the migration script:

```bash
npm run dev
```

3. Open another terminal and run:

```bash
npx tsx src/scripts/migrateMenuData.ts
```

4. You should see output showing the migration progress
5. When complete, you'll see "✨ Migration script finished"

## Step 8: Test the System

1. Start your development server (if not already running):
```bash
npm run dev
```

2. Open your browser and go to: `http://localhost:5173/menu`
   - You should see all your menu items loaded from Supabase

3. Go to: `http://localhost:5173/admin/login`
   - You'll see the admin login page
   - Enter your admin email and password
   - Click "Sign In"

4. You should now be on the admin dashboard where you can:
   - View all menu items in a table
   - Search and filter items
   - Click "Add New Item" to create a new menu item
   - Click "Edit" on any item to modify it
   - Click "Delete" on any item to remove it

## Admin Features

### Adding a New Item
1. Click "Add New Item"
2. Fill in all required fields:
   - Name
   - Description
   - Cuisine (Nigerian, Caribbean, or European)
   - Category (Starters, Soups & Stews, Rice Dishes, etc.)
   - Allergens (comma-separated, e.g., "Gluten, Eggs, Milk")
   - May Contain (comma-separated)
3. Click "Add Item"

### Editing an Item
1. Find the item in the table
2. Click "Edit"
3. Modify any fields
4. Click "Update Item"

### Deleting an Item
1. Find the item in the table
2. Click "Delete"
3. Confirm the deletion

### Signing Out
- Click the "Sign Out" button in the top right corner

## Security Notes

- The `/admin` page is **not linked** from your main website
- Users must manually type the URL: `yourwebsite.com/admin/login`
- Only authenticated users can access the admin panel
- All menu items are publicly visible on the menu page
- Only authenticated users can add/edit/delete items

## Troubleshooting

### "Missing Supabase environment variables" error
- Make sure your `.env.local` file has the correct credentials
- Restart your development server after adding the credentials

### Can't login
- Verify your email and password are correct
- Check that you created the user in Supabase with "Auto Confirm User" enabled
- Make sure the database schema was created successfully

### Menu items not showing
- Check the browser console for errors
- Verify the database table was created correctly
- Make sure the migration script ran successfully

### Changes not saving
- Check the browser console for errors
- Verify your Supabase project is active
- Check that Row Level Security policies are set up correctly (they should be from the SQL schema)

## Production Deployment

When deploying to production:

1. Add the same environment variables to your hosting platform:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

2. Most platforms (Vercel, Netlify, etc.) have environment variable settings in their dashboard

3. The `.env.local` file is already in `.gitignore` so your credentials won't be committed to Git

## Need Help?

If you encounter any issues:
1. Check the browser console for error messages
2. Check the Supabase dashboard logs
3. Make sure all steps were completed in order
4. Verify your environment variables are set correctly

---

**Your admin system is now ready to use! 🎉**

Access your admin panel at: `http://localhost:5173/admin/login`
