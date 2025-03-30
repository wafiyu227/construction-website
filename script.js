AOS.init();

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
    const navLinks = document.querySelectorAll(".nav-links li")
  
    burger.addEventListener("click", () => {
      // Toggle Nav
      nav.classList.toggle("nav-active")
  
      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ""
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        }
      })
  
      // Burger Animation
      burger.classList.toggle("toggle")
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  
    // Form submission
    const form = document.getElementById("contact-form")
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      // Here you would typically send the form data to a server
      // For this example, we'll just log it to the console
      const formData = new FormData(form)
      console.log("Form submitted with data:")
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`)
      }
      alert("Thank you for your message. We will get back to you soon!")
      form.reset()
    })
  })
  
  const images = [ "/images/marble-platform-front-city-skyline.jpg", "/images/contractor.jpg", "/images/Comercial-Construction.jpg", "/images/building.jpg"];
  let index = 0;
  const hero = document.querySelector(".hero");

  function changeBackground() {
    hero.style.opacity = "0"; // Start fade out

    setTimeout(() => {
      hero.style.backgroundImage = `url("${images[index]}")`;
      hero.style.opacity = "1"; // Fade in after background changes
      index = (index + 1) % images.length;
    }, 1000); // Delay matches the transition duration
  }

  // Set initial background and start interval
  changeBackground();
  setInterval(changeBackground, 4000);  

