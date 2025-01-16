document.addEventListener('DOMContentLoaded', function () {
    //find a place in the document where the placeholder for footer is
    const footerPlaceholder = document.getElementById("footer-placeholder")

    //check if placeholder exists
    if (footerPlaceholder) {
        //get the footer file
        fetch("/assets/footer.html")
            //store the fetched file data in response
            .then((response) => {
                //if response is not ok, throw an error
                if (!response.ok) {
                    throw new Error("footer file not found");
                }
                //if everything is fine, convert the file to text
                return response.text()
            })
            //now the html receives the text from the previous .then
            .then((html) => {
                //insert the text instead of the placeholder
                footerPlaceholder.innerHTML = html;
            })
            .catch((error) => {
                console.error("Error loading footer:", error);
            });
    }
});