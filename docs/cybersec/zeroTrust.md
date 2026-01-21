# Applying Zero Trust Principles in an Enterprise Cloud Environment  
**Enterprise Security Practitioner Lab │ 15 Points │ Individual Practical Task**

---

## Purpose & Learning Objectives

This task teaches you **Zero Trust security**, a modern approach to enterprise security. You will:

1. **Learn** Zero Trust concepts through official Microsoft training materials
2. **Apply** these principles hands-on using Microsoft Azure (Student or Free subscription)

**Focus:** Understanding security principles and risk reduction, not memorizing tools or studying for certifications.

---

## Required Learning Materials (Complete Before Starting)

**You must complete these materials first.** They provide the foundation you need to understand why each lab step matters.

---

### Step 1: Complete This Learning Path (Required)

**Microsoft Learn – Zero Trust Principles**  
🔗 https://learn.microsoft.com/en-us/training/paths/zero-trust-principles/

**What you'll learn:**
- What Zero Trust means and why it matters
- **The 3 core principles:**
  - **Verify explicitly** Always authenticate and authorize
  - **Use least privilege** Give minimum necessary access
  - **Assume breach**  Design as if attackers are already inside
- How Zero Trust applies to identities, devices, apps, and networks

**Time estimate:** 1-2 hours

---

### Step 2: Read This Overview (Recommended)

**Microsoft Zero Trust Overview**  

🔗 https://learn.microsoft.com/en-us/security/zero-trust/zero-trust-overview

**Key topics:**

- How enterprises structure Zero Trust architecture
- Why identity is the new security boundary
- How continuous monitoring improves security

**Time estimate:** 15-20 minutes

---

### What You Should Know Before Starting the Lab

After completing the learning materials, you should be able to:

✅ Explain Zero Trust in simple terms  
✅ Compare Zero Trust with older "trust the network" models  
✅ Describe how identity controls, access limits, and network segmentation reduce risk

> 💡 **Important:** Completing the learning materials helps you understand *why* each step matters, not just *how* to do it.

---

## What Skills Will You Learn?

This lab teaches **real-world enterprise security skills** that security professionals use every day.

### Skills You'll Practice

| Security Area | What You'll Do |
|--------------|----------------|
| **Security Architecture** | Apply Zero Trust design principles |
| **Identity & Access Control** | Verify MFA and explore identity-based authentication |
| **Authorization** | Implement least privilege access |
| **Network Security** | Create segmentation to block lateral movement |
| **Threat Modeling** | Design defenses assuming attackers are inside |
| **Security Operations** | Use logging and monitoring tools |
| **Working with Constraints** | Adapt to tenant restrictions (like real enterprises) |

> 💼 **Real-world practice:** This lab includes common enterprise limitations like restricted permissions, just like you'll face in actual security jobs.

---

## What You Need to Get Started

### Requirements
✅ **Azure Student subscription** or **Azure Free subscription**  
✅ Access to:

- Microsoft Entra ID (Azure's identity service)
- Azure Portal
- Basic networking resources

### 🔒 If You Have Limited Permissions

Some Azure accounts restrict certain actions (like creating new users). **This is normal!**

If you can't complete a step due to permissions:

- **Document it** Explain what you can't do and why
- **Use your existing account**  Complete what you can with your current access
- **Explain the principle** Show you understand how Zero Trust would apply

> 💡 **Why this matters:** Most real enterprise environments have strict permission controls. Learning to work within constraints is a valuable skill.

---

## Lab Tasks Overview

**Total Points: 15** | **Estimated Time: 2-3 hours** | Complete all 4 tasks

| # | Task Name | Zero Trust Principle | Points | Time |
|---|-----------|---------------------|--------|------|
| 1️⃣ | Identity Verification & MFA | **Verify Explicitly** | 4 pts | 30-40 min |
| 2️⃣ | Least Privilege Enforcement | **Least Privilege** | 4 pts | 40-50 min |
| 3️⃣ | Network Segmentation | **Assume Breach** | 4 pts | 35-45 min |
| 4️⃣ | Continuous Security Assessment | **Continuous Verification** | 3 pts | 25-35 min |

**Each task includes:** What to do, why it matters, and what you'll learn.

> ⏱️ **Planning tip:** Allow extra time for documentation and written explanations (30-45 minutes total).

---
<details markdown="1">
<summary><h2 style="display: inline;">Task 1: Identity Verification & MFA (4 Points) </summary>

**Zero Trust Principle:** 🔐 **Verify Explicitly** | ⏱️ **Time: 30-40 minutes**

### What You'll Learn
In Zero Trust, **identity is your new security perimeter** not the network. Instead of trusting anyone inside the network, you verify every user's identity continuously. Multi-factor authentication (MFA) makes this stronger by requiring multiple proofs of identity.

### Why This Matters
🚫 **Old approach:** "You're inside the network, so I trust you"  
✅ **Zero Trust:** "Prove who you are every time, using multiple factors"

### Steps to Complete

#### Step 1: Explore Your Account and Identity Settings
1. Sign in to [Azure Portal](https://portal.azure.com)
2. In the top-right corner, **click on your account name/profile picture**
3. Click **View account** to open your Microsoft account page
4. Review the following sections:

**Account Overview:**

   - Your **display name** and **email address**
   - Your **home organization** (the tenant you belong to)
   - Check if you have access to **other organizations** (listed below home organization)

5. In the left menu, click **Security info** (or **Security**):
   - Review your **sign-in methods**
   - Look for:
     - **Password** (something you know)
     - **Microsoft Authenticator app** (something you have)
     - **Phone number** (for SMS codes)
     - **Email** (for verification)
     - Note which MFA methods are already configured

6. Click **My sign-ins** (if available):
      - Review recent sign-in activity
      - Check locations and devices used

7. In the left menu, click **My Access**:
      - Click **Overview** to see your access summary
      - Review any **Access packages** assigned to you (if any)
      - Check **Request history** to see past access requests
      - Note: This shows enterprise access management your organization controls what you can access

💡 **What you're seeing:** Your identity profile shows how you're verified and what access you have. The "My Access" section shows enterprise-controlled permissions your organization decides what resources you can use. This is the foundation of Zero Trust you must prove who you are before accessing resources.

🔒 **Note:** You're exploring YOUR account, not managing other users. This is realistic most users can only see and manage their own security settings, just like in real enterprises.

#### Step 2: Verify MFA is Required for Your Account
1. Go back to your **Security info** page (from Step 1)
2. Check if you have **multiple authentication methods** set up:
      - If you see Microsoft Authenticator, Phone, or Email in addition to Password → **MFA is enabled** ✅
      - If you only see Password → MFA might not be enforced (less common for student accounts)

3. Try to add an additional authentication method:
      - Click **+ Add sign-in method**
      - See what options are available (Authenticator app, Phone, Email)
      - You don't need to add one if you already have MFA set up
      - If you want to enhance security, add Microsoft Authenticator app

💡 **What this shows:** Modern Azure accounts require multiple factors. Your organization (university/school) enforces this policy. Even if you don't manage the policy, you experience it as a user.

💡 **Note:** Most student subscriptions have MFA pre-enabled by their institution. You're seeing enterprise security policy in action!

#### Step 3: Test Your MFA Experience
1. **Sign out** of Azure Portal completely (important!)
2. Close your browser or use a private/incognito window
3. Go to [Azure Portal](https://portal.azure.com) again
4. Sign in with your student/Azure account
**Observe the MFA process:**

5. After entering your **password** (first factor):
      - You should be prompted for a **second factor**
      - This might be:
         - **Microsoft Authenticator app notification** (approve on your phone)
         - **Code from Authenticator app** (6-digit number)
         - **SMS code** sent to your phone
         - **Phone call** for verification

💡 **What just happened:** Zero Trust in action! The system required:

   - **Something you know** (password)
   - **Something you have** (phone with authenticator app or SMS)

💡 **Security benefit:** Even if an attacker steals your password through phishing, they cannot sign in without your phone.

#### Step 4: Review Your Authentication History
1. After signing back in, click your **account icon** in the top-right corner
2. Click **View account**
3. In the left menu, click **My sign-ins** or **Recent activity**
4. Review your sign-in history:
      - Recent authentication times and dates
      - Locations (IP addresses or cities)
      - Devices used (Browser type, OS)
      - Authentication methods used


💡 **What you're seeing:** A record of identity verification events. Each entry proves that "Verify Explicitly" was enforced your credentials were checked every time.

🔒 **If sign-in logs are restricted:** That's fine! Take a screenshot of your Security info page showing your configured MFA methods. In your submission, describe the MFA challenge you experienced during login.

### 📸 What to Document

**Include in your submission:**

1. **Screenshot 1:** Your account **Overview** page.
2. **Screenshot 2:** Your **My sign-ins** or recent activity page showing authentication history (or screenshot of the MFA prompt during login if logs aren't accessible)
3. **Written explanation (4-6 sentences):** Address the following:

      - Describe the MFA process you experienced when signing in (what factors did you provide?)
      - How does MFA implement "Verify Explicitly"?
      - Why is verifying identity with multiple factors better than trusting the network?
      - What happens if an attacker steals your password but doesn't have access to your phone/authenticator app?
      - How does reviewing your sign-in activity help detect unauthorized access?

> ⚠️ **ACADEMIC INTEGRITY WARNING**  
> Write all explanations in **your own words** based on your understanding. Do NOT use AI tools (ChatGPT, Copilot, Gemini, etc.) to write, paraphrase, or generate your responses. Your instructor is evaluating YOUR understanding, not AI-generated content. Violations will be treated as academic misconduct.

---
</details>
<details markdown="1">
<summary><h2 style="display: inline;"> Task 2: Least Privilege Access Enforcement (4 Points) </summary>

**Zero Trust Principle:** 🔑 **Use Least Privilege** | ⏱️ **Time: 40-50 minutes**

### What You'll Learn
Give users the **minimum permissions needed**  nothing more. You'll see how restricting access reduces risk, and discover that **"access denied" is a security victory**, not a failure.

### Why This Matters
🚫 **Old approach:** "Give them broad access, it's easier"  
✅ **Zero Trust:** "Give only what's needed. Block everything else by default."

**Real-world impact:** If an attacker compromises an account with Reader access, they can't delete your databases or modify critical systems.

### Steps to Complete

#### Step 1: Create a Test Environment
1. In Azure Portal, search for **"Resource groups"**
2. Click **+ Create**
3. Fill in the details:
    - **Subscription:** Your student/free subscription
    - **Resource group name:** `ZTLabEsp26`
    - **Region:** Choose any (e.g., North Europe)
4. Click **Review + Create**, then **Create**
5. Wait for deployment (takes 5-10 seconds)

💡 **What you're creating:** A container for Azure resources. Think of it like a folder that can hold virtual machines, databases, etc.

#### Step 2: Explore Role-Based Access Control (RBAC) with Your Existing Account

**⚠️ Note:** You'll explore Azure's permission system using your existing account to understand how least privilege works in enterprise environments.

**Part A: Check Your Current Permissions**

1. Navigate to your `ZTLabEsp26` resource group
2. Click **Access control (IAM)** in the left menu
3. Click the **Role assignments** tab at the top
4. Find your account in the list:
      - Look for your email address or username
      - Note your role (likely **Owner** or **Contributor** at subscription level)
      - This shows you have high-level permissions

**Part B: Explore the Reader Role (Least Privilege Example)**

5. Click the **Roles** tab at the top (next to Role assignments)
6. In the search box, type **"Reader"**
7. Click on the **View** on the right side of the role to open its details
8. Click **Permissions** to see what Reader can and cannot do
9. Review the key restrictions:
      - ✅ **Can:** View resources and their settings
      - ❌ **Cannot:** Create, modify, or delete anything
      - ❌ **Cannot:** Change permissions or access controls

💡 **This is least privilege:** Reader role gives just enough access to view information, nothing more.

**Part C: Compare Reader with Your Role**

10. Click the **Roles** tab again
11. Search for your role (**Owner** or **Contributor**)
12. Click on your role to see its permissions
13. Notice the much broader permissions you have:
    - Owner: Can do everything including manage access
    - Contributor: Can create, modify, delete resources but cannot manage access

💡 **Key difference:** Your account has extensive permissions. Reader accounts have minimal permissions. In a real enterprise, different people get different roles based on what they need to do.

**Part D: Verify Your Access Level**

14. Go back to your `ZTLabEsp26` resource group overview
15. Click **Access control (IAM)** again
16. Click **Check access** button
17. Enter your email address and click **Check access**
18. Review all the permissions you have listed

💡 **What you're seeing:** You have extensive access (intentional for learning). In Step 3, you'll see how security controls can restrict actions even for high-privilege accounts like yours.

#### Step 3: Implement and Test Access Restrictions Using Resource Locks

**Instead of creating test users, you'll use Resource Locks** - a powerful Azure feature that enforces restrictions even on high-privilege accounts. This demonstrates that security controls can override permissions, a key Zero Trust principle.

1. Navigate to your `ZTLabEsp26` resource group
2. In the left menu, scroll down to **Settings** → **Locks**
3. Click **+ Add**
4. Configure the lock:
      - **Lock name:** `prevent-delete`
      - **Lock type:** Select **Delete** (prevents deletion but allows modifications)
      - **Notes:** "Zero Trust protection simulating least privilege"
5. Click **OK**

💡 **What this simulates:** Even though YOU have Owner permissions, the system now blocks deletion. This demonstrates that security controls can override even high-level permissions a key Zero Trust principle.

6. **Test the restriction:**
      - While viewing your `ZTLabEsp26` resource group, click **Delete resource group** at the top
      - Enter the resource group name when prompted
      - Click **Delete**
      - **You should see an error:** "Failed to delete resource group" with message about the lock
      - ✅ **This failure is success!** The system correctly enforced the restriction.

7. **Try creating a resource (this should still work):**
      - Click **+ Create**
      - Search for "Storage account"
      - Click **Create** on Storage account
      - Fill in basic details:
      - **Storage account name:** `zttest` + random numbers (must be globally unique)
      - Keep other defaults
      - Click **Review + Create** (don't actually create it, just verify you could proceed this far)
      - ❌ Click **Cancel** to abort (we don't need to actually create it)

💡 **What you've proven:** Resource locks allow granular control. You can read and create (like a Contributor), but cannot delete (protection even against your own account if compromised).

#### Step 4: Verify the Security Control in Audit Logs

1. Navigate to your `ZTLabEsp26` resource group
2. Click **Activity log** in the left menu
3. Add filters:
      - **Timespan:** Last 1 hour
      - **Operation:** Type "delete" to filter
4. Look for your failed delete attempt:
      - Status icon will show red ❌
      - **Operation:** "Delete resource group"
      - **Status:** Failed
5. Click on the failed operation to see details
6. In the JSON tab, look for:
      - **Status:** "Failed"
      - **Error message** mentioning resource lock or "scope is locked"

💡 **What you're seeing:** The audit trail proves the security control worked. In a real breach scenario, these logs would show what an attacker tried but couldn't do even with compromised credentials with high privileges.

7. **View the lock protection:**
      - Go back to **Locks** under Settings
      - You should see your `prevent-delete` lock listed
      - Click on it to see details
      - Note that you can remove it (because you're Owner), but an attacker with only Contributor access could not

💡 **Real-world application:** In enterprises, critical resource groups have deletion locks that even admins cannot easily remove, requiring additional approval workflows.

### 📸 What to Document

**Include in your submission:**

1. **Screenshot 1:** Expanded Activity Log of your resource group. You created above.
2. **Screenshot 2:** The failed deletion attempt error message showing the blocked deletion.
3. **Written explanation (5-6 sentences):** Address the following:
    - Explain the difference between Reader, Contributor, and Owner roles
    - Why is "deny by default" a security win?
    - How did the resource lock demonstrate protection even against high-privilege accounts?
    - In an enterprise, why would you use Reader role for auditors or reporting tools?ess?

> ⚠️ **ACADEMIC INTEGRITY WARNING**  
> Write all explanations in **your own words** based on your understanding. Do NOT use AI tools (ChatGPT, Copilot, Gemini, etc.) to write, paraphrase, or generate your responses. Your instructor is evaluating YOUR understanding, not AI-generated content. Violations will be treated as academic misconduct.

---
</details>

<details markdown="1">
<summary><h2 style="display: inline;">
Task 3: Network Segmentation & Assume Breach (4 Points) </summary>

**Zero Trust Principle:** 🚧 **Assume Breach** | ⏱️ **Time: 35-45 minutes**

### What You'll Learn
Design your network **assuming attackers are already inside**. Even if an attacker compromises one system, segmentation creates barriers that stop them from moving freely to other systems. This is called preventing **lateral movement**.

### Why This Matters
🚫 **Old approach:** "Once you're inside our network, you can access everything"  
✅ **Zero Trust:** "Even inside, you're blocked by default. Each segment requires separate authorization."

**Real-world scenario:** If an attacker compromises your web server (frontend), they shouldn't be able to directly access your database server (backend).

### Steps to Complete

#### Step 1: Create a Virtual Network with Subnets

1. In Azure Portal, search for **"Virtual networks"**
2. Click **+ Create**
3. **Basics tab:**
    - **Subscription:** Your student/free subscription
    - **Resource group:** Select `ZTLabEsp26` (reuse from Task 2)
    - **Name:** `ZTVNet`
    - **Region:** Same region as your resource group
4. Click **Next: IP Addresses**

5. **IP Addresses tab:**
    - **IPv4 address space:** Keep default (e.g., `10.0.0.0/16`)
    - You'll see a **default subnet** listed (usually named "default" with address range `10.0.0.0/24`)
   
6. **Delete the default subnet:**
    - Find the **default subnet** in the list
    - Click the **trash/delete icon** (🗑️) on the right side of the subnet row
    - Confirm the deletion
    - The subnet list should now be empty

7. **Create the frontend subnet:**
    - Click **+ Add a ubnet** button
    - A panel will open on the right side with the following fields:
      - **Name:** Enter `frontend`
      - **Subnet purpose:** Leave as "Default"
      - **Starting address:** Enter `10.0.1.0`
      - **Size:** Select `/24 (256 addresses)` from the dropdown
      - **Subnet address range:** Should automatically show `10.0.1.0 - 10.0.1.255`
    - Leave other settings as default
    - Click **Add** at the bottom

8. **Create the backend subnet:**
    - Click **+ Add subnet** button again
    - In the panel that opens:
      - **Name:** Enter `backend`
      - **Subnet purpose:** Leave as "Default"
      - **Starting address:** Enter `10.0.2.0`
      - **Size:** Select `/24 (256 addresses)` from the dropdown
      - **Subnet address range:** Should automatically show `10.0.2.0 - 10.0.2.255`
    - Leave other settings as default
    - Click **Add** at the bottom

9. **Verify both subnets are created:**
    - You should now see two subnets listed: `frontend (10.0.1.0/24)` and `backend (10.0.2.0/24)`

10. Click **Review + Create**, then **Create**
11. Wait for deployment (takes 30-60 seconds)

💡 **What you've created:** Two isolated network segments. Resources in `frontend` can't automatically talk to resources in `backend.

#### Step 2: Create a Network Security Group (NSG)

1. In Azure Portal, search for **"Network security groups"**
2. Click **+ Create**
3. Fill in the details:
    - **Subscription:** Your subscription
    - **Resource group:** `ZTLabEsp26`
    - **Name:** `backend-nsg`
    - **Region:** Same as your virtual network

4. Click **Review + Create**, then **Create**
5. Wait for deployment
6. Click **Go to resource**

💡 **What an NSG does:** It's like a firewall that controls what traffic can enter or leave a subnet. By default, it blocks most traffic.

#### Step 3: Configure Security Rules

1. In your `backend-nsg`, go to **Inbound security rules** (in the left menu under Settings)
2. Review the default rules:
    - You'll see rules like `AllowVNetInBound`, `DenyAllInBound`
    - These are Azure's default protections

3. **Add a custom restrictive rule** (to demonstrate control):
   - Click **+ Add**
   - Configure the rule:
         - **Source:** IP Addresses
         - **Source IP addresses:** `10.0.1.0/24` (your frontend subnet)
         - **Destination:** Any
         - **Service:** Custom
         - **Destination port ranges:** `443`
         - **Protocol:** TCP
         - **Action:** Allow
         - **Priority:** `100`
         - **Name:** `Allow-Frontend-HTTPS`
         - **Description:** "Only allow HTTPS traffic from frontend subnet"
   - Click **Add**

💡 **What this rule means:** Only the frontend subnet can communicate with backend, and only via HTTPS (port 443). Everything else is denied by default.

#### Step 4: Apply NSG to the Backend Subnet

1. In your `backend-nsg`, go to **Subnets** (in the left menu under Settings)
2. Click **+ Associate**
3. Select:
    - **Virtual network:** `ZTVNet`
    - **Subnet:** `backend`

4. Click **OK**
5. Wait a few seconds for the association

💡 **What happened:** Your security rules now protect the backend subnet. Any resource placed in that subnet is automatically protected.

#### Step 5: Review Your Network Security Configuration

1. Go back to **Virtual networks** → `ZTVNet`
2. Click on **Subnets** under **Settings** in the left menu
3. Click on the **backend** subnet
4. Under "Network security group," you should see `backend-nsg` listed
5. Take note that the NSG is now protecting this subnet

💡 **What you're seeing:** The NSG is associated with the backend subnet, meaning all its security rules are now active for any resources placed in this subnet.

**To review your security rules:**

6. Go back to **Network security groups** → `backend-nsg`
7. Click on **Inbound security rules** (under Settings)
8. Review the rules displayed:
      - Your custom rule `Allow-Frontend-HTTPS` (priority 100)
      - Default Azure rules: `AllowVNetInBound` (priority 65000)
      - Default Azure rules: `AllowAzureLoadBalancerInBound` (priority 65001)
      - Default Azure rules: `DenyAllInBound` (priority 65500)

9. **Understanding the rule priorities:**
      - **Lower number = higher priority** (your rule 100 is checked first)
      - **Your custom rule (100):** Allows HTTPS from frontend subnet only
      - **Default rules (65000+):** Azure's built-in protections
      - **DenyAllInBound (65500):** Blocks everything else by default

💡 **What you've proven:** The complete security policy is active. Even without resources deployed, the "deny by default" protection is in place. This demonstrates Zero Trust: assume breach and segment networks before attackers can move laterally.

### 📸 What to Document

**Include in your submission:**

1. **Screenshot 1:** Virtual network `ZTVNet` showing both subnets (`frontend` and `backend`) with their address ranges
2. **Screenshot 2:** Network Security Group `backend-nsg` with inbound security rules (showing your custom rule and default rules) associated with the backend subnet
3. **Written explanation (3-5 sentences):** Address the following:
    - How does network segmentation implement "Assume Breach"?
    - What is lateral movement and why is it dangerous?
    - If an attacker compromises a frontend web server, how does the NSG protect the backend?

> ⚠️ **ACADEMIC INTEGRITY WARNING**  
> Write all explanations in **your own words** based on your understanding. Do NOT use AI tools (ChatGPT, Copilot, Gemini, etc.) to write, paraphrase, or generate your responses. Your instructor is evaluating YOUR understanding, not AI-generated content. Violations will be treated as academic misconduct.

---
</details>
<details markdown="1">
<summary><h2 style="display: inline;">
Task 4: Continuous Security Assessment (3 Points) </summary>

**Zero Trust Principle:** 📊 **Continuous Verification** | ⏱️ **Time: 25-35 minutes**

### What You'll Learn
Zero Trust is **never finished**. Security isn't a one-time setup. It requires continuous monitoring, regular assessment, and ongoing improvement. You'll use Microsoft Defender for Cloud to see how enterprises monitor their security posture.

### Why This Matters
🚫 **Old approach:** "We configured security last year, we're good"  
✅ **Zero Trust:** "We continuously monitor, assess, and improve our security every day."

**Real-world reality:** New threats emerge daily. Configurations drift. Defender for Cloud helps security teams stay ahead by continuously checking for vulnerabilities and misconfigurations.

### Steps to Complete

#### Step 1: Enable or Access Microsoft Defender for Cloud

1. In Azure Portal, search for **"Microsoft Defender for Cloud"**
2. Click on **Microsoft Defender for Cloud** in the results
3. **If prompted:** Click **Get Started** or **Enable Defender** (some students may need this step)
4. You'll see the **Overview** page showing:
    - **Azure subscriptions:** Number of subscriptions (e.g., "2")
    - **Assessed resources:** Usually "0" for new/student accounts
    - **Attack paths:** Shows "--" (no data yet)
    - **Security alerts:** Shows "--" (no alerts yet)

**Review the Security posture section:**

   - **Critical recommendations:** Likely "0" for your new lab resources
   - **Attack paths:** Shows "0"
   - **Overdue recommendations:** Shows "0/0"
   - **Total secure score:** May show "N/A" if no resources are fully assessed yet

💡 **Why you might see N/A or zeros:** For student subscriptions with minimal resources (just resource groups and virtual networks), Defender may not have much to assess yet. This is normal! The key learning is understanding HOW continuous monitoring works.

 **Explore Environment settings:**

   - In the left menu, click **Environment settings** under **Management**
   - Expand your subscription (click the **>** arrow)
   - Click on your subscription name
   - Review **Defender plans**:
     - Most will show **Off** or **Free tier** (standard for student accounts)
     - The free tier still provides foundational security posture management

💡 **What Defender does:** It continuously scans Azure resources for security vulnerabilities, misconfigurations, and threats, comparing your setup against industry best practices. As you deploy more resources, Defender's assessments become more detailed.

#### Step 2: Explore Security Posture Components

1. From the Defender for Cloud **Overview** page, review the **Security posture** panel:
   - Note the **All recommendations by risk** section showing severity counts
   - You'll see: Critical, High, Medium, Low, Not evaluated (all likely "0" for new labs)

2. Click **"Explore your security posture >"** link at the bottom of the Security posture panel

3. On the Recommendations page, look for categories:
      - **Enable MFA** (Identity and Access)
      - **Secure score recommendations** 
      - **Security controls**

💡 **Understanding why scores show N/A:** Student subscriptions with only basic resources (resource groups, VNets, NSGs) may not generate a numerical secure score yet. Defender needs more assessable resources like VMs, storage accounts, or databases. This doesn't mean Defender isn't working—it's just waiting for more complex resources to evaluate.

4. **If you see any recommendations:**
      - Note the recommendation title
      - Check the severity (High/Medium/Low)
      - Click on a recommendation to see:
      - **Description:** What the security risk is
      - **Remediation steps:** How to fix it
      - **Affected resources:** What needs attention

5. **If you see zero recommendations:**
      - This means your current setup (resource groups, VNet, NSGs) meets basic security standards
      - Click **Recommendations** in the left menu to see if any appear there
      - Take note that "no recommendations" is actually a good security posture for your current resources!

#### Step 3: Understand Continuous Monitoring Principles

**Even if Defender shows N/A or zero recommendations, the key learning is understanding HOW enterprises use continuous monitoring:**

1. **Review the Inventory:**
   - Click **Inventory** in the left menu
   - See all your Azure resources listed:
     - Resource groups (`ZTLabEsp26`)
     - Virtual networks (`ZTVNet`)
     - Network Security Groups (`backend-nsg`)
     - Subnets (`frontend`, `backend`)
   - Each resource shows its security status

💡 **What you're seeing:** Defender tracks EVERY resource you create. As resources are added, modified, or deleted, Defender continuously reassesses security posture.

2. **Check for Security Alerts (even if empty):**

      - Click **Security alerts** in the left menu
      - You'll likely see "No security alerts found" 
      - This is good! It means no suspicious activity has been detected

💡 **In real enterprises:** Security teams monitor this daily. Any alerts trigger investigations. An empty alerts page means the continuous monitoring found no threats.

3. **Explore the Workbooks (optional):**
      - Click **Workbooks** in the left menu
      - Browse available security monitoring templates
      - These show how enterprises visualize security data over time

💡 **Continuous verification in action:** Defender runs 24/7, scanning for:
      - New vulnerabilities discovered in Azure services
      - Configuration changes that introduce risk
      - Suspicious authentication attempts
      - Unusual resource access patterns
      - Compliance drift from security standards

#### Step 4: Connect Defender to Your Zero Trust Labs

**Review how Defender relates to the tasks you've completed:**

1. **Task 1 (Identity & MFA) ↔ Defender:**
      - Go to **Recommendations** (left menu)
      - Look for identity-related recommendations (if any)
      - Common recommendation: "MFA should be enabled on accounts with owner permissions"
      - **Zero Trust connection:** Verify Explicitly—Defender continuously checks that MFA is enforced

2. **Task 2 (Least Privilege) ↔ Defender:**
      - Check if Defender flags overprivileged accounts
      - Your resource lock demonstrates least privilege enforcement
      - **Zero Trust connection:** Use Least Privilege—Defender monitors for excessive permissions

3. **Task 3 (Network Segmentation) ↔ Defender:**
      - Defender assesses your NSG rules (`backend-nsg`)
      - It checks if network segmentation follows best practices
      - **Zero Trust connection:** Assume Breach—Defender verifies network isolation is maintained

💡 **The continuous verification cycle:**

   - **Monitor:** Defender scans resources 24/7
   - **Detect:** Identifies misconfigurations and threats
   - **Alert:** Notifies security teams
   - **Respond:** Teams investigate and remediate
   - **Repeat:** Continuous cycle, not a one-time check

### 📸 What to Document

**Include in your submission:**

1. **Screenshot 1:** Microsoft Defender for Cloud **Overview** page showing:
      - Azure subscriptions count
      - Security posture panel (even if showing N/A or zeros)
      - The "All recommendations by risk" section

2. **Screenshot 2:** Your **Inventory** page showing the resources you created:
      - Resource group (`ZTLabEsp26`)
      - Virtual network (`ZTVNet`)
      - Network Security Group (`backend-nsg`)

3. **Written explanation (Just think about the questions below, you don't need to write anything for this part):** Address the following:
      - Explain what "continuous verification" means in Zero Trust
      - Why does Defender show N/A or zero scores for your student lab? (Hint: minimal resources)
      - How would Defender help in a real enterprise with hundreds of resources?
      - Connect one of your previous tasks (1, 2, or 3) to how Defender would monitor it


💡 **Important note:** If your Defender shows N/A or zeros, don't worry! This is expected for student labs with minimal resources. Your learning objective is understanding HOW continuous monitoring works, not generating a perfect security score.

---
</details>


---

## 📚 Additional Resources

If you want to learn more about Zero Trust security:

- [Microsoft Security Documentation](https://learn.microsoft.com/en-us/security/)
- [NIST Zero Trust Architecture](https://www.nist.gov/publications/zero-trust-architecture)
- [Azure Security Best Practices](https://learn.microsoft.com/en-us/azure/security/fundamentals/best-practices-and-patterns)

---

