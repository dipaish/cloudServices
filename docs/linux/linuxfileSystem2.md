## Linux File Systems

### Linux File System Hierarchy (FHS)

Linux uses a tree-like file system structure starting from the root directory `/`. Understanding the filesystem hierarchy is essential for navigating, managing files, and system administration.

**Windows vs 🐧 Linux Filesystem Comparison**

If you’re coming from Windows, Linux’s filesystem can feel unfamiliar at first.  
- Windows uses **drive letters** like `C:\` or `D:\`.  
- Linux uses **one unified tree**, starting at `/`.

This **table** helps map what you already know in Windows to how Linux organizes things.

| Concept / Location | Windows Equivalent | Linux Equivalent | Explanation |
|--------------------|-------------------|------------------|-------------|
| Top-level structure | `C:\`, `D:\` | `/` | No drive letters — everything starts at `/`. |
| User files | `C:\Users\Alice\` | `/home/alice/` | Personal user data (Documents, Downloads, etc.). |
| Administrator account | Administrator | root | Superuser with full system control. |
| Admin home folder | `C:\Users\Administrator\` | `/root` | Root’s private home directory. |
| Program files | `C:\Program Files\` | `/usr/bin`, `/usr/local/bin`, `/opt` | Installed apps and user programs. |
| System settings | Windows Registry | `/etc` | System-wide configuration stored in simple text files. |
| System libraries | `C:\Windows\System32\` | `/usr/lib`, `/lib` | Shared system libraries and core functions. |
| Device manager | Device Manager | `/dev` | Hardware devices as files. |
| Temporary files | `%TEMP%` | `/tmp` | Temporary data, cleared on reboot. |
| Logs | Event Viewer | `/var/log` | System and application logs. |
| Boot files | Boot Manager | `/boot` | Kernel + bootloader files. |
| Mounted drives | `E:\`, `F:\` | `/media`, `/mnt` | External drives appear as folders. |

Linux files are organized in a **tree structure** starting at `/` (root). Think of `/` as “My Computer,” and everything else branches off from it. **Below are the most important folders you’ll encounter.**

| Directory | Description                             |
| --------- | --------------------------------------- |
| `/`       | Root directory (everything starts here) |
| `/home`   | User home directories                   |
| `/etc`    | Configuration files                     |
| `/bin`    | Essential user binaries (commands)      |
| `/usr`    | Secondary system programs and libraries |
| `/var`    | Variable data like logs                 |
| `/tmp`    | Temporary files                         |

---

### Key Directories Explained

#### 1. **Root Directory (`/`)**

**What it is:** The top-level directory of the entire filesystem. Think of it like `C:\` on Windows, but for the entire system. All other directories branch off from here.

**Common use:** Navigate to see the overall system structure, access system-level directories.

```bash
# View contents of root directory (see what's at the top level)
ls /

# Navigate to root
cd /

# See what you have at root level
ls -la /
```

#### 2. **Home Directory (`/home`)**

**What it is:** Your personal space on the system. Similar to `C:\Users\YourName\` on Windows. Each user gets their own folder here where they can store their files and settings.

**Common use:** Store your documents, downloads, projects, and personal files.

```bash
# Go to your home directory (from anywhere)
cd ~

# List what's in your home directory
ls ~

# See your home directory path
echo $HOME

# Go to another user's home
cd /home/alice
```

#### 3. **Configuration Files (`/etc`)**

**What it is:** The "settings" folder for the system. Instead of a Windows Registry, Linux stores configuration in simple text files here. System admins edit these files to configure software.

**Common use:** Modify system settings, check software configuration, manage network settings.

```bash
# See what configuration files exist
ls /etc/

# Check network configuration
cat /etc/hostname

# View SSH (remote login) settings
cat /etc/ssh/sshd_config

# See all users on the system
cat /etc/passwd

# Edit a config file (requires sudo for system files)
sudo nano /etc/hostname
```

#### 4. **User Binaries (`/bin`)**

**What it is:** The folder containing executable commands/programs. When you type `ls`, `cd`, or `echo`, the system finds them here.

**Common use:** Run essential system commands that all users need.

```bash
# List all available commands in this folder
ls /bin/

# Find where a specific command is located
which bash
which ls
which cat

# See the actual file size of commands
ls -lh /bin/ | head
```

#### 5. **System Programs (`/usr`)**

**What it is:** The secondary programs folder. Larger programs, libraries, and user applications go here. Similar to `C:\Program Files\` on Windows.

**Common use:** Find installed applications, system libraries, documentation.

```bash
# See user-installed applications
ls /usr/bin/

# Find shared system libraries
ls /usr/lib/

# View documentation for programs
ls /usr/share/doc/

# Find specific program
which python3
which git
```

#### 6. **Variable Data (`/var`)**

**What it is:** Folder for files that change frequently - like logs, cached data, and temporary variables. Similar to `C:\ProgramData\` on Windows.

**Common use:** Check system logs, troubleshoot problems, monitor system activity.

```bash
# View all system logs
ls /var/log/

# Check recent system messages (troubleshooting)
tail -f /var/log/syslog

