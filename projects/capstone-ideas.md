# Capstone Ideas

> Twenty-five ideas sized for three weeks, a list of ideas that are too big, and a method for shrinking your own idea until it fits.

The best capstone is a small app you care about, finished and secure, with one or two things done really well. Use these ideas as they are, remix them, or use them to size-check your own. Every idea must follow the [three project rules](README.md#the-three-project-rules).

**Feature types** (you need at least two; pairs at least three; details in [capstone.md](capstone.md#feature-types-include-at-least-two)):

- **(a)** server-side API call with a hidden key, for example an LLM feature
- **(b)** database with access rules (row-level security) and/or sign-in
- **(c)** data visualization
- **(d)** external public API

Each idea lists the feature types it would naturally use and a **scope warning**: the part most likely to eat your three weeks.

## Learning and study

| Idea | What it does | Features | Scope warning |
|---|---|---|---|
| **Quiz-me study buddy** | Paste your notes; an LLM writes five multiple-choice questions; your scores are saved and charted over time | a, b, c | Grading free-text answers with an LLM is unreliable. Stick to multiple choice |
| **Flashcards with spaced review** | Decks of cards; cards you miss come back sooner; a chart of cards learned per week | b, c | Keep the scheduling rule simple (three boxes: new, learning, known) |
| **Vocabulary builder** | Save words you meet; an LLM writes example sentences; review mode | a, b | The model can be wrong about meanings and translations. Label its output as AI-generated |
| **Plain-English error explainer** | Paste an error message; get an explanation and where to look; keep a history of errors you've solved | a, b | Warn users never to paste keys. Strip anything that looks like a key on the server before calling the model |
| **Pomodoro study stats** | Focus timer, sessions saved by subject, weekly chart | b, c | Timers in background tabs are unreliable. Save start and end times, not ticks |

## Personal life and habits

| Idea | What it does | Features | Scope warning |
|---|---|---|---|
| **Habit tracker with a streak heatmap** | Tick habits daily; a calendar heatmap shows streaks | b, c | Dates and time zones are harder than they look. Define "a day" in your spec |
| **Workout log with personal bests** | Log exercises and sets; chart progress per exercise | b, c | Don't add a big exercise catalog. Let users type their own exercise names |
| **Mood and energy journal** | Short daily entries; weekly chart; optional LLM summary of the week | b, c, a | Sensitive data. Demo only with made-up entries, and don't send real journal text to a free AI tier |
| **Application tracker** | Track job or internship applications through stages; a chart of your pipeline | b, c | Personal data. Use invented companies and contacts in the demo |
| **Decision helper** | List options, weight your criteria, see a chart of scores; an LLM plays devil's advocate | c, a | The weighting math is easy; the interface for editing weights isn't. Sketch it first |

## Food and home

| Idea | What it does | Features | Scope warning |
|---|---|---|---|
| **Fridge-to-dinner** | Keep a pantry list; an LLM suggests recipes from what you have; save favorites | a, b | AI suggestions are not allergy or safety advice. Say so on the page |
| **Meal planner with a shopping list** | Plan the week's meals; generate a combined shopping list; chart meals by category | b, c | Nutrition data is messy. Skip calories, or use a small made-up table |
| **Plant care log** | Log waterings; local weather adjusts the "water soon" hint; watering history chart | d, b, c | Ask for a city, never a home address. Cache weather results so you don't hit rate limits |
| **Household chore rota** | Chores rotate among housemates (nicknames); a fairness chart shows who did what | b, c | Sharing data between several accounts makes the access rules much harder. Start with one account that manages the whole house |

## Hobbies and fun (single-player)

| Idea | What it does | Features | Scope warning |
|---|---|---|---|
| **Reading tracker with book search** | Search a public book API to add books; track pages; chart pages per month | d, b, c | Search results are messy (many editions). Show the top five and let the user pick |
| **Board-game night stats** | Record games and scores for a regular group (nicknames); win-rate charts | b, c | This is score-keeping, not a multiplayer game. Keep it that way |
| **Music practice log** | Log practice sessions; an LLM suggests tomorrow's practice plan; weekly totals chart | b, a, c | Keep the LLM's job narrow (one plan, a fixed format) |
| **Story-prompt generator** | Pick a genre and mood; an LLM writes a prompt; save your drafts | a, b | Long outputs use more of your quota. Set a maximum length on both input and output |

## Data and the world

| Idea | What it does | Features | Scope warning |
|---|---|---|---|
| **City weather and air dashboard** | Pick a city; charts of the week's forecast and air quality | d, c | Pick one or two data series. Every extra chart is extra testing |
| **Public data explorer** | Choose one open dataset (your city's bikes, trees or library loans) and chart it with filters | d, c | Cleaning the data can take all your time. Choose a dataset that's already tidy, and a small slice of it |
| **Trip budget planner** | Plan a trip budget by category; convert currencies with a public rates API; spending chart | d, c, b | No real payments and no bank connections. Users type amounts by hand |
| **Countdown board with public holidays** | Your events plus public holidays from an API; days-until view | d, b | Holiday APIs differ by country. Support one country well |

## Clubs and groups (with made-up members)

| Idea | What it does | Features | Scope warning |
|---|---|---|---|
| **Club event sign-up board** | An organizer posts events; members sign up; only the organizer can edit or delete; a chart of turnout | b, c | Public sign-up forms attract spam. Demo with test accounts only, no real names |
| **Office-hours queue** | Students join a queue; a helper marks them done; stats on wait times | b, c | Live updates are hard. A "Refresh" button is fine for a capstone |
| **Class Q&A with AI first drafts** | Post a question; an LLM drafts an answer the organizer approves before anyone sees it | a, b | Two roles (asker, organizer) need careful access rules. Write them in `SPEC.md` before you build |

## Too big for three weeks

These fail in a three-week, free-tier capstone, however good the agent is. Each has a smaller version that works.

| Too big | Why | Try instead |
|---|---|---|
| **A social network** | Profiles, feeds, following, moderation and privacy rules for many users. Moltbook, a vibe-coded social network, exposed about 35,000 emails through missing access rules ([Wiz](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys)) | A single-purpose board for one group, with made-up members and one clear access rule |
| **A marketplace** | Two kinds of users, listings, messaging, trust and payments | A "wish list" you share read-only with a link |
| **Anything with real payments** | Against free hosting terms, and high-stakes code | A fake "checkout" button that shows a thank-you message |
| **Anything with real personal data** | Health records, other people's contact details, student records: legal and ethical risk | The same app with made-up data, and a README note on what real use would require |
| **Multiplayer real-time games** | Real-time sync, cheating, lag and hosting are each a project in themselves | A single-player game with a saved leaderboard (b + c) |
| **An AI agent that acts for you** (reads your email, posts for you) | Private data, untrusted content and a way to send data out: the "lethal trifecta" ([Willison](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)) | An LLM that drafts, and you copy the draft yourself |
| **A native phone app** | App stores, device builds and review processes | A web app that works well on a phone screen |
| **"Like Spotify / Uber / Airbnb, but for X"** | Each is years of work by large teams | The one screen of it you'd use most |

## How to shrink an idea

Work through these steps until your idea fits on one page of `SPEC.md` and three weeks of evenings.

1. **One user, one main screen, one core loop.** Write the loop as a sentence: "I add a thing, the app does something with it, I see the result."
2. **Replace "everyone" with "me".** If the idea needs strangers to use it, make a version that's useful to you alone first.
3. **Replace real-time with refresh.** A "Refresh" button beats live updates.
4. **Replace accounts with one account, or none.** Add sign-in only if your access rules need it, and then only email sign-in with test users.
5. **Replace real data with made-up data.** Make a small, realistic fake dataset early; you'll need it for tests and your demo anyway.
6. **Keep only the MUSTs.** Move every SHOULD and COULD to "Out of scope". You can add them back in week 8 if you have time.
7. **Pick exactly two feature types** (three for pairs). Extra ones rarely get the testing and security work they need.
8. **Run the week 6 test.** Could you demo the core loop, badly, by the end of week 6? If not, cut again.

**A worked example.** Idea: "Instagram for plant lovers".

- Step 2: forget strangers; it's for me and my plants.
- Step 4: no followers, no profiles. One account.
- Step 5: photos mean file storage and privacy questions; drop them.
- Step 7: pick (b) a database with row-level security for my plants and waterings, and (d) a weather API for a "water soon" hint. Add (c) a watering-history chart only if week 7 goes well.
- Result: **"Plant care log"**, from the list above. Still yours, and it can be finished.

## Before you pitch: a checklist

- [ ] I can describe the problem and the user in two sentences.
- [ ] I picked at least two feature types (pairs: three), and I know what each one does in my app.
- [ ] My idea breaks none of the [three project rules](README.md#the-three-project-rules).
- [ ] It isn't on the "too big" list, or I've shrunk it.
- [ ] I've written down at least three things that are out of scope.
- [ ] I know my biggest risk and have a plan B.

Then write your [pitch](capstone.md#the-pitch).
