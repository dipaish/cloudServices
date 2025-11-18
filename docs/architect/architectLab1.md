# Lab 1: AWS Cloud Architecting – EFS, RDS and Web Hosting

## Purpose
> In this lab, you will deploy scalable, secure and cost-effective AWS architecture for web hosting. You will create a static website using Amazon S3, deploy a dynamic website on Amazon EC2, use Amazon RDS for database management and configure Amazon EFS for shared file storage.

**ℹ️Important:** After completing the lab, remember to delete all created resources to avoid incurring unnecessary charges. 

## Step-by-step guide for student

### Step 1: Ensure that you have studied Module 1 properly
To complete this lab, you will need to set up the following AWS services. It is important that you have studied Module 1 and is familiar with these services.  

- Amazon EC2 for hosting the application.
- Amazon EFS for shared file storage.
- Amazon RDS (MySQL or MariaDB) for the database.
- Amazon S3 for static website hosting.
- Configure security groups to secure access.

### Step 2: Lab Tasks 

#### Task 1: Launch an EC2 Instance for Web Hosting

> You will create an Amazon EC2 instance to host a dynamic web application. The guide below includes instructions for Amazon Linux, if you decide to use Ubuntu, you will need to use the equivalent commands for Ubuntu. 

<details markdown="1" >
  <summary>👉Click to expand the step by step guide</summary>

##### **Step 1: Navigate to EC2 Console**
1. Go to **AWS EC2 Console** → **Launch Instance**. The name of instance should be your **firstNameWebServer1**. 
2. Choose an AMI:  
   - **Amazon Linux 2** or **Ubuntu 22.04**.
3. Select **Instance type**:  
   - `t2.micro` (Free Tier eligible).

##### **Step 2: Configure Security, IAM Role & Launch Instance**
1. **Security Group Configuration**:
   - Allow **HTTP (80)** and **SSH (22)** access.
2. **Assign an IAM Role from the Available Instance Profiles Under Advanced details**: 
   - `LabInstanceProfile`
3. **Check the summary and click Launch Instance to create the EC2**

> Note: It takes a while for your instance to be ready, once ready you can continue to the next step. 

