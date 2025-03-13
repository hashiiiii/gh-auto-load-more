/**
 * GitHub Auto Load More - Chrome Extension
 * 
 * This script automatically clicks all "Load more..." buttons in GitHub PR reviews
 * until all comments are visible.
 */

// Function to find and click all "Load more..." buttons
const clickLoadMoreButtons = (): boolean => {
  let clickedAny = false;
  
  // Find all buttons and links that might contain "Load more..."
  const loadMoreElements = document.querySelectorAll<HTMLElement>(
    'button.ajax-pagination-btn, a.ajax-pagination-btn, .js-more-items-link'
  );
  
  // Click each element that contains "Load more"
  loadMoreElements.forEach(element => {
    if (element.textContent?.toLowerCase().includes('load more')) {
      element.click();
      clickedAny = true;
      console.log('GitHub Auto Load More: Clicked a "Load more..." button/link');
    }
  });
  
  return clickedAny;
};

// Function to recursively click "Load more..." buttons until none are left
const recursivelyClickLoadMore = (): void => {
  // If we clicked any buttons, wait for content to load and try again
  if (clickLoadMoreButtons()) {
    // Wait a bit for the new content to load before checking for more buttons
    setTimeout(recursivelyClickLoadMore, 1500);
  } else {
    // Do one final check after a longer delay to catch any elements that might appear later
    setTimeout(() => {
      if (clickLoadMoreButtons()) {
        // If we found more buttons, continue the recursion
        setTimeout(recursivelyClickLoadMore, 1500);
      } else {
        console.log('GitHub Auto Load More: All "Load more..." buttons are clicked');
      }
    }, 2000);
  }
};

// Process the current page if it's a PR page
const processIfPRPage = (): void => {
  if (location.href.includes('/pull/')) {
    console.log('GitHub Auto Load More: Detected PR page, starting to click "Load more..." buttons');
    setTimeout(recursivelyClickLoadMore, 1500);
  }
};

// Start the process when the page is fully loaded
window.addEventListener('load', processIfPRPage);

// Track URL changes for SPA navigation
let lastUrl = location.href;

// Simple MutationObserver to detect URL changes
const observer = new MutationObserver(() => {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    processIfPRPage();
  }
});

// Start observing with a simple configuration
observer.observe(document, { 
  childList: true, 
  subtree: true
});

// Also listen for popstate events (browser back/forward buttons)
window.addEventListener('popstate', processIfPRPage); 