# User Management

This guide covers managing users and groups in Linux.

## User Accounts

### 1. View User Information

```bash
# Show current user
whoami

# Show current user ID and groups
id

# Show all users
cat /etc/passwd

# Show user details
id username

# Show login history
last

# Show current logged-in users
w
who
```

### 2. Create Users

```bash
# Create new user
sudo useradd username

# Create user with home directory
sudo useradd -m username

# Create user with specific shell
sudo useradd -m -s /bin/bash username

# Create user with home directory and comment
sudo useradd -m -c "Full Name" username

# Create user with specific UID
sudo useradd -m -u 1001 username

# Set password for user
sudo passwd username

# Create system user (non-login)
sudo useradd -r -s /bin/false systemuser
```

### 3. Modify Users

```bash
# Modify username
sudo usermod -l newname oldname

# Add user to group
sudo usermod -aG groupname username

# Change user shell
sudo usermod -s /bin/zsh username

# Change home directory
sudo usermod -d /new/home username

# Lock user account
sudo usermod -L username

# Unlock user account
sudo usermod -U username

# Set expiration date
sudo usermod -e 2025-12-31 username
```

### 4. Delete Users

```bash
# Delete user (keep home directory)
sudo userdel username

# Delete user and home directory
sudo userdel -r username

# Delete user and all files owned by user
sudo userdel -rf username
```

## Groups

### 1. View Groups

```bash
# Show all groups
cat /etc/group

# Show groups for user
groups username

# Show group members
getent group groupname
```

### 2. Create Groups

```bash
# Create new group
sudo groupadd groupname

# Create group with specific GID
sudo groupadd -g 1001 groupname
```

### 3. Manage Groups

```bash
# Add user to group
sudo usermod -aG groupname username

# Add user to multiple groups
sudo usermod -aG group1,group2,group3 username

# Remove user from group
sudo delgroup username groupname           # Debian/Ubuntu
sudo gpasswd -d username groupname         # CentOS/RHEL

# Change group name
sudo groupmod -n newname oldname

# Delete group
sudo groupdel groupname

# Set group password (rarely used)
sudo gpasswd groupname
```

## Sudo Access

### 1. Configure Sudo

```bash
# View sudoers file (ALWAYS use visudo!)
sudo visudo

# Grant sudo access to user
# Add this line to sudoers:
# username ALL=(ALL) ALL

# Allow specific commands without password
# username ALL=(ALL) NOPASSWD: /usr/bin/systemctl

# Check if user has sudo access
sudo -v

# Run command as different user
sudo -u username command

# Run command as root
sudo command

# Execute previous command with sudo
sudo !!
```

### 2. Sudoers File

```bash
# Edit sudoers safely
sudo visudo

# Backup sudoers
sudo cp /etc/sudoers /etc/sudoers.bak

# Grant all sudo privileges
username ALL=(ALL) ALL

# Grant without password prompt
username ALL=(ALL) NOPASSWD: ALL

# Allow specific command
username ALL=(ALL) NOPASSWD: /usr/bin/systemctl

# Allow group
%developers ALL=(ALL) ALL
```

## Password Management

### 1. Change Password

```bash
# Change own password
passwd

# Change another user's password (requires sudo)
sudo passwd username

# Force password change on next login
sudo passwd -e username

# Set password to never expire
sudo passwd -x -1 username

# Lock password (user can still login via SSH key)
sudo passwd -l username

# Unlock password
sudo passwd -u username

# Remove password (allow login without password - INSECURE!)
sudo passwd -d username
```

### 2. Password Policy

```bash
# Check password aging
sudo chage -l username

# Set password expiration
sudo chage -M 90 username             # Expire after 90 days

# Set minimum days between changes
sudo chage -m 1 username

# Set warning days before expiration
sudo chage -W 14 username

# Force password change on next login
sudo chage -d 0 username
```

## File Ownership and Permissions

### 1. Change File Owner

```bash
# Change owner
sudo chown username file.txt

# Change owner and group
sudo chown username:groupname file.txt

# Recursive change
sudo chown -R username:groupname /directory/

# Change only group
sudo chgrp groupname file.txt
```

### 2. User Home Directories

```bash
# Show user home directory
echo $HOME

# Change user's home directory
sudo usermod -d /new/home username

# Create proper home for user
sudo mkdir -p /home/username
sudo chown username:username /home/username
sudo chmod 700 /home/username
```

## Practical Examples

```bash
# Create new user with all options
sudo useradd -m -s /bin/bash -c "John Doe" -G sudo johndoe
sudo passwd johndoe

# Grant user sudo access
sudo usermod -aG sudo username

# Create developer group and add users
sudo groupadd developers
sudo usermod -aG developers user1
sudo usermod -aG developers user2

# Check which groups user belongs to
groups username

# Create system user for service
sudo useradd -r -s /bin/false -d /nonexistent -c "Service User" serviceuser

# Remove user and all files
sudo userdel -rf username

# View sudoers entries for user
sudo visudo -c
grep username /etc/sudoers

# Force password change on next login
sudo chage -d 0 username

# Lock user account
sudo usermod -L username

# Unlock user account
sudo usermod -U username

# Change user's login shell
sudo usermod -s /bin/zsh username

# Find files owned by user
find / -user username

# Change ownership of directory
sudo chown -R username:groupname /path/to/directory
```

## Quick Reference

| Command | Purpose |
|---------|---------|
| `whoami` | Show current user |
| `id` | Show user ID and groups |
| `sudo useradd` | Create new user |
| `sudo userdel` | Delete user |
| `sudo usermod` | Modify user |
| `groups` | Show user groups |
| `sudo groupadd` | Create group |
| `sudo groupdel` | Delete group |
| `passwd` | Change password |
| `sudo chown` | Change file owner |
| `sudo chgrp` | Change file group |
| `sudo visudo` | Edit sudoers file |
| `sudo -u` | Run as different user |
| `cat /etc/passwd` | View all users |
| `cat /etc/group` | View all groups |

