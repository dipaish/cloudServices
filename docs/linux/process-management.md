# Process Management

This guide covers managing processes in Linux.

## Understanding Processes

### 1. View Running Processes

```bash
# Simple process list
ps

# All processes with details
ps aux

# Tree view (parent-child relationships)
ps auxf

# Real-time process monitor
top

# Interactive process monitor (better than top)
htop

# Show processes by name
ps aux | grep python

# Show process count
ps aux | wc -l
```

### 2. Process Information

```bash
# Show process ID (PID) and parent PID (PPID)
ps -o pid,ppid,cmd

# Show CPU and memory usage
ps aux --sort=-%cpu | head -10
ps aux --sort=-%mem | head -10

# Show process tree
pstree

# Show processes with specific status
ps aux | grep "defunct"               # Zombie processes
```

## Managing Processes

### 1. Background and Foreground

```bash
# Run process in background
command &

# Bring background process to foreground
fg

# List background jobs
jobs

# Continue stopped process in background
bg

# Run process immune to terminal disconnect
nohup command &
```

### 2. Killing Processes

```bash
# Kill process by PID
kill 1234

# Kill by process name
killall firefox

# Force kill
kill -9 1234
killall -9 firefox

# Kill process tree (all child processes)
kill -9 $$                            # Kill current shell (dangerous!)

# Send signal to process
kill -SIGTERM 1234                    # Graceful termination
kill -SIGKILL 1234                    # Force kill
kill -SIGSTOP 1234                    # Pause process
kill -SIGCONT 1234                    # Resume process
```

## Process Priorities

### 1. Nice and Renice

```bash
# Run process with lower priority
nice -n 10 command

# Change priority of running process
renice -n 5 -p 1234                   # Increase priority (lower number)
renice -n -5 -p 1234                  # Decrease priority (higher number)

# View process priority
ps -o pid,ni,cmd
```

**Priority levels:**
- -20 to -1 = High priority
- 0 = Normal priority
- 1 to 19 = Low priority

## Process Information Details

### 1. Detailed Process Info

```bash
# Show process details
cat /proc/1234/status

# Show process environment variables
cat /proc/1234/environ

# Show open files by process
lsof -p 1234

# Show network connections by process
netstat -tulpn | grep 1234
ss -tulpn | grep 1234

# Show current working directory
ls -l /proc/1234/cwd
```

### 2. Wait for Process

```bash
# Wait for process to finish
wait 1234

# Wait for all background processes
wait

# Display exit status
echo $?
```

## System Resource Monitoring

### 1. Real-Time Monitoring

```bash
# Interactive resource monitor
top

# Better alternative (if installed)
htop

# Show live system activity
iostat

# Monitor disk I/O
iotop
```

### 2. Process Statistics

```bash
# Show CPU and memory by process
top -b -n 1 | head -20

# Show processes using most CPU
ps aux --sort=-%cpu | head -5

# Show processes using most memory
ps aux --sort=-%mem | head -5

# Monitor process growth over time
watch -n 1 'ps aux | grep process_name'
```

## Practical Examples

```bash
# Start long-running process in background
./backup.sh &

# List all background jobs
jobs

# Bring last background job to foreground
fg

# Run script that survives terminal close
nohup python3 script.py > output.log 2>&1 &

# Check if process is running
ps aux | grep "firefox" | grep -v grep

# Find process listening on port 8080
lsof -i :8080
netstat -tulpn | grep 8080

# Kill all processes matching name
killall -9 node

# Monitor specific process
watch -n 1 'ps aux | grep nginx'

# Show process tree for parent process
pstree -p 1234

# Check zombie processes
ps aux | grep defunct

# Run process with lower priority
nice -n 19 ./heavy_computation.sh

# Change running process priority
renice -n 10 -p $(pgrep firefox)

# See which process uses most CPU
top -b -n 1 | head -20

# Monitor memory usage
free -h && ps aux --sort=-%mem | head -5
```

## Signal Reference

| Signal | Number | Meaning | Default Action |
|--------|--------|---------|-----------------|
| SIGHUP | 1 | Hangup | Terminate |
| SIGINT | 2 | Interrupt (Ctrl+C) | Terminate |
| SIGQUIT | 3 | Quit (Ctrl+\) | Core dump |
| SIGKILL | 9 | Kill (cannot be caught) | Terminate |
| SIGTERM | 15 | Terminate (default) | Terminate |
| SIGSTOP | 19 | Stop (cannot be caught) | Pause |
| SIGCONT | 18 | Continue | Resume |

## Quick Reference

| Command | Purpose |
|---------|---------|
| `ps aux` | List all processes |
| `top` | Real-time process monitor |
| `htop` | Interactive process monitor |
| `jobs` | List background jobs |
| `fg` | Bring to foreground |
| `bg` | Resume in background |
| `kill PID` | Terminate process |
| `killall` | Kill by process name |
| `pstree` | Show process tree |
| `lsof` | List open files |
| `nice` | Run with lower priority |
| `renice` | Change priority |
| `nohup` | Run immune to disconnect |