# View web server logs (if Apache/Nginx installed)
ls /var/log/apache2/
tail /var/log/nginx/access.log

# Check disk usage of logs
du -sh /var/log/
```

#### 7. **Temporary Files (`/tmp`)**

**What it is:** A temporary storage folder that gets cleaned up automatically when you reboot. Any user can write here. Similar to `%TEMP%` on Windows.

**Common use:** Store temporary files, cache, installation files that don't need to persist.

```bash
# Create a temporary file
touch /tmp/my_temp_file.txt

# Create a temporary folder for a project
mkdir -p /tmp/my_project

# View what's in temp (may have system temp files)
ls /tmp/

# Clean up your temporary files manually
rm /tmp/my_temp_file.txt

# See how much space temp is using
du -sh /tmp/
```

---

### Other Important Directories

```bash
# /root - Root user's home directory (not /home/root)
ls /root

# /boot - Boot loader files and kernel
ls /boot

# /dev - Device files (hard drives, USB, terminals)
ls /dev

# /lib - System libraries needed for /bin and /sbin
ls /lib

# /opt - Optional third-party software
ls /opt

# /proc - Virtual filesystem with process information
ls /proc

# /sys - Virtual filesystem with hardware information
ls /sys

# /mnt - Mount points for temporary filesystems
ls /mnt

# /media - Mount points for removable media
ls /media
```

---

### Absolute vs Relative Paths

Understanding paths is crucial in Linux. There are two ways to specify where a file or folder is located.

---

#### **Absolute Paths (Start with `/`)**

**What it is:** The complete, full address from the root directory `/` to your target. It's like giving someone your full mailing address. It works no matter where they are.

**Key characteristics:**
- Always starts with `/`
- Works from anywhere in the filesystem
- The full "address" to a file/folder
- Never ambiguous - always points to the same location

**Why use it:**
- When you want to be 100% sure which file you're accessing
- In scripts that need to work from any directory
- When giving instructions to someone about file locations

```bash
# Absolute path examples (work from ANYWHERE)
cd /home/alice/Documents
cat /etc/passwd
ls /usr/bin
cp /home/alice/file.txt /tmp/backup.txt

# Even if you're in /tmp, this works:
cat /etc/hostname          # Reads the hostname file

# You can be in any directory and still access the file
pwd                        # Might show: /home/alice/Downloads
cat /etc/passwd            # Still works - absolute path
```

**Real-world analogy:**
```
Absolute path = Full mailing address
❌ "Bob's house"  (relative - depends on where you are)
✅ "123 Main St, Springfield, IL 62701"  (absolute - works from anywhere)
```

---

#### **Relative Paths (Don't start with `/`)**

**What it is:** A shorthand path based on your current location. It's like saying "go down the hall and turn left". Only works if you understand where you're starting from.

**Key characteristics:**
- Does NOT start with `/`
- Only works from specific directories
- Depends on your current location
- Shorter to type but can be confusing
- Uses special symbols: `.`, `..`, `~`

**Special symbols:**
- `.` = current directory
- `..` = parent directory (one level up)
- `~` = home directory
- `-` = previous directory (when used with `cd`)

**Why use it:**
- Shorter, faster to type
- Works well when you're navigating in a specific area
- Useful in everyday terminal work

```bash
# Assuming you're currently in /home/alice

# Relative path examples (depend on current location)
cd Documents                # Goes to /home/alice/Documents
ls Downloads                # Lists /home/alice/Downloads
cat file.txt                # Reads /home/alice/file.txt

# Using .. to go up
cd ..                       # Go to /home
cd ../bob                   # Go to /home/bob
ls ../../etc                # Lists root /etc folder

# Using . for current directory
cat ./file.txt              # Same as: cat file.txt
ls ./Documents              # Lists current dir's Documents folder

# Using ~ for home
cd ~/Documents              # Goes to /home/alice/Documents
cat ~/file.txt              # Reads /home/alice/file.txt

# Using - for previous directory
cd /etc
cd -                        # Goes back to previous location
```

---

#### **Practical Comparison**

Let's say you have this folder structure:

```
/home/
  alice/
    Documents/
      project.txt
    Downloads/
      image.png
    Pictures/
