# Lab 2: AWS Cloud Architecting – Building a Secure and Scalable Cloud Architecture with Automation and Global Content Delivery

## Purpose
> In this lab, you will gain hands-on experience in creating a VPC with public and private subnets, launching EC2 instances securely, automating infrastructure deployment with CloudFormation and delivering content globally using CloudFront. 

**ℹ️Important:** After completing the lab, remember to delete all created resources to avoid incurring unnecessary charges. 

## Step-by-step guide for student

### Step 1: Ensure that you have studied Module 2 (Module 7 - Module 12 in AWS Academy) properly

To complete this lab, you will need to set up the following AWS services. It is important that you have studied Module 2 and is familiar with these services.  

- **Amazon VPC:**  For creating secure, isolated networks.
- **Subnets (Public & Private):**  To control exposure of resources to the internet.
- **Internet Gateway & NAT Gateway:** For managing outbound and inbound internet traffic.
- **Amazon EC2:**  To launch virtual server instances.
- **Amazon S3:** – For object storage.
- **Amazon CloudFormation:** – For infrastructure-as-code and automation.
- **AWS CloudFront:** – For content delivery with low latency.
- **IAM (Identity and Access Management:)** – For managing user roles and permissions. (theoretical only in this lab).
- **VPC Flow Logs:** – For monitoring and logging network traffic (theoretical only in this lab).

### Step 2: Lab Tasks

#### Task 1: Create a VPC

> In this task, you will create your own **Virtual Private Cloud (VPC)** and related resources. Once you complete this task, your VPC should support both public and private subnets with appropriate internet access and logging enabled.

<details markdown="1">
<summary>👉Click to expand the step by step guide</summary>

1. **Create a VPC**
   - Go to the **VPC Dashboard**.
   - Click **Create VPC**.
   - Check **VPC and more**
   - Name your VPC: Name tag: `yourFirstName-VPC`
   - Set the **IPv4 CIDR block** to `10.0.0.0/16`.
   - Number of public subnets: 0
   - Number of private subnets: 0
   - Leave other settings as default and click **Create VPC**.

2. **Create Subnets**
   - Navigate to **Subnets** in the VPC dashboard.
   - Click **Create Subnet**.
     - VPC: Select `yourFirstName-VPC`
     - Name tag: `Public-Subnet-A`
     - Availability Zone: `us-east-1a`
     - IPv4 subnet CIDR block: `10.0.1.0/24`
   - Repeat to create:
     - Name tag: `Private-Subnet-A`
     - Availability Zone: `us-east-1a`
     - IPv4 subnet CIDR block: `10.0.2.0/24`

3. **Attach an Internet Gateway**
   - Go to **Internet Gateways**, click **Create internet gateway**.
   - Name it as firstName-gateway, then click **Create** and **Attach to VPC**.
   - Select `yourFirstName-VPC`.
   - Update the **Route Table** associated with `Public-Subnet-A`:
     - Add a route: `0.0.0.0/0` → Internet Gateway.

4. **Create a NAT Gateway**
   - Go to **NAT Gateways**, click **Create NAT Gateway**.
      - Name: firstName-nat
     - Subnet: `Public-Subnet-A`
     - Elastic IP allocation ID: Allocate Elastic IP
     - Create Nat gateway.
5.  **Create a Separate Route Table for Private Subnet**

To ensure `Private-Subnet-A` routes traffic through the NAT Gateway (not the Internet Gateway),we will create a separate route table for private subnet. 

1. Go to **VPC** → **Route Tables** in the AWS Console.
2. Click **Create route table**:
   - **Name** it something like `yourFirstName-private-rt`.
   - **Select** your existing VPC.
3. After creating it, open the **Subnet associations** tab:
   - Click **Edit subnet associations**.
   - **Associate only** `Private-Subnet-A` with this route table.
4. Go to the **Routes** tab:
   - Click **Edit routes**.
   - **Add or update** the following route:
     - **Destination**: `0.0.0.0/0`
     - **Target**: your **NAT Gateway**
5. Click **Save routes** to apply the changes.

