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
| **Identity & Access Control** | Set up MFA and identity-based verification |
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
<summary><h2 style="display: inline;"> ## Task 1: Identity Verification & MFA (4 Points) </summary>

**Zero Trust Principle:** 🔐 **Verify Explicitly** | ⏱️ **Time: 30-40 minutes**

### What You'll Learn
In Zero Trust, **identity is your new security perimeter** not the network. Instead of trusting anyone inside the network, you verify every user's identity continuously. Multi-factor authentication (MFA) makes this stronger by requiring multiple proofs of identity.

### Why This Matters
🚫 **Old approach:** "You're inside the network, so I trust you"  
✅ **Zero Trust:** "Prove who you are every time, using multiple factors"

### Steps to Complete

#### Step 1: Explore Your Identity Environment
1. Sign in to [Azure Portal](https://portal.azure.com)
2. Search for **"Microsoft Entra ID"** (formerly Azure Active Directory)
3. Click on **Overview** to see your tenant information
4. Navigate to **Users** → **All users**
5. Review the existing user accounts

💡 **What you're seeing:** Your tenant is the identity boundary. Every user here needs verification.

#### Step 2: Create a Test User (If Allowed)
1. In Microsoft Entra ID, go to **Users** → **All users**
2. Click **+ New user** → **Create new user**
3. Set up the user:
    - User principal name: `testuser01@yourdomain`
    - Display name: `Test User 01`
    - **Uncheck** "Account enabled" for now (safety measure)
    - Set a temporary password
4. Assign no admin roles (keep it as a standard user)

🔒 **If restricted:** Many student tenants don't allow user creation. That's fine! Document the error message you see, and continue using your own account for the remaining steps.

#### Step 3: Enable MFA Protection
1. In Microsoft Entra ID, go to **Properties**
2. Scroll down to find **Manage Security Defaults**
3. Click **Manage Security Defaults**
4. Set to **Enabled** (if not already)
5. Click **Save**

💡 **What this does:** Security Defaults automatically require MFA for all users. When signing in, users must provide:

   - Something they know (password)
   - Something they have (phone app code or SMS)

#### Step 4: Check Authentication Activity
1. In Microsoft Entra ID, go to **Sign-in logs** (under Monitoring)
2. Review recent sign-in attempts
3. Look for columns showing:
    - **Authentication requirement:** Single-factor or Multi-factor
    - **Status:** Success or Failure
    - **MFA result:** Satisfied, Required, or Not Required
4. Click on a log entry to see detailed authentication steps

💡 **What to look for:** Successful MFA sign-ins show the identity was verified explicitly, not just trusted.

### 📸 What to Document

**Include in your submission:**

1. **Screenshot 1:** Security Defaults set to "Enabled" in Microsoft Entra ID
2. **Screenshot 2:** Sign-in logs showing MFA authentication attempts
3. **Written explanation (4-6 sentences):** Address the following:
        - Describe your identity environment (number of users, test user creation status)
        - How does MFA implement "Verify Explicitly"?
        - Why is verifying identity better than trusting the network?
        - What happens if someone steals a password but doesn't have the second factor?

> ⚠️ **ACADEMIC INTEGRITY WARNING**  
> Write all explanations in **your own words** based on your understanding. Do NOT use AI tools (ChatGPT, Copilot, Gemini, etc.) to write, paraphrase, or generate your responses. Your instructor is evaluating YOUR understanding, not AI-generated content. Violations will be treated as academic misconduct.

---
</details>
<details markdown="1">
<summary><h2 style="display: inline;"> ## Task 2: Least Privilege Access Enforcement (4 Points) </summary>

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

#### Step 2: Create and Assign Limited Permissions to a Test User

**⚠️ Important:** You need a separate test account to properly test restrictions. Your main account likely has Owner permissions at the subscription level, which would override the Reader role.

**Option A: If you CAN create users (ideal):**

1. In Microsoft Entra ID, go to **Users** → **All users**
2. Click **+ New user** → **Create new user**
3. Create the user:
    - User principal name: `readertest@yourdomain`
    - Display name: `Reader Test User`
    - **Check** "Account enabled" (we'll use this account)
    - Copy the auto-generated password
4. **Now assign Reader role to this test user:**
5. Navigate to your `ZTLabEsp26` resource group
6. Click **Access control (IAM)**
7. Click **+ Add** → **Add role assignment**
8. **Role tab:**
    - Select **"Reader"**
    - Click **Next**
9. **Members tab:**
    - Click **+ Select members**
    - Search for `readertest` (your test user)
    - Click **Select**, then **Next**
10. Click **Review + assign**

**Option B: If you CANNOT create users (restricted tenant):**

1. Navigate to your `ZTLabEsp26` resource group
2. Click **Access control (IAM)** → **Role assignments**
3. **Document your current role** (likely Owner or Contributor at subscription level)
4. Take a screenshot showing you cannot assign Reader-only access
5. **For your submission:** Explain that least privilege requires separate test accounts, but your tenant restrictions prevent this

💡 **What Reader means:**

- ✅ Can view resources and their settings
- ❌ Cannot create, modify, or delete anything
- ❌ Cannot change permissions

This is **least privilege** in action that is just enough to do the job, no more.

#### Step 3: Test the Restriction with the Test User Account

**If you created a test user (Option A):**

1. **Important:** Open a **private/incognito browser window**
2. Go to [Azure Portal](https://portal.azure.com)
3. Sign in with your **test user account** (`readertest@yourdomain`)
4. Use the temporary password, then set a new password
5. Navigate to **Resource groups** → `ZTLabEsp26`
6. Try to create a resource (this should fail):
    - Click **+ Create** 
    - Try to add any resource (e.g., Storage account)
    - You should see: **"You don't have authorization"** or **"Failed - Forbidden"**

7. Try another action:
    - Try to delete the resource group
    - Should also fail with authorization error

💡 **This failure is success!** The system correctly blocked unauthorized actions.

**If you CANNOT create users (Option B):**

- Explain in your submission how the Reader role would restrict actions
- Describe what would happen if a test user with only Reader access tried to modify resources
- Reference your subscription-level permissions showing why you can't test this restriction

#### Step 4: Verify the Security Control Worked

**If using test user account:**

1. **While still logged in as the test user**, navigate to `ZTLabEsp26`
2. Click **Activity log** in the left menu
3. Add filters:
    - **Timespan:** Last 1 hour
    - **Event initiated by:** `readertest` (your test username)

4. Look for the failed operations:
    - Status icon will show red ❌
    - Operation might be "Create deployment" or "Delete resource group"
    - **Status:** Failed

5. Click on a failed operation to see details
6. You should see **"Authorization failed"** with error code

**Then switch back to your main account:**

1. Open a new browser window (not incognito)
2. Sign in with your main Azure account
3. Go to `ZTLabEsp26` → **Activity log**
4. You can now view all activities including the test user's failed attempts

💡 **What you're proving:** The audit trail shows the security control working. In a real breach investigation, these logs would show what an attacker tried but couldn't do.

**If you couldn't create a test user:**

- Check Activity Log with your main account
- Look for any authorization-related events
- Document the limitation and explain the security concept

### 📸 What to Document

**Include in your submission:**

1. **Screenshot 1:** IAM role assignments showing Reader role assigned to the test user (or explanation if you couldn't create a test user)
2. **Screenshot 2:** Error message when test user tries to create/modify a resource AND/OR Activity Log showing the failed attempt with authorization error
3. **Written explanation (3-5 sentences):** Address the following:
    - Describe your test environment setup (resource group, test user status)
    - Why is "deny by default" a security win?
    - How does least privilege limit damage if credentials are compromised?
    - In an enterprise, why would you use Reader role for auditors or reporting tools?
    - What could an attacker do with Reader access vs. Contributor access?
    - Why was it important to test with a separate account rather than your main account?

> ⚠️ **ACADEMIC INTEGRITY WARNING**  
> Write all explanations in **your own words** based on your understanding. Do NOT use AI tools (ChatGPT, Copilot, Gemini, etc.) to write, paraphrase, or generate your responses. Your instructor is evaluating YOUR understanding, not AI-generated content. Violations will be treated as academic misconduct.

---
</details>

<details markdown="1">
<summary><h2 style="display: inline;">
## Task 3: Network Segmentation & Assume Breach (4 Points) </summary>

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
    - You'll see a default subnet — we'll modify this
   
6. **Create the frontend subnet:**
    - If there's a default subnet, click the **pencil icon** to edit it, or click **+ Add subnet**
    - **Subnet name:** `frontend`
    - **Subnet address range:** `10.0.1.0/24` (adjust if your address space is different)
    - Click **Save** or **Add**

7. **Create the backend subnet:**
    - Click **+ Add subnet**
    - **Subnet name:** `backend`
    - **Subnet address range:** `10.0.2.0/24`
    - Click **Add**

8. Click **Review + Create**, then **Create**
9. Wait for deployment (takes 30-60 seconds)

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

#### Step 5: Review Effective Security Rules

1. Go back to **Virtual networks** → `ZTVNet`
2. Click on **Subnets** in the left menu
3. Click on the **backend** subnet
4. Under "Network security group," you should see `backend-nsg`
5. Go back to your NSG: **Network security groups** → `backend-nsg`
6. Click on **Effective security rules** (under Support + troubleshooting)
7. You may need to select a network interface (if none exist, you'll see the default rules)
8. Review all rules that are active:
    - Your custom rule (priority 100)
    - Default Azure rules (higher priority numbers)
    - See which rules ALLOW vs DENY traffic

💡 **What you're seeing:** The complete security policy for the backend subnet. This shows exactly what traffic is blocked vs allowed.

### 📸 What to Document

**Include in your submission:**

1. **Screenshot 1:** Virtual network `ZTVNet` showing both subnets (`frontend` and `backend`) with their address ranges
2. **Screenshot 2:** Network Security Group `backend-nsg` with inbound security rules (showing your custom rule and default rules) associated with the backend subnet
3. **Written explanation (3-5 sentences):** Address the following:
    - Describe your network setup (VNet name, subnet ranges, NSG configuration)
    - How does network segmentation implement "Assume Breach"?
    - What is lateral movement and why is it dangerous?
    - If an attacker compromises a frontend web server, how does the NSG protect the backend?
    - Why is "deny by default" important in network security?
    - How would you extend this in a real enterprise (e.g., adding a database subnet)?

> ⚠️ **ACADEMIC INTEGRITY WARNING**  
> Write all explanations in **your own words** based on your understanding. Do NOT use AI tools (ChatGPT, Copilot, Gemini, etc.) to write, paraphrase, or generate your responses. Your instructor is evaluating YOUR understanding, not AI-generated content. Violations will be treated as academic misconduct.

---
</details>
<details markdown="1">
<summary><h2 style="display: inline;">
## Task 4: Continuous Security Assessment (3 Points) </summary>

**Zero Trust Principle:** 📊 **Continuous Verification** | ⏱️ **Time: 25-35 minutes**

### What You'll Learn
Zero Trust is **never finished**. Security isn't a one-time setup. It requires continuous monitoring, regular assessment, and ongoing improvement. You'll use Microsoft Defender for Cloud to see how enterprises monitor their security posture.

### Why This Matters
🚫 **Old approach:** "We configured security last year, we're good"  
✅ **Zero Trust:** "We continuously monitor, assess, and improve our security every day."

**Real-world reality:** New threats emerge daily. Configurations drift. Defender for Cloud helps security teams stay ahead by continuously checking for vulnerabilities and misconfigurations.

### Steps to Complete

#### Step 1: Enable Microsoft Defender for Cloud

1. In Azure Portal, search for **"Microsoft Defender for Cloud"**
2. Click on **Microsoft Defender for Cloud** in the results
3. If prompted, click **Get Started** or **Enable Defender**
4. You'll see the overview page with:
    - **Secure Score** (your security rating)
    - **Recommendations** (things to improve)
    - **Alerts** (potential threats detected)

5. In the left menu, click **Environment settings**
6. Expand your subscription (click the **>** arrow)
7. Click on your subscription name
8. You'll see **Defender plans**:
    - Most will show **Off** or **Free tier** (this is fine for students)
    - The free tier still provides valuable recommendations
9. Review what's enabled

💡 **What Defender does:** It continuously scans your Azure resources for security vulnerabilities, misconfigurations, and threats. It compares your setup against industry best practices.

#### Step 2: Review Your Secure Score

1. From the Defender for Cloud main page, find your **Secure Score**
    - It's displayed as a percentage (e.g., "62% Secure Score")
    - And as points (e.g., "15 out of 24 points")

2. Click on **Secure Score** to see details
3. Review the breakdown:
    - **Recommendations by severity:** High, Medium, Low
    - **Affected resources:** How many resources have issues
    - **Score by subscription:** Your overall security rating

4. Click on different tabs to explore:
    - **Score over time:** See if your security is improving
    - **Recommendations:** Specific actions to improve your score

💡 **Understanding Secure Score:**

- **Higher is better** (aim for 80%+)
- Each recommendation you complete increases your score
- This helps prioritize security work and fix high-impact items first
- Enterprises track this metric to measure security improvement

#### Step 3: Analyze Security Recommendations

1. From Defender for Cloud, click **Recommendations** in the left menu
2. You'll see a list of security recommendations, such as:
    - "MFA should be enabled on accounts with owner permissions"
    - "Storage accounts should restrict network access"
    - "Network Security Groups should have inbound rules restricted"
    - "Management ports should be closed on your virtual machines"

3. **Select two recommendations** that interest you (pick ones relevant to your work)

4. For each recommendation:
    - Click on it to see details
    - Read the **Description** — what's the security risk?
    - Read **Remediation steps** — how to fix it
    - Look at **Affected resources** — what's vulnerable?
    - Note the **Severity** (High/Medium/Low)

5. **Connect each recommendation to Zero Trust:**

Example analysis:

- **Recommendation:** "MFA should be enabled on accounts with owner permissions"
- **Zero Trust principle:** Verify Explicitly
- **Why it matters:** Even privileged accounts must prove their identity with multiple factors. If an owner account password is stolen without MFA, attackers gain full control.

💡 **Think like a security professional:** Each recommendation addresses a specific threat. Ask yourself: "What attack does this prevent?" and "Which Zero Trust principle does this support?"

#### Step 4: Explore Advanced Features (Optional but Recommended)

1. Check **Security alerts** (if any):
    - Click **Security alerts** in the left menu
    - Real alerts show potential attacks or suspicious activity
    - This is continuous monitoring in action

2. Review **Inventory**:
    - Click **Inventory** in the left menu
    - See all your Azure resources and their security status
    - Spot which resources have security issues

💡 **Continuous verification means:** Defender runs 24/7, constantly checking for new threats, configuration changes, and vulnerabilities. Security teams review this daily.

### 📸 What to Document

**Include in your submission:**

1. **Screenshot 1:** Microsoft Defender for Cloud overview showing your Secure Score (with percentage and breakdown)
2. **Screenshot 2:** Recommendations list showing your two selected recommendations with their details visible
3. **Written analysis for each of your two recommendations:** Address the following for each:
    - **Recommendation name**  What does it say to fix?
    - **Security risk** What threat does this address?
    - **Zero Trust principle** Which principle (Verify Explicitly / Least Privilege / Assume Breach)?
    - **Impact** Why would fixing this improve security?

4. **Overall reflection (3-4 sentences):** Address the following:
    - How does continuous monitoring support Zero Trust?
    - Why can't security be a "set it and forget it" approach?
    - How would you use Secure Score in an enterprise security role?

> ⚠️ **ACADEMIC INTEGRITY WARNING**  
> Write all explanations in **your own words** based on your understanding. Do NOT use AI tools (ChatGPT, Copilot, Gemini, etc.) to write, paraphrase, or generate your responses. Your instructor is evaluating YOUR understanding, not AI-generated content. Violations will be treated as academic misconduct.

---
</details>
**Less important:** Perfect tool execution or getting everything working flawlessly.

> 💡 **Remember:** This is about learning security principles, not memorizing Azure menus. Focus on the "why" behind each action.  


