Modern Stopwatch Application
A sleek, modern stopwatch web application built with HTML, CSS, and JavaScript. It features a clean interface, animated gradient backgrounds, and keyboard shortcuts for ease of use. The application includes multiple color palettes and smooth animations to enhance the user experience.
Features

Stopwatch Functionality: Start, stop, and reset the stopwatch with millisecond precision.
Lap Times: Record and display lap times with a smooth slide-in animation.
Color Palettes: Choose from four animated gradient backgrounds:
Vivid: Bright and colorful gradient.
Pastel: Soft, calming tones.
Night: Dark, cool hues.
Sunset: Warm, sunset-inspired colors.


Animations:
Pulse effect on the stopwatch display when running.
Slide-in animation for lap times.
Button scaling on hover and click.


Keyboard Shortcuts:
Space: Start or stop the stopwatch.
L: Record a lap (only when the stopwatch is running).
R: Reset the stopwatch.


Custom Font: Uses Roboto Mono for a modern, monospaced look.
Mobile Compatibility: Responsive design for mobile and desktop devices.

Demo
Try the application by opening index.html in a browser. For the best experience, use a local server to avoid potential font loading issues.
Installation
Prerequisites

A modern web browser (e.g., Chrome, Firefox, Edge).
A local server (optional but recommended, e.g., Python's http.server or VS Code Live Server).
The Roboto Mono font files (roboto-mono-regular.woff2 and roboto-mono-bold.woff2).

Setup Instructions

Clone or Download the Repository:

Clone the repository or download the project files to your local machine.


Directory Structure:Ensure the following files are in the project root:

index.html
styles.css
script.js
fonts/roboto-mono-regular.woff2
fonts/roboto-mono-bold.woff2


Download Font Files:

Place the Roboto Mono font files in a fonts folder within the project directory.
Download links:
Roboto Mono Regular (400)
Roboto Mono Bold (700)




Run the Application:

Using a Local Server (recommended):python -m http.server 8000

Open a browser and navigate to http://localhost:8000.
Using VS Code: Use the Live Server extension.
Directly: Open index.html in a browser using the file:// protocol (note: font loading may fail due to CORS restrictions).



Usage

Start/Stop the Stopwatch:

Click the Start button or press Space to start the stopwatch.
Click Stop or press Space again to pause it.


Record a Lap:

Click the Lap button or press L while the stopwatch is running to record a lap time.
Lap times appear in the list below with a slide-in animation.


Reset the Stopwatch:

Click the Reset button or press R to reset the stopwatch and clear lap times.


Change Color Palette:

Use the dropdown menu at the bottom-left to switch between Vivid, Pastel, Night, or Sunset gradients.



Troubleshooting

Font Not Loading:

Ensure roboto-mono-regular.woff2 and roboto-mono-bold.woff2 are in the fonts folder.
Check the browser console (F12) for errors like Failed to load resource.
Use a local server to avoid CORS issues.


Animations Not Working:

Verify that your browser supports CSS animations (modern browsers like Chrome, Firefox, or Edge are recommended).
Clear the browser cache (Ctrl + Shift + R) to ensure the latest styles.css is loaded.


Keyboard Shortcuts Not Responding:

Ensure the browser window is focused.
Check the console for JavaScript errors.


Mobile Layout Issues:

Test the responsive design using browser developer tools (mobile view).
Report any layout issues with screenshots or descriptions.



Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch for your feature or bug fix:git checkout -b feature/your-feature-name


Make your changes and test thoroughly.
Commit your changes with a descriptive message:git commit -m "Add your feature description"


Push to your branch:git push origin feature/your-feature-name


Open a pull request with a clear description of your changes.

Suggested Improvements

Add sound effects for button clicks, lap recording, or start/stop actions.
Introduce additional color palettes (e.g., neon or monochrome).
Implement advanced animations (e.g., wave effect or button glow).
Add lap time sorting or exporting functionality.
Support alternative fonts (e.g., JetBrains Mono).

License
This project is licensed under the MIT License. See the LICENSE file for details.
Contact
For issues, suggestions, or feedback, please open an issue on the repository or contact the maintainer.

--

by MertRauf
