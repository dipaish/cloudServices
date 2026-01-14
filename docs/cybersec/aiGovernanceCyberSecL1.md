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

SPL is how you query data in Splunk.  
Think of it as **“search → filter → summarize”**.

**Examples you will use:**

#### Essential SPL Queries for This Lab

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
*Lists all log types available (Sysmon, email, IAM). Helps you understand what data you have.*

**Example Output:**
- `sysmon:json` (15,432 events)
- `email:csv` (2,891 events)
- `iam:csv` (8,764 events)

---

**3️⃣ Analyse User Authentication Patterns**
```spl
index=securityx_lab sourcetype=iam:csv 
| stats count by user 
| sort - count
```
*Counts login attempts per user. Useful for identifying accounts with unusual activity.*

**Example Use Case:** Detect brute-force attempts (one user with 500+ failed logins).

---

**4️⃣ Search for Specific Keywords**
```spl
index=securityx_lab "failed login" OR "authentication failure"
```
*Finds events containing specific phrases. Useful for investigating security incidents.*

---

**5️⃣ Filter by Time and Specific User**
```spl
index=securityx_lab sourcetype=iam:csv user="john.doe" 
earliest=-7d@d latest=now
```
*Shows all activity for user "john.doe" in the last 7 days. Essential for investigating specific accounts.*

---

**6️⃣ Identify Process Execution (Sysmon)**
```spl
index=securityx_lab sourcetype=sysmon:json EventCode=1 
| stats count by Image 
| sort - count
```
*Lists all processes that executed on Windows hosts. Helps identify suspicious programs.*

**Example Output:**
- `C:\Windows\System32\cmd.exe` (234 executions)
- `C:\Windows\System32\powershell.exe` (89 executions)
- `C:\Temp\malware.exe` (1 execution) ⚠️

---

> **Remember:** You are **not graded on SPL complexity** — only on your **security reasoning and analysis**.  
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

<summary><h2 style="display: inline;">🧪 Task Workflow: Step-by-Step Process</h2></summary><br>

**STEP 1: Human Analysis → STEP 2: Summarize → STEP 3: AI → STEP 4: Governance Judgment**

---

### 🔍 Step 1: Manual Security Analysis (Splunk)

**Your Actions:**

1. Access the preloaded datasets in **Splunk**
2. Review logs to understand **normal vs abnormal behavior**
3. Identify suspicious patterns or anomalies
4. Select **5–10 representative events** that best illustrate the pattern
5. Document your observations using evidence from SPL searches

**Key Questions:**
- What behavior appears unusual or risky?
- What patterns or repetitions emerge?
- What context or data is missing?

---

### ✍️ Step 2: Write Your Summary & Analysis (Before AI)

#### **Part A: Human Log Summary**

Write a concise summary (5–10 bullet points):
- What happened?
- How frequently did it occur?
- When did it occur (timing/duration)?
- Who or what was involved?
- What contextual details matter?

#### **Part B: Your Professional Analysis (CRITICAL)**

Complete this **before using AI**.

**📝 Analysis Template:**

- **Security Assessment:** LOW / MEDIUM / HIGH risk  
- **Evidence:** Which events or patterns support this assessment?  
- **Assumptions & Gaps:** What cannot be concluded? What data is missing?  
- **Recommendations:**  
  1) Immediate action (if any)  
  2) Follow-up investigation steps  
  3) Preventive or governance controls  

**Why This Matters:**  
SecurityX-level professionals must demonstrate **independent judgment** before consulting AI. This is a core **human-in-the-loop governance requirement**.

---

### 🤖 Step 3: Use AI & Critically Evaluate

**Process:**

1️⃣ Paste **your human-written summary only** (Part A) into the AI tool (your choice) 
2️⃣ Review the AI’s conclusions and recommendations  
3️⃣ **Compare** AI output with **your own analysis** (Part B)  
4️⃣ **Document agreement, disagreement, and reasoning**

**Critical Evaluation Framework:**

| Question | Your Answer |
|----------|-------------|
| Did AI reach the same conclusions as you? | |
| Did AI identify risks you missed? | |
| Did AI miss risks you identified? | |
| Did AI make unsupported assumptions or hallucinate? | |
| Would a human SOC analyst agree with AI? | |
| When would you override AI’s recommendation? | |

</details>

---
## 📝 Lab Tasks (15 Points Total)

**Task 1: 4 pts  │  Task 2: 4 pts  │  Task 3: 3 pts  │  Task 4: 4 pts**

<details markdown="1">
<summary><h2 style="display: inline;">🔹 Task 1: Enterprise Security Log Analysis (4 pts)</h2></summary>

