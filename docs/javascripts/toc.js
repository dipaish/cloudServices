// Table of Contents (TOC) Generator and Manager
(function() {
  function initTOC() {
    // Check if TOC already exists
    if (document.querySelector('.toc-container')) {
      return;
    }

    // Get all H2 and H3 headings from the content
    const content = document.querySelector('.md-content__inner') || document.querySelector('article') || document.querySelector('main');
    if (!content) return;

    const headings = content.querySelectorAll('h2, h3');
    if (headings.length === 0) return;

    // Build TOC structure
    let tocHTML = '<h3 id="toc-title">On This Page</h3><ul>';
    let currentH2 = null;

    headings.forEach((heading, index) => {
      const level = heading.tagName.toLowerCase();
      const text = heading.textContent.replace(/¶/g, '').trim();
      
      // Create ID if not exists
      if (!heading.id) {
        heading.id = 'heading-' + index;
      }

      if (level === 'h2') {
        // Close previous H2's nested list if exists
        if (currentH2 !== null) {
          tocHTML += '</ul></li>';
        }
        // Start new H2 item
        tocHTML += `<li><a href="#${heading.id}">${text}</a><ul>`;
        currentH2 = heading.id;
      } else if (level === 'h3' && currentH2 !== null) {
        // Add H3 as nested item under current H2
        tocHTML += `<li><a href="#${heading.id}">${text}</a></li>`;
      }
    });

    // Close last H2's nested list
    if (currentH2 !== null) {
      tocHTML += '</ul></li>';
    }

    tocHTML += '</ul>';

    // Create TOC container
    const tocContainer = document.createElement('div');
    tocContainer.className = 'toc-container';
    tocContainer.innerHTML = tocHTML;

    // Insert TOC into page (always visible, no toggle button needed)
    document.body.appendChild(tocContainer);

    // Make "On This Page" heading clickable to scroll to top
    const tocTitle = tocContainer.querySelector('#toc-title');
    if (tocTitle) {
      tocTitle.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      tocTitle.title = 'Click to scroll to top';
    }

    // Highlight active section on scroll
    function updateActiveTOC() {
      const scrollPosition = window.scrollY + 100;
      
      let currentActive = null;
      headings.forEach(heading => {
        if (heading.offsetTop <= scrollPosition) {
          currentActive = heading.id;
        }
      });

      // Remove all active classes
      tocContainer.querySelectorAll('a').forEach(link => {
        link.classList.remove('active');
      });

      // Add active class to current section
      if (currentActive) {
        const activeLink = tocContainer.querySelector(`a[href="#${currentActive}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    }

    // Update on scroll
    window.addEventListener('scroll', updateActiveTOC);
    
    // Initial update
    updateActiveTOC();

    // Smooth scroll for TOC links
    tocContainer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Update URL without jumping
          history.pushState(null, null, '#' + targetId);
        }
      });
    });
  }

  // Initialize TOC when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTOC);
  } else {
    initTOC();
  }

  // Re-initialize on page navigation (for SPAs)
  if (window.navigation) {
    window.navigation.addEventListener('navigate', () => {
      setTimeout(initTOC, 100);
    });
  }
})();
