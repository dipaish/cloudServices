
# Linux Command Guide


This guide provides a comprehensive list of commands used across cybersecurity, system administration, cloud services and ethical hacking.It is written in an easy to understand format. It offers you the opportunity to practice these commands in a safe environment and test your skills. You will learn the basics of Linux Command Line Interface (CLI) in Ubuntu directly from your **GitHub Codespaces terminal** or a local **Ubuntu machine**.

## File & Directory Management Essentials

File and directory management is one of the most fundamental skills in Linux. These commands help you navigate the filesystem, organize files, create and remove directories, inspect content, adjust permissions, and manage disk usage efficiently. Mastering these basics ensures you can interact with the system confidently and perform everyday tasks smoothly.


### 1. 📂 Navigating Directories

#### Show your current directory
```bash
# Display the absolute path of your current working directory
pwd
```

#### List files and directories

```bash
# Show files and directories in current folder
ls

# Show detailed information (permissions, owner, size, date)
ls -l

# Include hidden files/folders (those starting with .)
ls -a

# Display file sizes in human-readable format (KB, MB, GB)
ls -lh

# Combine long listing with hidden files
ls -la
```

#### Move between directories

```bash
# Go to your home directory (/home/username)
cd ~

# Enter a specific folder
cd Documents

# Move up one level to the parent directory
cd ..

# Navigate to the root directory of the system
cd /

# Navigate using a full path
cd ~/Projects/2025
```

---

### 2. 🧱 Creating & Removing Directories

#### Create directories

```bash
# Create a single folder in the current directory
mkdir folder1

# Create multiple folders at once
mkdir one two three

# Create nested directories (parent folders created automatically with -p flag)
mkdir -p nested/dir/structure
```

#### Remove directories

```bash
# Remove an empty folder (fails if folder contains files)
rmdir empty_folder

# Remove a folder and all its contents recursively
rm -r myfolder

# Force delete a folder without asking for confirmation (DANGEROUS - use carefully!)
rm -rf myfolder
```

#### View directory structure

```bash
# Display folder hierarchy in tree format
tree

# Limit tree depth to 2 levels to avoid too much output
tree -L 2
```

---

### 3. 📄 Creating & Editing Files

#### Create files

```bash
# Create an empty file 
touch newfile.txt

# Create a file with initial content using the redirect operator (> overwrites)
echo "Hello World" > file.txt

# Add text to an existing file without overwriting (>> appends)
echo "More text" >> file.txt
```

#### Edit with nano

```bash
nano notes.txt
```

Nano shortcuts:

* **Ctrl + O** Save
* **Ctrl + X** Exit
* **Ctrl + K** Cut line
* **Ctrl + U** Paste line

---

### 4. 📜 Viewing File Content

```bash
# Display the entire contents of a file
cat file.txt

# Show only the first 5 lines of a file
head -n 5 file.txt

# Show only the last 3 lines of a file (useful for viewing recent log entries)
tail -n 3 file.txt

# Open file in an interactive scrollable viewer (press q to quit)
less file.txt
```

#### Count lines/words/characters

```bash
# Show line count, word count, and character count for a file
wc file.txt

# Show only the number of lines in a file
wc -l file.txt
```

---

### 5. 🔁 Copying, Moving, Renaming Files

```bash
# Copy a single file to create a backup with a new name
cp file.txt backup.txt

# Copy an entire directory and all its contents to a new location
cp -r folder1 folder2/

# Rename a file by moving it to itself with a new name
mv file.txt renamed.txt

# Move a file to a different directory
mv file.txt Documents/

# Move multiple files matching a pattern to a backup directory
mv *.txt backup/
```

---

### 6. 🗑️ Deleting Files Safely

```bash
# Delete a file permanently (no trash/recycle bin in Linux!)
rm file.txt

# Delete with confirmation prompt before removing (safer option)
rm -i file.txt

# Delete a directory and all files/folders inside it recursively
rm -r folder

# Force delete without asking (DANGEROUS - use with extreme caution!)
rm -rf folder
```

---

### 7. 🎴 Using Wildcards

| Wildcard | Description                      |
| -------- | -------------------------------- |
| `*`      | Matches any number of characters |
| `?`      | Matches one character            |

