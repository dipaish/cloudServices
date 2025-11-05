# Cloud Services - Lab Tasks

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

***Academic lab tasks and exercises for cloud services from AWS, Azure, and other cloud vendors.***

This repository contains hands-on lab tasks designed for academic purposes, covering various cloud service providers and technologies. Students will gain practical experience with cloud computing concepts, services, and best practices.

> 🚀 **Documentation available!** Visit our [GitHub Pages site](https://dipaish.github.io/cloudServices/) for detailed lab instructions.

## 📊 Lab Tasks Overview

| Vendor | Track | Labs | Status |
|--------|-------|------|--------|
| AWS | Cloud Developer | 3 | ✅ Active |
| Azure | Cloud Developer | - | 🔄 Coming Soon |
| GCP | Cloud Developer | - | 🔄 Coming Soon |

## 🚀 Quick Start Options

### Option 1: GitHub Codespaces (Recommended - No Setup!)
**Perfect for students without local cloud tools installed**

**Steps to get started:**

1. **Fork this repository** to your GitHub account
   - Click the **"Fork"** button at the top-right of this page
   - This creates your own copy of the repository

2. **Create a Codespace**
   - Go to your forked repository
   - Click the **"<> Code"** button (green button)
   - Select the **"Codespaces"** tab
   - Click **"Create codespace on main"**

3. **Start working on labs!**
   - Wait 30-60 seconds for your environment to load
   - Your browser-based VS Code will open automatically
   - All necessary tools and extensions are pre-installed

**Features:**
- ✅ Pre-configured development environment
- ✅ All VS Code extensions installed
- ✅ Auto-save enabled
- ✅ Integrated terminal and debugger
- ✅ Works on any device (desktop, tablet, mobile)
- ✅ Free 60 hours/month for GitHub users

### Option 2: Local Development
**For those who prefer working on their own computer**

**Requirements:**
- Git (for version control)
- Visual Studio Code (recommended editor)
- Cloud CLI tools (AWS CLI, Azure CLI, etc.) as needed per lab
- Active cloud account(s) for the labs you're working on

**Setup Steps:**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dipaish/cloudServices.git
   cd cloudServices
   ```

2. **Install necessary cloud CLI tools:**
   - [AWS CLI](https://aws.amazon.com/cli/)
   - [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
   - [Google Cloud SDK](https://cloud.google.com/sdk/docs/install)

3. **Configure your cloud credentials:**
   - Follow the authentication guides for each cloud provider
   - Ensure you have necessary permissions for lab tasks

---

## 🎯 How to Use This Course

1. Navigate to the vendor-specific folder (e.g., `aws/`, `azure/`)
2. Follow the lab instructions in the documentation
3. Complete the hands-on exercises
4. Document your learning and solutions

Each lab includes:
- 📝 Detailed instructions
- 🎯 Learning objectives
- 🔧 Hands-on tasks
- ✅ Verification steps

## 📚 For Students

### ✅ What You Should Do:
- **Follow lab instructions carefully**
- **Complete hands-on exercises**
- **Document your learning process**
- **Practice cloud security best practices**
- **Clean up resources after each lab** (to avoid charges)

### ⚠️ Important Cloud Safety Tips:
- 🔒 **Never commit credentials or API keys to Git**
- 💰 **Monitor your cloud usage and costs**
- 🧹 **Always clean up resources after completing labs**
- 🛡️ **Use least-privilege access principles**
- 📧 **Set up billing alerts** for your cloud accounts

---

## 📘 Documentation Site (GitHub Pages)

This project's documentation is built with MkDocs (Dracula theme) and deployed via GitHub Actions.

**Visit:** [https://dipaish.github.io/cloudServices/](https://dipaish.github.io/cloudServices/)

### How it works:

1. Documentation source files are in the `docs/` folder
2. Configuration is managed in `mkdocs.yml`
3. GitHub Actions automatically builds and deploys on push to `main` branch
4. GitHub Pages serves the built site

### How to update documentation:

1. Edit files in the `docs/` folder or update `mkdocs.yml`
2. Commit and push changes to the `main` branch
3. GitHub Actions will automatically build and deploy
4. Visit the site (may need Ctrl+F5 to refresh cache)

---

## 🏗️ Repository Structure

```
cloudServices/
├── docs/                    # Documentation source files
│   ├── index.md            # Home page
│   ├── part1.md            # AWS Lab 1
│   ├── part2.md            # AWS Lab 2
│   ├── part3.md            # AWS Lab 3
│   ├── javascripts/        # Custom JavaScript
│   └── stylesheets/        # Custom CSS
├── .github/
│   └── workflows/
│       └── gh-pages.yml    # GitHub Actions workflow
├── mkdocs.yml              # MkDocs configuration
├── LICENSE                 # CC BY-NC-SA 4.0 license
└── README.md              # This file
```

---

## 🎓 Learning Objectives

By completing the labs in this repository, students will:

- 🔧 Gain hands-on experience with major cloud platforms
- 🏗️ Understand cloud architecture and design patterns
- 🔒 Learn cloud security best practices
- 💰 Understand cloud cost management
- 🚀 Deploy and manage cloud resources
- 📊 Monitor and troubleshoot cloud applications
- 🔄 Implement CI/CD with cloud services

---

## 📄 License & Attribution

This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License** - see the [LICENSE](LICENSE) file for details.

### What This License Means:

- ✅ **Free to use** for personal and educational purposes
- ✅ **Free to modify and distribute** with proper attribution
- ❌ **Not for commercial use** without permission
- 🔄 **Share-alike** - derivatives must use the same license
- 📝 **Attribution required** - credit the original authors

For the full legal text, visit: [https://creativecommons.org/licenses/by-nc-sa/4.0/](https://creativecommons.org/licenses/by-nc-sa/4.0/)

---

## 🤝 Contributing

This is an academic repository. If you're an instructor and would like to contribute:

1. Fork the repository
2. Create a feature branch
3. Add your lab tasks with clear documentation
4. Submit a pull request

---

## 💬 Support

For questions or issues:
- 📧 Open an issue in this repository
- 💼 Contact the course instructor
- 📖 Check the [documentation site](https://dipaish.github.io/cloudServices/)

---

**Happy Cloud Learning! ☁️**

---

## 🔗 Useful Resources

### AWS
- [AWS Free Tier](https://aws.amazon.com/free/)
- [AWS Documentation](https://docs.aws.amazon.com/)
- [AWS Training](https://aws.amazon.com/training/)

### Azure
- [Azure Free Account](https://azure.microsoft.com/en-us/free/)
- [Azure Documentation](https://docs.microsoft.com/en-us/azure/)
- [Microsoft Learn](https://docs.microsoft.com/en-us/learn/)

### Google Cloud
- [GCP Free Tier](https://cloud.google.com/free)
- [GCP Documentation](https://cloud.google.com/docs)
- [Google Cloud Skills Boost](https://www.cloudskillsboost.google/)
