# Viewing & Reading Files

This guide covers various ways to view and read file contents in Linux.

## Basic File Viewing Commands

### 1. Display Entire File Content

```bash
# Display entire file
cat file.txt

# Display with line numbers
cat -n file.txt

# Display and show non-printing characters
cat -A file.txt
```

### 2. View First Lines of a File

```bash
# Show first 10 lines (default)
head file.txt

# Show first 20 lines
head -n 20 file.txt

# Show first 5 lines
head -5 file.txt
```

### 3. View Last Lines of a File

```bash
# Show last 10 lines (default)
tail file.txt

# Show last 20 lines
tail -n 20 file.txt

# Follow file in real-time (useful for logs)
tail -f /var/log/syslog
```

### 4. Page Through Large Files

```bash
# Interactive scrollable viewer
less file.txt

# Navigation in less:
# Space/Page Down - Next page
# b/Page Up - Previous page
# g - Go to beginning
# G - Go to end
# /pattern - Search
# q - Quit

# Alternative (older, simpler)
more file.txt
```

## Advanced File Viewing

### 5. View Specific Line Ranges

```bash
# View lines 10 to 20
sed -n '10,20p' file.txt

# View from line 10 to end of file
sed -n '10,$p' file.txt

# View specific lines
awk 'NR==5 || NR==10 || NR==15' file.txt
```

### 6. View Binary Files

```bash
# Hexadecimal dump
hexdump file.bin

# More readable hex dump
xxd file.bin

# Octal dump
od file.bin
```

### 7. Reverse File Content

```bash
# Display file in reverse (last line first)
tac file.txt

# Reverse line by line
rev file.txt
```

## File Inspection Commands

| Command | Purpose |
|---------|---------|
| `cat` | Display entire file |
| `head` | Show first lines |
| `tail` | Show last lines |
| `less` | Interactive pager (recommended) |
| `more` | Simple pager |
| `wc` | Count lines, words, characters |
| `file` | Determine file type |
| `strings` | Extract text from binary files |
| `od` | Octal/hex dump |
| `hexdump` | Hex dump |

## Practical Examples

```bash
# Count total lines in file
wc -l file.txt

# Count words
wc -w file.txt

# Count characters
wc -c file.txt

# Determine what type of file it is
file myfile

# View only the first 3 lines with line numbers
head -3 file.txt | cat -n

# See what changed in a log file recently
tail -20 /var/log/syslog

# Monitor log file as it updates
tail -f /var/log/apache2/error.log
```

