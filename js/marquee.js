document.addEventListener("DOMContentLoaded", function() {
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("start-marquee");
            } else {
                entry.target.classList.remove("start-marquee");
            }
        });
    }, options);

    let target = document.querySelector(".marquee-section");
    observer.observe(target);
});
