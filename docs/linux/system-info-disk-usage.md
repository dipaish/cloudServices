# System Information & Disk Usage

This guide covers checking system information and managing disk usage in Linux.

## System Information

### 1. Operating System Information

```bash
# Show Linux distribution
cat /etc/os-release
lsb_release -a
hostnamectl

# Show kernel version
uname -a
uname -r

# Check if 32-bit or 64-bit
uname -m

# System hostname
hostname
cat /etc/hostname
```

### 2. Hardware Information

```bash
# CPU information
cat /proc/cpuinfo
lscpu

# RAM information
free -h                                 # Human-readable format
free -m                                 # In megabytes
cat /proc/meminfo

# Disk information
lsblk                                   # List block devices
fdisk -l                                # Partition information (requires sudo)
parted -l                               # Partition information

# USB devices
lsusb

# PCI devices
lspci

# DMI information (system manufacturer, model)
sudo dmidecode
```

### 3. Network Information

```bash
# IP address
ip addr
ifconfig

# Network statistics
netstat
ss -tuln

# DNS servers
cat /etc/resolv.conf

# Route information
ip route
route -n
```

## Disk Usage

### 1. Disk Space

```bash
# Disk free and usage (human-readable)
df -h

# Disk usage by filesystem
df -T

# Show all filesystems (including /dev, /sys, etc.)
df -a

# Usage in specific units
df -m                                   # Megabytes
df -B 1G                                # Gigabytes
```

### 2. Directory Size

```bash
# Directory usage (human-readable)
du -sh /home

# Show all subdirectories
du -sh /home/*

# Top 10 largest directories
du -sh /* | sort -hr | head -10

# Detailed size breakdown
du -h /home

# Disk usage with summary
du -sh /path/to/dir

# Sort by size
du -sh /* | sort -h                     # Ascending
du -sh /* | sort -hr                    # Descending (largest first)
```

### 3. File Count

```bash
# Count files in directory
find . -type f | wc -l

# Count directories
find . -type d | wc -l

# Count hidden files
find . -name ".*" -type f | wc -l

# Show all statistics
ls -la | wc -l
```

## Storage Cleanup

### 1. Find Large Files

```bash
# Find files larger than 100MB
find / -size +100M

# Find files larger than 1GB
find / -size +1G

# Find large files in specific directory
find /home -size +500M

# List top 10 largest files
find / -type f -exec ls -lh {} \; | sort -k5 -hr | head -10
```

### 2. Find Old Files

```bash
# Find files not accessed in 30 days
find . -atime +30

# Find files modified more than 60 days ago
find . -mtime +60

# Find files created today
find . -mtime 0

# Delete old files (be careful!)
find . -mtime +30 -delete
```

### 3. Clear Cache and Temp Files

```bash
# Clear package manager cache
sudo apt clean
sudo apt autoclean

# Clear temporary files
rm -rf /tmp/*
sudo rm -rf /var/tmp/*

# Clear old log files
sudo journalctl --vacuum=30d              # Keep last 30 days

# Clear package manager dependencies
sudo apt autoremove
```

## Inode Usage

```bash
# Check inode usage
df -i

# Find directories with many files
find . -maxdepth 1 -type d -exec sh -c 'echo "$(find "$1" -type f | wc -l) $1"' _ {} \; | sort -rn
```

## Practical Examples

```bash
# See what's using disk space
du -sh /*

# Find largest directories in home
du -sh ~/* | sort -hr

# Check overall disk status
df -h

# Monitor disk in real-time
watch -n 1 'df -h'

# Find duplicate files
find . -type f -exec md5sum {} \; | sort | uniq -d

# See package sizes (Ubuntu/Debian)
dpkg-query -W -f='${Installed-Size;10} ${Package}\n' | sort -k1 -rn | head -20

# Check memory usage
free -h
top -b -n 1 | head -20

# See what processes use most memory
ps aux --sort=-%mem | head -10
```

## Quick Reference

| Command | Purpose |
|---------|---------|
| `df -h` | Disk free space (human-readable) |
| `du -sh` | Directory size |
| `free -h` | Memory usage |
| `lsblk` | List block devices |
| `fdisk -l` | Partition information |
| `find -size +100M` | Find large files |
| `find -mtime +30` | Find old files |
| `uname -a` | System information |
| `lscpu` | CPU information |
| `cat /proc/meminfo` | Detailed memory info |

