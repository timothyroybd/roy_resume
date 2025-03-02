function copyEmail(event, element) {
    event.preventDefault(); // Prevent mailto default behavior

    // Copy the email to clipboard
    const email = "timothyroy2011@gmail.com";
    const tempInput = document.createElement("textarea");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Show pop-up near the clicked element
    const popup = document.getElementById("copyPopup");
    const rect = element.getBoundingClientRect(); // Get icon position

    // Adjust position with margin
    const marginTop = 8;  // Change this value for top margin
    const marginLeft = 45; // Change this value for left margin

    popup.style.top = `${rect.top + window.scrollY + marginTop}px`;  
    popup.style.left = `${rect.left + window.scrollX + marginLeft}px`; 

    popup.style.opacity = "1";

    // Hide pop-up after 1.5 seconds
    setTimeout(() => {
        popup.style.opacity = "0";
    }, 1500);
}