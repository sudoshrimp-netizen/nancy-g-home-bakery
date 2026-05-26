# Nancy G's Homebakery — Website Setup Guide

**Total cost: ~$10–12/year** (custom domain only — hosting is free forever)

---

## What you're setting up

| Piece | What it does | Cost |
|---|---|---|
| **GitHub Pages** | Hosts your website for free | $0 forever |
| **Google Sheets** | Your CMS — update menu, prices, booking status from a spreadsheet | $0 forever |
| **Custom domain** | nancygshomebakery.com (or similar) | ~$10–12/year |

---

## Part 1 — Set Up the Google Sheet (the "CMS")

This is where Nancy updates her menu and booking status. No coding, ever.

### Step 1: Create the spreadsheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a **new spreadsheet**
2. Name it: `Nancy G's Homebakery — Website Data`

### Step 2: Create the Menu tab

1. At the bottom, rename **Sheet1** to exactly: `Menu`
2. In Row 1, type these headers exactly (one per column):

```
A1: Category
B1: Name
C1: Description
D1: Price
E1: Notes
F1: Available
```

3. Fill in your menu items starting from Row 2. Example:

| Category | Name | Description | Price | Notes | Available |
|---|---|---|---|---|---|
| Cookies | Gourmet Chocolate Chip Cookies | Classic gourmet cookies baked fresh | $16.50/dozen | | TRUE |
| Cookies | Snowball Cookies | Melt-in-your-mouth powdered sugar cookies | $15/dozen | | TRUE |
| Brownies | Cacao Brownies | Rich cacao brownies by piece or tray | $6 each / $22–$25 tray | Flavors: Plain, Mint, Oreo, M&Ms, Reese's | TRUE |
| Cakes | 9" Lemon Olive Oil Cake | Light and moist | $30 | | TRUE |

**Column rules:**
- **Category** — Use one of: `Cookies`, `Brownies`, `Cakes`, `Specialty`, `Breads`, `Pan Dulce`
- **Available** — Type `TRUE` if she's selling it, `FALSE` to gray it out on the site
- To hide an item without deleting it, just change `TRUE` to `FALSE`

### Step 3: Create the Settings tab

1. Click the **+** at the bottom to add a new tab
2. Name it exactly: `Settings`
3. In Row 1, add headers:

```
A1: Key
B1: Value
```

4. Add these rows:

| Key | Value |
|---|---|
| booking_status | Booked thru July 2026 |
| announcement | August & September availability now open! |
| instagram_handle | nancygshomebakery |

**Nancy just updates the `Value` column to change what appears on the website.**

### Step 4: Publish the sheet to the web

> ⚠️ This is required. Without this step, the website can't read the sheet.

1. Click **File** → **Share** → **Publish to web**
2. In the first dropdown, leave it as **Entire Document**
3. In the second dropdown, select **Comma-separated values (.csv)**
4. Click **Publish** → confirm with **OK**
5. Close that window — you don't need the URL it shows you

### Step 5: Copy your Sheet ID

1. Look at the URL in your browser while the spreadsheet is open:
   ```
   https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms/edit
   ```
2. The Sheet ID is the long string between `/d/` and `/edit`:
   ```
   1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms
   ```
3. Copy it — you'll need it in the next step

---

## Part 2 — Set Up GitHub Pages (Free Hosting)

### Step 1: Create a GitHub account

