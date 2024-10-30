function publishLetter() {
    const title = document.querySelector('.title').value;
    const message = document.querySelector('.message').value;

    // Create a new window and write the HTML content
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title || "Published Letter"}</title>
            <style>
                body {
                    background-color: #fff0f5;
                    font-family: 'Georgia', serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    padding: 20px;
                    background-image: linear-gradient(135deg, #f6d5f7 25%, #fcf3c4 100%);
                }
                .container {
                    background-color: rgba(255, 255, 255, 0.8);
                    border-radius: 25px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    max-width: 700px;
                    padding: 40px;
                    text-align: center;
                    border: 2px solid #ffb6c1;
                }
                h1 {
                    font-size: 2.5rem;
                    color: #ff69b4;
                    margin-bottom: 25px;
                    font-family: 'Cursive', sans-serif;
                }
                p {
                    font-size: 1.3rem;
                    line-height: 1.7;
                    color: #5a5a5a;
                    padding: 10px;
                    font-family: 'Times New Roman', serif;
                }
                .message::before {
                    content: "💕";
                    font-size: 3rem;
                    display: block;
                    margin-bottom: 15px;
                    text-align: center;
                    animation: floatHeart 2s infinite ease-in-out;
                }
                .message::after {
                    content: "💕";
                    font-size: 3rem;
                    display: block;
                    margin-top: 15px;
                    text-align: center;
                    animation: floatHeart 2s infinite ease-in-out reverse;
                }
                @keyframes floatHeart {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>${title || "Your Title Here"}</h1>
                <p>${message || "Your heartfelt message goes here..."}</p>
            </div>
        </body>
        </html>
    `);
    newWindow.document.close();
}
