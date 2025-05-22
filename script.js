document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu Toggle
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close menu when clicking on a nav link
  document.querySelectorAll(".nav-menu li a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })

  // Portfolio Navigation
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")
  const projectCards = document.querySelectorAll(".project-card")

  // Simple portfolio navigation (can be enhanced with actual carousel functionality)
  let currentIndex = 0

  // Update visibility based on current index
  function updatePortfolioView() {
    projectCards.forEach((card, index) => {
      if (window.innerWidth <= 768) {
        // On mobile, show only one project at a time
        card.style.display = index === currentIndex ? "block" : "none"
      } else {
        // On desktop, show all projects
        card.style.display = "block"
      }
    })
  }

  // Initialize portfolio view
  updatePortfolioView()

  // Handle window resize
  window.addEventListener("resize", updatePortfolioView)

  // Navigation buttons
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--
      updatePortfolioView()
    }
  })

  nextBtn.addEventListener("click", () => {
    if (currentIndex < projectCards.length - 1) {
      currentIndex++
      updatePortfolioView()
    }
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: "smooth",
        })
      }
    })
  })
})
