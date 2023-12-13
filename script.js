// JavaScript function to copy email text to clipboard
function copyEmailText() {
    const emailText = `Subject: Urgent Appeal for Humanitarian Aid in Southern Gaza

Dear President Biden,

I hope this letter finds you well. I am writing to bring to your attention the critical humanitarian situation in southern Gaza, particularly concerning the severe shortage of essential resources such as food, water, medical supplies, and healthcare professionals. It has come to my attention that children in Palestine are suffering and losing their lives due to the current conditions.

I kindly urge you to use your influence to communicate with Prime Minister Benjamin Netanyahu, encouraging him to prioritize the well-being of innocent civilians and to facilitate the immediate entry of humanitarian aid into southern Gaza. The denial of basic necessities is causing immense suffering, and we must work towards a swift resolution to prevent further loss of life.

Condoning humanitarian atrocities is unacceptable, and I believe that by taking decisive action, we can make a positive impact on the lives of those who are most vulnerable in this conflict. Your leadership in addressing this issue will not only contribute to the alleviation of suffering but also demonstrate a commitment to human rights and global compassion.

I appreciate your attention to this urgent matter and trust that your efforts will help bring relief to the people of southern Gaza.

Sincerely,
[Your Name]
[Your Contact Information]`;
    
    // Create a text area element and set its value to the email text
    const textArea = document.createElement("textarea");
    textArea.value = emailText;
    
    // Append the text area to the document
    document.body.appendChild(textArea);
    
    // Select the text in the text area
    textArea.select();
    
    // Copy the selected text to clipboard
    document.execCommand("copy");
    
    // Remove the text area from the document
    document.body.removeChild(textArea);

    // Show the "email copied" message
    const emailCopiedMessage = document.getElementById("emailCopiedMessage");
    emailCopiedMessage.style.display = "block";

    // Hide the message after a few seconds (e.g., 3 seconds)
    setTimeout(function() {
        emailCopiedMessage.style.display = "none";
    }, 3000); // Adjust the timeout value as needed (3 seconds in this example)
}

// Add a click event listener to the "copy and paste the email from here" link
document.getElementById("copyEmailText").addEventListener("click", function() {
    copyEmailText();
});
