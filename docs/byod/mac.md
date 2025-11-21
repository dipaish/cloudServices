# Essential Tools Setup for IT Students (macOS)

The guidelines below use the Homebrew package manager for macOS to install essential tools commonly used in IT programs, including software development, cloud computing, DevOps, and systems administration. Make sure to install these tools on the Mac you’ll be using for your studies, as they’ll be important for your coursework, projects, and hands-on assignments.

!!! note
    Remember, if you switch to a new device, just follow these instructions to ensure you have the necessary tools.

## Step 0: Check System Requirements

Make sure that your computer meets the minimum requirements for IT program coursework:

**Recommended Specifications:**

- **Operating System:** macOS Sonoma (14.0) or newer (macOS Sequoia 15.0+ recommended)
- **Processor:** Apple Silicon (M1/M2/M3 or newer) or Intel Core i5 (8th gen or newer)
- **RAM:** 16 GB minimum (32 GB recommended for running VMs and containers)
- **Storage:** 512 GB SSD minimum (1 TB recommended for development tools, VMs, and projects)
- **Display:** Retina display or 1920x1080 resolution minimum
- **Internet:** Stable broadband connection for cloud services and downloads

These specifications will ensure smooth operation of development environments, virtualization software, Docker containers, and cloud tools.

## Step 1: Install Apple Development Environment and Homebrew
### Requirements

- **Processor:** Apple Silicon (M1 or newer) or Intel CPU (64-bit)
- **Operating System:** macOS Monterey (12.0) or newer
- **Command Line Tools:** Xcode Command Line Tools (required)
- **Terminal Access:** Built-in Terminal or iTerm2

### Open Terminal

Open Terminal by clicking the Spotlight (magnifying glass) icon in the menu bar or press **Command + Space** and type: "Terminal"

### Install Xcode Command Line Tools

Run the following command in Terminal:

```bash
xcode-select --install
```

A popup window will appear. Click **Install** and follow the prompts.

### Install Homebrew Package Manager

Run the following command to install Homebrew:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

!!! important "Configure Homebrew Path"
    After installation, under "==> Next steps:", copy and execute the commands shown. For Apple Silicon Macs, it will look like:

    ```bash
    echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/$USER/.zprofile
    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/$USER/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"
    ```
## Step 2: Essential Programs Installation

After successfully installing Homebrew, you can install multiple apps simultaneously.

### Tools Overview

| Category | Tool | Description |
|----------|------|-------------|
| **Development** | visual-studio-code | Popular code editor with extensive extension support |
| | git | Version control system for tracking code changes |
| | github | GitHub Desktop for GUI-based Git operations |
| | docker | Container platform for application development |
| **Networking** | cyberduck | SFTP/FTP client for file transfers |
| **Productivity** | rectangle | Window management tool (highly recommended) |
| | disk-inventory-x | Disk space visualization |
| | obs | Screen recording and streaming software |
| **Browsers** | google-chrome | Modern web browser with developer tools |
| | firefox | Alternative browser for cross-browser testing |
| **Communication** | zoom | Video conferencing for remote learning |
| **Optional** | utm | Virtual machine software (free, Apple Silicon native) |
| | warp | Modern terminal with AI features |

### Installation Commands

To install the essential programs, run the following command:

!!! tip
    Review the list and remove any applications you don't need before running. You can remove items by deleting the corresponding line.


```bash
brew install --cask visual-studio-code docker github rectangle obs \
  disk-inventory-x google-chrome firefox zoom cyberduck utm && \
  brew install git
```

