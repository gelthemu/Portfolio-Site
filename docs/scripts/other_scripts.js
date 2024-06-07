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
    emailForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (isValid) {
        const formData = new FormData(emailForm);

        fetch(emailForm.action, {
          method: emailForm.method,
          body: formData,
        })
          .then((response) => {
            if (response.ok) {
              contactPopup.style.display = "flex";
            } else {
              alert("There was an error submitting the form.");
            }
          })
          .catch((error) => {
            alert("There was an error submitting the form.");
            console.error("Error:", error);
          });

        emailForm.reset();
      } else {
        alert("Please enter a valid email address.");
      }
    });

    contactClosePopup.addEventListener("click", function () {
      contactPopup.style.display = "none";
    });
  } else {
    console.error("Form, popup, or close button not found.");
  }
});
