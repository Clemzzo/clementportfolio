## Diagnosis
- The warning shows extra attributes on `<body>` (`bis_register`, `__processed_*`) that are NOT in your server HTML.
- This is typical of a browser extension injecting attributes before React hydrates, causing a mismatch.
- Code scan found no `typeof window`, `Date.now()`, or `Math.random()` usage. `currentYear = new Date().getFullYear()` is deterministic and unlikely the root.

## Fix Steps
1. Verify extension interference:
- Open the site in an incognito window with extensions disabled or a different browser.
- If the warning disappears, the issue is extension-related and safe to ignore in development or disable that extension.

2. Optional suppression (if you prefer no dev warnings):
- Add `suppressHydrationWarning` to your root to ignore attribute mismatches caused by extensions.
- In `src/app/layout.tsx:23–27`, change `<html>` or `<body>`:
  - `<html lang="en" className="dark" suppressHydrationWarning>`
  - or `<body suppressHydrationWarning className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>`

3. Confirm no real mismatches:
- Ensure you don’t render time/randomized values during SSR, locale-specific formatting, or mutate DOM outside React.

## Verification
- Reload dev server and check the console.
- Confirm the site hydrates cleanly in incognito; if you applied suppression, the warning should be gone.

## Notes
- This warning is harmless when caused by extensions and does not affect production rendering.

Please confirm whether you want me to apply the optional suppression to `layout.tsx`. 