1. Go to [github.com](https://github.com) and create a free account
2. Use a simple username like `nancygsbakery` or your name

### Step 2: Create a repository

1. Click the **+** in the top right → **New repository**
2. Name it exactly: `nancygshomebakery` (all lowercase, no spaces)
3. Set it to **Public**
4. Check **Add a README file**
5. Click **Create repository**

### Step 3: Add the website file

1. Click **Add file** → **Upload files**
2. Drag and drop the `index.html` file from your computer
3. Click **Commit changes**

### Step 4: Put your Sheet ID into the HTML

Before uploading (or after, by editing on GitHub):

1. Open `index.html` in a text editor
2. Find this line (near the bottom, in the `<script>` section):
   ```javascript
   const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';
   ```
3. Replace `YOUR_GOOGLE_SHEET_ID_HERE` with your actual Sheet ID:
   ```javascript
   const SHEET_ID = '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms';
   ```
4. Save the file and upload it to GitHub

### Step 5: Enable GitHub Pages

1. In your GitHub repository, click **Settings**
2. Scroll down to **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Set Branch to `main`, folder to `/ (root)`
5. Click **Save**

Your site will be live at:
```
https://YOUR-USERNAME.github.io/nancygshomebakery
```

(It takes about 2–5 minutes to go live the first time.)

---

## Part 3 — Connect Your Custom Domain

### Step 1: Buy the domain

Recommended: **Cloudflare Registrar** ([registrar.cloudflare.com](https://www.cloudflare.com/products/registrar/)) — at-cost pricing, no markup, includes free DNS.

Search for: `nancygshomebakery.com` — likely $10–12/year.

### Step 2: Add DNS records

In Cloudflare (or your registrar's DNS settings), add these records:

**A Records** (point the root domain to GitHub):
```
Type: A    Name: @    Value: 185.199.108.153
Type: A    Name: @    Value: 185.199.109.153
Type: A    Name: @    Value: 185.199.110.153
Type: A    Name: @    Value: 185.199.111.153
```

**CNAME Record** (for the www version):
```
Type: CNAME    Name: www    Value: YOUR-USERNAME.github.io
```

### Step 3: Configure GitHub

1. In your GitHub repository → **Settings** → **Pages**
2. Under **Custom domain**, type: `nancygshomebakery.com`
3. Check **Enforce HTTPS** (shows up after a few minutes)

Allow 10–30 minutes for DNS to propagate. Then your site is live at `nancygshomebakery.com`.

---

## Ongoing: How Nancy Updates the Website

This is the whole point — Nancy never touches code.

### To update prices or menu items:
1. Open the Google Sheet
2. Find the item and change the **Price**, **Description**, or **Notes** column
3. The website updates automatically within ~5 minutes

### To add a new menu item:
1. Add a new row to the **Menu** tab
2. Fill in: Category, Name, Description, Price, Notes, Available
3. Type `TRUE` in the Available column
4. The website updates automatically

### To temporarily remove an item:
1. Find the item in the sheet
2. Change `TRUE` to `FALSE` in the **Available** column
3. Item appears grayed out on the website

### To update booking status:
1. Open the **Settings** tab
2. Update the **Value** in the `booking_status` row
3. Update the **Value** in the `announcement` row (or leave it blank)
4. The hero section of the website updates automatically

### To update Instagram flash sales/announcements:
- Just post to Instagram as usual — the website just links to her IG for ordering

---

## Updating the Website Design Later

If Nancy ever wants to change photos, colors, or layout, that requires editing `index.html`. Here's how:

1. Go to the GitHub repository
2. Click on `index.html`
3. Click the **pencil icon** (Edit) in the top right
4. Make changes
5. Click **Commit changes**

The site updates within 2–3 minutes after saving.

---

## Troubleshooting

**Menu shows old/default data instead of the sheet:**
- Make sure the sheet is published (File → Share → Publish to web)
- Double-check the SHEET_ID in index.html matches your sheet URL
- Tab names must be exactly `Menu` and `Settings` (case-sensitive)

**Site not loading at custom domain:**
- DNS can take up to 48 hours to propagate globally (usually 30 min)
- Check GitHub Pages settings show your custom domain and HTTPS is active

**Booking status not updating:**
- Browser caches can hold old data for a few minutes
- Try Ctrl+Shift+R (hard refresh) or open in incognito

---

## Quick Reference: Nancy's Update Cheat Sheet

| I want to… | What to do |
|---|---|
| Change a price | Edit the **Price** column in the Menu tab |
| Add a new item | Add a new row to the Menu tab |
| Remove an item | Change TRUE → FALSE in the Available column |
| Update booking status | Edit the **Settings** tab → `booking_status` value |
| Add an announcement | Edit the **Settings** tab → `announcement` value |
| Remove an announcement | Clear the `announcement` value (leave blank) |

---

*Built with GitHub Pages (free) + Google Sheets (free) + custom domain (~$10–12/yr)*
