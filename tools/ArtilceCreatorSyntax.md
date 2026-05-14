Fluency Bridge Workspace Compiler v2.0

Official Syntax Master Guide

The Fluency Bridge Workspace Compiler uses a custom text-parsing engine to convert plain text into a complex, interactive JSON structure. Because it relies on strict pattern matching (Regex), these rules must be followed exactly. If a single bracket is missing or an extra backslash is added, the compiler may fail to read that specific block of data.

🛑 THE THREE GOLDEN RULES 🛑

NO BACKSLASHES (\): Do not escape your brackets or asterisks (e.g., never write \[ or \*). Rich-text editors sometimes add these automatically. Ensure your text is completely raw.

ALL CAPS HEADERS: The five section headers must be written in exactly this format: === SECTION NAME ===. Do not alter the spaces or the casing.

DELIMITER AWARENESS: Pay strict attention to colons (:), pipes (|), and brackets ([], {}, ()). The compiler uses these to slice the data. Do not use a pipe | inside a sentence unless you intend to split it into a phrase.

1. The Header Sections

Your document must contain exactly these five headers in this order:

=== TITLE ===

=== ARTICLE ===

=== VOCAB ===

=== GRAMMAR ===

=== QUIZ ===

2. Section Breakdown & Exact Formats

I. === TITLE ===

This is the <h1> of your page. It requires no special formatting. Just write the title on the line below the header.
Format:

=== TITLE ===
George Orwell: 1984 Chapter One


II. === ARTICLE === (The Most Critical Section)

This section builds the reading interface, the dotted phrase underlines, and the bottom-sheet popups. It is divided into "Blocks". Each sentence/paragraph is one block.

Rule 1: The Enclosure Structure
Every block must begin with this exact sequence:
[English Text] {Hindi Translation} (Grammar Explanation)

Rule 2: The Phrase Splitter (v2.0 Feature)
Inside the [ ] brackets, you can use the pipe character | to break a long sentence into smaller, clickable phrases.

Example: [It was a bright cold day | in April,] -> This creates two separate underlined phrases in the app, but they both open the same popup meaning.

Rule 3: The Vocabulary List
Immediately below the (Grammar) bracket, list the vocabulary words for that sentence.

Every word line MUST start with an asterisk *.

It MUST contain exactly 4 items separated by 3 colons :.

Format: * English Word : Hindi Meaning : Part of Speech : Deep Detail

Perfect Article Block Example:

=== ARTICLE ===
[It was a bright cold day | in April,] {Yeh April mein ek chamakdar thanda din tha.} (Simple Past tense ka use state of being batane ke liye hua hai.)
* It : Yeh : Pronoun : Dummy subject jo mausam ke liye use hota hai
* was : tha : Verb : 'Be' ka past tense form
* bright : chamakdar : Adjective : Roshni se bhara hua
* cold : thanda : Adjective : Kam tapman wala

[and the clocks | were striking thirteen.] {aur ghadiyan tera baja rahi thi.} (Past Continuous tense action ki continuity dikhata hai.)
* clocks : ghadiyan : Noun : Samay batane wale yantra
* striking : baja rahi : Verb : Ghanti bajakar samay batana
* thirteen : tera : Number : Yahan yeh ek unusual samay hai


(Note: You must leave a blank line between different blocks so they render as separate paragraphs if needed, though the parser primarily looks for the next [).

III. === VOCAB ===

This section populates the "Vocab" tab in the app.
Rule: Each line must contain exactly 4 items separated by 3 colons :.

Format:
Word : Meaning : Context/Usage Rule : Example Sentence

Perfect Vocab Example:

=== VOCAB ===
Vile : Ghatiya : Bohot bura ya nafrat ke layak : The vile weather made the journey difficult.
Gritty : Kirkira : Ret ya dhool jaisa texture : The food had a gritty feel because of the sand.


IV. === GRAMMAR ===

This section populates the dropdown accordions in the "Grammar" tab.
Rule: Each line must contain exactly 5 items separated by 4 colons :.

Format:
Title : Rule Structure : Hinglish Explanation : Text Example : Outside Example

Perfect Grammar Example:

=== GRAMMAR ===
Past Continuous : Sub + was/were + V(ing) : Past mein chal rahe action ke liye : 'clocks were striking thirteen' : He was playing cricket.
Phrasal Verb (Made for) : Subject + made for + Location : Kisi jagah ki taraf badhna : 'Winston made for the stairs' : They made for the exit.


V. === QUIZ ===

This builds the interactive testing engine. The delimiter here is the pipe |, not the colon.
Rule 1: The first word must declare the question type: mcq, tf, or flashcard (case-insensitive).
Rule 2: For Multiple Choice Questions, the Correct Index is 0-based.

0 = First Option

1 = Second Option

2 = Third Option

3 = Fourth Option

Option A: Multiple Choice (mcq)

Format: mcq | Question Text | Option0, Option1, Option2 | CorrectIndex | Explanation
Notice that options are separated by commas , inside their specific block.

Option B: True/False (tf)

Format: tf | Question Text | True, False | CorrectIndex | Explanation

Option C: Flashcard (flashcard)

Format: flashcard | Question Text | Answer Text | Explanation

Perfect Quiz Example:

=== QUIZ ===
mcq | What was the color of the moustache? | Brown, Black, White | 1 | The text mentions a heavy black moustache.
tf | The lift was working perfectly fine. | True, False | 1 | The text says it was seldom working and the current was cut off.
flashcard | Translate 'Effort' to Hindi. | Koshish | It means making an attempt to do something.


Troubleshooting Guide

If you paste your content into the compiler and click "GENERATE STUDENT APP", but the output is broken or missing data, check for these common mistakes:

"My Vocab/Grammar section is empty in the app!"

Check: Did you use colons : to separate the items? Did you provide the exact number of items required (4 for Vocab, 5 for Grammar)? If a line is missing a colon, the parser skips it.

"When I click a phrase, the popup shows no words!"

Check: Do your word lines start with an asterisk *? Did a rich-text editor add a backslash \*? Are they placed immediately under the (Grammar) parenthesis?

"My MCQ question isn't showing up correctly."

Check: Did you use pipes | to separate the 5 main chunks of the MCQ question? Did you use commas , to separate the options inside the option chunk?

"The whole sentence is one phrase, it didn't split!"

Check: Did you remember to add the pipe | inside the [English Text] brackets? (e.g., [Part 1 | Part 2]).

Follow these rules rigidly, and the Fluency Bridge Compiler will generate flawless, interactive applications every single time.
