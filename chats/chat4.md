# Professional Bios

_Started 2026-06-14 08:42 UTC_

---

## User

I need help drafting some short bios for myself and Steve, here are the crappy drafts: "Dan is a product innovator with over 13 years experience in digital advertising and products with companies such as Microsoft and BBC Studios. "  and "Steve founded Mortgage Intelligence in 1997 and sold it to Close Brothers PLC. Today it powers one of the UK's largest broker networks."

## Assistant

_[tool: grep]_

Here are tightened versions. I kept them tight enough to sit in the deck's two-line bio slots, with a slightly longer option if you want more.

**Dan Turner — Co-founder & CTO**
- *Short:* "Product innovator with 13+ years building digital advertising and consumer products at Microsoft and BBC Studios."
- *Slightly longer:* "Product and tech leader with 13+ years shipping digital advertising and consumer products at the likes of Microsoft and BBC Studios."

**Steve Royal — Co-founder & CEO**
- *Short:* "Founded Mortgage Intelligence in 1997 and sold it to Close Brothers PLC — today it powers one of the UK's largest broker networks."
- *Slightly longer:* "Founder of Mortgage Intelligence (1997), acquired by Close Brothers PLC and now powering one of the UK's largest broker networks. A proven high-street operator and exited founder."

A few notes:
- I cut "with over... experience in... and products with companies such as" — investor bios read better when you lead with the punch and drop hedging words.
- For Steve I added an implied positioning line ("proven high-street operator and exited founder") since the team slide's thesis is "the high street and the technology." Drop it if it's too much.
- One inconsistency to flag: the deck currently lists Steve as CEO and Dan as CTO, but Dan's bio reads as product/commercial rather than engineering. Worth confirming the titles match the people.

Want me to drop these straight into the team slide (slide 15)?

## User

see this recent discussion with my colleague, can you help me draft up a slide to hit this brief? ""

## Assistant

Let me look at the deck to match its design system before drafting the slide.

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

Now I understand the design system. Let me check the exact numbering scope before inserting.

_[tool: grep]_

The numbering's already partly inconsistent. I'll insert the Preface as a new teal slide right after the cover and renumber cleanly. Let me grab the team slide to get Dan's exact name/title.

_[tool: read_file]_

Now I'll build the Preface slide — a teal "messianic" quote from Dan, placed right after the cover — and renumber the deck cleanly. Here's the copy I landed on, hitting Steve's brief (new market for the smallest retailer + the three forces: today-only price, scarcity, FOMO):

_[tool: str_replace_edit]_

Now renumber the rest of the deck (data-labels + visible slide-nums) so it reads cleanly:

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

_[tool: get_webview_logs]_

_[tool: save_screenshot]_

_[tool: show_html]_

_[tool: sleep]_

_[tool: save_screenshot]_

The slide overflows vertically — quote is too large/narrow. Let me tighten the sizing.

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: sleep]_

_[tool: save_screenshot]_

Fits now. Two glitches: the decorative quote mark overlaps the eyebrow, and the first pill's label wraps and collides with its subtitle. Fixing both:

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: sleep]_

_[tool: save_screenshot]_

Clean and on-brand. One small thing — let me guarantee the eyebrow never wraps:

_[tool: str_replace_edit]_

I added a new **Preface** slide (slide 02, right after the cover) — a teal, high-impact CTO quote from Dan that hits Steve's brief, and renumbered the rest of the deck so the labels stay consistent.

The slide reads:

> **"For the first time, the smallest shop on the high street can do what only the giants ever could — turn an empty hour into a sale, in real time.**
> Last Minute Local doesn't fight for the high street. It builds it an entirely new market — powered by the three forces every great deal has always run on."
> — Dan Turner, Co-founder & CTO

The three forces are pulled out as pills below: **A price for today** (real, right now) · **Scarcity** (when it's gone, it's gone) · **FOMO** (the pull to act) — echoing the cover's three-word treatment.

A couple of notes for you and Steve:
- I went "high-level and aspirational" but kept it credible — happy to push it more "messianic" (bolder, more sweeping) or pull it back if it's too much.
- I dropped the literal words "AI-powered" from the quote itself since the AI mechanics get their own slide later, but I can work the phrase in if Steve wants AI named explicitly up front.

_[tool: ready_for_verification]_

Pre-existing overlaps on slides 8/10/17 aren't mine. But my pill subtitles are 19px — under the 24px floor. Bumping them:

_[tool: run_script]_

_[tool: ready_for_verification]_

All remaining findings are pre-existing (phone-mockup micro-type on slide 04, and overlaps on 08/10/17) — none from the Preface slide, which is now clean. The empty `#root` warning is benign (the deck mounts into `deck-stage`, not `#root`).

Done. The Preface slide is in as slide 02 with on-brand styling and the deck is renumbered. Let me know if you want it pushed bolder/more "messianic," the AI angle named explicitly, or the three pills reworded.

## User

I think the AI angle need to be mentioned explicitly, the FOMO and Scarcity bits in Steve's message should be implicit in the quote but not explicitly listed on the page - try again, this needs to be really compelling and emotive

## Assistant

Got it — removing the explicit pills, weaving scarcity + FOMO into the quote itself, and naming AI directly. Let me read the current slide and rewrite it.

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: sleep]_

_[tool: save_screenshot]_

Overflowing again — the quote's too large and the eyebrow/attribution are clipped. Tightening the copy and scale:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: sleep]_

_[tool: save_screenshot]_

_[tool: show_html]_

_[tool: sleep]_

_[tool: save_screenshot]_

The quote's last line collides with the sub-paragraph (a `text-wrap: balance` render issue at that height). Let me shorten the quote and remove the balance to make it robust:

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: sleep]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

Clean, emotive, AI named explicitly, scarcity and FOMO now woven into the words rather than listed. Let me lock the attribution to one line and ship:

_[tool: str_replace_edit]_

The Preface slide is rewritten. It now reads:

> **"For the first time, AI gives the smallest shop the power only the giants ever had — to sell a quiet, fading hour before it's gone for good.**
> An entirely new market for local business — a real, right-now offer in your pocket from a few doors away, gone the instant someone else says yes."
> — Dan Turner, Co-founder & CTO

What changed per your note:
- **AI named explicitly** in the opening line.
- **Pills removed** — scarcity ("a quiet, fading hour," "gone for good") and FOMO ("gone the instant someone else says yes") are now felt in the language rather than spelled out.
- Tightened to one clean, emotive statement with room to breathe.

_[tool: ready_for_verification]_

All flagged findings are pre-existing on other slides (phone-mockup micro-type on 04, and the overlaps on 08/10/17) — none on the Preface slide, which is clean. The empty `#root` warning is benign here (the deck mounts into `deck-stage`).

Done. The Preface (slide 02) now names AI up front and lets scarcity + FOMO live inside the language. Happy to push it even bolder or dial the emotion if Steve wants.