**🎯 SecurityX Domain:** Threat Detection & Incident Response

### Objective
Using **Sysmon Windows logs (JSON)** in Splunk, analyse host-level security activity and provide a SecurityX-level risk assessment.

### SecurityX Learning Outcomes

| Outcome | Description |
|--------|-------------|
| 🔍 Analyse security telemetry | Identify abnormal host and process behavior |
| 🎯 Distinguish evidence from assumption | Separate facts from inference |
| 📊 Assess uncertainty | Communicate confidence and limitations |
| 🚀 Recommend next steps | Propose realistic follow-up actions |

### Required SecurityX Terminology  
Use **at least 3**:

IoCs • Event correlation • False positives • Incomplete telemetry • Attack surface • Lateral movement • Human validation

### What to Submit

1. **Dataset:** Sysmon Windows Logs (preloaded in Splunk)  
2. **Your Summary:** Human-written log summary (Step 2A)  
3. **Your Analysis:** Risk assessment before AI (Step 2B)  
4. **AI Output:** Summary of AI conclusions  
5. **Critical Evaluation:** Comparison with your analysis  
6. **SecurityX Judgment:** Final professional conclusion  

</details>



<details markdown="1">
<summary><h2 style="display: inline;">🔹 Task 2: Email & Phishing Risk Analysis (4 pts)</h2></summary>

**🎯 SecurityX Domain:** Social Engineering & Email Security

### Objective
Using the **Phishing Email dataset (CSV)**, analyse phishing indicators and evaluate AI classifications.

### SecurityX Learning Outcomes

| Outcome | Description |
|--------|-------------|
| 🎣 Identify social engineering | Recognise phishing techniques |
| ⚠️ Evaluate detection limits | Understand false positives |
| 🛡️ Explain layered defenses | Recommend defense-in-depth |

### Required SecurityX Terminology  
Use **at least 3**:

Phishing indicators • Social engineering • False positives • Defense in depth • User awareness training • BEC • Contextual analysis

### What to Submit

1. **Dataset:** Phishing Email Dataset (preloaded)  
2. **Your Summary:** 5–10 email summaries  
3. **Your Analysis:** Indicators and risks you identified  
4. **AI Output:** AI classification summary  
5. **Critical Evaluation:** Comparison with your findings  
6. **SecurityX Assessment:** Risk-based recommendations  

</details>

<details markdown="1">
<summary><h2 style="display: inline;">🔹 Task 3: Identity & Access Log Analysis (3 pts)</h2></summary>

**🎯 SecurityX Domain:** Identity, Access & Privilege Management

### Objective
Analyse **authentication and access behavior** using IAM logs (`logon.csv`) and assess identity-related risk.

### SecurityX Learning Outcomes

| Outcome | Description |
|--------|-------------|
| 🔐 Assess identity risk | Evaluate account misuse likelihood |
| 🎯 Apply Zero Trust | Justify least-privilege reasoning |
| 👤 Human approval thresholds | Decide when automation must stop |

### Required SecurityX Terminology  
Use **at least 3**:

IAM • Least privilege • Zero Trust • Risk-based authentication • Account takeover • Lateral movement • Human-in-the-loop

### What to Submit

1. **Dataset:** CERT Insider Threat – IAM logs  
2. **Your Summary:** Human-written login summary  
3. **Your Analysis:** Identity risks identified  
4. **AI Output:** AI interpretation  
5. **Critical Evaluation:** Comparison  
6. **SecurityX Judgment:** Final risk decision  

</details>



<details markdown="1">
<summary><h2 style="display: inline;">🔹 Task 4: AI Governance & Risk Evaluation (4 pts)</h2></summary>

**🎯 SecurityX Domain:** Governance, Risk & Compliance + Emerging Technologies

### Objective
Evaluate **AI-specific risks** observed during Tasks 1–3 and propose governance controls.

### SecurityX Learning Outcomes

| Outcome | Description |
|--------|-------------|
| ⚖️ Assess AI risk | Identify automation-related risks |
| 📋 Propose governance controls | Policies, procedures, oversight |
| 🔍 Maintain accountability | Humans remain responsible |
| 📊 Ensure auditability | Decisions must be reviewable |

### Required SecurityX Terminology  
Use **at least 4**:

Human-in-the-loop • Auditability • Accountability • AI hallucination • Decision-support vs decision-making • Bias • Transparency • Explainability (XAI)

### What to Submit

1. AI risk assessment across all tasks  
2. Examples of AI overconfidence or hallucination  
3. Where AI helped vs failed  
4. Governance controls you recommend  
5. When humans must override AI  
6. Final SecurityX-level judgment  

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
