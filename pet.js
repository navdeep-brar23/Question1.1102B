  // Add JavaScript for collapsible functionality
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            // Toggle active class
            this.classList.toggle("active");
            var content = this.nextElementSibling;

            // Close all other collapsible sets
            var allContent = document.getElementsByClassName("content");
            for (var j = 0; j < allContent.length; j++) {
                if (allContent[j] !== content) {
                    allContent[j].style.display = "none";
                    allContent[j].previousElementSibling.classList.remove("active");
                }
            }

            // Toggle display for the clicked set
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
