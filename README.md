# THEHASA Holdings Company Limited: website

This folder is the complete website. Upload everything in it, as it is, to a GitHub repository and switch on GitHub Pages.

## Put it online (GitHub Pages)

1. On GitHub, create a new **public** repository, for example `thehasa-website`, in the THEHASA organisation.
2. Click **Add file > Upload files**. GitHub accepts up to 100 files per upload, so upload in two rounds:
   - **Round 1:** drag in everything except the `img` folder, including the hidden file `.nojekyll`. Press **Commit changes**.
   - **Round 2:** drag in the `img` folder itself. If GitHub says there are too many files, open `img`, drag in about half of its files at a time, and before committing type `img/` in front of the folder path. Press **Commit changes**.

   Easier option: install **GitHub Desktop**, clone the repository, copy this whole folder into it and press **Push**. It has no file limit.
3. Go to **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. Under **Custom domain**, type your domain (for example `thehasaholdings.com`) and **Save**. Tick **Enforce HTTPS** once it becomes available.

## Point the domain to GitHub (Hostinger)

In Hostinger, open **Domains > your domain > DNS / Nameservers > DNS records**. Delete any old A records for `@`, then add:

| Type  | Name | Points to             |
|-------|------|-----------------------|
| A     | @    | 185.199.108.153       |
| A     | @    | 185.199.109.153       |
| A     | @    | 185.199.110.153       |
| A     | @    | 185.199.111.153       |
| CNAME | www  | YOUR-GITHUB-NAME.github.io |

Changes can take up to a few hours to work.

## Forms

Until the company Google Apps Script is connected, every form ends with **Send on WhatsApp** (+256 789 372 627) or **Send by email** (thehasaholdings@gmail.com), with the request already written in the message. The customer can also download a PDF copy on the company letterhead.

## THEHASA Market listings

Listings live in `market.json`. To edit, open the file on GitHub, press the pencil icon, change it and press **Commit changes**. The site updates within a minute or two.

One listing looks like this (copy it between the square brackets, separated by commas):

```json
[
  {
    "ref": "THM-1001",
    "cat": "Motorcycles",
    "name": "Bajaj Boxer CT 125",
    "area": "Hoima City",
    "district": "Hoima",
    "details": "Logbook in owner's name",
    "price": "UGX 4,800,000",
    "desc": "Good condition.",
    "photos": ["img/market-boxer.webp"],
    "status": "available"
  }
]
```

- **Categories** (`cat`): Land, Houses and buildings, Vehicles, Motorcycles, Machinery and equipment, Farm produce.
- **Sold:** set `"status": "sold"` and add `"soldDate": "2026-12-01"`. The SOLD ribbon shows for 7 days, then the listing leaves the Market by itself.
- **Remove now:** set `"status": "removed"`, or delete the listing.
- **Photos:** upload them into the `img` folder and list them under `photos`.

Never put plot numbers, number plates or owners' phone numbers in a listing.
