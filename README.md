📌 QR Code Generator (Node.js)

A simple Node.js command-line application that generates a QR code from a user-entered URL. The app also saves the entered URL into a text file for future reference.

🚀 Features

Takes URL input from the terminal

Generates a QR code image (qr_img.png)

Saves the entered URL in a text file (URL.txt)

Uses ES Modules and npm packages

🛠️ Technologies Used

Node.js

inquirer – for user input

qr-image – for QR code generation

fs – native file system module

📦 Installation

Clone the repository

git clone <your-repo-url>


Navigate to the project folder

cd qr-code-generator


Install dependencies

npm install

▶️ Usage

Run the application using:

node index.js


Enter a URL when prompted.
A QR code image and a text file containing the URL will be created.

📂 Output Files

qr_img.png – QR code image of the URL

URL.txt – stores the entered URL

🎯 Learning Outcomes

Understanding npm packages

Handling user input in Node.js

File creation using the fs module

Building real-world CLI applications