6. **Enable VPC Flow Logs (Learn the steps how to do it, you do not need to practically do it.**
   - Go to your VPC details (`yourFirstName-VPC`), scroll to **Flow Logs**, and click **Create flow log**.
   - Destination: **Send to CloudWatch Logs**
   - Create a new Log Group and IAM Role if prompted.
   - Complete the flow log setup.

#### Submission: Required Screenshots for Task 1

1. **Screenshot:** Click on the vpc you created and take the screenshot of the entire window. 

***Example Screenshot***
![vpc](https://raw.githubusercontent.com/dipaish/dipaish/refs/heads/main/images/courseRelatedImages/laurea/vpcScreenshotExample.png)

</details>

#### Task 2: Launch an EC2 Instance in the Private Subnet

> Now that you've set up a NAT Gateway and separate route table for `Private-Subnet-A`, you can launch an EC2 instance inside that subnet. This instance will be **private** (no direct internet access) but through the NAT Gateway, it can still reach the internet for updates, downloads, etc. This way, this instance is protected from inbound internet traffic, which is a common real-world security setup for databases, internal services etc.This is standard in real-world architecture: keep internal services private, expose only what’s necessary (via public subnets)
<details markdown="1">
<summary>👉Click to expand the step by step guide</summary>

1. Go to the **EC2 Dashboard**.
2. Click **Launch Instance**.
3. Configure the instance:
   - **Name**: `yourFirstName-private-ec2`
   - **AMI**: Choose the default Amazon Linux 2 (or the one allowed in AWS Academy Lab)
   - **Instance Type**: `t2.micro` or the smallest one available
4. **Network settings**:
   - **VPC**: Select `yourFirstName-VPC`
   - **Subnet**: Choose `Private-Subnet-A`
   - **Auto-assign public IP**: **Disable** (very important for private instances)
   - **Firewall/Security Group**: Create or use one that allows outbound internet (e.g., allow outbound traffic on ports 80 and 443)

5. Click **Launch Instance**.


#### Submission: Required Screenshots for Task 2

1. Screenshot: Click on the EC2 instance you created and take the screenshot of the entire window. 

***Example Screenshot***
![EC2 instance](https://raw.githubusercontent.com/dipaish/dipaish/refs/heads/main/images/courseRelatedImages/laurea/ec2PrivateSubnet.png)
</details>

#### Task 3: Create a **CloudFormation template**

In this task, you'll use **Infrastructure Composer**, a visual tool in AWS CloudFormation to build and deploy an **S3 bucket**. That is you will practice managing infrastructure-as-code without writing YAML manually.

> 📝 **Note:** This task can also be completed by writing a YAML template manually and uploading it in the CloudFormation console. 

<details markdown="1">

<summary>👉Click to expand the step by step guide</summary>


***Architecture Overview***

In the previous tasks, you've already set up the following foundational infrastructure:

- A custom **VPC**
- **Public and private subnets**
- An **Internet Gateway** and a **NAT Gateway**
- One **EC2 instance** (in the private subnet)

This forms a standard 2-tier architecture that supports internet-facing and private workloads.

Now, we’ll **extend this architecture** by adding an **S3 bucket**.  We’ll create and manage this bucket using **CloudFormation via Infrastructure Composer**.

1. **Open Infrastructure Composer**: Navigate to the AWS Management Console.
2. Open the **CloudFormation** service.
3. In the left-hand menu, click **Infrastructure Composer**.
2. **Add an S3 Bucket in the Visual Canvas**: From the resource list, drag **S3 Bucket** to the canvas.
3. The S3 bucket will appear on the canvas. Click it to open its **properties** panel on the right.
4. Configure the S3 Bucket Properties as required.
5. Click the **Template** tab at the top.
   1. Review the YAML generated based on your visual inputs.
   2. You can also **download** or **copy** the YAML for later reuse.
6. Click **Validate** on the right side to validate your template.
7. Click **Create Template**
7. **Create Stack window appears**: Click Next

   2. **Stack Name**: Enter something like `firstName-s3-stack`.
   3. Leave other settings as default (no parameters needed).
   4. Click **Next**, then **Next**, and finally **Submit**. Wait for the stack to reach `CREATE_COMPLETE`.
5. **Verify the S3 Bucket**: Go to the **S3 Console**.

   2. Look for the bucket created by your stack.
      - If you didn’t specify a name, it will be auto-generated with the stack name included.

#### Submission: Required Screenshots for Task 3

1. **Screenshot 1 - CloudFormation Template Screenshot (Infrastructure Composer View):** Capture the YAML tab view where the generated CloudFormation template code is visible.
2. **Screenshot 2 - S3 Console Screenshot (Verifying the Created Bucket):** Ensure that the screenshot shows the S3 bucket created by your stack (either with the auto-generated name or the one you specified).

***Example Screenshots***
![CloudFormation Template Screenshot](https://raw.githubusercontent.com/dipaish/dipaish/refs/heads/main/images/courseRelatedImages/laurea/screenshot1_composer.png)
![ S3 Console Screenshot](https://raw.githubusercontent.com/dipaish/dipaish/refs/heads/main/images/courseRelatedImages/laurea/cloudFormation2.png)

</details>



#### Task 4: Create a CloudFront distribution

> 📝 **Note:** In this task, we’ll create a CloudFront distribution using an Amazon S3 bucket as the origin, serving public files with proper caching behavior for performance optimization. 

**Amazon CloudFront** is a fast content delivery network (CDN) service that securely delivers data, videos, applications and APIs to customers globally with low latency. It uses edge locations to cache and deliver content close to the user.

<details markdown="1">

<summary>👉Click to expand the step by step guide</summary>


1. **Create or select an existing bucket**: In one of the above task, you have created S3 bucket. You can use that bucket or create a new one.
2. Upload some files to the bucket you want to serve (HTML, images, CSS, etc.).
3. Make the files public (either individually or via bucket policy).
4. **Make Sure the S3 Bucket is Publicly Accessible**: 
   1. Go to Permissions tab in your S3 bucket and ensure:
      1. Block Public Access is turned off (at least for listing and reading objects).
      2. Attach a bucket policy like:
```
     {
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```
5. **Open the CloudFront Console:**  
 
   1. Click Create Distribution.

   2. Under Origin settings:

      - Origin domain: Select your S3 bucket.

      - Origin access: Choose "Origin access control (recommended)" or keep it public if your S3 is public.

5. **Configure Cache Behavior:**  
   1. Viewer protocol policy: Redirect HTTP to HTTPS.

   2. Allowed HTTP methods: GET, HEAD (default).

   3. Cache policy: Use the default policy or choose a managed policy like CachingOptimized. (Due to restictions in the lab environment, we will select Legacy Cache settings)

5. **Create the Distribution**
   - Review all settings.
   - Click Create distribution.

> 📝 **Note:** Unfortunately, since we are using a lab account with restricted IAM permissions. The IAM role we're using (like voclabs/user3885454) does not have permission to create CloudFront distributions (cloudfront:CreateDistribution) and cannot create cache policies either. 


#### Submission: Required Screenshots for Task 4

1. **Screenshot:** Take the screenshot of the entire window and make sure that the error message portion is also included in the screenshot.  


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


## Learning Resources

- [Amazon VPC Overview](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)  
- [AWS VPC Peering](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html)  
- [IAM Roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html)  
- [Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html)  
- [AWS CloudFormation Basics](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)  
- [Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)  
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
