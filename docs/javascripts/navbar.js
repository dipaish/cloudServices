// Custom Bootstrap Navbar for MkDocs
(function() {
  function initNavbar() {
    // Check if navbar already exists
    if (document.querySelector('.custom-navbar')) {
      return;
    }

    // Get the base URL from the current site
    const baseUrl = window.location.pathname.includes('/cloudServices/') ? '/cloudServices' : '';

    // Create navbar HTML
    const navbarHTML = `
      <nav class="custom-navbar navbar navbar-expand-lg navbar-dark sticky-top">
        <div class="container-fluid px-2">
          <!-- Brand/Logo -->
          <a class="navbar-brand" href="${baseUrl}/">
            <img src="${baseUrl}/ddd.png" alt="Logo" width="28" height="28" class="d-inline-block align-text-top me-1">
            <span class="d-none d-sm-inline">Tech Lab</span>
          </a>

          <!-- Toggler for mobile -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Navbar content -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <!-- Home -->
              <li class="nav-item">
                <a class="nav-link" href="${baseUrl}/">Home</a>
              </li>

              <!-- BYOD Dropdown -->
              <li class="nav-item dropdown-custom">
                <a class="nav-link dropdown-toggle-custom" href="#" data-toggle="dropdown">
                  BYOD
                </a>
                <ul class="dropdown-custom-menu" style="display: none;">
                  <li><a class="dropdown-custom-item" href="${baseUrl}/byod/windowsLicense/">Win License</a></li>
                  <li><a class="dropdown-custom-item" href="${baseUrl}/byod/byod/">Win Setup</a></li>
                  <li><a class="dropdown-custom-item" href="${baseUrl}/byod/mac/">macOS</a></li>
                  <li><a class="dropdown-custom-item" href="${baseUrl}/byod/wsl/">WSL2</a></li>
                </ul>
              </li>

              <!-- AWS Fundamentals Dropdown -->
              <li class="nav-item dropdown-custom">
                <a class="nav-link dropdown-toggle-custom" href="#" data-toggle="dropdown">
                  AWS Fund.
                </a>
                <ul class="dropdown-custom-menu" style="display: none;">
                  <li><a class="dropdown-custom-item" href="${baseUrl}/awsfundamentals/wpGuide/">WordPress</a></li>
                  <li><a class="dropdown-custom-item" href="${baseUrl}/awsfundamentals/ec2Instance_session1/">EC2</a></li>
                  <li><a class="dropdown-custom-item" href="${baseUrl}/awsfundamentals/databaseServer/">Database</a></li>
                  <li><a class="dropdown-custom-item" href="${baseUrl}/awsfundamentals/aws_lambda/">Lambda</a></li>
                  <li><a class="dropdown-custom-item" href="${baseUrl}/awsfundamentals/beanstalk/">Beanstalk</a></li>
                  <li><a class="dropdown-custom-item" href="${baseUrl}/awsfundamentals/projectWork_pilviPalvelut/">Project</a></li>
                </ul>
              </li>

              <!-- AWS Developer Labs Dropdown -->
              <li class="nav-item dropdown-custom">
                <a class="nav-link dropdown-toggle-custom" href="#" data-toggle="dropdown">
                  AWS Dev.
                </a>
                <ul class="dropdown-custom-menu" style="display: none;">
                  <li><a class="dropdown-custom-item" href="${baseUrl}/developerLab1/">Dev Lab 1</a></li>
                  <li><a class="dropdown-custom-item" href="${baseUrl}/developerLab2/">Dev Lab 2</a></li>
                  <li><a class="dropdown-custom-item" href="${baseUrl}/developerLab3/">Dev Lab 3</a></li>
                </ul>
              </li>

              <!-- AWS Architect Labs Dropdown -->
              <li class="nav-item dropdown-custom">
                <a class="nav-link dropdown-toggle-custom" href="#" data-toggle="dropdown">
                  AWS Arch.
                </a>
                <ul class="dropdown-custom-menu" style="display: none;">
                  <li><a class="dropdown-custom-item" href="${baseUrl}/architect/architectLab1/">Lab 1</a></li>
                  <li><a class="dropdown-custom-item" href="${baseUrl}/architect/architectLab2/">Lab 2</a></li>
                </ul>
              </li>

              <!-- Linux Command Guide Dropdown -->
              <li class="nav-item dropdown-custom">
                <a class="nav-link dropdown-toggle-custom" href="#" data-toggle="dropdown">
                  Linux
                </a>
                <ul class="dropdown-custom-menu" style="display: none;">
                  <li><a class="dropdown-custom-item" href="${baseUrl}/linux/linuxbasics1/">Basics</a></li>
                  <li><a class="dropdown-custom-item" href="${baseUrl}/linux/linuxfileSystem2/">File System</a></li>
                  <li><a class="dropdown-custom-item" href="${baseUrl}/linux/help-documentation/">Help</a></li>
                  <li><a class="dropdown-custom-item" href="${baseUrl}/linux/viewing-reading-files/">Viewing</a></li>
                  <li><a class="dropdown-custom-item" href="${baseUrl}/linux/searching-files-text/">Search</a></li>
                  <li><a class="dropdown-custom-item" href="${baseUrl}/linux/file-permissions-ownership/">Permissions</a></li>
                  <li><a class="dropdown-custom-item" href="${baseUrl}/linux/system-info-disk-usage/">System Info</a></li>
                  <li><a class="dropdown-custom-item" href="${baseUrl}/linux/process-management/">Processes</a></li>
                  <li><a class="dropdown-custom-item" href="${baseUrl}/linux/networking-commands/">Network</a></li>
                  <li><a class="dropdown-custom-item" href="${baseUrl}/linux/user-management/">Users</a></li>
                </ul>
              </li>

              <!-- GitHub Repo -->
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/dipaish/cloudServices" target="_blank" rel="noopener noreferrer" title="GitHub Repository">
                  <i class="fab fa-github"></i>
                </a>
              </li>

              <!-- GitHub Profile -->
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/dipaish" target="_blank" rel="noopener noreferrer" title="GitHub Profile">
                  <i class="fab fa-user"></i>
                </a>
              </li>

              <!-- LinkedIn -->
              <li class="nav-item">
                <a class="nav-link" href="https://www.linkedin.com/in/kcdeepak112/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;

    // Insert navbar at the beginning of the page
    const body = document.body;
    const navbarDiv = document.createElement('div');
    navbarDiv.innerHTML = navbarHTML;
    body.insertBefore(navbarDiv.firstElementChild, body.firstChild);

    // Add custom dropdown handlers
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle-custom');
    const dropdownMenus = document.querySelectorAll('.dropdown-custom-menu');

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const menu = this.parentElement.querySelector('.dropdown-custom-menu');
        
        // Close all other menus
        dropdownMenus.forEach(m => {
          if (m !== menu) {
            m.style.display = 'none';
          }
        });
        
        // Toggle current menu
        if (menu.style.display === 'none') {
          menu.style.display = 'block';
        } else {
          menu.style.display = 'none';
        }
      });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.dropdown-custom')) {
        dropdownMenus.forEach(menu => {
          menu.style.display = 'none';
        });
      }
    });

    // Allow clicking on menu items
    const dropdownItems = document.querySelectorAll('.dropdown-custom-item');
    dropdownItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.stopPropagation();
        // Allow the link to navigate
      });
    });
  }

  // Initialize navbar when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
  } else {
    initNavbar();
  }
})();
