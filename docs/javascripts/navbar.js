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

              <!-- AWS Fundamentals Dropdown -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="fundamentalsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  AWS Fund.
                </a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="fundamentalsDropdown">
                  <li><a class="dropdown-item" href="${baseUrl}/awsfundamentals/wpGuide/">WordPress</a></li>
                  <li><a class="dropdown-item" href="${baseUrl}/awsfundamentals/ec2Instance_session1/">EC2</a></li>
                  <li><a class="dropdown-item" href="${baseUrl}/awsfundamentals/databaseServer/">Database</a></li>
                  <li><a class="dropdown-item" href="${baseUrl}/awsfundamentals/aws_lambda/">Lambda</a></li>
                  <li><a class="dropdown-item" href="${baseUrl}/awsfundamentals/beanstalk/">Beanstalk</a></li>
                  <li><a class="dropdown-item" href="${baseUrl}/awsfundamentals/projectWork_pilviPalvelut/">Project</a></li>
                </ul>
              </li>

              <!-- AWS Developer Labs Dropdown -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="developerDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  AWS Dev.
                </a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="developerDropdown">
                  <li><a class="dropdown-item" href="${baseUrl}/developerLab1/">Dev Lab 1</a></li>
                  <li><a class="dropdown-item" href="${baseUrl}/developerLab2/">Dev Lab 2</a></li>
                  <li><a class="dropdown-item" href="${baseUrl}/developerLab3/">Dev Lab 3</a></li>
                </ul>
              </li>

              <!-- AWS Architect Labs Dropdown -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="architectDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  AWS Arch.
                </a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="architectDropdown">
                  <li><a class="dropdown-item" href="${baseUrl}/architect/architectLab1/">Lab 1</a></li>
                  <li><a class="dropdown-item" href="${baseUrl}/architect/architectLab2/">Lab 2</a></li>
                </ul>
              </li>

              <!-- Linux Command Guide Dropdown -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="linuxDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Linux
                </a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="linuxDropdown">
                  <li><a class="dropdown-item" href="${baseUrl}/linux/linuxbasics1/">Basics</a></li>
                  <li><a class="dropdown-item" href="${baseUrl}/linux/linuxfileSystem2/">File System</a></li>
                  <li><a class="dropdown-item" href="${baseUrl}/linux/help-documentation/">Help</a></li>
                  <li><a class="dropdown-item" href="${baseUrl}/linux/viewing-reading-files/">Viewing</a></li>
                  <li><a class="dropdown-item" href="${baseUrl}/linux/searching-files-text/">Search</a></li>
                  <li><a class="dropdown-item" href="${baseUrl}/linux/file-permissions-ownership/">Permissions</a></li>
                  <li><a class="dropdown-item" href="${baseUrl}/linux/system-info-disk-usage/">System Info</a></li>
                  <li><a class="dropdown-item" href="${baseUrl}/linux/process-management/">Processes</a></li>
                  <li><a class="dropdown-item" href="${baseUrl}/linux/networking-commands/">Network</a></li>
                  <li><a class="dropdown-item" href="${baseUrl}/linux/user-management/">Users</a></li>
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
  }

  // Initialize navbar when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
  } else {
    initNavbar();
  }
})();
