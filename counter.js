// Load Google Analytics asynchronously
var script1 = document.createElement("script");
script1.async = true;
script1.src = "https://www.googletagmanager.com/gtag/js?id=G-S9JJ3929MK";
document.head.appendChild(script1);

// Initialize Google Analytics
script1.onload = function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-S9JJ3929MK");
};
