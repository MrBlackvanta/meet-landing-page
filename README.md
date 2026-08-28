# Meet landing page

My solution to the [Meet landing page](https://www.frontendmentor.io/challenges/meet-landing-page-rbTDS6OUR)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://meet-landing-page.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/meet-landing-page

## Built with

- Next.js 16, App Router
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

**Contrast.** Two colours moved, and between them they fix four failing pairings:

|                               | design    | built     | contrast     |
| ----------------------------- | --------- | --------- | ------------ |
| Body copy and step numbers    | `#87879D` | `#71718B` | 3.36 to 4.53 |
| Cyan (overline, button, band) | `#4D96A9` | `#346471` | 3.22 to 6.27 |

Darkening the cyan also fixes the two-tone button label and the copy sitting over the
footer photo, so I got to keep both the two-tone label and the photo showing through the
tint instead of flattening either.

Two gaps I left, both invisible to automated tooling: the design's hover colours drop the
label well below AA, and I shipped them as drawn since axe only tests the resting state.
The step badge ring and connector line are decorative and don't identify a control, so
1.4.11 doesn't apply.

**The footer band's tint isn't in the exported assets.** The design file embeds a
pre-tinted bitmap and the shipped JPEG is untinted, so I solved for the overlay by least
squares against both. It comes out as the brand cyan at 90%, which is what the CSS does.

**Breakpoints between the three supplied frames are mine.** The gallery goes to four
columns at 640px, carrying the design's aspect ratios so cells scale rather than
letterbox. The hero takes its two-image desktop layout at 1280px, below which the centred
text column collides with the faces.

The desktop CTA row uses the design's own 12-column grid rather than hardcoded widths,
which lands within about 3px of the drawn column widths.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
