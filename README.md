# Pink Login Guard

Create a complete responsive cybersecurity educational web project called "Vulnerable Login Page Analyzer".

The project should be a beautiful, modern, professional frontend application designed for students to demonstrate how common vulnerabilities in login pages can be identified.

IMPORTANT PROJECT REQUIREMENTS

Use ONLY these three main files:

index.html

style.css

script.js

Do not use React, TypeScript, Tailwind, Bootstrap, backend frameworks, databases, or unnecessary dependencies.

The project must work directly by opening index.html in a browser.

Make the project GitHub Pages compatible and ensure all paths are relative so it can be directly pushed/synced to GitHub.

PROJECT TITLE

VULN LOGIN SCANNER

Subtitle:

Educational Login Security Analyzer

Add a small badge:

CYBERSECURITY • WEB SECURITY • EDUCATIONAL

DESIGN THEME

Use a completely unique Pink + White cybersecurity theme.

Main colors:

White: #ffffff

Soft pink: #fff0f6

Light pink: #ffd6e8

Primary pink: #ff4f9a

Dark pink: #e91e73

Deep pink: #c2185b

Dark text: #35152a

Soft gray: #6b5b66

Do NOT use the usual black/green hacker theme.

The website should look elegant, futuristic, clean and premium while still looking like a cybersecurity application.

Use:

Glassmorphism cards

Soft pink gradients

Rounded corners

Subtle shadows

Thin pink borders

Smooth hover animations

Animated background particles/dots

Modern typography

Cybersecurity-style icons

Gradient buttons

Responsive layout

The overall appearance should feel like:

Modern SaaS dashboard + Cybersecurity scanner + Pink aesthetic

HEADER

Create a fixed/sticky navigation header.

Left side:

A shield/security icon followed by:

VULN LOGIN SCANNER

Right side navigation:

Home

Analyzer

Vulnerabilities

About

Add a small pink status indicator:

● SYSTEM READY

Header should have a white/glass background with a subtle pink border.

HERO SECTION

Create a large attractive hero section.

Main heading:

Analyze. Detect. Secure.

Subheading:

Discover common security weaknesses in login pages through an interactive vulnerability analysis simulator.

Add two buttons:

START ANALYSIS

LEARN SECURITY

Add a futuristic shield illustration/card on the right side.

Inside the illustration show:

✓ Authentication
✓ Password Security
✓ Input Validation
✓ HTTPS
✓ Brute Force Protection

Use animated glowing pink effects.

ANALYZER SECTION

Create the main interactive section with the heading:

Login Page Vulnerability Analyzer

Description:

Enter sample login-page configuration details and run a security assessment.

Create a beautiful analyzer card.

Include the following inputs:

1. Login URL

Input placeholder:

https://example.com/login

Do NOT actually scan external websites.

The URL should only be used as sample input for the educational simulation.

2. Username Field

Dropdown:

Present

Missing

Default:

Present

3. Password Field

Dropdown:

Present

Missing

Default:

Present

4. HTTPS Protection

Dropdown:

Enabled

Disabled

5. Password Strength Validation

Dropdown:

Strong

Weak

Not Implemented

6. Login Attempt Protection

Dropdown:

Rate Limited

Unlimited Attempts

7. Generic Error Messages

Dropdown:

Enabled

Disabled

8. Input Validation

Dropdown:

Implemented

Missing

9. Secure Password Storage

Dropdown:

Hashed

Plaintext / Unknown

Add a large pink button:

🔍 RUN SECURITY ANALYSIS

ANALYSIS LOGIC

When the user clicks RUN SECURITY ANALYSIS, analyze the selected options using JavaScript.

Do NOT connect to or attack any real website.

The application should simulate the analysis locally.

Calculate a security score from 0–100.

Start with:

100 points

Subtract points for insecure configurations.

Suggested scoring:

HTTPS disabled:
-25

Weak password validation:
-10

Password validation not implemented:
-15

Unlimited login attempts:
-20

Generic error messages disabled:
-10

Input validation missing:
-10

Plaintext / unknown password storage:
-25

Missing username field:
-10

Missing password field:
-10

Do not allow the score to go below 0.

Display:

Security Score: XX/100

Create a circular progress indicator around the score.

Score levels:

80–100:
SECURE

60–79:
MODERATE RISK

40–59:
HIGH RISK

0–39:
CRITICAL RISK

Use appropriate visual indicators while maintaining the pink/white design.

VULNERABILITY RESULTS

After analysis, dynamically create a results section.

Heading:

Security Assessment Results

Show summary cards:

Security Score

Vulnerabilities Found

Warnings

Passed Checks

Then display individual vulnerability cards.

Each card should contain:

Vulnerability name

Severity

Description

Recommendation

Status

Example:

Missing HTTPS

Severity:

CRITICAL

Description:

"The login page is configured without HTTPS."

Recommendation:

"Use HTTPS/TLS for login pages and authenticated pages."

VULNERABILITIES TO DETECT

Implement these educational checks:

1. Missing HTTPS

Severity:

CRITICAL

Description:

Credentials can be exposed if authentication traffic is not protected by TLS.

Recommendation:

Use HTTPS/TLS for login and authenticated pages.

2. Weak Password Validation

Severity:

MEDIUM

Description:

Weak password controls can make accounts easier to compromise.

Recommendation:

Use strong password policies and password-strength feedback.

3. Unlimited Login Attempts

Severity:

HIGH

Description:

Unlimited attempts can increase the risk of brute-force attacks.

Recommendation:

Implement login throttling, rate limiting, account protection and preferably MFA.

4. Detailed Authentication Errors

Severity:

