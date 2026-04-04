#!/usr/bin/env python3
"""
VisaIQ SEO Metadata Batch Patcher — April 2026
Run this script in the root of your GitHub repo.
It applies ONLY metadata changes (title, description, OG/Twitter tags, H1)
to each HTML file. All content, tools, and functionality are preserved exactly.

Usage: python3 patch_metadata.py
"""

import re, os, sys

def patch(html, title, desc, og_url=None, h1_old=None, h1_new=None):
    html = re.sub(r'<title>[^<]+</title>', '<title>' + title + '</title>', html, count=1)
    html = re.sub(r'(name="description"\s+content=")[^"]*(")', lambda m: m.group(1)+desc+m.group(2), html, count=1)
    html = re.sub(r'(property="og:title"\s+content=")[^"]*(")', lambda m: m.group(1)+title+m.group(2), html, count=1)
    html = re.sub(r'(name="twitter:title"\s+content=")[^"]*(")', lambda m: m.group(1)+title+m.group(2), html, count=1)
    html = re.sub(r'(property="og:description"\s+content=")[^"]*(")', lambda m: m.group(1)+desc+m.group(2), html, count=1)
    html = re.sub(r'(name="twitter:description"\s+content=")[^"]*(")', lambda m: m.group(1)+desc+m.group(2), html, count=1)
    if og_url:
        html = re.sub(r'(property="og:url"\s+content=")[^"]*(")', lambda m: m.group(1)+og_url+m.group(2), html, count=1)
    if h1_old and h1_new:
        new = html.replace(h1_old, h1_new, 1)
        if new == html:
            print(f"  WARNING: H1 not found — '{h1_old[:50]}'")
        html = new
    return html


# ─────────────────────────────────────────────────────────────────
# PATCH DEFINITIONS — edit only if cutoffs/facts change
# ─────────────────────────────────────────────────────────────────

