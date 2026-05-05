# Content

## App theme

 **System Role & Task:**
You are an expert UI/UX developer. Build a single-page HTML file using Tailwind CSS (no React).
Include inline JavaScript for interactivity for an English grammar assessment application. 

**Core Design Philosophy:**
- The design must be controlled, minimal, and cohesive.
- Maintain high contrast between typography and backgrounds.
- Avoid any decorative clutter, unnecessary icons, or unprompted bright colors.
- Keep the layout strictly mobile-first with tight, consistent spacing (strictly 16px to 24px padding, e.g., `p-4` to `p-6`).

**Global Theming & Atmosphere:**
- **Global Background:** Use a very deep, rich midnight blue (`bg-[#060B19]`).
- **Lighting & Blur:** Incorporate gentle blur effects. Add a very subtle, soft radial gradient behind the main content area (`from-[#131E3A] to-transparent`) combined with backdrop blurring to give a sense of depth without clutter.

**Card & Container Styling:**
- **Main Content Cards:** Use a slightly lighter, frosted navy background for the main containers (`bg-[#111A2C]`).
- **Borders & Shadows:** Apply a very subtle top-border highlight (`border-t border-white/5`) and a soft, dark drop shadow.
- **Corners:** Ensure prominent, consistent rounded corners across all main containers (`rounded-2xl` or `rounded-3xl`).

**Typography System:**
- **Brand Logo Header:** Top part: "F L U E N C Y" in a tiny, widely tracked (letter-spaced), uppercase sans-serif font (`tracking-[0.3em] text-[10px] text-gray-300`). Bottom part: "bridge" in a large, elegant, italicized serif font (like Playfair Display) in pure white (`text-white text-4xl italic`).
- **Headings & Main Text:** High contrast pure white (`text-white`), bold, and highly legible sans-serif.
- **Secondary Text:** Soft slate (`text-gray-400`).

**Interactive Elements (Inputs, Options & Buttons):**
- **Form Inputs & Multiple Choice Options:** Inputs must be minimal, highly transparent, and perfectly aligned with the dark theme. Use an extremely dark background (`bg-[#080D1A]`) or a highly transparent overlay (`bg-white/5`), with a barely visible border (`border border-white/5`). Add a gentle hover/active state (`hover:bg-white/10`).
- **Corner Radii for Options:** Standard rounded corners (`rounded-xl` or `rounded-lg`).
- **Primary Action Buttons:** (e.g., "Start Assessment", "Next") Use a controlled, vibrant royal blue (`bg-[#2563EB]`). Text must be pure white. Use rounded corners (`rounded-xl`).
- **Progress Bars:** Use the exact same royal blue over a minimal, dark muted track (`bg-white/10`), maintaining the rounded aesthetic.

**Footer & Navigation Layout:**
- **Bottom Footer:** Always include a fixed or sticky bottom footer area.
- **Home and Back Button:** The footer must contain a clear, minimalist "Home" and “back" and button or icon to allow the user to easily navigate back to the homepage/or go back a page. This button should use a low-opacity white or soft slate color (`text-gray-400 hover:text-white`) to prevent distracting from the primary assessment actions, maintaining the cohesive dark theme. It should be small, not taking too much space on the page. 

## App content
### Overall format

IMPORTANT - the page you outout should be in HTML syntax, not REACT one. 

The page should act as an overall revison page for the topic I mentioned in the beginning. 
It shold be a single page html file in that it should not need multiple html files linked together for simplicity’s and maintainability’s sake,
You should write an HTML page which follows html syntax.
In the end, it should show the time spent on the page and overall efficieny and quiz score.
### Notes section
-  Has all the information about the topic in Hinglish in a “Revise this topic” section. It is made it so every question in the quiz later can point back to it in a footnote type view along with the short explanation so student can learn about it. The notes should be
1. In Hinglish
2. It should also show which part of grammar this concept falls under and what are prerequisits to better understand this topic, they should be a google search hyperllink pressing which will open google search so students can learn about that prerequisite first. 
3. Give lot of real life examples
4. Use structured bullet hierarchies to simulate mind maps.
5. Be comprehensive but short
6. Answer key questions about the topic
7. Tackle key mistakes 
8. Logical examples, explaining why something is the way it is, or if it is wrong - why is it wrong.
9. Should have table of conten which can be navigated to
It should act as one off revison material as well as a page from where students can take notes, so it is a big responsibility - do not fumble.
Notes should always have a button to send you to the quiz section and vice versa.
- It should explain nuances as well. Aim is not to be short - you can take your sweet page space, but to not go on Ramblings.
- It should have Top Mistakes section telling about top mistakes people do while using the grammatical concept.
### Story section
Has simple English story repeatedly using the concept in different and relatable scenarios and contexts while keeping the sentence difficulty easy for easier comprehension. 
### Quiz section
The quiz section has 
- MCQs, 
- True and false, 
- Flashcards especially for types of question which are reasoning types and do not have a specific correct answers
- Correct or Not type questions in which something about the topic being learned is put in wrong and reasoning is asked as to why is it wrong or right.
- Everything should be shuffled to make sure variability.
- False positives should be there to avoid guessing
- A good reasoning in hinglish should be given as to why something is right or wrong.
- The quizzes and notes should be restricted to the topic being talked about in that it should not go out of its scope to talk about unrelated topics unless it is important to understand them to understand this topic. 
- It should have ATLEAST 100 such quiz questions baked into it.
- Those questions  shuffle each time new quiz is initiated based on total randomness; a quiz has 10 questions. Add remainder at the beginning and end of the quiz that they can start another quiz to practice more new questions. 
- It should have a “print” button allowing you to download the notes in device. Make sure they use same theming in print as well.
- It should have Download Anki file option, which formats all the 100 question in this format -  
1. Each flashcard must be written exactly as:
Question,Answer
2. Use exactly one comma per line.
3. The comma must only separate question and answer.
4. Do not use commas anywhere else.
5. Do not use colons anywhere.
6. Do not use semicolons.
7. Do not use numbering.
8. Do not use bullet points.
9. Do not write topic names.
10. Do not write deck names
11. Do not include explanations outside flashcards.
12. Do not include commentary before or after.
13. Output everything inside one single code block only.
14. No extra blank lines unless explicitly requested.

### Real life usage section 

It should give multiple real life use cases which are relevent to an Indian middle class person such that they can be used instantly within sentences. Give example sentences just below the irl usage section.
It should have 50 preloaded scenarios and sentences, and it should show 5 at once and shuffle when showing next 5.
It should hide the correct answer and should show when the eye button is pressed, it should do same for all sentences
It should give the sentence in English and explain its constructions.

1. The timer should not refresh the page each time it counts a second. It should just exist there.

```
