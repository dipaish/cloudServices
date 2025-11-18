# Searching Files & Text

This guide covers searching for files and searching within files in Linux.

## Searching for Files

### 1. Find Command

The `find` command is powerful for searching files and directories.

```bash
# Find files by name
find . -name "file.txt"
find / -name "*.log"                    # Search entire system
find . -iname "FILE.txt"                # Case-insensitive search

# Find directories only
find . -type d -name "config"

# Find files by extension
find . -name "*.py"
find . -name "*.pdf" -o -name "*.docx"

# Find by size
find . -size +100M                      # Larger than 100MB
find . -size -10K                       # Smaller than 10KB

# Find by modification time
find . -mtime -7                        # Modified in last 7 days
find . -mtime +30                       # Modified more than 30 days ago

# Find and delete
find . -name "*.tmp" -delete

# Find and execute command
find . -name "*.log" -exec rm {} \;
```

### 2. Locate Command

Faster than `find` because it uses a database.

```bash
# Find file by name (fast)
locate file.txt

# Update the locate database
sudo updatedb

# Search case-insensitive
locate -i FILE.txt

# Limit results
locate -n 10 file.txt
```

### 3. Which Command

Find where an executable is located.

```bash
# Find command location
which python3
which git
which ls

# Find all versions of a command
which -a python
```

### 4. Whereis Command

Locate command, source, and manual page.

```bash
# Find binary, source, and man page
whereis python3

# Find only binary
whereis -b grep
```

## Searching Within Files

### 1. Grep - Search Text in Files

```bash
# Search for pattern in file
grep "error" file.txt

# Search across multiple files
grep "pattern" *.txt

# Case-insensitive search
grep -i "ERROR" file.txt

# Show line numbers
grep -n "pattern" file.txt

# Show context (lines before/after)
grep -C 2 "pattern" file.txt            # 2 lines before and after
grep -B 3 "pattern" file.txt            # 3 lines before
grep -A 3 "pattern" file.txt            # 3 lines after

# Invert match (show lines NOT matching)
grep -v "error" file.txt

# Count matches
grep -c "pattern" file.txt

# Show only matching part
grep -o "pattern" file.txt

# Search directories recursively
grep -r "pattern" /path/to/dir
```

### 2. Advanced Grep

```bash
# Use regular expressions
grep -E "error|warning" file.txt        # Match error OR warning

# Match whole words only
grep -w "the" file.txt                  # Match 'the' not 'there'

# Search multiple patterns
grep -e "pattern1" -e "pattern2" file.txt

# Exclude patterns
grep -v "exclude" file.txt
```

### 3. Other Search Tools

```bash
# awk - Process text and search
awk '/pattern/ {print}' file.txt

# sed - Stream editor (search and replace)
sed 's/old/new/' file.txt               # Replace first occurrence per line
sed 's/old/new/g' file.txt              # Replace all occurrences

# Combine find and grep
find . -name "*.py" -exec grep -l "pattern" {} \;
```

## Practical Examples

```bash
# Find all Python files in project
find . -name "*.py"

# Search for "error" in all log files
grep -r "error" /var/log/

# Find recent files (modified in last 24 hours)
find . -mtime -1

# Search for lines containing "TODO" with line numbers
grep -n "TODO" *.py

# Find all config files
locate "*.conf"

# Search for "password" in /etc/ with context
grep -B 2 -A 2 "password" /etc/config

# Count occurrences of word in file
grep -o "word" file.txt | wc -l

# Find files larger than 100MB
find / -size +100M

# Search case-insensitive for multiple patterns
grep -i -E "(error|fail|critical)" /var/log/syslog
```

## Quick Reference

| Command | Purpose |
|---------|---------|
| `find` | Search for files |
| `locate` | Fast file search (uses database) |
| `which` | Find command location |
| `whereis` | Find command, source, man page |
| `grep` | Search text within files |
| `grep -r` | Recursive search in directories |
| `grep -n` | Show line numbers |
| `grep -i` | Case-insensitive search |
| `grep -c` | Count matches |
| `sed` | Search and replace text |
| `awk` | Text processing and search |

