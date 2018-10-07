﻿const offlinePages = /^\/(index|about|schedule|location).htm$/;

function hideLinksThatRequireOnline() {
    const allNavLinks = document.querySelectorAll("nav.page-nav a");
    for (let i = 0; i < allNavLinks.length; i++) {
        const href = allNavLinks[i].getAttribute("href");
        if (!offlinePages.test(href)) {
            allNavLinks[i].style.display = "none";
        }
    }
};

function showLinks() {
    const allNavLinks = document.querySelectorAll("nav.page-nav a");
    for (let i = 0; i < allNavLinks.length; i++) {
        allNavLinks[i].style.display = "";
    }
};


// TODO: if currently offline, hide navigation links that require online
if (!navigator.onLine) {
    hideLinksThatRequireOnline();
}

// TODO: add onoffline and ononline events to document.body,
//       which either hide or show navigation links.
document.body.onoffline = hideLinksThatRequireOnline;
document.body.ononline = showLinks;

// TODO: also handle the applicationCache error event to hide links
applicationCache.addEventListener("error", hideLinksThatRequireOnline, false);















































































































































































































