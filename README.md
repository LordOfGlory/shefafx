# Shefa Forex Academy website

A static website for Shefa Forex Academy (Kampala, Uganda), built with React, TypeScript, Vite, Tailwind CSS and Lucide icons. It has no backend, no database and no paid hosting requirement, and deploys free to GitHub Pages.

**Business model on the site:** one course, **Shefa Forex Trading Mastery** (Beginner to Advanced), one enrolment, one payment covering all nine modules. The site never shows separate level purchases, and it never invents a fee or duration.

## Run it locally

You need Node.js 20 or newer.

```bash
npm install
npm run dev        # development server with live reload
npm run build      # type-check and build into dist/
npm run preview    # preview the production build
```

## Deploy to GitHub Pages

1. **Create a repository.** On github.com choose New repository, name it (for example `shefa-forex-academy`), and leave it empty.
2. **Upload the project.** From this folder run:
   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/shefa-forex-academy.git
   git push -u origin main
   ```
3. **Configure Pages.** In the repository go to Settings, then Pages. Under Build and deployment, set Source to **GitHub Actions**.
4. **Let the workflow run.** The file `.github/workflows/deploy.yml` builds the site and publishes it on every push to `main`. Watch progress in the Actions tab. You can also run it by hand with Run workflow.
5. **Open the site.** When the workflow finishes it is live at `https://YOUR-USERNAME.github.io/shefa-forex-academy/`.

The Vite `base` is set to `./` and the router uses hash URLs (`/#/courses`), so the site works at a repository subpath, at a custom domain, and after a page refresh. You do not need to change the base path if you rename the repository.

### Use a custom domain later

1. Buy a domain and, in Settings, Pages, enter it under Custom domain.
2. At your domain provider add the DNS records GitHub lists on that page.
3. Turn on Enforce HTTPS once GitHub finishes checking the domain.
4. Update the address inside `public/sitemap.xml` and `public/robots.txt`.

### Before launch checklist

- Fill in your contact details and the fee in `src/config/academy.ts` (below).
- Replace `YOUR-USERNAME` in `public/sitemap.xml` and `public/robots.txt` with the real site address.
- Add the instructor profile.
- Have the Privacy Policy page (`src/pages/Privacy.tsx`) reviewed so it matches how you actually operate.

## Change academy information

Everything is in one file: `src/config/academy.ts`.

| What | Where in the file |
| --- | --- |
| Name, tagline, location, mission, vision | top of the file |
| Email, telephone, WhatsApp | `contact` |
| Facebook, Instagram, TikTok, YouTube links | `social` |
| Course fee and duration | `course.fee` and `course.duration` |
| Instructor name, title, bio, photo | `instructor` |

Leave a value as `''` and the site shows a clearly marked "To be added" note, or for the fee, "Contact the academy for course fees." Nothing is invented.

### Update contact information

Set `contact.email`, `contact.phone` and `contact.whatsapp` (digits only with country code, such as `256700000000`). The email address is also where the contact and enrollment forms are addressed. Until an email is set, the forms prepare the message on screen for copying instead of opening an email application.

### Set the course fee and duration

```ts
course: {
  fee: 'UGX 000,000 (one-time payment)',
  duration: '12 weeks',
  ...
}
```

The fee appears on the home page, Courses page, Course Details page and Enrollment page. Keep it a single figure for the complete course.

## Edit the course curriculum

The course and its nine modules are in `src/data/course.ts`. Edit a module's title, summary or topics there. The Course Details page, the course card and the learning journey all read from this file. The module titles and topic lists were drafted from the academy brief, so review them against your real syllabus.

## Add or edit resource articles

Open `src/data/resources.ts`, copy an article object, give it a new unique `slug`, set its `category`, `description` and `paragraphs`. It appears on the Resources page automatically.

## Replace images

The hero chart is a drawn illustration (`src/components/ChartIllustration.tsx`), so the site needs no image files to run. To add photos, put them in `public/images/` and reference them as `images/your-photo.jpg`. The instructor photo is set with `instructor.photo` in the config. To add a social sharing image, place it in `public/images/` and add an `og:image` tag with its full web address in `index.html`.

## Forms

The contact and enrollment forms are mailto-based. They validate the required fields, then open the visitor's own email application with the recipient, subject and message filled in. The visitor needs an email application set up on their device. The site never claims a message was sent, never takes payment, and never confirms enrollment. The enrollment form offers only the single course.

## Project structure

```
public/            favicon, robots.txt, sitemap.xml, images/
src/
  config/academy.ts      academy details, contact, fee, instructor
  data/course.ts         the one course and its nine modules
  data/resources.ts      sample articles
  components/            Navbar, Footer, Hero, CourseCard, forms, ...
  pages/                 Home, About, Courses, CourseDetails, Mentorship,
                         Resources, Contact, Enrollment, Privacy
  styles/index.css       Tailwind and brand tokens
.github/workflows/deploy.yml
```

## Brand

Midnight Navy `#0B1220`, Dark Charcoal `#111827`, Gold `#D4AF37`, White and Light Gray `#F3F4F6`. Fonts are Fraunces (headings), Figtree (text) and JetBrains Mono (small labels), loaded from Google Fonts.

## Notes

- Search engines treat hash routes as one page, so `sitemap.xml` lists the home page only. If you later move to a custom domain and want separate indexable pages, the router can be switched to path-based URLs with a 404 fallback.
- Placeholder content (contact details, instructor, fee, social links) is shown as clearly marked "To be added" text. No testimonials, awards, partnerships or results are included.
- Trading leveraged products carries a high level of risk. The site carries a risk disclaimer in its footer, and the academy provides education only.
