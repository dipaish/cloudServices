# File Permissions and Ownership

This guide covers understanding and managing file permissions and ownership in Linux.

## Understanding File Permissions

### 1. Permission Basics

```bash
# View file permissions
ls -l file.txt
# Output: -rw-r--r-- 1 alice users 1234 Nov 18 10:30 file.txt

# Breaking down the permissions:
# -        rw-      r--      r--
# type     owner    group    others
#          (user)
```

**Permission symbols:**
- `r` (read) = 4
- `w` (write) = 2
- `x` (execute) = 1

**File types:**
- `-` = Regular file
- `d` = Directory
- `l` = Symbolic link
- `b` = Block device
- `c` = Character device

### 2. Octal Notation

Permissions can be represented as numbers:

```bash
# 7 = read(4) + write(2) + execute(1) = rwx
# 6 = read(4) + write(2) = rw-
# 5 = read(4) + execute(1) = r-x
# 4 = read(4) = r--
# 0 = no permissions = ---

# Examples:
chmod 755 file          # rwxr-xr-x (owner full, others read+execute)
chmod 644 file          # rw-r--r-- (owner read+write, others read)
chmod 700 file          # rwx------ (owner only)
chmod 777 file          # rwxrwxrwx (everyone full access - DANGEROUS!)
```

## Changing Permissions (chmod)

### 1. Symbolic Method

```bash
# Add execute permission to owner
chmod u+x script.sh

# Remove write permission from group
chmod g-w file.txt

# Add read permission to others
chmod o+r file.txt

# Give all permissions to owner only
chmod u=rwx,g=,o= file.txt

# Copy permissions from one file to another
chmod --reference=source.txt target.txt
```

**Permission symbols:**
- `u` = user (owner)
- `g` = group
- `o` = others
- `a` = all
- `+` = add
- `-` = remove
- `=` = set exactly

### 2. Numeric Method

```bash
# Owner read+write, group read, others read
chmod 644 file.txt

# Owner read+write+execute, group read+execute, others read+execute
chmod 755 directory/

# Owner only read+write+execute
chmod 700 secret_script.sh

# Recursive change (entire directory tree)
chmod -R 755 /var/www/
```

### 3. Default Permissions (umask)

```bash
# View current umask
umask

# Umask defines what permissions are NOT given by default
# Default: 0022 (removes write for group and others)

# Set temporary umask
umask 022

# Make new files read-only by default
umask 077
```

## Changing Ownership (chown)

### 1. Change Owner

```bash
# Change owner
sudo chown alice file.txt

# Change owner and group
sudo chown alice:developers file.txt

# Change only group
sudo chown :developers file.txt
# or
sudo chgrp developers file.txt

# Recursive change (directory and contents)
sudo chown -R alice:developers /home/alice/projects/

# Change ownership to current user
sudo chown $USER file.txt
```

## Special Permissions

### 1. Setuid (Set User ID)

```bash
# Allows program to run as owner, not executor
chmod u+s program

# View with: ls -l (shows 's' instead of 'x')
# Example: /usr/bin/sudo has setuid bit
```

### 2. Setgid (Set Group ID)

```bash
# Files inherit group of directory
chmod g+s directory

# Display: 's' instead of 'x' in group permissions
```

### 3. Sticky Bit

```bash
# Only owner can delete files (even if others have write permission)
chmod o+t directory

# Common for /tmp where many users write files
```

## Practical Examples

```bash
# Make script executable
chmod +x script.sh
./script.sh

# Secure file (owner read/write only)
chmod 600 secret.key

# Public readable file
chmod 644 README.md

# Executable script for everyone
chmod 755 install.sh

# Directory for sharing (owner and group can write)
chmod 770 shared_folder/

# Give temporary write permission to group
chmod g+w file.txt

# Remove all permissions
chmod 000 file.txt

# Check who owns a file
ls -l file.txt
stat file.txt

# Change multiple files at once
chmod 644 *.txt
chmod 755 *.sh
```

## Permission Quick Reference

| Permission | Owner | Group | Others | Use Case |
|-----------|-------|-------|--------|----------|
| 644 | rw- | r-- | r-- | Regular files |
| 755 | rwx | r-x | r-x | Scripts, executables |
| 600 | rw- | --- | --- | Private files |
| 700 | rwx | --- | --- | Private directories |
| 777 | rwx | rwx | rwx | Shared folder (DANGEROUS) |
| 750 | rwx | r-x | --- | Group access only |
| 770 | rwx | rwx | --- | Owner and group only |

## Troubleshooting Permissions

```bash
# "Permission denied" errors
ls -l file.txt                          # Check current permissions

# Fix: Add execute permission
chmod u+x file.txt

# Can't write to file
chmod u+w file.txt

# Change group to your group
whoami                                  # See your username
groups                                  # See your groups
chown :mygroup file.txt                 # Change group

# Fix directory permissions
chmod 755 directory/

# Restore typical permissions
chmod -R 755 /path/to/project/          # Execute for directories
find /path/to/project -type f -exec chmod 644 {} \;  # Files read-only
```

