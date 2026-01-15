# AI, Governance & Cybersecurity Lab

**🎯 CompTIA SecurityX Aligned  │  📊 15 Points  │  👤 Individual**

---

## 📌 Purpose & Learning Objectives

This lab provides **hands-on experience with enterprise cybersecurity analysis** using **public security datasets** and **AI-assisted analysis tools**, while applying **governance, risk, and compliance (GRC) principles**.

Students act as SOC analysts, using a SIEM (Splunk) to analyse security telemetry and then critically evaluate AI-generated insights while retaining human accountability, as expected at CompTIA SecurityX level.

### Real-World SOC & GRC Context

In enterprise SOCs, analysts must balance detection speed with governance:

| SOC Responsibility | GRC Consideration |
|-------------------|-------------------|
| Threat detection | Evidence-based conclusions |
| Incident analysis | Risk-based decisions |
| Tool usage | Auditability & accountability |
| AI assistance | Human-in-the-loop control |
| Response actions | Compliance & oversight |

> **SecurityX Principle:**  
> Security tools and AI provide evidence and recommendations — humans retain accountability.

### 🎓 What You Will Learn

By completing this lab, students will be able to:

- Analyse enterprise security telemetry using a SIEM
- Identify suspicious activity across host, identity, and email logs
- Distinguish **evidence-based findings** from assumptions
- Apply **risk classification** (LOW / MEDIUM / HIGH)
- Use AI responsibly as **decision support**
- Critically evaluate AI output for governance risk
- Demonstrate **SecurityX-level professional judgment**

<details markdown="1">
<summary><h2 style="display: inline;">🔐 Lab Environment & Access (Pre-Configured)</h2></summary>
<br>

This lab uses **Splunk Enterprise** as a Security Information and Event Management (SIEM) platform to simulate real-world SOC workflows.

The environment is **pre-configured by the instructor**. Students **do NOT upload datasets themselves**.

<br>


| Dataset | Format | Purpose | Used In |
|---------|--------|---------|---------|
| Sysmon Windows Logs | JSON | Host, process, registry activity | Task 1, Task 3 |
| Phishing Email Dataset | CSV | Social engineering & phishing | Task 2 |
| CERT Insider Threat (logon.csv) | CSV | Authentication & access behaviour | Task 3 |

**Splunk Index:** `securityx_lab`

### Student Access

- Students access Splunk using **course-provided credentials**
- Access is **read-only**
- This reflects real SOC analyst permissions.

</details>

---
<details open markdown="1">
<summary><h2 style="display: inline;">🧭 Getting Started with Splunk (First-Time Users)</h2></summary>

### What is Splunk?

Splunk is a **Security Information and Event Management (SIEM)** platform used in enterprise SOCs to:

- Collect and index security logs
- Search and filter large volumes of events
- Correlate activity across systems
- Support incident detection and investigation

In this lab, you will use Splunk **as a SOC analyst**, not as an administrator.

> **Important:** You are analysing *evidence*, not configuring Splunk.

---

### Splunk Interface Basics (What You Need for This Lab)

| Splunk Feature | What You Will Use It For | Example |
|---------------|--------------------------|---------|
| **Search Bar** | Run SPL searches to find patterns | Search for failed logins |
| **Time Picker** | Adjust time range of events | Last 24 hours, last 7 days |
| **Events View** | Read individual log entries | See detailed authentication logs |
| **Statistics** | Count, group, and compare events | Count login attempts per user |

You do **not** need dashboards, alerts, or apps for this lab.

---

### Basic SPL (Search Processing Language)

SPL is how you query data in Splunk. Think of it as **“search → filter → summarize”**.

#### Some SPL Queries for This Lab

**1️⃣ View All Lab Data**
```spl
index=securityx_lab
```
*Shows all events in the lab dataset. Use this to get familiar with available data.*

---

**2️⃣ Identify Data Sources**
```spl
index=securityx_lab 
| stats count by sourcetype
```
*Lists all log types available (email_log,iam_log). Helps you understand what data you have.*

**Example Output:**
- `winLogs` (915 events)
- `email_log` (4045)
- `iam_log:` (450882)

---

**3️⃣ Analyse User Authentication Patterns**
```spl
index=securityx_lab sourcetype=iam_log
| stats count by user 
| sort - count
```
*Counts login attempts per user. Useful for identifying accounts with unusual activity.*

---

**4️⃣ Search for Specific Keywords**
```spl
index=securityx_lab "failed login" OR "authentication failure"
```
*Finds events containing specific phrases. Useful for investigating security incidents.*

---

**5️⃣ Filter by Time and Specific User**
```spl
index=securityx_lab sourcetype="iam_log" user="DTAA/CLB0995"
earliest=-7d@d latest=now
```
*Shows all activity for user "DTAA/CLB0995" in the last 7 days. Essential for investigating specific accounts.*