![Screenshot showing EC2 instance status as running and ready for use](https://raw.githubusercontent.com/dipaish/dipaish/refs/heads/main/images/courseRelatedImages/laurea/architect1.png)
##### Step 3: Connect to the EC2 Instance
1. Open **AWS EC2 Console** → Select the instance → **EC2 Instance Connect**.
2. Click Connect 
  > I recommend SSH connection if you are familiar with it. 
##### Step 4: Install Apache & PHP

```bash
# Update system packages:
sudo yum update -y

# Install Apache, PHP, and mariadb
sudo yum install -y httpd php php-mysqlnd mariadb105-server mariadb105

#Enable and start the Apache web server:
sudo systemctl enable httpd
sudo systemctl start httpd

# Enable and start mariadb database server
sudo systemctl enable mariadb
sudo systemctl start mariadb
```

##### Step 5: Verify Your Web Server and MariaDB Installation  

##### Get the Public Address of Your EC2 Instance 
To check if your **Apache web server** is running, find your **EC2 public IP address**:  

1. **Go to AWS EC2 Console** → Select your **EC2 instance**.  
2. Copy the **Public IPv4 Address**.  
3. Open your **web browser** and type:  http://<your-ec2-public-ip>

> Note: make sure it is http not https

📌 **Expected Output:**  

![Screenshot of Apache web server default page displaying successfully in browser at EC2 public IP](https://raw.githubusercontent.com/dipaish/dipaish/refs/heads/main/images/courseRelatedImages/laurea/page.png)

## **Check MariaDB Status**  
To confirm that **MariaDB is running**, use the following command:  

```bash
sudo systemctl status mariadb
```

##### Secure Your MariaDB Installation
> Set up a root password and secure your MariaDB database server:
```bash
sudo mysql_secure_installation
```

##### Test MariaDB Connection  

Once secured, test if MariaDB is accessible:  

```bash
mysql -u root -p
```
> When prompted, enter the root password you set above.

📌 Expected Output: You should see the MariaDB command prompt (MariaDB [(none)]>), confirming a successful connection.
![Screenshot showing MariaDB database server status as active and running](https://raw.githubusercontent.com/dipaish/dipaish/refs/heads/main/images/courseRelatedImages/laurea/mariadb.png)

##### Submission: Required Screenshots for Task 1
1. **Running Instance**  
   - Once the instance is launched, provide a screenshot of the **Instances** page in the running state. 
2. **MariaDB**
   - Screenshot of the Output of the statement ```mysql -u root -p```
3. **Web Server**
   - Screenshot of your Webserver > Open your **web browser** and type:  http://<your-ec2-public-ip>

</details>

#### Task 2: Configure Amazon EFS for Scalable Storage
> Amazon EFS enables shared, scalable storage for multiple EC2 instances. 

<details markdown="1">
<summary>👉Click to expand the step by step guide</summary>

##### Step 1:Navigate to Console Home
1. Click the **Services icon**, navigate to the **Storage category**, and select **Amazon EFS**.
2. Provide the Name to your file system as your **firstName**. 
3. Select the **default VPC**. 
4. Click **Create** 

> Note if you want to customize other options you can click Customize. 

5. Configure Security Groups 

### A. Update Security Group for EFS Mount Targets

1. **Access the Amazon EFS Console:**
   - Go to the **Amazon EFS** console.
   - Select your file system and click on its details.
   - Confirm that the **VPC** and **Region** match those of your EC2 instance.

2. **Locate the Associated Security Group:**
   - Navigate to the **Network** tab.
   - Click on the settings icon to view the security groups.
   - Note the security group ID associated with your mount targets.

3. **Modify the Security Group in EC2:**
   - Go to the **Amazon EC2** console.
   - On the right-hand side, under **Network & Security**, click on **Security Groups**.
   - Find and select the security group using the noted security group ID.

4. **Edit Inbound Rules:**
   - Click **Edit inbound rules**.
   - Add a new rule with the following settings:
     - **Protocol:** TCP
     - **Port Range:** 2049
     - **Source:** Custom > Anywhere (or specify a CIDR range/security group as needed)
   - Click **Save rules**.

---

### B. Verify Outbound Rules for Your EC2 Instance

1. **Access Your EC2 Instance's Security Settings:**
   - In the **Amazon EC2** console, locate your instance and click on it.
   - Under the **Security** tab, note the security group(s) associated with your instance.

2. **Review Outbound Rules:**
   - Click on the relevant security group to view its details.
   - Under **Outbound rules**, ensure there is a rule allowing traffic on **TCP port 2049**.
   - If no specific rule exists, confirm that a general outbound rule permits traffic to the IP range or security group associated with your EFS mount targets.

3. **Add Outbound Rule (if necessary):**
   - **Type:** Custom TCP (or NFS)
   - **Protocol:** TCP
   - **Port Range:** 2049
   - **Destination:** The CIDR range or specific security group ID of your EFS mount targets.

***The file system is now created and your EC2 instance’s security group and network settings are correctly configured to allow outbound traffic to your EFS mount targets on port 2049, and that both resources are in the same VPC and region.***

##### Step 2: Prepare Your EC2 Instance

In the previous task, you have created an EC2 instace. Start that instance and Connect to the Instance like you did in the previous task or use SSH connection to connect to the instance. Once you are connected to the instance. Do the following: 

1. **Install NFS Client:**  
    ```bash
    sudo yum install -y nfs-utils
    ```
2. **Mount the EFS File System on the EC2 Instance**
   1. Create a Mount Point
    ```bash
      sudo mkdir /mnt/efs
   ```
   2. Mount Command

   **Note:** After selecting your file system and clicking **Attach** in the EFS console, you'll see a mount command provided for you. Use this command with your NFS client to mount your EFS file system.

   ```bash
   sudo mount -t nfs4 -o nfsvers=4.1 <FileSystemID>.efs.<region>.amazonaws.com:/ /mnt/efs
   # Replace <FileSystemID> and <region> with your file system ID and AWS region (e.g., us-east-1).
   ```
   3.  Verify Mount
   ```bash
      df -h # Run  to ensure the file system is listed and available on /mnt/efs.
   ```
   4.  Create a Test File
   ```bash
      sudo touch /mnt/efs/testfile.txt
   ```
   5. Automate the Mount at Boot (Optional)
  
  This step is optional, but if you want the EFS file system to mount automatically every time the system reboots. You need to edit the **/etc/fstab** file and add the following line: 

  
   ```bash
   <FileSystemID>.efs.<region>.amazonaws.com:/  /mnt/efs  nfs4  defaults,_netdev  0  0
   ```
    > Note: Make sure to replace <FileSystemID> with your actual EFS file system ID (e.g., fs-12345678) and <region> with your AWS region (e.g., eu-west-1). 
 
   6. Test the fstab Entry
   Unmount and remount to ensure the entry is working:
   ```bash
   sudo umount /mnt/efs
   sudo mount -a
   ```

> Note: If you have multiple EC2 instances, mount the same EFS on each one and verify that changes are visible across instances. This scalable storage solution now provides shared access to your data across multiple EC2 instances, enhancing performance and reliability. 


##### Submission: Required Screenshots for Task 2
1. **Verify Mount**  
   - Screenshot of this command: ```df -h```
2. **Test file**
   - Screenshot of the Output of the statement ```ls /mnt/efs/```
3. **Outbound Rules**
   - Screenshot of the Outbound Rules for Your EC2 Instance

</details>

#### Task 3: Migrate the Database to Amazon RDS
> To ensure data durability, high availability and automatic backups, you will migrate the database from EC2 to Amazon RDS.
<details markdown="1">
<summary>👉Click to expand the step by step guide</summary>

##### Step 1: Create a random database in your EC2 instance
Since our EC2 database server is currently empty, connect to the instance and access the MariaDB server. Then, run the following SQL commands to create a simple database and table. The name of the database must be your **firstName**.

```sql
-- Create a sample database
CREATE DATABASE yourDBName;

-- Switch to the new database
USE yourDBName;

-- Create a sample table called 'employees'
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    hire_date DATE,
    salary DECIMAL(10,2)
);

-- Insert some sample data into the 'employees' table
INSERT INTO employees (first_name, last_name, email, hire_date, salary) VALUES
('John', 'Doe', 'john.doe@example.com', '2023-01-15', 55000.00),
('Jane', 'Smith', 'jane.smith@example.com', '2022-06-10', 60000.00),
('Alice', 'Johnson', 'alice.johnson@example.com', '2021-09-25', 65000.00);
```
##### Step 2: Backup your database

Create a backup of your EC2-hosted database (e.g., using `mysqldump`).
```sql
sudo mysqldump -u root -p yourDBName > /home/ec2-user/backup.sql

-- remember your database server root password
```
##### Step 3: Create an Amazon RDS Instance

### 2. Create an Amazon RDS Instance with MariaDB

1. **Log in to AWS Management Console:**
   - Navigate to **Amazon RDS**.

2. **Launch a New Database Instance:**
   - Click on **Create database**.
   - **Select the Free Tier:**  
     If you're eligible for the free tier, choose the **Free Tier** option to minimize costs during the lab.
   - Select **Easy Create**
   - **Database Engine:**  
     Select **MariaDB** as your database engine.

3. **Configure the DB Instance Size:**
   - **Templates:** Choose the appropriate template (Sandbox). **Select: Sandbox db.t4g.micro 2 vCPUs 1 GiB RAM 20 GiB**
   - **Instance Class:**  
     For the free tier, select an instance type such as `db.t2.micro` or `db.t3.micro`.
   - **Storage:**  
     Set the allocated storage and enable auto-scaling if needed.
   - **Multi-AZ Deployment:**  
     Enable Multi-AZ for high availability if required (note that Multi-AZ might not be available for the free tier).

4. **Configure Settings:**
   - Enter a **DB Instance Identifier**.
   - Credentials Management: Self Managed >> Set the **Master Username** and **Password**.
   - Configure additional settings such as backup retention, encryption, and maintenance windows.

5. **Set Up Connectivity:**
   - **VPC:** Ensure the RDS instance is launched in the same VPC as your EC2 instance.
   - **Security Groups:**  
     - Assign a security group that allows inbound traffic on the MariaDB port (default is **3306**).
     - Verify that your EC2 instance or any application connecting to the database is permitted by these security group rules.

6. **Launch the Instance:**
   - Review your configurations and click **Create database**.

7. **Set Up EC2 connection to your EC2**

Once the database service is created, click on the database service and below Connected Computer resource Under Actions click Set Up EC2 connection

From EC2 instance list, select your EC2 instance. click continue and setup 

The connection is now established 
##### Step 4: Migrate the Data

From your EC2 instance, connect to the rds database service. You can find the endpoint from the RDS database service info 

2. **Create a database in RDS:**
   - Connect to your RDS instance using its endpoint from your EC2 and create the database
   - **MySQL Example:**
     ```sql
     mysql -h <RDS-endpoint> -u admin -p 

     -- type your admin password that you created at the time of creating rds service then type the following command to create a database

    create database yourDBName;
    exit
     ```
3. **Migrate the database :**

```sql
     mysql -h <RDS-endpoint> -u admin -p yourDBName < /home/ec2-user/backup.sql
```
4. **Verify that the database has been imported to RDS  :**

   - Login to the rds database service ```mysql -h <RDS-endpoint> -u admin -p ```
   - Type your password for the rds database admin user. 
   - Execute and check the following sql commands: 
      ```sql
         show databases;
         use yourDBName; 
         select * from employees;
       ```
If you got the output as below, you have successfully done the migration. 

![Screenshot showing database employees table with records successfully displayed, confirming data migration to RDS](https://raw.githubusercontent.com/dipaish/dipaish/refs/heads/main/images/courseRelatedImages/laurea/db.png)

##### Submission: Required Screenshots for Task 3
1. **Verify that the database has been imported to RDS**  
   - Run the above commands from 4. Verify that the database has been imported to RDS & take the screenshot.


</details>

#### Task 4: Host a Static Website Using Amazon S3

> Amazon S3 will be used to host a static website with public access.

<details markdown="1">
<summary>👉Click to expand the step by step guide</summary>

##### Step 1: Create an S3 Bucket

1. From the **Console Home** icon, Click Storage and Select S3
2. Choose **Create bucket**.
   - **Bucket name**: Must be globally unique (e.g., `YourFirstName-static-website-lab-1`).
   - Leave other settings as default.
3. Click **Create bucket**.


##### Step 2: Upload your static website to the bucket. 
If you wish, you can use your own html code if not save the following code as **index.html** and upload the file to the bucket. If you have multiple files, select all the files, zip it an upload the zipped file.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My Simple Bootstrap Page</title>
  <!-- Bootstrap CSS -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  />
</head>
<body>
  <!-- Navigation Bar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Website</a>
    </div>
  </nav>

  <!-- Main Content Section -->
  <div class="container mt-5">
    <h1 class="mb-4">Welcome to My Bootstrap Page</h1>
    <p>
      This is a simple example page to demonstrate how to use Bootstrap.
    </p>
    <button class="btn btn-primary">Click Me!</button>
  </div>

  <!-- Bootstrap JS (Optional) -->
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
  ></script>
</body>
</html>
```
1. Copy the above html code and save it as index.html in your PC. 
2. Click the bucket that you created earlier and upload the index.html to the bucket.

##### Step 3: Enable Static Website Hosting

1. In the same bucket, go to the **Properties** tab.
2. Scroll to **Static website hosting** and click **Edit** (or **Enable**).
3. **Hosting type**: Select **Enable**.
4. **Index document**: Enter `index.html`.
5. **Error document** (optional): Enter `error.html`.
6. Click **Save changes**.
7. You will find the Bucket website endpoint something like this: http://deepak-static-website-lab1.s3-website-us-east-1.amazonaws.com 
8. On clicking the website link, you will get an error message 403 forbidden. We need to configure the bucket policy to make the website publicly accessible. 

##### Step 4:Update the Bucket Policy for Public Read

1. Go to the **Permissions** tab again.
2. In the Block Public Access (bucket settings),  click **Edit** and Uncheck 
**Block all public access** and click **Save Changes**
3. Scroll down to **Bucket policy** and click **Edit**.
4. Paste this JSON, replacing `YOUR_BUCKET_NAME` with your actual bucket name:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
       }
     ]
   }
5. Now, using the URL, visit the website, you should see your web page as below: 

![Screenshot showing static website successfully hosted and displayed in browser from S3 endpoint](https://raw.githubusercontent.com/dipaish/dipaish/refs/heads/main/images/courseRelatedImages/laurea/webpage.png)


##### Submission: Required Screenshots for Task 4
1. **Bucket Creation**  
   - Screenshot of the **S3 Buckets** list showing the name of your newly created bucket.
2. **Static Website Hosting Configuration**  
   - Screenshot of the **Properties** tab with **Static website hosting** enabled, displaying your **Index document** and the **Endpoint**.
3. **Bucket Policy**  
   - Screenshot of the **Bucket policy** JSON in the **Permissions** tab, showing you have granted public read access.
4. **Live Website**  
   - Screenshot of your browser window displaying your static site from the S3 endpoint (with the URL visible).
</details>

### Guidance and feedback
Guidance is available  during the online consultation session.

### Evaluation
The evaluation is done based on the number of successfully completed tasks. Check the rubric.  

### Schedule and timing
Check the deadline in Canvas

### Submission
- **Document Submission:** Compile the required screenshots (as outlined at the end of each task) into a single Word document. Ensure each screenshot is clearly labeled to indicate which task it represents. ***Upload the word document to canvas.***
- **Self assessment:** In the submission comment box, provide a self-assessment based on the rubric guide. Clearly state how many points you believe you have earned for this task.  

### Clean Up 
- ℹ️ **Delete All Resources:** After completing the lab, be sure to delete all resources from the lab environment to avoid incurring unnecessary charges. Remember that you’ll need these credits for other lab tasks, so use them wisely.