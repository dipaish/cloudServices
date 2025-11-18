# Help & Documentation

This guide covers how to get help and access documentation in Linux.

## Getting Help

### 1. Manual Pages (man)

The `man` command displays the manual page for a command.

```bash
# View manual for a command
man ls

# View manual for a specific section
man 5 passwd          # View passwd file format documentation

# Search man pages for a keyword
man -k search         # Find all pages related to 'search'
```

### 2. Help Option

Most commands have built-in help.

```bash
# Get quick help about a command
ls --help
cat --help
grep --help

# Short help (sometimes)
ls -h
```

### 3. Info Pages

Info pages provide more detailed documentation than man pages.

```bash
# View info page
info ls

# Navigate info pages (use 'q' to quit)
info coreutils        # General information about core utilities
```

### 4. Built-in Help for Shell Commands

For shell built-in commands, use `help` instead of `man`.

```bash
# Get help for shell built-ins
help cd
help echo
help alias
```

## Documentation Resources

### Online Resources

- **Linux man pages online:** https://man7.org/
- **GNU documentation:** https://www.gnu.org/software/coreutils/
- **Ubuntu manuals:** https://manpages.ubuntu.com/

### Important Files

```bash
# System documentation
ls /usr/share/doc/        # Package documentation
ls /usr/share/man/        # Manual pages

# Configuration file examples
ls /etc/                  # System configuration files
```

## Common Help Commands

| Command | Purpose |
|---------|---------|
| `man command` | Display full manual page |
| `command --help` | Quick help for command |
| `info command` | Detailed documentation |
| `help builtin` | Help for shell built-in commands |
| `whatis command` | One-line description |
| `apropos keyword` | Search for commands |
| `type command` | Show command type (builtin, alias, etc.) |

