// Custom Bootstrap Navbar for MkDocs
document.addEventListener('DOMContentLoaded', function() {
  // Wait for Bootstrap to be loaded
  if (typeof bootstrap === 'undefined') {
    setTimeout(arguments.callee, 100);
    return;
  }

  // Check if navbar already exists
  if (document.querySelector('.custom-navbar')) {
    return;
  }

  // Create navbar HTML
  const navbarHTML = `
    <nav class="custom-navbar navbar navbar-expand-xl navbar-dark bg-dark sticky-top">
      <div class="container-fluid px-2">
        <!-- Brand/Logo -->
        <a class="navbar-brand" href="/">
          <img src="/cloudServices/ddd.png" alt="Logo" width="28" height="28" class="d-inline-block align-text-top me-1">
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
              <a class="nav-link" href="/">Home</a>
            </li>

            <!-- AWS Fundamentals Dropdown -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="fundamentalsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                AWS Fund.
              </a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="fundamentalsDropdown">
                <li><a class="dropdown-item" href="/cloudServices/awsfundamentals/wpGuide/">WordPress</a></li>
                <li><a class="dropdown-item" href="/cloudServices/awsfundamentals/ec2Instance_session1/">EC2</a></li>
                <li><a class="dropdown-item" href="/cloudServices/awsfundamentals/databaseServer/">Database</a></li>
                <li><a class="dropdown-item" href="/cloudServices/awsfundamentals/aws_lambda/">Lambda</a></li>
                <li><a class="dropdown-item" href="/cloudServices/awsfundamentals/beanstalk/">Beanstalk</a></li>
                <li><a class="dropdown-item" href="/cloudServices/awsfundamentals/projectWork_pilviPalvelut/">Project</a></li>
              </ul>
            </li>

            <!-- AWS Developer Labs Dropdown -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="developerDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                AWS Dev.
              </a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="developerDropdown">
                <li><a class="dropdown-item" href="/cloudServices/developerLab1/">Dev Lab 1</a></li>
                <li><a class="dropdown-item" href="/cloudServices/developerLab2/">Dev Lab 2</a></li>
                <li><a class="dropdown-item" href="/cloudServices/developerLab3/">Dev Lab 3</a></li>
              </ul>
            </li>

            <!-- AWS Architect Labs Dropdown -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="architectDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                AWS Arch.
              </a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="architectDropdown">
                <li><a class="dropdown-item" href="/cloudServices/architect/architectLab1/">Lab 1</a></li>
                <li><a class="dropdown-item" href="/cloudServices/architect/architectLab2/">Lab 2</a></li>
              </ul>
            </li>

            <!-- Linux Command Guide Dropdown -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="linuxDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Linux
              </a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="linuxDropdown">
                <li><a class="dropdown-item" href="/cloudServices/linux/linuxbasics1/">Basics</a></li>
                <li><a class="dropdown-item" href="/cloudServices/linux/linuxfileSystem2/">File System</a></li>
                <li><a class="dropdown-item" href="/cloudServices/linux/help-documentation/">Help</a></li>
                <li><a class="dropdown-item" href="/cloudServices/linux/viewing-reading-files/">Viewing</a></li>
                <li><a class="dropdown-item" href="/cloudServices/linux/searching-files-text/">Search</a></li>
                <li><a class="dropdown-item" href="/cloudServices/linux/file-permissions-ownership/">Permissions</a></li>
                <li><a class="dropdown-item" href="/cloudServices/linux/system-info-disk-usage/">System Info</a></li>
                <li><a class="dropdown-item" href="/cloudServices/linux/process-management/">Processes</a></li>
                <li><a class="dropdown-item" href="/cloudServices/linux/networking-commands/">Network</a></li>
                <li><a class="dropdown-item" href="/cloudServices/linux/user-management/">Users</a></li>
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
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(event) {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      const toggle = menu.previousElementSibling;
      if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        const bsDropdown = bootstrap.Dropdown.getInstance(toggle);
        if (bsDropdown) bsDropdown.hide();
      }
    });
  });
});
