# Windows Subsystem for Linux (WSL2) Setup Guide

This guide will help you install and configure Windows Subsystem for Linux 2 (WSL2) on Windows 11, enabling you to run a full Linux environment directly on your Windows machine. WSL2 is essential for IT students who need to work with Linux tools, Docker, and cloud-native development without dual-booting or using virtual machines.

!!! note
    WSL2 provides near-native Linux performance and is fully integrated with Windows. It's perfect for software development, DevOps, and learning Linux commands.

!!! tip "Check Virtualization"
    Open Task Manager → Performance tab → CPU section. Look for "Virtualization: Enabled". If disabled, you'll need to enable it in your BIOS/UEFI settings.

## Step 1: Install WSL2

### Quick Installation (Recommended)

**Open PowerShell as Administrator** (Right-click Start → Windows PowerShell (Admin) or Terminal (Admin))

Run the following command to install WSL with the latest Ubuntu distribution:

```powershell
wsl --install
```

!!! info "What This Does"
    This command will:
    
    - Enable required Windows features (Virtual Machine Platform, WSL)
    - Download and install the Linux kernel
    - Install Ubuntu (latest LTS) as the default distribution
    - Set WSL2 as the default version

**Restart your computer** when prompted.

### Update Existing WSL

If you already have WSL installed, make sure it's up to date:

```powershell
wsl --update
```

## Step 2: Configure WSL2

### Set WSL2 as Default Version

Ensure WSL2 is set as the default version:

```powershell
wsl --set-default-version 2
```

### Check Installed Distributions

Verify your WSL installation and version:

```powershell
wsl --list --verbose
# Or the short version:
wsl -l -v
```

You should see output showing your distributions running WSL version 2.

## Step 3: Install Linux Distributions

### View Available Distributions

See all available Linux distributions:

```powershell
wsl --list --online
```

### Install Ubuntu 24.04 LTS (Recommended)

First, remove the default Ubuntu if it was installed:

```powershell
wsl --unregister Ubuntu
```

Then install Ubuntu 24.04 LTS:

```powershell
# Recommended method (uses web download):
wsl --install --web-download --distribution Ubuntu-24.04

# Alternative if the above fails:
wsl --install -d Ubuntu-24.04
```

### Install Debian (Optional for Testing)

If you want to test applications on Debian:

```powershell
# Recommended method:
wsl --install --web-download --distribution Debian

# Alternative:
wsl --install -d Debian
```

### Set Default Distribution

Set Ubuntu 24.04 as your default distribution:

```powershell
wsl --setdefault Ubuntu-24.04
```

### First-Time Setup

When you first launch your Linux distribution:

