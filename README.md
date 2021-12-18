# EmailX (EMX)

Make HTML email development (kinda) fun.

## Get Started

1. Clone or fork this repo.
2. Run `npm install`
3. Edit content in `/emails/` (if you add a new email, ensure it's available in the the `index.tsx` export).
4. Run `npm run generate`
5. Voila! View HTML output in `/output/` folder (currently filenames may be nonexistent or broken.. WIP!)

## Why EMX?

Table-based HTML email layouts with strict HTML4 doctypes are the bane of the 
web development experience. _Does HTML email even count as web development?_ **Yep.**
Hand-coding strict table-based HTML4 markup (while remaining conscious of 
numerous CSS limitations and email client quirks) is challenging, yet arguably 
one of the most mundame forms of web development known to humankind.

HTML WYSIWYG builders are janky at best, and never seem to jive 100% with the provided 
design. Compromises are inevitable with those visual builders, and frankly **I'm tired 
of fighting with them.** So, I chose to fight with something fun instead: JavaScript 
tooling and Node.

## How does EmailX (EMX) help?

**WELL, GLAD YOU ASKED!** 

1. **Modern Syntax** - this little project here lets you code up emails with React 
and/or MDX. Predefine one or multiple layouts, write your emails, make upper management 
happy with their sweet new marketing campaigns going out, and then get back to the fun stuff.

2. **Flexible Styling** - use styled-components, SCSS, or plain ol' CSS.... or whatever you
want to add. After running `npm run generate` your final .html email files will be found in the `/output/` 
folder _with all CSS inlined!_

3. **Valid HTML4 + Tables** - final HTML output passes W3C Validator's HTML4 strict checks. Final HTML
output is a table-based layout for consistent end results across various email clients.

4. **Shimmed** - edge-case shims are included to target special-case email clients.

5. **There's plans for more!** - check out the loosely-defined roadmap (i.e. feature wish-list) below 
to see where this project might be headed.

## TODO:

- Get frontmatter working in MDX files.
- Create a BackgroundImage component that uses CSS background images in tandem with the Outlook 
[VML hack.](https://www.emailonacid.com/blog/article/email-development/emailology_vector_markup_language_and_backgrounds/)
- Include remote server support within the `generate` process. Remote server credentials would require username/pass or 
username/key file within a `.env` file. This process will:
  - Identify `<img>` components within the email source.
  - Push the `<img>` source file content to remote server directory.
  - Replace `<img src=` in HTML email with the public remote-hosted file.
- Look into how to set this tooling up as a pipeline to fetch or insert dynamic content.
- Include footer templates with links typically required by email services like Mailchimp, Pardot, etc.