Examples:

```bash
# List all files with .txt extension in current directory
ls *.txt

# List files matching pattern: file + one character + .txt (file1.txt, fileA.txt, etc)
ls file?.txt

# Delete all files starting with "temp" (temp.log, tempfile, temp_old, etc)
rm temp*
```

---

### 8. 📦 Disk Usage

```bash
# Show total disk usage of current directory in human-readable format (MB, GB)
du -sh .

# Show disk usage of each item/file in current directory
du -sh *

# Display how much disk space is free and used on all mounted partitions
df -h
```

---

### 9. 🕵️ Hidden Files

```bash
# Display all files including hidden ones (those starting with a dot)
ls -a

# Create a hidden file by starting its name with a dot
echo "secret" > .hiddenfile

# Create a hidden configuration directory
mkdir .config
```

---

### 10. 🔐 Permissions & Ownership

#### Change permissions

```bash
# Make script executable by owner only
chmod u+x script.sh

# Set file to readable/writable by owner, readable by others (rw-r--r--)
# 6 = owner (read+write), 4 = group (read), 4 = others (read)
chmod 644 file.txt

# Recursively apply rwx for owner, rx for group/others to directory (755)
# 7 = owner (read+write+execute), 5 = group (read+execute), 5 = others (read+execute)
chmod -R 755 public/
```

#### Change ownership

```bash
# Change the owner of a file to a specific user (requires sudo for security)
sudo chown alice file.txt

# Recursively change ownership of directory and all contents to user:group
sudo chown -R alice:devteam project/
```

---

### 11. 🔎 Finding Files

```bash
# Search for a file with an exact name starting from current directory
find . -name "file.txt"

# Find all files with a specific extension (e.g., all log files)
find . -name "*.log"

# Find directories (not files) with a specific name
find . -type d -name "backup"

# Find files matching a pattern and delete them immediately
find . -name "*.tmp" -delete
```

### Basic Commands

| Command | Purpose |
|--------|---------|
| `pwd`  | Print current working directory (full path). |
| `ls`   | List files and directories. |
| `cd`   | Change directories. |
| `cp`   | Copy files and folders. |
| `mv`   | Move or rename files and folders. |
| `rm`   | Remove files or directories. |
| `mkdir`| Create a new directory. |
| `rmdir`| Remove an empty directory. |
| `touch`| Create an empty file or update its timestamp. |
| `tree` | Display directory structure in tree format. |
| `man`  | View manual/help for commands. |
| `echo` | Output text or variables. |
| `cat`  | Display file content. |
| `nano` | Terminal-based text editor. |
| `wc`   | Count words, lines, characters. |
| `head` | Show first lines of a file. |
| `tail` | Show last lines of a file. |
| `less` | Scrollable file viewer. |
| `chmod`| Change file permissions. |
| `chown`| Change file owner. |
| `du`   | Show disk usage. |
| `df`   | Show free/used disk space. |
| `find` | Search for files/directories. |

---

## 📖 Official Documentation and Guides
- [Ubuntu Linux Documentation](https://help.ubuntu.com/)  
  *Official manuals and tutorials from Ubuntu.*

- [Linux Command Library](https://linuxcommandlibrary.com/)  
  *Search and browse hundreds of commands with examples.*

- [TLDR Pages](https://tldr.sh/)  
  *Simplified and community-maintained command cheat sheets.*

- [Linux Handbook](https://linuxhandbook.com/)  
  *Step-by-step tutorials, tips, and news for Linux learners.*

---

## 💻 Free Online Linux Emulators

Try out Linux in your browser — no installation needed:

- [JSLinux](https://bellard.org/jslinux/)  
  *Run Linux or other OSes directly in the browser (by Fabrice Bellard).*

- [Copy.sh Linux Emulator](https://copy.sh/v86/)  
  *Boot a full Linux system in your browser — fast and lightweight.*

- [Webminal](https://www.webminal.org/)  
  *Online Linux terminal for practice + tutorials and collaboration.*

- [OverTheWire: Bandit](https://overthewire.org/wargames/bandit/)  
  *A hands-on Linux game that teaches CLI through hacking-style challenges.*

---