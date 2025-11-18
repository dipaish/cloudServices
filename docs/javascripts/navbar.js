// Custom Bootstrap Navbar for MkDocs
document.addEventListener('DOMContentLoaded', function() {
  // Check if navbar already exists
  if (document.querySelector('.custom-navbar')) {
    return;
  }

  // Create navbar HTML
  const navbarHTML = `
    <nav class="custom-navbar navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div class="container-fluid">
        <!-- Brand/Logo -->
        <a class="navbar-brand" href="/">
          <img src="/cloudServices/ddd.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top me-2">
          Tech Lab Tasks
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
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                AWS Fundamentals
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="/cloudServices/awsfundamentals/wpGuide/">WordPress Guide</a></li>
                <li><a class="dropdown-item" href="/cloudServices/awsfundamentals/ec2Instance_session1/">EC2 Instance</a></li>
                <li><a class="dropdown-item" href="/cloudServices/awsfundamentals/databaseServer/">Database Server</a></li>
                <li><a class="dropdown-item" href="/cloudServices/awsfundamentals/aws_lambda/">AWS Lambda</a></li>
                <li><a class="dropdown-item" href="/cloudServices/awsfundamentals/beanstalk/">Elastic Beanstalk</a></li>
                <li><a class="dropdown-item" href="/cloudServices/awsfundamentals/projectWork_pilviPalvelut/">Project Work</a></li>
              </ul>
            </li>

            <!-- AWS Developer Labs Dropdown -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                AWS Developer Labs
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="/cloudServices/developerLab1/">Developer Lab 1</a></li>
                <li><a class="dropdown-item" href="/cloudServices/developerLab2/">Developer Lab 2</a></li>
                <li><a class="dropdown-item" href="/cloudServices/developerLab3/">Developer Lab 3</a></li>
              </ul>
            </li>

            <!-- AWS Architect Labs Dropdown -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                AWS Architect Labs
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="/cloudServices/architect/architectLab1/">Architect Lab 1</a></li>
                <li><a class="dropdown-item" href="/cloudServices/architect/architectLab2/">Architect Lab 2</a></li>
              </ul>
            </li>

            <!-- Linux Command Guide Dropdown -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Linux Guide
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="/cloudServices/linux/linuxbasics1/">Linux Basics</a></li>
                <li><a class="dropdown-item" href="/cloudServices/linux/linuxfileSystem2/">Linux File System</a></li>
                <li><a class="dropdown-item" href="/cloudServices/linux/help-documentation/">Help & Documentation</a></li>
                <li><a class="dropdown-item" href="/cloudServices/linux/viewing-reading-files/">Viewing & Reading Files</a></li>
                <li><a class="dropdown-item" href="/cloudServices/linux/searching-files-text/">Searching Files & Text</a></li>
                <li><a class="dropdown-item" href="/cloudServices/linux/file-permissions-ownership/">File Permissions & Ownership</a></li>
                <li><a class="dropdown-item" href="/cloudServices/linux/system-info-disk-usage/">System Info & Disk Usage</a></li>
                <li><a class="dropdown-item" href="/cloudServices/linux/process-management/">Process Management</a></li>
                <li><a class="dropdown-item" href="/cloudServices/linux/networking-commands/">Networking Commands</a></li>
                <li><a class="dropdown-item" href="/cloudServices/linux/user-management/">User Management</a></li>
              </ul>
            </li>

            <!-- Divider -->
            <li class="nav-item">
              <hr class="dropdown-divider my-2">
            </li>

            <!-- GitHub Repo -->
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/dipaish/cloudServices" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i> GitHub Repo
              </a>
            </li>

            <!-- GitHub Profile -->
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/dipaish" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i> GitHub Profile
              </a>
            </li>

            <!-- LinkedIn -->
            <li class="nav-item">
              <a class="nav-link" href="https://www.linkedin.com/in/kcdeepak112/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin"></i> LinkedIn
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
});
