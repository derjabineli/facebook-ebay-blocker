function removeEbayListings() {
  // Grab all listings on the page
  const listings = document.querySelectorAll('div[aria-hidden="false"]');
  listings.forEach((listing) => {
    if (listing.innerText == "Partner listing") {
      let parentSpan = listing.closest("a");
      parentSpan.style.display = "none";
    }
  });
}

// Run on page load
removeEbayListings();

// Also run when user scrolls (Marketplace loads items dynamically)
const observer = new MutationObserver(removeEbayListings);
observer.observe(document.body, { childList: true, subtree: true });