```

**If you're in `/home/alice`:**

| Task | Absolute Path | Relative Path | Which is better? |
|------|---------------|---------------|-----------------|
| Read project.txt | `cat /home/alice/Documents/project.txt` | `cat Documents/project.txt` | Relative (shorter) |
| Go to Downloads | `cd /home/alice/Downloads` | `cd Downloads` | Relative (shorter) |
| Go up to /home | `cd /home` | `cd ..` | Relative (shorter) |
| Copy to /tmp | `cp /home/alice/Documents/project.txt /tmp/` | `cp Documents/project.txt /tmp/` | Relative (shorter) |
| Read from /etc | `cat /etc/passwd` | Can't use relative! | Absolute (necessary) |

**If you're in `/tmp` (different location):**

| Task | Absolute Path | Relative Path | Which is better? |
|------|---------------|---------------|-----------------|
| Read project.txt | `cat /home/alice/Documents/project.txt` | `cat ~/Documents/project.txt` | Absolute (certain) |
| Check system file | `cat /etc/hostname` | Can't use relative | Absolute (necessary) |
| Go home | `cd /home/alice` | `cd ~` | Either works! |

---

#### **When to Use Which?**

**Use ABSOLUTE paths when:**
- Writing shell scripts (consistency across all locations)
- Giving file locations to someone else
- You need guaranteed accuracy
- Working with system files (`/etc`, `/var`, `/usr`)
- In cron jobs or automated tasks

```bash
# Shell script example - always use absolute paths
#!/bin/bash
cp /home/alice/file.txt /tmp/backup.txt
echo "Backup complete at /tmp/backup.txt"
```

**Use RELATIVE paths when:**
- Doing quick manual navigation in terminal
- Working within a specific project folder
- Want shorter, faster commands
- Moving/copying files within same folder structure

```bash
# Quick navigation - relative paths are fine
cd ~/projects/myapp
ls                      # See files in current folder
cd ../another_project   # Jump to sibling folder
cat config.txt          # Read file in current folder
```

---

#### **Troubleshooting Paths**

```bash
# Confused about where you are?
pwd                     # Shows absolute path of current location

# Want to see the absolute path of a file?
readlink -f file.txt    # Shows /home/alice/file.txt
ls -ld /home/alice      # Shows full absolute path details

# Test if a path exists (absolute or relative)
test -f /home/alice/file.txt && echo "File exists"
test -d ~/Documents && echo "Documents folder exists"

# See relative path from one location to another
cd /home
ls alice/Documents/     # See files using relative path

# Navigate using absolute path from anywhere
cd /var/log
pwd                     # Shows: /var/log
cat /etc/hostname       # Can still use absolute paths
```

---

#### **Pro Tips**

1. **Tab completion saves time:**
   ```bash
   cd /ho[TAB]           # Auto-completes to /home/
   cd /home/al[TAB]      # Auto-completes to /home/alice/
   ```

2. **Use absolute paths in scripts, relative paths in terminal:**
   ```bash
   # Script (always use absolute)
   #!/bin/bash
   cp /home/alice/file.txt /tmp/backup.txt
   
   # Terminal (use relative for speed)
   cd ~/Documents
   cp file.txt /tmp/backup.txt
   ```

3. **`pwd` is your friend:**
   ```bash
   pwd                  # Always know where you are
   # Output: /home/alice/Documents
   ```

4. **Understanding `..` saves navigation time:**
   ```bash
   # Instead of typing full path:
   cd /home/alice/Downloads
   
   # Navigate up and across (shorter):
   cd ../Documents     # Goes to /home/alice/Documents
   ```

---

### Navigating the Filesystem Efficiently

```bash
# See your current location
pwd

# Go back to previous directory
cd -

# Go to home directory from anywhere
cd
# or
cd ~

# See full path of files in current directory
ls -ld *

# Search for files across filesystem
find / -name "filename.txt"

# Understand directory structure
tree /home
tree -L 2 /usr
```

---

## 💡 Tips for Windows Users Transitioning to Linux

Quick comparison to help you understand Linux if you're coming from Windows:

| Windows Concept | Linux Equivalent | Key Difference | Example |
|-----------------|-----------------|----------------|---------|
| **Drive letters** (`C:\`, `D:\`) | Single root `/` | Everything is one tree | `cd /home/alice` (no drive letter) |
| **My Documents** (`C:\Users\Alice\`) | Home directory `~` | Use `~` as shortcut | `cd ~` or `cd /home/alice` |
| **Program Files** (`C:\Program Files\`) | `/usr/bin/`, `/opt/` | Programs scattered across system | `which python3` to find programs |
| **Registry** (settings) | `/etc/` (text files) | Settings are simple text files | `cat /etc/hostname` |
| **Event Viewer** (logs) | `/var/log/` (text files) | Logs are plain text | `tail /var/log/syslog` |
| **Complex permissions** (NTFS) | Owner/Group/Others | Simpler permission model | `chmod 755 file.txt` |
| **Recycle Bin** (recovery) | No recovery! | Deleted files are gone forever | Use `rm -i` for confirmation |
| **Backslash** `\` paths | **Forward slash** `/` paths | Different path separator | `/home/alice/Documents/file.txt` |
| **Device Manager** | `/dev/` (device files) | Devices are files too | `ls /dev/sda` |

---

### Quick Tips

- **Use `~` instead of typing full home path** → `cd ~` is faster than `cd /home/alice`
- **Use `pwd` when lost** → Always shows where you are
- **Use `rm -i` until comfortable** → Asks confirmation before deleting
- **Use `which` to find programs** → `which python3` shows where Python is installed
- **Check `/var/log/syslog` for errors** → Plain text, easy to understand
- **Tab completion is your friend** → Press `[TAB]` to auto-complete paths
- **Absolute paths in scripts, relative paths in terminal** → `/home/alice/file.txt` in scripts, `~/file.txt` in terminal