MEDIUM

Description:

Detailed login errors may reveal whether an account exists.

Recommendation:

Use generic authentication failure messages.

5. Missing Input Validation

Severity:

HIGH

Description:

Unvalidated input can increase the risk of malicious input reaching application logic.

Recommendation:

Implement appropriate server-side and client-side input validation.

6. Insecure Password Storage

Severity:

CRITICAL

Description:

Storing passwords as plaintext or using an unknown storage method is unsafe.

Recommendation:

Store passwords using an appropriate password hashing mechanism.

7. Missing Username Field

Severity:

LOW

Description:

The login form does not contain a username/email field.

Recommendation:

Provide a properly validated authentication identifier.

8. Missing Password Field

Severity:

HIGH

Description:

The login form does not contain a password field.

Recommendation:

Use an appropriate authentication mechanism.

RESULTS VISUALIZATION

Create a modern dashboard.

Include:

Security Score

Large circular score.

Risk Level

Show:

SECURE / MODERATE / HIGH / CRITICAL

Vulnerabilities

Large number showing how many issues were detected.

Passed Checks

Large number showing secure configurations.

VULNERABILITY TABLE

Create a responsive table with columns:

| Check | Status | Severity | Recommendation |

Example statuses:

✓ PASS

⚠ WARNING

✕ VULNERABLE

Make the table beautiful with white cards, pink borders and subtle hover effects.

On mobile, convert the table into stacked cards.

SECURITY CHECKLIST

Add a section:

Login Security Checklist

Create animated checklist items:

✓ Use HTTPS/TLS
✓ Validate user input
✓ Use secure password hashing
✓ Implement login throttling
✓ Avoid username enumeration
✓ Use generic authentication errors
✓ Support MFA
✓ Monitor authentication failures
✓ Protect sessions
✓ Use strong password controls

Each item should animate when hovered.

EDUCATIONAL INFORMATION

Create a section titled:

What Does This Analyzer Check?

Create six cards:

Authentication

Checks basic login configuration.

Password Security

Checks password-strength and storage configuration.

Input Validation

Checks whether user input is validated.

Transport Security

Checks HTTPS/TLS configuration.

Brute Force Protection

Checks login-attempt protection.

Error Handling

Checks whether authentication errors reveal excessive information.

SECURITY DISCLAIMER

Add a clearly visible pink/white disclaimer card:

Educational Use Only

"This project is a frontend security simulation created for cybersecurity learning and demonstration purposes. It does not perform real penetration testing, exploit websites, bypass authentication, or collect credentials."

ABOUT SECTION

Heading:

About This Project

Text:

"VULN LOGIN SCANNER is an educational web security project that demonstrates how common login-page security weaknesses can be identified through configuration-based analysis."

Add:

Project Type: Cybersecurity Educational Tool

Technology: HTML5 • CSS3 • JavaScript

Deployment: GitHub Pages

FOOTER

Create a clean footer.

Text:

VULN LOGIN SCANNER

Learn cybersecurity. Build securely.

Add:

© 2026 Vulnerability Analyzer • Educational Project

CSS REQUIREMENTS

Create a highly polished style.css.

Use:

CSS variables

Flexbox

CSS Grid

Responsive design

Smooth transitions

Glassmorphism

Gradient backgrounds

Animated floating particles

Hover effects

Button animations

Card elevation

Circular progress indicator

Responsive navigation

Mobile-first behavior

Use pink and white throughout.

Avoid:

Green hacker colors

Pure black backgrounds

Excessive neon

Generic Bootstrap appearance

Plain default HTML styling

The final website should look like a professionally designed cybersecurity SaaS product.

JAVASCRIPT REQUIREMENTS

Create all functionality in script.js.

Implement:

Form validation

Security score calculation

Vulnerability detection

Severity classification

Results generation

Circular score animation

Vulnerability count

Passed-check count

Risk-level calculation

Smooth scrolling

Navigation interactions

Reset analysis button

Animated result appearance

Responsive UI behavior

Add a:

RESET ANALYSIS

button after results are displayed.

SAMPLE ANALYSIS

When the user first opens the website, show an example/demo state without requiring a real URL.

Use sample configuration values so the user can immediately understand how the project works.

Include a button:

TRY DEMO ANALYSIS

This should automatically fill sample insecure settings and run the local educational analysis.

IMPORTANT SECURITY LIMITATION

The project must NEVER:

Send login credentials anywhere

Store real passwords

Attempt to log into websites

Perform brute-force attacks

Scan real websites

Exploit SQL injection

Perform XSS attacks

Bypass authentication

Collect personal information

Make unauthorized requests to external websites

Everything must be simulated locally using JavaScript.

ACCESSIBILITY

Include:

Proper labels for inputs

Keyboard navigation

Focus states

ARIA labels where appropriate

Good color contrast

Responsive text

Accessible buttons

GITHUB COMPATIBILITY

Make sure the final project contains:

index.html

style.css

script.js

All CSS and JavaScript must be correctly linked:

<link rel="stylesheet" href="style.css">

<script src="script.js"></script>

Do not use absolute local paths.

The website must work correctly on GitHub Pages.

FINAL QUALITY REQUIREMENT

Before finishing, test the complete UI and make sure:

No broken buttons

No console errors

Analyzer works

Score updates correctly

Vulnerabilities appear correctly

Reset works

Navigation works

Mobile layout works

Pink/white theme is consistent

No external backend is required

index.html, style.css, and script.js are complete

The final result should look significantly more advanced and visually impressive than a basic student HTML project.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://vulnerable-login-page-project.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6ba79cbe-b467-48a4-bb10-bfdd863faf5d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