---

**6️⃣ Identify Process Execution (winLogs)**
```spl
index=securityx_lab sourcetype=winLogs EventID=1
| stats count by Image
| sort - count
```
*Lists all processes that executed on Windows hosts. Helps identify suspicious programs.*

**Example Output:**
- `C:\Windows\System32\cmd.exe` (234 executions)
- `C:\Windows\System32\powershell.exe` (89 executions)
- `C:\Temp\malware.exe` (1 execution) ⚠️

---

> **Remember:** You are **not graded on SPL complexity**, only on your **security reasoning and analysis**.  
> Basic searches are sufficient. Focus on **understanding what the logs tell you**.

---

### 📚 Learning More About Splunk (Optional)

If you are new to Splunk, these official resources can help:

| Resource | Purpose | Link |
|----------|---------|------|
| 🔗 **Splunk Search Fundamentals** | Learn basic SPL syntax and search concepts | [Tutorial](https://docs.splunk.com/Documentation/Splunk/latest/SearchTutorial/WelcometotheSearchTutorial) |
| 🔗 **SPL Quick Reference** | Command reference and syntax guide | [Documentation](https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/WhatsInThisManual) |
| 🔗 **Splunk Free Training** | Video courses for beginners | [Training Portal](https://www.splunk.com/en_us/training/free-courses/overview.html) |

**Note:** You are **not required** to complete these courses. They are provided as optional resources for students who want to learn more.

</details>

---
<details markdown="1">
<summary><h2 style="display: inline;">🧪 Task Workflow: Step-by-Step Process</h2></summary>

**Human Analysis First → AI as Support → Critical Evaluation → Governance Decision**

---

| Step | What You Do | Key Actions | Why It Matters |
|------|-------------|-------------|----------------|
| **🔍 STEP 1<br>Manual Analysis<br>(Splunk)** | Investigate logs independently | • Run SPL queries in Splunk<br>• Identify suspicious patterns<br>• Select 3-5 representative events<br>• Document observations | Establish **your own understanding** before AI influence |
| **✍️ STEP 2A<br>Write Summary<br>(Human Only)** | Summarize findings in 3-5 bullets | • What happened?<br>• How often? When?<br>• Who/what was involved?<br>• What context matters? | Create **evidence-based summary** for AI input |
| **🎯 STEP 2B<br>Risk Assessment<br>(BEFORE AI)** | Make your professional judgment | • Risk level: LOW/MEDIUM/HIGH<br>• Evidence supporting your rating<br>• Data gaps & assumptions<br>• Your recommendations | Demonstrate **independent security judgment** (SecurityX requirement) |
| **🤖 STEP 3<br>Use AI Tool<br>(Decision Support)** | Paste summary → Get AI analysis | • Input your summary (Step 2A only)<br>• Review AI conclusions<br>• Compare with your assessment | AI provides **second opinion**, not primary decision |
| **⚖️ STEP 4<br>Critical Evaluation<br>(Governance)** | Document AI strengths/weaknesses | • Did AI agree with you?<br>• What did AI miss/add?<br>• Any hallucinations?<br>• When to override AI? | Show **human-in-the-loop accountability** and critical thinking |

---

**💡 SecurityX Principle:** Humans analyze first, AI assists second, humans decide final action. This ensures accountability and prevents over-reliance on automation.

</details>

---
## 📝 Lab Tasks

You'll complete four tasks that build on each other. First, analyze **Windows logs** to catch credential dumping and persistence attacks. Then examine **emails** to spot phishing attempts. Next, investigate **login patterns** to find compromised accounts. Finally, step back and evaluate: Where did AI help? Where did it fail? What governance controls should we put in place? The key throughout is analyzing data yourself first, then using AI as a second opinion but not the other way around.

<details markdown="1">
<summary><h2 style="display: inline;">Task 1: Enterprise Security Log Analysis (5 pts)</h2></summary>

**🎯 SecurityX Domain:** Threat Detection & Incident Response

### Objective

Analyse **Windows logs** in Splunk to identify and assess potential security threats at the host level. Demonstrate professional SOC analyst judgment by distinguishing evidence from assumptions.

> **📌 Important:** The Sysmon logs (Winlogs) are **already loaded in Splunk** under `index=securityx_lab sourcetype=winLogs`. You do **NOT** need to upload any data.

> **About This Dataset:** These logs come from **Sysmon (System Monitor)**, a Windows tool that tracks what's happening on a computer — which programs run, what files change, and how the system is being used. This helps us spot attackers trying to steal passwords, or hide malware.

---

### What You Will Analyse

Windows logs in this dataset capture security-relevant activity including:

- **Process access** (EventID=10): What processes accessed other processes (245 events)
- **Registry modifications** (EventID=13): Registry key value changes (208 events)
- **Registry operations** (EventID=12): Registry object creation/deletion (77 events)
- **Group enumeration** (EventID=4799): User group membership queries (186 events)
- **File creation** (EventID=11): Files created or modified (4 events)
- **Process creation** (EventID=1): New process execution (1 event)

> **Note:** EventID counts are based on the current dataset. Focus on the most frequent events (10, 13, 12, 4799) for pattern analysis.

---

### Suggested SPL Queries for This Task

**🔍 Start Here: View All Available EventIDs**
```spl
index=securityx_lab sourcetype=winLogs
| stats count by EventID
| sort - count
```
*This shows what types of events are available and their frequency. EventIDs 10, 13, 12, and 4799 are most common.*

---

**🔍 Investigate Process Access (EventID 10 - Most Common)**
```spl
index=securityx_lab sourcetype=winLogs EventID=10
| stats count by SourceImage, TargetImage, GrantedAccess
| sort - count
```
*EventID 10 tracks when one process accesses another. Look for suspicious processes accessing critical system processes (like lsass.exe for credential dumping).*

---

**🔍 Monitor Registry Modifications (EventID 13)**
```spl
index=securityx_lab sourcetype=winLogs EventID=13
| stats count by Image, TargetObject, Details
| sort - count
```
*Registry changes can indicate persistence mechanisms. Look for modifications to autorun keys, Windows Defender settings, or security policies.*

---

**🔍 Check Group Membership Enumeration (EventID 4799)**
```spl
index=securityx_lab sourcetype=winLogs EventID=4799
| stats count by SubjectUserName, TargetUserName
| sort - count
```
*Frequent group membership queries can indicate reconnaissance activity by an attacker mapping privileged accounts.*

---

**🔍 Review All Activity by Process**
```spl
index=securityx_lab sourcetype=winLogs
| stats count by Image, EventID
| sort - count
```
*Identify which processes are most active. Unusual processes or high activity from administrative tools can be suspicious.*

---

### What to Look For (Investigation Tips)

Based on the actual EventIDs in the dataset, focus on these indicators:

| Indicator | What It Might Mean | Example | EventID |
|-----------|-------------------|---------|---------|
| **Suspicious process accessing LSASS** | Credential dumping attempt | `mimikatz.exe` or unknown tool accessing `lsass.exe` | 10 |
| **Registry persistence modifications** | Malware establishing persistence | Changes to `Run`, `RunOnce`, or `Startup` registry keys | 13 |
| **Windows Defender registry changes** | Attacker disabling security | Modifications to `Windows Defender` settings | 13 |
| **Frequent group enumeration** | Reconnaissance activity | Repeated queries of admin/privileged groups | 4799 |
| **Unusual registry key creation** | New persistence mechanism | New registry keys in startup locations | 12 |
| **Multiple registry deletions** | Anti-forensics/cleanup | Deletion of evidence or security logs | 12 |
| **Files in suspicious locations** | Malware staging | Executables in `Temp` or `AppData` folders | 11 |

> **Focus Area:** Since EventID 10 (Process Access - 245 events) and EventID 13 (Registry Modification - 208 events) are most common, prioritize analysing these for suspicious patterns.

---

> 📚 **Framework References:** [Sysmon](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon), [MITRE ATT&CK](https://attack.mitre.org/) (T1003, T1547, T1562, T1087), [Windows Security Auditing](https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/security-auditing-overview)

---

### SecurityX Terminology

Use **at least 3** of these terms appropriately in your submission:

| Term | Definition | Example in Context |
|------|------------|-------------------|
| **IoCs** (Indicators of Compromise) | Observable artifacts that indicate a potential security breach | "Registry modification at startup key is an IoC for persistence" |
| **Event correlation** | Connecting multiple security events to identify attack patterns | "Correlating EventID 10 (LSASS access) with EventID 13 (Defender disabled) suggests coordinated attack" |
| **False positives** | Legitimate activity incorrectly flagged as malicious | "Admin tool accessing LSASS may be false positive if from approved PAW" |
| **Incomplete telemetry** | Missing log data that limits investigation | "No network logs available to confirm if credentials were exfiltrated" |
| **Attack surface** | All possible points an attacker could exploit | "Registry Run keys expand attack surface for persistence mechanisms" |
| **Lateral movement** | Attacker moving between systems after initial compromise | "After credential dump, checking for lateral movement to other hosts" |
| **Human validation** | Manual analyst review before taking action | "AI suggests HIGH risk but human validation needed before quarantine" |
| **Threat intelligence** | Information about known threats and attackers | "Checking IP against threat intel feeds to confirm C2 infrastructure" |
| **Baseline behavior** | Normal activity patterns for comparison | "50 logins/day is baseline; 500 logins indicates anomaly" |

---

### 📝 What to Submit

#### **Component 1: Data Source & Evidence (1 pt)**

**Required:**

- State data source: `index=securityx_lab sourcetype=winLogs`
- Specify time range analyzed
- **Include 1 Splunk screenshot** showing your query and results

**Example:**

> "Analyzed Windows logs from `index=securityx_lab sourcetype=winLogs` from January 10-14, 2026. Focused on EventIDs 10, 13, and 4799."
>
> *[Screenshot: Splunk query showing EventID counts]*

---

#### **Component 2: Human-Written Summary (1 pt)**

**Your observations BEFORE using AI**

**Requirements:**

- 3-5 bullet points summarizing patterns
- Include specific details: EventIDs, processes, registry keys, timing
- Your interpretation, not raw logs

**Example:**

- EventID 10: "powershell.exe" accessed "lsass.exe" 15 times
- EventID 13: Registry key `HKLM\...\Run\UpdateCheck` created
- Timing: All activity between 02:30-03:15 AM

---

#### **Component 3: Risk Analysis - BEFORE AI (1 pt)**

**Pick ONE event pattern from Component 2 and analyze it**

**Template:**

**🔴 Risk Level:** HIGH / MEDIUM / LOW

**📊 Evidence & SecurityX Analysis:**
- Use **at least 3 SecurityX terms**
- What IoCs did you find?
- How do events correlate?

**❓ What's Missing?** [What additional data would help?]

**🛡️ Recommendations:** [1-2 immediate actions]

**Example (analyzing the lsass.exe access from Component 2):**

> **🔴 Risk Level:** HIGH
>
> **📊 Evidence & SecurityX Analysis:**  
> The 15 lsass.exe access attempts are clear **IoCs** for credential dumping. **Event correlation** with registry changes (EventID 13) and 02:30 AM timing exceeds **baseline behavior** for legitimate tools, suggesting **lateral movement** preparation.
>
> **❓ What's Missing?** Network logs to confirm exfiltration; process creation logs (EventID 1) showing how powershell launched.
>
> **🛡️ Recommendations:** Isolate host immediately, check auth logs for unusual logins, deploy EDR/PAWs/MFA.

---

#### **Component 4: AI Tool Output (1 pt)**

**Using AI as decision support**

**Requirements:**

- Paste your summary (Component 2) into an AI tool
- Document AI's conclusion: risk level, IoCs identified, recommendations

**Example:**
> "AI classified as HIGH risk. Identified LSASS access and Defender tampering. Recommended checking for Pass-the-Hash attacks."

---

#### **Component 5: Critical Evaluation of AI (1 pt)**

**Answer these questions briefly in your own words:**

- **Agreement:** Did AI reach same conclusions as you?
- **AI Strengths:** What did AI identify that you missed?
- **AI Weaknesses:** What did AI miss?
- **AI Hallucination:** Did AI make unsupported assumptions?
- **Human Override:** Would you override AI? Why?

---
</details>

---
<details markdown="1">
<summary><h2 style="display: inline;">Task 2: Email & Phishing Risk Analysis (4 pts)</h2></summary>

**🎯 SecurityX Domain:** Social Engineering & Email Security

### Objective
Using the **`email_log` dataset (42,148 events)** in Splunk, analyze phishing campaigns, email-based social engineering techniques, and assess the accuracy of AI-assisted threat classifications. Apply critical thinking to differentiate legitimate emails from sophisticated phishing attempts and recommend defense-in-depth controls.

> **📌 Important:** The email logs are **already loaded in Splunk** under `index=securityx_lab sourcetype=email_log`. You do **NOT** need to upload any data.
>
> **About This Dataset:** This is a publicly available email dataset containing both **legitimate business emails (label=0)** and **phishing/spam emails (label=1)**. The emails include the complete message body text in the `text_combined` field. This real-world data helps you practice identifying social engineering tactics, urgency language, credential requests, and other phishing indicators that attackers use to manipulate victims.

---

> **⚠️ Content Warning:** This dataset contains real phishing/spam emails which may include vulgar language, scams, inappropriate content, grammatical errors, and nonsensical text. This is authentic cybersecurity training data. If you encounter offensive content, remember this reflects real-world threats that security professionals must analyze professionally and objectively.

---

### 📊 Splunk Queries for Email Analysis

Use these queries to investigate the `email_log` data in your `securityx_lab` index:

1. **View all email data:**

```spl
   index=securityx_lab sourcetype=email_log
   | table _time, text_combined, label
   | head 20
```

**Shows email text content and classification labels**

2. **Count emails by classification:**

```spl
   index=securityx_lab sourcetype=email_log
   | stats count by label
```

   **See how many phishing vs legitimate emails exist**
   
   **Understanding Labels:**
   - **label=0** → LEGITIMATE emails (normal business communications)
   - **label=1** → PHISHING/SPAM emails (malicious/suspicious)

3. **Search for urgency language (phishing indicator):**

```spl
   index=securityx_lab sourcetype=email_log label=1
   (text_combined="*urgent*" OR text_combined="*immediately*" OR text_combined="*verify*" OR text_combined="*suspended*")
   | table _time, text_combined, label
```

   **Find phishing emails (label=1) using urgency tactics**

4. **Search for financial/credential requests:**

```spl
   index=securityx_lab sourcetype=email_log label=1
   (text_combined="*password*" OR text_combined="*account*" OR text_combined="*prize*" OR text_combined="*winner*" OR text_combined="*bank*")
   | table _time, text_combined, label
```
   
   **Identify phishing emails (label=1) requesting sensitive information or offering fake rewards**

5. **Find emails with specific phishing keywords:**

```spl
   index=securityx_lab sourcetype=email_log label=1
   (text_combined="*click here*" OR text_combined="*confirm*" OR text_combined="*update*" OR text_combined="*expire*")
   | table _time, text_combined, label
```
   
   **Common phishing call-to-action phrases in spam emails (label=1)**

6. **Compare: View legitimate emails for context:**

```spl
   index=securityx_lab sourcetype=email_log label=0
   | table _time, text_combined, label
   | head 10
```

   **Review normal business emails (label=0) to understand baseline communication patterns**

---

### 🎯 Common Phishing Indicators in Email Text

| Indicator | What to Look For | Example Keywords |
|-----------|------------------|------------------|
| **Urgency language** | Time-pressure tactics | "urgent", "immediately", "suspended", "expire", "act now" |
| **Financial lures** | Fake prizes or money offers | "winner", "prize", "lottery", "claim", "million dollars" |
| **Credential requests** | Asks for passwords/accounts | "password", "verify account", "confirm identity", "update payment" |
| **Authority impersonation** | Claims to be from banks/gov | "bank", "IRS", "security team", "official notification" |
| **Action demands** | Commands to click/respond | "click here", "download", "open attachment", "reply immediately" |
| **Generic greetings** | Impersonal salutation | "Dear customer", "Dear user", "Dear sir/madam" |
| **Spelling/grammar errors** | Poor English quality | Typos, awkward phrasing, missing articles |

---

> 📚 **Framework Reference:** [MITRE ATT&CK](https://attack.mitre.org/) - T1566 (Phishing), T1598 (Phishing for Information)

---

### 📖 SecurityX Terminology

Use **at least 5 terms** appropriately in your analysis:

| Term | Definition | Example Usage |
|------|------------|---------------|
| **Phishing Indicators** | Observable email characteristics that suggest malicious intent | "The email contained 3 phishing indicators: urgency language, spoofed sender domain, and credential request." |
| **Business Email Compromise (BEC)** | Advanced social engineering targeting employees to transfer funds or data | "This appears to be a BEC attempt impersonating the CFO requesting wire transfer." |
| **Social Engineering** | Psychological manipulation to trick users into security mistakes | "The attacker used social engineering by creating false urgency." |
| **Defense-in-Depth** | Layered security controls (technical + awareness + policy) | "Recommend defense-in-depth: email filtering + user training + MFA." |
| **False Positive** | Legitimate email incorrectly flagged as malicious | "This newsletter was a false positive due to promotional language." |
| **Spear Phishing** | Targeted attack customized for specific individuals/organizations | "Email references internal project names - likely spear phishing research." |
| **User Awareness Training** | Education programs to help staff recognize threats | "Monthly user awareness training reduced click rates by 40%." |

---

### 📝 What to Submit

#### **Component 1: Your Manual Email Analysis (2 pt)**

Analyze **3-5 emails** from the `email_log` dataset **without AI assistance**.

**For each email, document:**

- Email text snippet (first 50-100 characters)
- Phishing indicators identified in the text (reference table above)
- Your classification: PHISHING / LEGITIMATE
- Risk rating: LOW / MEDIUM / HIGH
- Brief justification (2-3 sentences)

**Example Table:**

| Email Text Snippet | Phishing Indicators | Classification | Risk Rating | Justification |
|-------------------|---------------------|----------------|-------------|---------------|
| "URGENT: Your account will be suspended unless you verify your password immediately..." | Urgency language, credential request, action demand | PHISHING | HIGH | Uses fear tactics combined with direct password request. Legitimate companies never ask for passwords via email. The combination of urgency and credential harvesting is classic phishing. |

**📸 Screenshot Requirement:**  
Include **1 Splunk screenshot** showing your query and the `text_combined` field results.

---

#### **Component 2: AI-Assisted Classification (1 pt)**

Use an AI tool (ChatGPT, Copilot, Claude) to:
1. Paste **3-5 email samples** you analyzed earlier
2. Ask: *"Classify these emails as legitimate or phishing. Identify indicators and provide risk ratings."*
3. **Take the scrernshot of the complete AI output inclding your prompt** into your submission

---

#### **Component 3: SecurityX Risk Assessment (1 pt)**

Write **150-200 words** answering:

**"Based on your email analysis, what are the TOP 3 email security risks for a ompany, and what layered defenses (technical + human + policy) would you recommend?"**

**Use SecurityX terminology and structure your answer as:**
- **Risk 1:** [What's the threat?] → **Control:** [How to defend against it - technical + human + policy]
- **Risk 2:** [What's the threat?] → **Control:** [How to defend against it - technical + human + policy]
- **Risk 3:** [What's the threat?] → **Control:** [How to defend against it - technical + human + policy]

**Example:**
> **Risk 1:** Business Email Compromise (BEC) - Attackers pretending to be company executives to trick finance staff into transferring money 
> 
> **Control:** 
> - **Technical:** Email authentication (DMARC/SPF/DKIM) to verify sender identity
> - **Human:** Train employees to recognize executive impersonation tactics
> - **Policy:** Require phone call or in-person confirmation for all wire transfer requests over $10,000


---

</details>

<details markdown="1">
<summary><h2 style="display: inline;">Task 3: Identity & Access Log Analysis (3 pts)</h2></summary>

**🎯 SecurityX Domain:** Identity, Access & Privilege Management

### Objective

Analyse **authentication and access behavior** using the **`iam_log` dataset (142,833 events)** in Splunk to identify suspicious login patterns, potential insider threats, and compromised accounts. Apply Zero Trust principles and risk-based authentication concepts.

> **📌 Important:** The IAM logs are **already loaded in Splunk** under `index=securityx_lab sourcetype=iam_log`. This dataset is from **Carnegie Mellon University's CERT Division Insider Threat Program** — a real-world collection of employee authentication activity used for cybersecurity research and training.

---

### 📊 Splunk Queries for IAM Analysis

Use these queries to investigate authentication patterns:

1. **View IAM log structure:**

```spl
   index=securityx_lab sourcetype=iam_log
   | head 20
```

   **Understand the data structure and available fields**

2. **Count login activity by user:**

```spl
   index=securityx_lab sourcetype=iam_log
   | stats count by user
   | sort - count
```

   **Identify users with highest login volumes - look for anomalies**

3. **Analyze login patterns by time:**

```spl
   index=securityx_lab sourcetype=iam_log
   | stats count by date_hour
   | sort date_hour
```
   
   **Find unusual login times (e.g., 2 AM-5 AM may indicate compromised accounts)**

4. **Identify accounts with unusual activity:**

```spl
   index=securityx_lab sourcetype=iam_log
   | stats count by user, pc
   | sort - count
```
   *Look for users accessing multiple PCs or unusual device patterns*

5. **Investigate specific user behavior:**

```spl
   index=securityx_lab sourcetype=iam_log user="*CLB*"
   | stats count by date_mday, date_hour
   | sort date_mday, date_hour
```

   *Deep dive into specific user's login timeline*

6. **Find off-hours authentication:**

```spl
   index=securityx_lab sourcetype=iam_log (date_hour<6 OR date_hour>22)
   | stats count by user, date_hour, pc
   | sort - count
```

   *Identify potential unauthorized access during non-business hours*

---

### 🎯 What to Look For (Investigation Tips)

| Indicator | What It Might Mean | Example |
|-----------|-------------------|---------|
| **Excessive login attempts** | Brute force or credential stuffing | User with 500+ logins in one day vs baseline of 20 |
| **Off-hours authentication** | Compromised account or insider threat | Logins at 2 AM-5 AM from user who normally works 9 AM-5 PM |
| **Multiple PC access** | Lateral movement or account sharing | User accessing 10 different PCs in one day |
| **Unusual login frequency** | Automated access or bot activity | Login every 2 minutes for hours |
| **Geographic anomalies** | Account takeover | User logging in from different locations simultaneously |
| **Dormant account activity** | Compromised credentials | Account inactive for 6 months suddenly active |

---

> 📚 **Framework References:** [MITRE ATT&CK](https://attack.mitre.org/) (T1078, T1110, T1021), [NIST Zero Trust](https://www.nist.gov/publications/zero-trust-architecture), [CERT Insider Threat](https://insights.sei.cmu.edu/insider-threat/)

---

### SecurityX Terminology

Use **at least 3** of these terms:

| Term | Definition | Example in Context |
|------|------------|-------------------|
| **Least privilege** | Users only have minimum access needed for their role | "User accessing admin shares violates least privilege principle" |
| **Zero Trust** | Never trust, always verify - continuous authentication | "Zero Trust requires validating this off-hours login despite valid credentials" |
| **Baseline behavior** | Normal activity patterns for comparison | "50 logins/day is baseline; 500 logins indicates anomaly" |
| **Risk-based authentication** | Access decisions based on context and risk indicators | "Off-hours login from new device triggers MFA challenge" |
| **Account takeover** | Attacker gains control of legitimate user account | "Sudden change in login times suggests account takeover" |
| **Lateral movement** | Attacker moving between systems/accounts | "User accessing multiple servers in 10 minutes shows lateral movement" |
| **Insider threat** | Malicious or negligent employee risk | "Employee downloading sensitive data before resignation is insider threat indicator" |

---

### 📝 What to Submit

#### **Component 1: Data Source & Authentication Pattern Analysis (1 pt)**

**Required:**
- State data source: `index=securityx_lab sourcetype=iam_log`
- Specify time range analyzed
- **Briefly summarize your findings** (2-3 sentences identifying 1-2 suspicious users)
- **Include 1 Splunk screenshot** showing your SPL query and results

**Instructions:**
You are NOT expected to analyze all 142,833 events. Run a few SPL queries to identify suspicious patterns (e.g., users with unusually high login counts, off-hours activity, multiple PC access). Summarize your key observations briefly.

**Example:**
> "Analyzed IAM logs from `index=securityx_lab sourcetype=iam_log` covering 1/14-1/26/2026. Identified user DTAA/CLB0995 with 1,200 login attempts (vs baseline 50/day) and another user accessing 15 different PCs in 24 hours."
>
> *[Screenshot: Splunk SPL query showing user login counts, e.g., `index=securityx_lab sourcetype=iam_log | stats count by user | sort - count`]*

---

#### **Component 2: Human-Written Summary (1 pt)**

**Your observations BEFORE using AI**

**Requirements:**

- 3-5 bullet points summarizing suspicious patterns
- Include specific details: usernames, login counts, timing, devices

**Example:**

- User DTAA/CLB0995: 1,200 logins in one day (baseline: 50)
- Off-hours activity: 45 logins between 2-4 AM
- Device hopping: Accessed 12 different PCs in 6 hours

---

#### **Component 3: Risk Assessment & AI Comparison (1 pt)**

**Step 1: Your Risk Analysis (BEFORE AI)**

Pick ONE suspicious pattern from Component 2 and briefly analyze:

- **🔴 Risk Level:** HIGH / MEDIUM / LOW
- **📊 Evidence:** What makes this behavior suspicious? Use **at least 3 SecurityX terms**
- **🛡️ Recommendation:** What should be done immediately?

**Step 2: Get AI Input**

Paste your Component 2 summary into an AI tool and get its risk assessment.

**Step 3: Compare & Evaluate**

Answer these 3 questions (2-3 sentences each):

1. **Did AI agree with your risk level? What was similar/different?**
2. **What is ONE thing AI identified that you missed OR one weakness in AI's analysis?**
3. **Who should make the final decision to take action - you or the AI? Why?** (Explain accountability)

---

**Example:**

| Step | Component | 👤 YOUR RESPONSE (Fill this in) | ✅ EXAMPLE (Reference only) |
|------|-----------|----------------------------------|------------------------------|
| **Step 1** | **🔴 Risk Level** | [HIGH / MEDIUM / LOW] | HIGH |
| | **📊 Evidence (use 3+ SecurityX terms)** | [Write your analysis here] | User DTAA/CLB0995's 1,200 logins (vs **baseline behavior** of 50/day) suggests **account takeover**. Off-hours authentication violates **Zero Trust** principles. |
| | **🛡️ Recommendation** | [Write your immediate action] | Force password reset, enable MFA immediately |
| **Step 2** | **AI Input** | [Paste what AI said] | AI assigned HIGH risk. Suggested credential stuffing attack from botnet. Recommended checking for data exfiltration and implementing behavioral analytics. |
| **Step 3** | **Q1: Did AI agree?** | [Write your comparison in 2-3 sentences] | YES - AI also rated it HIGH risk and identified account compromise. We both flagged the excessive login volume as the primary indicator. |
| | **Q2: AI Strength OR Weakness?** | [Write one strength or weakness in 2-3 sentences] | AI suggested checking for credential stuffing attacks from botnets, which I didn't consider. However, AI assumed malicious intent without considering this could be legitimate automated system access. |
| | **Q3: Who decides & why?** | [Explain who is accountable in 2-3 sentences] | Human analyst remains accountable. AI provides **decision-support**, but I must validate with IT team before locking the account to avoid disrupting legitimate business operations. **Human-in-the-loop** is essential. |

---

</details>


<details markdown="1">
<summary><h2 style="display: inline;">Task 4: AI Governance & Risk Evaluation (1 pt)</h2></summary>

**🎯 SecurityX Domain:** Governance, Risk & Compliance + Emerging Technologies (AI in Cybersecurity)

### Objective

Synthesize findings from Tasks 1-3 to evaluate AI's role in security operations. Assess AI-specific risks, identify when AI tools succeed vs fail, and propose governance controls that ensure human accountability while leveraging AI decision-support.

> **📌 Why This Matters:** SecurityX professionals must govern how AI is deployed in SOCs. The ability to critically assess AI accuracy, identify hallucinations, and maintain human accountability distinguishes advanced practitioners from basic analysts.

---

### 📖 Key SecurityX Terminology

Use **at least 4** of these terms in your analysis:

| Term | Definition |
|------|------------|
| **Human-in-the-loop (HITL)** | Human oversight before critical automated actions |
| **Accountability** | Humans remain responsible for decisions, even when using AI |
| **AI hallucination** | AI generates false information not based on evidence |
| **Decision-support vs decision-making** | AI advises; humans decide |
| **Automation bias** | Over-trusting automated systems without scrutiny |

> 📚 **Reference Frameworks:** [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework), [OWASP Top 10 for LLMs](https://owasp.org/www-project-top-10-for-large-language-model-applications/), [Microsoft Responsible AI](https://www.microsoft.com/en-us/ai/responsible-ai)

---

### 📝 What to Submit

**Write a brief AI governance reflection (150-200 words) addressing:**

**Compare AI performance across Tasks 1-3:**

- What did AI do well in helping your analysis?
- What did AI miss or get wrong?
- When should you override AI recommendations?
- Who is accountable for final security decisions?

**Requirements:**

- Give at least ONE specific example from your lab work
- Use **at least 3 SecurityX terms** (HITL, accountability, AI hallucination, decision-support, automation bias)
- Explain the principle of human-in-the-loop. 


---

</details>


---

<details open markdown="1">
<summary><h2 style="display: inline;">📤 Submission Requirements</h2></summary>

**Submit ONE document via Canvas:**
- Format: PDF or Word (.docx)
- File naming: `LastName_FirstName_SecurityX_Lab.pdf`
- Deadline: See Canvas



**Key Principle:** This lab tests your ability to use AI as a tool while maintaining human professional judgment - exactly what SecurityX-level professionals do in real SOC environments.

**Questions?** Contact your instructor via Canvas or during lab hours.

</details>

---

## 📖 Glossary

**Key terms used throughout this lab:**

| Term | Definition |
|------|------------|
| **SOC** | Security Operations Center - A centralized team that monitors, detects, analyzes, and responds to cybersecurity incidents using technology and processes |
| **SIEM** | Security Information and Event Management - A platform that collects, correlates, and analyzes security logs from across an organization (Splunk is a SIEM) |
| **GRC** | Governance, Risk, and Compliance - Framework ensuring organizations meet regulatory requirements, manage risks, and maintain accountability |
| **SecurityX** | CompTIA's advanced cybersecurity certification focusing on threat management, vulnerability assessment, incident response, and enterprise security architecture |
| **SPL** | Search Processing Language - The query language used in Splunk to search, filter, and analyze log data |
| **Sysmon** | System Monitor - Windows system service that logs detailed system activity including process creation, network connections, and file modifications |
| **IoCs** | Indicators of Compromise - Observable artifacts (files, IPs, processes, registry keys) that indicate a potential security breach |
| **MITRE ATT&CK** | A globally-accessible knowledge base of adversary tactics and techniques based on real-world observations of cyberattacks |
| **Telemetry** | Automated collection and transmission of data from remote sources (security logs, system events, network traffic) for monitoring and analysis |
| **Human-in-the-loop (HITL)** | A design pattern where humans provide oversight and validation before critical automated actions are executed |
| **AI Hallucination** | When AI generates false information or makes unsupported claims not based on available evidence |
| **Zero Trust** | Security model based on "never trust, always verify" - continuous authentication and authorization regardless of network location |
| **EventID** | A unique identifier assigned to specific types of Windows log events (e.g., EventID 10 = Process Access) |
| **Defense-in-Depth** | Layered security strategy using multiple defensive mechanisms (technical controls, policies, training) to protect assets |
| **BEC** | Business Email Compromise - Social engineering attack where attackers impersonate executives to trick employees into transferring funds or data |