PATCHES = [
    {
        "file": "189-visa.html",
        "title": "189 Visa Australia 2026 — Points Cutoffs &amp; 4-Tier Priority | VisaIQ",
        "desc":  "Subclass 189 independent skilled visa: minimum 65 points, no employer or state needed. New 4-tier priority system introduced 2026. Check your EOI score free.",
        "og_url":"https://www.visaiq.com.au/189-visa",
        "h1_old":"Subclass 189 Visa Australia 2026 — No Employer or State Required",
        "h1_new":"Subclass 189 Skilled Independent Visa Australia 2026 — Points Cutoffs, 4-Tier System &amp; EOI Strategy",
    },
    {
        "file": "190-visa.html",
        "title": "190 Visa Australia 2026 — +5 Points, All 8 States Compared | VisaIQ",
        "desc":  "Subclass 190 state nomination adds 5 points to your PR score. All 8 states compared — cutoffs, allocations and difficulty ratings. Free state comparator tool.",
        "og_url":"https://www.visaiq.com.au/190-visa",
        "h1_old":"Subclass 190 State Nomination Visa Australia 2026 — All 8 States Compared",
        "h1_new":"Subclass 190 State Nomination Visa Australia 2026 — +5 Points, All 8 States Compared",
    },
    {
        "file": "485-visa.html",
        "title": "485 Visa Australia 2026 — Fee Doubled to $4,600 from March | VisaIQ",
        "desc":  "The 485 graduate visa fee doubled to $4,600 on 1 March 2026 (was $2,300). Check your duration, work rights and PR pathway with our free 485 eligibility tool.",
        "og_url":"https://www.visaiq.com.au/485-visa",
        "h1_old":"485 Post-Study Work Visa Australia 2026 — Work Rights and Duration",
        "h1_new":"485 Graduate Visa Australia 2026 — Fee Now $4,600 After March 1 Doubling",
    },
    {
        "file": "491-visa.html",
        "title": "491 Visa Australia 2026 — +15 Points &amp; PR After 3 Years | VisaIQ",
        "desc":  "Subclass 491 regional visa adds 15 points and leads to permanent residency (Subclass 191) after 3 years in regional Australia. Free eligibility and state tool.",
        "og_url":"https://www.visaiq.com.au/491-visa",
        "h1_old":"Subclass 491 Regional Visa Australia 2026 — 15 Bonus Points",
        "h1_new":"Subclass 491 Regional Skilled Visa Australia 2026 — +15 Points &amp; Pathway to 191 Permanent Residency",
    },
    {
        "file": "australian-citizenship.html",
        "title": "Australian Citizenship 2026 — 4-Year Rule, $490 Fee &amp; Calculator | VisaIQ",
        "desc":  "Australian citizenship requires 4 years in Australia, including 12 months as a permanent resident. Fee is $490. Processing takes 13-18 months. Check yours free.",
        "og_url":"https://www.visaiq.com.au/australian-citizenship",
        "h1_old": None,
        "h1_new": None,
    },
    {
        "file": "bridging-visa.html",
        "title": "Bridging Visa Australia 2026 — Work Rights &amp; Travel Trap | VisaIQ",
        "desc":  "Bridging Visa A gives full work rights. Bridging Visa B costs $175 and allows one overseas trip. Understand the travel trap before you book any flights in 2026.",
        "og_url":"https://www.visaiq.com.au/bridging-visa",
        "h1_old": None,
        "h1_new": None,
    },
    {
        "file": "genuine-student-requirement.html",
        "title": "Genuine Student Requirement 2026 — What DHA Actually Checks | VisaIQ",
        "desc":  "The Genuine Student requirement replaced GTE on 23 March 2024. DHA checks 5 factors. Free guide to writing your GS statement and avoiding refusal triggers.",
        "og_url":"https://www.visaiq.com.au/genuine-student-requirement",
        "h1_old": None,
        "h1_new": None,
    },
    {
        "file": "index.html",
        "title": "Australia Visa Intelligence 2026 — PR, 482 &amp; Student | VisaIQ",
        "desc":  "Free tools for every Australian visa — PR calculator, 482 eligibility, student pathway and partner visa guide. 16 tools, real DHA data, no agent required.",
        "og_url":"https://www.visaiq.com.au",
        "h1_old": None,
        "h1_new": None,
    },
    {
        "file": "partner-visa-while-on-student-visa.html",
        "title": "820 Visa on Student Visa Australia 2026 — Yes, Here's How | VisaIQ",
        "desc":  "You can apply for the 820 partner visa while on a Subclass 500 student visa. Check condition 8503, BVA work rights and what happens to your study obligations.",
        "og_url":"https://www.visaiq.com.au/partner-visa-while-on-student-visa",
        "h1_old":"Partner Visa While on Student Visa —",
        "h1_new":"820 Visa on Student Visa Australia 2026 —",
    },
    {
        "file": "partner-visa.html",
        "title": "Partner Visa Australia 2026 — 820/801, $9,095 &amp; Timeline | VisaIQ",
        "desc":  "Partner visa (820/801) costs $9,095 for both stages in 2026. Processing: 16 months at 50th percentile, 24 months at 90th. Free timeline calculator included.",
        "og_url":"https://www.visaiq.com.au/partner-visa",
        "h1_old": None,
        "h1_new": None,
    },
    {
        "file": "points-calculator.html",
        "title": "Australia PR Points Calculator 2026 — Instant Score | VisaIQ",
        "desc":  "Calculate your Australian skilled migration points score instantly. Based on 2026 DHA Schedule 6D criteria. See if you have enough for 189, 190 or 491 today.",
        "og_url":"https://www.visaiq.com.au/points-calculator",
        "h1_old":"Australian PR Points Calculator 2026 — Official DHA Points Test",
        "h1_new":"Australian PR Points Calculator 2026 — Instant Score Based on Live DHA Criteria",
    },
    {
        "file": "rounds.html",
        "title": "189 &amp; 190 Invitation Rounds 2026 — Updated Within 48hrs | VisaIQ",
        "desc":  "Live tracker for 189 and 190 visa invitation rounds across all Australian states. Updated within 48 hours of each round. See days since last state round ran.",
        "og_url":"https://www.visaiq.com.au/rounds",
        "h1_old":"Australian Invitation Rounds 2026 — Live Round Tracker All States",
        "h1_new":"Australian 189 &amp; 190 Invitation Rounds 2026 — Live Tracker Updated Within 48 Hours",
    },
    {
        "file": "student-pathway.html",
        "title": "Student Visa to PR Australia 2026 — Your Personalised Roadmap | VisaIQ",
        "desc":  "International student in Australia? Map your exact path from Subclass 500 to 485 to EOI and PR. Enter your degree and nationality once — get a personalised plan.",
        "og_url":"https://www.visaiq.com.au/student-pathway",
        "h1_old":"Student Visa to Australian PR 2026 — 500 to 485 to PR Complete Guide",
        "h1_new":"Student Visa to Permanent Residency Australia 2026 — Personalised Roadmap from 500 to PR",
    },
]


# ─────────────────────────────────────────────────────────────────
# RUN PATCHES
# ─────────────────────────────────────────────────────────────────

def main():
    repo_dir = os.path.dirname(os.path.abspath(__file__))
    ok, warn, skip = 0, 0, 0

    for p in PATCHES:
        fname = p["file"]
        fpath = os.path.join(repo_dir, fname)

        if not os.path.exists(fpath):
            print(f"  SKIP (not found): {fname}")
            skip += 1
            continue

        with open(fpath, 'r', encoding='utf-8') as f:
            html = f.read()

        original_len = len(html)
        html = patch(
            html,
            title   = p["title"],
            desc    = p["desc"],
            og_url  = p.get("og_url"),
            h1_old  = p.get("h1_old"),
            h1_new  = p.get("h1_new"),
        )

        # Verify title was updated
        if p["title"] not in html:
            print(f"  WARN: title not found after patch — {fname}")
            warn += 1
        else:
            print(f"  OK: {fname}")
            ok += 1

        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(html)

    print(f"\n{'─'*50}")
    print(f"Done. {ok} patched · {warn} warnings · {skip} skipped")
    print(f"{'─'*50}")
    print("\nNext steps:")
    print("  git add -A")
    print("  git commit -m 'SEO: batch metadata update — titles, descriptions, H1s'")
    print("  git push")
    print("\nVercel will auto-deploy after push.")


if __name__ == "__main__":
    main()
