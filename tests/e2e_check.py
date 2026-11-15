"""E2E verification for MMA v3 refactor — runs via testing agent."""
import asyncio
from playwright.async_api import async_playwright

BASE = "https://make-manage-multiply--9i2ds1ib.preview.emergentagent.com"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        results = []

        # 1. Footer pillar links point to /framework?stage=
        page = await browser.new_page(viewport={"width": 1920, "height": 900})
        await page.goto(BASE, wait_until="networkidle")
        for pid in ["make", "manage", "multiply"]:
            href = await page.locator(f'[data-testid="footer-pillar-{pid}"]').get_attribute("href")
            results.append(f"footer pillar {pid}: {href}")

        # 2. Member Login vs Join Community
        ml = await page.locator('[data-testid="footer-link-member-login"]').get_attribute("href")
        jc = await page.locator('[data-testid="footer-link-join-community"]').get_attribute("href")
        results.append(f"member login: {ml}")
        results.append(f"join community: {jc}")
        nav_ml = await page.locator('[data-testid="nav-member-login"]').get_attribute("href")
        results.append(f"nav member login: {nav_ml}")

        # 3. Framework deep-link stage param
        await page.goto(f"{BASE}/framework?stage=multiply", wait_until="networkidle")
        sel = await page.locator('[data-testid="3m-tab-multiply"]').get_attribute("aria-selected")
        results.append(f"framework?stage=multiply aria-selected: {sel}")

        # 4. Pathway deep links
        for path in ["start", "own", "grow", "acquire"]:
            await page.goto(f"{BASE}/start?path={path}", wait_until="networkidle")
            n = await page.locator(f'[data-testid="pathway-result-{path}"]').count()
            results.append(f"pathway {path} result visible: {n}")

        # 5. CTA hrefs
        await page.goto(BASE, wait_until="networkidle")
        for tid in ["hero-cta-primary", "hero-cta-secondary", "framework-preview-cta", "final-cta-primary", "final-cta-secondary"]:
            href = await page.locator(f'[data-testid="{tid}"]').get_attribute("href")
            results.append(f"{tid}: {href}")

        # 6. Contact form submits with consent + honeypot present
        await page.goto(f"{BASE}/contact", wait_until="networkidle")
        hp = await page.locator('input[name="website"]').count()
        results.append(f"contact honeypot field present: {hp}")
        await page.locator('[data-testid="enquiry-name-input"]').fill("E2E Verifier")
        await page.locator('[data-testid="enquiry-email-input"]').fill("e2e.verify@example.com")
        await page.locator('[data-testid="enquiry-submit-button"]').click()
        await page.wait_for_timeout(2500)
        toast = await page.locator("text=Enquiry received").count()
        results.append(f"contact submit success toast: {toast}")

        # 7. Event page interest-only copy (no confirmed registration)
        await page.goto(f"{BASE}/workshops/ev-2", wait_until="networkidle")
        pending = await page.locator('[data-testid="event-dates-pending"]').count()
        results.append(f"event dates-pending panel: {pending}")

        # 8. Mobile 390px — nav, hero, pathway cards, footer
        mob = await browser.new_page(viewport={"width": 390, "height": 844})
        await mob.goto(BASE, wait_until="networkidle")
        toggle = await mob.locator('[data-testid="nav-mobile-toggle"]').is_visible()
        results.append(f"mobile nav toggle visible: {toggle}")
        await mob.locator('[data-testid="nav-mobile-toggle"]').click()
        await mob.wait_for_timeout(500)
        cta = await mob.locator('[data-testid="nav-mobile-cta-mogul-path"]').is_visible()
        results.append(f"mobile menu CTA visible: {cta}")
        mob_links = await mob.locator('[data-testid^="nav-mobile-link-"]').count()
        results.append(f"mobile nav links: {mob_links}")
        overflow = await mob.evaluate("document.documentElement.scrollWidth > 391")
        results.append(f"mobile horizontal overflow: {overflow}")
        await mob.goto(f"{BASE}/start", wait_until="networkidle")
        overflow2 = await mob.evaluate("document.documentElement.scrollWidth > 391")
        results.append(f"mobile /start overflow: {overflow2}")
        await mob.screenshot(path="/app/tests/mobile-home.png")
        await mob.goto(f"{BASE}/contact", wait_until="networkidle")
        overflow3 = await mob.evaluate("document.documentElement.scrollWidth > 391")
        results.append(f"mobile /contact overflow: {overflow3}")
        await mob.screenshot(path="/app/tests/mobile-contact.png")

        # 9. Robots noindex + sitemap presence
        home_html = await page.goto(BASE, wait_until="networkidle")
        html = await page.content()
        results.append(f"noindex present: {'noindex' in html}")

        await browser.close()
        for r in results:
            print(r)

asyncio.run(main())
