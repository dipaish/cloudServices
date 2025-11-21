# Essential Tools Setup for IT Students (Windows)

The following guidelines use the Chocolatey package manager for Windows to install essential applications commonly used throughout IT programs in software development, cloud computing, DevOps, and systems administration.

The provided instructions use the Chocolatey package manager on Windows to install various applications you'll need throughout your IT studies. It's important to install these tools on the device you'll use for studying, as they'll be essential for coursework, projects, and practical assignments.

!!! note
    Remember, if you switch to a new device, just follow these instructions to ensure you have the necessary tools.

## Step 0: Check System Requirements

Make sure that your computer meets the minimum requirements for IT program coursework:

**Recommended Specifications:**

- **Operating System:** Windows 11 (23H2 or newer version)
- **RAM:** Minimum 8 GB (16 GB recommended for running virtual machines and Docker containers)
- **Storage:** At least 256 GB SSD (512 GB recommended for development tools and projects)
- **Processor:** Intel Core i5 or AMD Ryzen 5 (or newer)

These specifications will ensure smooth operation of development environments, virtualization software, and other tools.

## Step 1: Install CHOCOLATEY

Chocolatey is a popular package manager for Windows that simplifies the process of installing, updating, and managing software applications. It allows users to automate the installation of a wide range of software with a single command, making it efficient and convenient. Chocolatey provides access to a vast repository of pre-packaged software packages, which can be easily installed, updated, or removed using command-line instructions. This tool streamlines software management on Windows systems, enhancing productivity and reducing the manual effort required for software maintenance.

### Requirements

- Windows 11 or newer version of Windows Operating System
- PowerShell v2+
- .NET Framework 4+

### Installation Process

**Start PowerShell with Administrator rights** (Run as Administrator)

!!! warning "For re-installing only!"
    If you already have choco installed on your device and want to reinstall it, run the following commands in PowerShell to remove the existing installation:

    ```powershell
    rm -Path "C:\ProgramData\chocolatey" -Recurse -Force
    rm -Path "C:\ProgramData\ChocolateyHttpCache" -Recurse -Force
    ```

    **What these commands do:**
    
    - `rm`: Deletes files or directories (in this case, the chocolatey directory)
    - `-Path`: Specifies the path to delete
    - `-Recurse`: Deletes all files and subdirectories
    - `-Force`: Forces deletion without prompting for confirmation

Run the following command in PowerShell to install CHOCOLATEY:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; iwr https://community.chocolatey.org/install.ps1 -UseBasicParsing | iex
```

## Step 2: Essential Programs Installation
## Step 2: Essential Programs Installation

After successfully installing the Chocolatey package manager, you can use it to install multiple apps simultaneously. This saves you significant time compared to installing each app individually.

### Core Development Tools

- **powershell-core** - Modern command-line shell and scripting language
- **git** - Version control system for tracking code changes
- **vscode** - Popular code editor with extensive extension support
- **docker-desktop** - Container platform for application development

### Networking & Remote Access

- **putty** - SSH/Telnet client for remote server access
- **winscp** - SFTP/SCP file transfer client

### Productivity & Utilities

- **notepadplusplus** - Advanced text editor
- **7zip** - File compression and archiving tool
- **windirstat** - Disk space visualization
- **greenshot** - Screenshot tool for documentation
- **powertoys** - Windows system utilities

### Web Browsers

- **googlechrome** - Modern web browser with developer tools
- **firefox** - Alternative browser for cross-browser testing

### Collaboration & Communication

- **zoom** - Video conferencing for remote learning
- **obs-studio** - Screen recording and streaming software

### Optional Tools

Install based on your specific program needs:

- **vmwareworkstation** - Virtual machine software (requires separate license)
- **curl** - Command-line tool for API testing

### Installation Command

To install the essential programs, run the following command:
***Review the list of program and remove any that you don’t want to install***

```powershell
choco install powershell-core git vscode putty notepadplusplus winscp 7zip windirstat zoom docker-desktop googlechrome firefox curl powertoys greenshot obs-studio -y
```

## Step 3: Create GitHub Account

As you progress through your IT coursework and projects, you'll be using version control extensively. GitHub is the industry-standard platform for version control and collaborative software development. You'll start by setting up your own GitHub account. If you already have one, you don't need to make a new account. While you'll dive deeper into version control concepts in your courses, your initial step involves creating an account and getting Git up and running on your personal device.

### Create GitHub Account

If you already have a GitHub account, you can sign in. If you don't have one, create a new GitHub account by following these steps:

1. Go to [GitHub Sign up Page](https://github.com/signup)
2. Fill in the Sign Up form with your information
3. Verify your email address - GitHub will send a verification email to the address you provided. Go to your email inbox, find the email from GitHub, and click the verification link.

!!! success
    Congratulations! Once your email is verified, your account is ready. You can now start using GitHub to create repositories, contribute to projects, and collaborate with others.

### Link Your Student Email

Linking your school/university email to your GitHub account offers several important benefits for IT students:

- **Identity Verification:** Helps verify your student status for academic collaborations and projects
- **Access to Educational Resources:** Unlocks free access to GitHub Student Developer Pack with premium tools
- **Professional Portfolio:** Associates your academic work with your institutional identity

!!! tip "Important for Students"
    It is highly recommended to get the **GitHub Student Developer Pack**, which provides free access to premium developer tools and services used in the IT industry.

### How to Link Your School Email

1. Login to GitHub using your personal account
2. Go to your [GitHub account settings](https://github.com/settings/profile)
3. In the left sidebar, click on **"Emails"**
4. In the "Add email address" field, enter your school/university email address and click **"Add"**
5. GitHub will send a verification email to your school address. Check your school inbox, open the email, and click on the verification link provided.

Now you'll have both your personal email and school email associated with your GitHub account. You can choose which email to use when making commits or changes.

## Step 4: Activate GitHub Student Developer Pack

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

- GitHub may require additional verification depending on your situation
- Common verification methods include:
  - School-issued email confirmation
  - Student ID card upload
  - Enrollment verification document
- Processing typically takes 1-7 business days

!!! success
    Once approved, you'll have access to the Student Developer Pack for the duration of your studies!

## Step 5: Configure Git

You have installed Git in Step 2. Now you need to configure Git by providing your full name and email address. This information will be associated with all your code commits, making it important for collaboration and version control.

### Configure Git Using Command Line

1. Open **PowerShell** or **Git Bash**

2. Set your username and email, which will be associated with your commits. Use these commands, replacing "Your Name" and "your.email@example.com" with your actual information:

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

You have successfully installed and configured the essential tools. As you progress through your studies, you may need to install additional specialized applications for specific courses (databases, IDEs, cloud tools, etc.). Always check course requirements and follow your instructors' guidance for any additional software installations.

### Quick Reference - Installed Tools

✅ Chocolatey package manager  
✅ PowerShell Core  
✅ Git version control  
✅ Visual Studio Code with extensions  
✅ Docker Desktop  
✅ Networking tools (PuTTY, WinSCP)  
✅ Productivity utilities  
✅ GitHub account with Student Developer Pack  

!!! success
    You're now ready to start your IT journey with a professional development environment!