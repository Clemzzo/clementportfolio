## Goal
- Replace the code icon button in navigation with a circular avatar image that you can swap later.

## Changes
- In `src/components/navigation.tsx:48–55`, replace the `Button` content:
  - Keep the `Button` wrapper for focus styles and click behavior.
  - Replace `<Code className="h-6 w-6" />` with a `next/image` avatar.
- Avatar specifics:
  - Use `src="/next.svg"` from `public` as a temporary placeholder.
  - Set `width={32}` and `height={32}` with `className="rounded-full"` to render as a circle.
  - Add `alt="Avatar"` and `aria-label="Home"` on the button.
- Preserve existing interaction:
  - Keep `variant="ghost"`, `size="icon"`, and `onClick={() => handleNavClick('#home')}`.
- Keep the text label `Clement Kingsley` unchanged.

## Result
- You get a circular avatar in the navbar; you can later replace the source with your real image (e.g. `/avatar.jpg`) without further code changes.

## Notes
- No new dependencies or components introduced; uses built-in `next/image` and existing `Button` styling.

Please confirm to proceed with implementing these changes.