1. Create a username (lowercase, no spaces)
2. Create a password (you won't see characters as you type)
3. Confirm your password

!!! warning "Remember Your Password"
    You'll need this password for `sudo` commands. There's no easy way to recover it if forgotten.

## Step 4: Update Linux Distribution

Update your Linux distribution to get the latest packages:

```powershell
# Update Ubuntu 24.04:
wsl -d Ubuntu-24.04 -u root bash -c 'apt update && apt upgrade -y'

# Update Debian (if installed):
wsl -d Debian -u root bash -c 'apt update && apt upgrade -y'
```

## Step 5: Enable systemd (Recommended)

Enable systemd to make WSL behave more like a traditional Linux system:

```powershell
wsl -u root -d Ubuntu-24.04 bash -c "echo '[boot]' > /etc/wsl.conf"
wsl -u root -d Ubuntu-24.04 bash -c "echo 'systemd=true' >> /etc/wsl.conf"
wsl --terminate Ubuntu-24.04
```

Restart WSL to apply changes:

```powershell
wsl --shutdown
```

Then launch Ubuntu again from Start menu or by typing `wsl`.

## Step 6: Configure Resource Limits

Limit how much RAM and CPU WSL2 can use to prevent it from consuming all system resources.

**Open PowerShell with normal user rights** (not as Administrator) and run:

```powershell
$contentToAdd = @"
[wsl2]
memory=4GB           # Limits VM memory to 4 GB
processors=2         # Limits to 2 CPU cores
[experimental]
autoMemoryReclaim=gradual  # Automatically reclaim unused memory
"@

New-Item $home\.wslconfig -Force
Add-Content $home\.wslconfig $contentToAdd
notepad $home\.wslconfig
```

!!! tip "Adjust Based on Your System"
    - **8 GB RAM system:** Use `memory=4GB` and `processors=2`
    - **16 GB RAM system:** Use `memory=6GB` or `memory=8GB` and `processors=4`
    - **32 GB+ RAM system:** Use `memory=12GB` or `memory=16GB` and `processors=6-8`

After editing the file, restart WSL:

```powershell
wsl --shutdown
```

## Step 7: Using WSL2

### Launch Linux Terminal

- Type `wsl` in PowerShell or Command Prompt
- Open "Ubuntu 24.04" from the Start menu
- Use Windows Terminal (recommended)

### Access Windows Files from Linux

Your Windows drives are mounted at `/mnt/`:

```bash
# Access C: drive
cd /mnt/c/Users/YourUsername/

# Access D: drive
cd /mnt/d/
```

### Access Linux Files from Windows

In File Explorer, type in the address bar:

```
\\wsl$\Ubuntu-24.04\home\yourusername
```

Or click "Linux" in the left sidebar of File Explorer (Windows 11).

## Advanced: Backup and Restore

### Export (Backup) a Distribution

Save your Linux environment to a backup file:

```powershell
wsl --export Ubuntu-24.04 "D:\Backups\Ubuntu-24.04-backup.tar"
```

### Import (Restore) a Distribution

Restore a Linux distribution from backup:

```powershell
wsl --import Ubuntu-24.04-Restored "C:\WSL\Ubuntu" "D:\Backups\Ubuntu-24.04-backup.tar"
```

### Remove a Distribution

!!! danger "Data Loss Warning"
    This will permanently delete the Linux distribution and all its data!

```powershell
wsl --unregister Ubuntu-24.04
```

---

## Troubleshooting

### Issue: WSL2 Won't Start or Install

**Solution 1: Update Windows**

```powershell
# Install Windows Update module
Install-Module PSWindowsUpdate -Force
Import-Module PSWindowsUpdate
Get-WindowsUpdate
Install-WindowsUpdate -AcceptAll
```

Restart your computer after updates.

**Solution 2: Enable Required Windows Features**

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform -All
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux -All
```

Restart your computer.

### Issue: Virtualization Not Enabled

1. Restart computer and enter BIOS/UEFI (usually F2, F10, F12, or Del key during boot)
2. Find "Virtualization Technology", "Intel VT-x", "AMD-V", or "SVM Mode"
3. Set to **Enabled**
4. Save and exit BIOS

### Issue: WSL Version Shows as 1 Instead of 2

Upgrade existing distributions to WSL2:

```powershell
wsl --set-version Ubuntu-24.04 2
wsl --set-version Debian 2
```

Verify the upgrade:

```powershell
wsl -l -v
```

### Issue: Hyper-V Not Working

Force Hyper-V to start using bootloader:

```powershell
bcdedit /set hypervisorlaunchtype auto
```

Restart your computer.

### Issue: Docker Desktop Integration Not Working

Reinstall Docker Desktop and ensure WSL integration is enabled in Docker settings.

---

## Congratulations!

You now have a fully functional Linux environment running on Windows! You can use this for:

✅ Software development with Linux tools  
✅ Running Docker containers  
✅ Learning Linux commands and system administration  
✅ Cloud development and DevOps workflows  
✅ Running web servers and databases  
✅ Using programming languages like Python, Node.js, Ruby, etc.

!!! success
    For more information and advanced usage, visit the [official WSL documentation](https://docs.microsoft.com/en-us/windows/wsl/).

**Useful WSL Commands:**

| Command | Description |
|---------|-------------|
| `wsl` | Start default Linux distribution |
| `wsl -d <DistroName>` | Start specific distribution |
| `wsl --list` | List installed distributions |
| `wsl --shutdown` | Shut down all distributions |
| `wsl --terminate <DistroName>` | Stop specific distribution |
| `wsl --update` | Update WSL kernel |
| `wsl --status` | Check WSL status and version |