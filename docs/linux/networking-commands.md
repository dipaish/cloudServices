# Networking Commands

This guide covers networking and connectivity commands in Linux.

## Network Information

### 1. View Network Interfaces

```bash
# Display IP addresses
ip addr
ip a

# Old method (still works)
ifconfig

# Show specific interface
ip addr show eth0

# Show only IPv4
ip -4 addr

# Show only IPv6
ip -6 addr
```

### 2. Network Configuration

```bash
# Enable/disable interface
sudo ip link set eth0 up
sudo ip link set eth0 down

# Assign IP address
sudo ip addr add 192.168.1.100/24 dev eth0

# Remove IP address
sudo ip addr del 192.168.1.100/24 dev eth0

# Set default gateway
sudo ip route add default via 192.168.1.1

# View routing table
ip route
route -n
```

## Connectivity Testing

### 1. Ping

```bash
# Test connectivity to host
ping google.com

# Ping with count (stop after 4)
ping -c 4 google.com

# Ping with specific timeout
ping -w 5000 google.com              # 5 second timeout

# Ping with larger packet size
ping -s 1000 google.com

# Continuous ping (Ctrl+C to stop)
ping google.com
```

### 2. Traceroute

```bash
# Trace route to destination
traceroute google.com

# Trace with IP addresses
traceroute -n google.com

# Limited hops
traceroute -m 10 google.com

# Alternative: tracepath
tracepath google.com
```

### 3. DNS Lookup

```bash
# DNS resolution
nslookup google.com
dig google.com
host google.com

# Reverse DNS lookup
nslookup 8.8.8.8
dig -x 8.8.8.8

# Query specific DNS server
nslookup google.com 8.8.8.8
dig @8.8.8.8 google.com

# Show DNS records
dig google.com MX                     # Mail exchange records
dig google.com A                      # IPv4 records
dig google.com AAAA                   # IPv6 records
```

## Network Statistics

### 1. Netstat (Network Statistics)

```bash
# Show all connections
netstat -a

# Show listening ports
netstat -l

# Show network statistics
netstat -s

# Show TCP statistics
netstat -t

# Show UDP statistics
netstat -u

# Show with process information
netstat -tulpn                        # Requires sudo

# Watch connections in real-time
watch -n 1 'netstat -tulpn'
```

### 2. SS (Socket Statistics)

Newer alternative to netstat:

```bash
# Show all sockets
ss -a

# Show listening sockets
ss -l

# Show TCP sockets
ss -t

# Show UDP sockets
ss -u

# Show process information
ss -tulpn                             # Requires sudo

# Show specific port
ss -tulpn | grep :8080
```

### 3. Netstat Examples

```bash
# Find what's listening on port 80
netstat -tulpn | grep :80

# Count connections by state
netstat -a | grep ESTABLISHED | wc -l

# Show which process uses port 3306
lsof -i :3306

# Monitor connections
watch -n 1 'netstat -tulpn | grep ESTABLISHED'
```

## Network Transfers

### 1. Download Files

```bash
# Download file (with curl)
curl https://example.com/file.zip -o file.zip

# Download file (with wget)
wget https://example.com/file.zip

# Resume incomplete download
wget -c https://example.com/large-file.zip

# Download multiple files
wget -i urls.txt

# Show download progress
curl -# https://example.com/file.zip -o file.zip
```

### 2. File Transfer (SCP)

```bash
# Copy from remote to local
scp user@remote:/path/file.txt /local/path/

# Copy from local to remote
scp /local/file.txt user@remote:/remote/path/

# Recursive copy (directories)
scp -r user@remote:/remote/dir /local/path/

# Specific SSH port
scp -P 2222 user@remote:/file.txt .
```

### 3. SFTP

```bash
# Connect to SFTP server
sftp user@remote

# Upload file
put local-file.txt

# Download file
get remote-file.txt

# List remote files
ls

# Change remote directory
cd /path/

# Exit
exit
```

## Firewall and Security

### 1. UFW (Uncomplicated Firewall)

```bash
# Check firewall status
sudo ufw status

# Enable firewall
sudo ufw enable

# Disable firewall
sudo ufw disable

# Allow specific port
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp

# Deny port
sudo ufw deny 22/tcp

# Allow from IP
sudo ufw allow from 192.168.1.100
```

### 2. Iptables

```bash
# View rules
sudo iptables -L

# Block IP address
sudo iptables -A INPUT -s 192.168.1.100 -j DROP

# Allow port
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Enable NAT
sudo iptables -t nat -A POSTROUTING -j MASQUERADE
```

## Practical Examples

```bash
# Check if website is up
ping -c 4 google.com

# Find open ports on localhost
netstat -tulpn

# Which service uses port 8080
lsof -i :8080

# Test connection to specific port
nc -zv 192.168.1.1 22

# Download file with progress
wget -q --show-progress https://example.com/file.zip

# Monitor network traffic
nethogs                               # If installed

# Check DNS resolution
dig google.com +short

# Trace network path
traceroute google.com

# Test DNS server
nslookup google.com 8.8.8.8

# Show active connections
netstat -an | grep ESTABLISHED | wc -l

# Find what's listening on all ports
ss -tulpn
```

## Quick Reference

| Command | Purpose |
|---------|---------|
| `ip addr` | Show IP addresses |
| `ping` | Test connectivity |
| `traceroute` | Trace network path |
| `netstat` | Network statistics |
| `ss` | Socket statistics (newer) |
| `nslookup` | DNS lookup |
| `dig` | Advanced DNS lookup |
| `curl` | Download file/test HTTP |
| `wget` | Download file |
| `scp` | Secure copy |
| `sftp` | Secure file transfer |
| `ssh` | Secure shell |
| `ifconfig` | Network configuration |
| `route` | Show routing table |
| `arp` | ARP protocol info |