**What this command does:**
- Installs all GUI applications using `brew install --cask`
- Installs Git command-line tool using `brew install`
- Uses `&&` to ensure Git installs after the cask applications
- Line continuation (`\`) allows the command to span multiple lines for readability

## Step 3: Recommended macOS Configuration

A few system changes will help you with file management and programming.

### Enable Desktop Items and File Extensions

1. Open **Finder**
2. Go to **Finder → Settings** (or press **Command + ,**)
3. Click the **Advanced** tab
4. Check **Show all filename extensions**
5. In the **View** menu, select **Show Path Bar**

### Show Hidden Files and Folders

To toggle visibility of hidden files (like `.ssh`, `.git` folders):

- Press **Command + Shift + .** (period) in Finder
- Press again to hide them

This is essential for accessing configuration files and Git repositories.

## Step 4: Create GitHub Account

As you progress through your IT coursework and projects, you'll be using version control extensively. GitHub is the industry-standard platform for version control and collaborative software development. You'll start by setting up your own GitHub account. If you already have one, you don't need to make a new account. While you'll dive deeper into version control concepts in your courses, your initial step involves creating an account and getting Git up and running on your personal device.

### Create GitHub Account

If you already have a GitHub account, you can sign in. If you don't have one, create a new GitHub account by following these steps:

1. Go to [GitHub Sign up Page](https://github.com/signup)
2. Fill in the Sign Up form with your information
3. Verify your email address - GitHub will send a verification email to the address you provided. Check your inbox and click the verification link.

!!! success
    Congratulations! Once your email is verified, your account is ready. You can now start using GitHub to create repositories, contribute to projects, and collaborate with others.

### Link Your Student Email

Linking your school/university email to your GitHub account offers several important benefits for IT students:

- **Identity Verification:** Helps verify your student status for academic collaborations and projects
- **Access to Educational Resources:** Unlocks free access to GitHub Student Developer Pack with premium tools
- **Professional Portfolio:** Associates your academic work with your institutional identity

!!! tip "Important for Students"
    It is highly recommended to get the **GitHub Student Developer Pack**, which provides free access to premium developer tools and services used in the IT industry.

### How to Link Your School Email ?

1. Login to GitHub using your personal account
2. Go to your [GitHub account settings](https://github.com/settings/profile)
3. In the left sidebar, click on **"Emails"**
4. In the "Add email address" field, enter your school/university email address and click **"Add"**
5. GitHub will send a verification email to your school address. Check your inbox and click the verification link.

You'll now have both emails linked to your account. Choose which one to use for commits.

## Step 5: Activate GitHub Student Developer Pack

The **GitHub Student Developer Pack** is an invaluable resource for IT students, providing free access to premium developer tools, services, and learning resources that would typically cost hundreds of dollars. 

### How to Activate the Student Developer Pack

1. **Sign in to GitHub** with your account that has your school email linked
2. Visit the [GitHub Student Developer Pack](https://education.github.com/pack) page
3. Click **"Get your Pack"** or **"Sign up for Student Developer Pack"**
4. Select your academic status as **"Student"**
5. Fill in the application form with:
   - Your school/university name
   - Proof of enrollment (student ID, transcript, or school email)
   - How you plan to use GitHub
6. Click **"Continue"** to submit your application

### Verification Process

The verification process can be a bit frustrating, as it doesn’t always work smoothly on the first try. If you run into issues, try submitting different documents. With a few attempts, it should eventually go through.

- GitHub may require additional verification depending on your situation
- Common verification methods include:
  - School-issued email confirmation
  - Student ID card upload
  - Enrollment verification document
- Processing typically takes 1-7 business days

!!! success
    Once approved, you'll have access to the Student Developer Pack for the duration of your studies!

## Step 6: Configure Git

You have installed Git in Step 2. Now you need to configure Git by providing your full name and email address. This information will be associated with all your code commits, making it important for collaboration and version control.

### Configure Git Using Command Line

1. Open **PowerShell** or **Git Bash**

2. Set your username and email, which will be associated with your commits. Replace "Your Name" and "your.email@example.com" with your actual information:

```bash
git config --global user.name "Your Name"
git config --global user.email your.email@example.com
```

4. **Verify your Git configuration:**

```bash
git config --list
```

You should see output showing your configured name and email.

---

## Congratulations!

You have successfully installed and configured the essential tools for your IT program. As you progress, you may need additional specialized applications for specific courses.

### Quick Reference - Installed Tools

✅ Homebrew package manager  
✅ Xcode Command Line Tools  
✅ Git version control  
✅ Visual Studio Code with extensions  
✅ Docker Desktop  
✅ Rectangle window manager  
✅ GitHub account with Student Developer Pack  

!!! success
    You're now ready to start your IT journey with a professional development environment!
