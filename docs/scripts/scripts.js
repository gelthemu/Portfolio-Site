// smooth-scroll-navigation
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// nav-pop-up
document.addEventListener("DOMContentLoaded", () => {
  const navButton = document.getElementById("nav-button");
  const navPopup = document.getElementById("nav-popup");

  navButton.addEventListener("click", () => {
    if (navPopup.style.display === "none" || navPopup.style.display === "") {
      navPopup.style.display = "flex";
    } else {
      navPopup.style.display = "none";
    }
  });

  const navPopupItems = document.querySelectorAll(".nav-popup-item");
  navPopupItems.forEach((item) => {
    item.addEventListener("click", () => {
      navPopup.style.display = "none";
    });
  });

  document.addEventListener("click", (event) => {
    if (!navButton.contains(event.target) && !navPopup.contains(event.target)) {
      navPopup.style.display = "none";
    }
  });
});

// mobile-sidebar-popup
document.addEventListener("DOMContentLoaded", () => {
  const mobileSidebarButton = document.getElementById("mobile-sidebar-button");
  const mobileSidebarPopup = document.getElementById("mobile-sidebar-popup");
  const mobileSidebarPopupClose = document.getElementById(
    "mobile-sidebar-popup-close"
  );
  const links = mobileSidebarPopup.querySelectorAll(
    ".mobile-sidebar-content a"
  );

  mobileSidebarButton.addEventListener("click", () => {
    mobileSidebarPopup.classList.add("show");
  });

  mobileSidebarPopupClose.addEventListener("click", () => {
    mobileSidebarPopup.classList.remove("show");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      mobileSidebarPopup.classList.remove("show");
    });
  });
});

// email-pop-up-message
document.addEventListener("DOMContentLoaded", function () {
  const emailForm = document.getElementById("emailForm");
  const contactPopup = document.getElementById("contact-popup");
  const contactClosePopup = document.getElementById("contact-closePopup");

  if (emailForm && contactPopup && contactClosePopup) {
    emailForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (isValid) {
        contactPopup.style.display = "flex";
      } else {
        alert("Please enter a valid email address.");
      }
      emailForm.reset();
    });

    contactClosePopup.addEventListener("click", () => {
      contactPopup.style.display = "none";
    });
  } else {
    console.error("Form, popup, or close button not found.");
  }
});
