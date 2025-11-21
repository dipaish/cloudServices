# Windows 11 Education License Upgrade

This guide is for students with **Windows 11 Home edition** who need to upgrade to Windows 11 Education. Windows 11 Education includes advanced features and capabilities designed for academic use, and it's available free for students.

!!! note
    Windows 11 Education is available free for students through Azure for Students. It includes all Pro features plus additional capabilities for academic and professional development.

!!! warning "Already Have Pro or Education?"
    If you already have Windows 11 Pro or Education, you don't need this guide.

## Step 0: Prerequisites

Before starting, ensure you have:

- **Windows 11 Home edition** installed (this guide is specifically for Home users upgrading to Education)
- **Administrator access** to your computer
- **Active student email** for Azure for Students access
- **Internet connection** for activation

!!! warning "Important"
    Back up any important data before making system changes. While this process is generally safe, it's always good practice to have backups.

## Step 1: Backup Your Current Windows License

It's important to save your original Windows license key before making changes.

### Method 1: Save to File

**Open PowerShell as Administrator** and run:

```powershell
(Get-WmiObject -Class SoftwareLicensingService).OA3xOriginalProductKey | Out-File license.txt
```

This saves your product key to a file called `license.txt` in your current directory.

### Method 2: Display in Terminal

Alternatively, display the key directly in the terminal:

```powershell
wmic path SoftwareLicensingService get OA3xOriginalProductKey
```

!!! tip "Save Your Key"
    Copy this key and save it in a secure location (password manager, encrypted note, etc.). You may need it if you ever want to revert to your original license.

!!! info "Digital Licenses"
    Modern laptops often use digital licenses tied to your hardware or Microsoft account. If the commands above return nothing, your license is likely digital and stored in Microsoft's servers. In this case, you can skip the backup step.
    
    Learn more: [Microsoft Digital Licenses](https://support.microsoft.com/en-us/windows/activate-windows-c39005d4-95ee-b91e-b399-2820fda32227)

## Step 2: Get Windows 11 Education License

### Access Azure for Students

1. Go to [Azure for Students](https://portal.azure.com/#view/Microsoft_Azure_Education/EducationMenuBlade/~/software)
2. Sign in with your student email account
3. Verify your student status if prompted

### Locate Windows 11 Education Key

1. Navigate to the **"Education"** section in the Azure Portal
2. Click on **"Software"** in the left menu
3. Search for **"Windows 11 Education"**
4. Click **"View Key"** to display your product key
5. **Copy and save** the key to a secure location

!!! success
    You now have your Windows 11 Education license key! Keep it safe,you'll need it in the next step.

## Step 3: Activate Windows 11 Education

### Change Product Key

1. **Open Settings**
   - Press `Windows + I` or click Start → Settings

2. **Navigate to Activation**
   - Click **"System"** in the left sidebar
   - Scroll down and click **"Activation"**

3. **Change Product Key**
   - Click **"Change product key"**
   - Enter your Windows 11 Education key
   - Click **"Next"**

4. **Complete Activation**
   - Windows will verify and activate your license
   - Click **"Activate"** and follow any prompts
   - Restart your computer if required

!!! tip "Activation Time"
    Activation usually takes a few seconds to a minute. If it fails immediately, check your internet connection and try again.

### Troubleshooting Activation Issues

If you encounter errors during activation, try these fixes:

**Run System File Checker and DISM:**

Open PowerShell as Administrator and run these commands sequentially:

```powershell
# Scan and repair system files
SFC /SCANNOW

# Clean up component store
DISM /Online /Cleanup-Image /StartComponentCleanup

# Restore system health
DISM /Online /Cleanup-Image /RestoreHealth
```

!!! info "What These Commands Do"
    - **SFC** scans and repairs corrupted Windows system files
    - **DISM** repairs the Windows image and component store
    - These tools fix underlying issues that may prevent license changes

After running these commands:
1. Restart your computer
2. Try changing the license key again

!!! note "Manufacturer-Specific Issues"
    Some laptop manufacturers don't fully test Windows upgrades to Education/Pro editions. The commands above typically resolve these compatibility issues.

---

## Troubleshooting

### Activation Error: "This key didn't work"

1. Verify you copied the entire product key correctly (no extra spaces)
2. Ensure your computer is connected to the internet
3. Wait a few minutes and try again (activation servers may be busy)
4. Run the SFC and DISM commands from Step 3
5. Contact Microsoft support if the issue persists

### License Shows as "Not Activated"

1. Open Settings → System → Activation
2. Click "Troubleshoot" to run the Windows activation troubleshooter
3. If using a digital license, ensure you're signed in with the correct Microsoft account
4. Try activating again after a system restart

---

!!! tip "Learn More"
    - [Windows 11 Education Features](https://www.microsoft.com/en-us/education/products/windows)
    - [Azure for Students](https://azure.microsoft.com/en-us/free/students/)
