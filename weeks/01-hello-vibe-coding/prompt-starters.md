# Week 1 — Prompt starters

Copy a prompt, replace everything in `[square brackets]`, and send it. Every prompt uses the four parts you'll study in week 2: **Goal · Context · Constraints · Done when**.

> [!WARNING]
> Your page will be public. Use a first name or nickname only. Never put your surname, email, phone number, address, or anything about other people into a prompt or onto the page.

## Starting prompts (pick one)

### A. Personal home page (recommended)

```text
Goal: Make a one-page personal home page about me that I can publish on the web.
Context: I'm a beginner in a course called Vibe Coding 101 and I have never coded. The page is for classmates and friends. About me: my name is [first name or nickname]. I'm interested in [interest 1], [interest 2] and [interest 3]. Right now I'm learning [something]. I like the colors [color 1] and [color 2].
Constraints: One single HTML file with the CSS and JavaScript inside it. No frameworks, no libraries, no external images or fonts. It must look good on a phone and on a laptop. Do not add an email address, phone number, surname or social-media links.
Done when: The preview shows my name as a big heading, a short "About me" paragraph, a list of my interests, and one button that does something fun when I click it.
```

### B. Greeting card

```text
Goal: Make an interactive greeting card web page for [occasion, e.g. a friend's birthday].
Context: I'm a beginner. The card is from [my first name] to [their first name or nickname]. The mood is [funny / warm / over-the-top dramatic].
Constraints: One single HTML file with the CSS and JavaScript inside it. No libraries, no external images or fonts; use emoji or shapes drawn with CSS instead. Works on a phone.
Done when: The card shows a closed "envelope" first; clicking it opens the card with a message and a small celebration animation; a "Play again" button closes it so it can be opened again.
```

### C. "My hobby" page

```text
Goal: Make a one-page site about my hobby, [hobby], with my name at the top so it can be my home page.
Context: I'm a beginner. I want to share [three things about the hobby: e.g. how I started, my favorite gear, a tip for beginners].
Constraints: One single HTML file with the CSS and JavaScript inside it. No libraries, no external images or fonts. Works on a phone. No personal contact details.
Done when: The page has a heading with my name, three sections for the three topics, and a small interactive part, such as a "random tip" button that shows one of five tips.
```

### D. Learning journal

```text
Goal: Make a personal home page that doubles as a learning journal for this course.
Context: I'm a beginner in an 8-week course called Vibe Coding 101. My name is [first name or nickname].
Constraints: One single HTML file with the CSS and JavaScript inside it. No libraries, no external files. Works on a phone. The journal entries are written in the HTML, not saved anywhere.
Done when: The page shows my name, one sentence about why I'm taking the course, and a list of 8 weekly entries where only week 1 has text ("Built my first web page"). Clicking an entry's title shows or hides its text.
```

## Customization prompts

Send **one** at a time. Check the preview against the "Done when" before sending the next.

```text
Goal: Change the color scheme.
Context: The page you just made.
Constraints: Keep everything else the same. Text must stay easy to read against the background.
Done when: The background and headings use [color] and [color], and all text is still readable.
```

```text
Goal: Improve how the page looks on a phone.
Context: The page you just made.
Constraints: Don't change the content.
Done when: In a narrow window the sections stack in one column, the text is comfortable to read, and nothing sticks out sideways.
```

```text
Goal: Add a footer.
Context: The page you just made.
Constraints: Small, quiet text. No contact details.
Done when: The bottom of the page says "Built with AI in Vibe Coding 101" and the current year.
```

```text
Goal: Give the page a different typeface style.
Context: The page you just made. I want it to feel more [playful / elegant / techy].
Constraints: Only use fonts that every computer already has (a "font stack"), no downloaded fonts.
Done when: Headings and text use the new style on my laptop and my phone.
```

```text
Goal: Add a gentle animation when the page loads.
Context: The page you just made.
Constraints: CSS only. Subtle, under one second. Respect people who have "reduce motion" turned on in their device settings.
Done when: The sections fade or slide in once when the page opens, and nothing moves after that.
```

```text
Goal: Add an emoji icon next to each of my interests.
Context: My interests are [list them].
Constraints: Don't change the layout. Use plain emoji characters, no images.
Done when: Each interest in the list starts with a fitting emoji.
```

## Understanding prompts

```text
Goal: Help me understand the page you just made.
Context: I'm a complete beginner. I have never written HTML, CSS or JavaScript.
Constraints: Don't change the code. Go section by section, top to bottom. For each section, quote its first line, label it HTML (structure), CSS (style) or JavaScript (behavior), and explain in one or two plain-English sentences what it does.
Done when: I could point at any part of the page and find the code that makes it.
```

```text
Which lines of code make [the thing I see on the page]? Quote them and explain each one in a sentence. Don't change anything.
```

```text
What would happen if I changed [this line] to [this]? Predict it, then tell me how I can check.
```

## Fixing prompts

When something goes wrong, give the AI the three facts it can't see:

```text
Goal: Fix a problem with my page.
Context: After your last change, [what I did, e.g. I clicked the button]. I expected [what should happen]. Instead [what actually happened, word for word if there's a message].
Constraints: Change only what's needed to fix this. Tell me what you changed and why.
Done when: [The behavior I expected] happens, and everything else still works.
```

Two failed fixes? Use the **two-strikes rule**: open a fresh chat and start again with your current code.

```text
Goal: [What I want the page to do.]
Context: Here is my current page. [paste the complete code] I tried [what I tried] and it didn't work because [what happened].
Constraints: One HTML file, no libraries. Keep everything that already works.
Done when: [Exact, checkable result.]
```

## Prompts that usually go badly

| Prompt | Why it goes badly | Try instead |
|---|---|---|
| "Make it better." | The AI guesses what "better" means and changes everything | Name one thing: "Make the heading bigger and the background calmer." |
| "Use React" or "Use Tailwind." | Adds tools and a build step you can't publish by uploading one file | "One HTML file, no frameworks, no libraries." |
| "Add a login" or "Add a contact form that emails me." | Needs a server; a single file can't do this safely | Leave it out. Servers come in week 5. |
| "Make it look like [famous site]." | Copies someone else's design and may add their images | Describe the feel: "clean, lots of white space, bold headings." |
