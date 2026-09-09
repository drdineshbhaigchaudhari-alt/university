# Image credits and licensing

All 49 photographs in `client/public/assets/img/` were downloaded from
**Unsplash** and are used under the [Unsplash
License](https://unsplash.com/license), which permits free commercial and
non-commercial use without attribution or a licence purchase.

Attribution is not required, but it is good practice. If you keep any of these
images, the original photograph for a given file can be found at:

```
https://unsplash.com/photos/<the numeric id in the original filename>
```

The files were renamed to semantic names during the build, so the mapping from
filename back to Unsplash id is no longer in the repository. If you need it,
re-download rather than guess.

## A note about Freepik

Freepik was requested as an image source. It was **not** used, for two reasons:

1. Freepik does not permit hot-linking, and downloading its assets requires an
   authenticated account. The download would not have been a licensed one.
2. Most Freepik content requires either a paid subscription or visible
   attribution. Shipping it without either would put the site in breach of the
   licence.

If you hold a Freepik licence and want to use their assets instead, download
them through your own account and drop them into
`client/public/assets/img/`, keeping the existing filenames — nothing else
needs to change, because every image path lives in `shared/content/`.

## Replacing the images

Every image path is a string in `shared/content/` (`schools.js`,
`facilities.js`, `people.js`, `happenings.js`) or a literal in a page
component. Grep for `/assets/img/` to find them all.

To swap an image while keeping the layout, match the aspect ratio the slot
expects:

| Slot | Aspect | Notes |
| --- | --- | --- |
| Hero backgrounds | 3:2 landscape, ≥ 1400 px wide | Cropped to `center 38%`; keep the subject in the upper half |
| Card and facility images | 16:10 and 4:3 | `object-fit: cover`, so edges may crop |
| Portraits (faculty, alumni, dean) | 1:1 square, 560 px | Head centred, slight top bias |
| Figure blocks | 16:9 and 1:1 | Used in the stacked figure layouts |

Files were re-encoded to progressive JPEG at quality 82 and capped at 1400 px
wide, which brought the whole set to roughly 8 MB. Keep new images within that
budget — a university home page that ships 40 MB of photography is a slow one.

## Unused spares

Seven images are in the repository but not currently referenced:

```
anatomy-brain.jpg   digital-health.jpg   lab-ampoules.jpg   meds-flatlay.jpg
tablets-bottle.jpg  tablets-macro.jpg    tablets-mixed.jpg
```

They are kept as alternatives for news items and section headers. Delete them
if you want a leaner repository.

## Other assets

- `logo.svg`, `logo-light.svg`, `favicon.svg` — hand-drawn placeholder crest
  (a mortar, pestle and leaf on a shield). Original to this project, no
  third-party rights, and intended to be replaced with your real crest.
- All icons in `client/src/components/Icon.jsx` are hand-written SVG paths,
  not taken from an icon library.
- Typefaces: **Inter** and **Source Serif 4**, both served from Google Fonts
  under the SIL Open Font License.

## People in the photographs

The portraits are stock images of models and are captioned with **invented
names, roles and qualifications**. Do not publish them as real faculty,
students or alumni — that would misrepresent the individuals pictured as well
as your institution. Replace them with photographs of your actual staff, taken
with their consent, before the site goes live. See the checklist in
`README.md`.
