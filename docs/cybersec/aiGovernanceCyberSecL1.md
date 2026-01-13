# AI, Governance & Cybersecurity Lab

```
┌─────────────────────────────────────────────────────────────────┐
│  🎯 CompTIA SecurityX Aligned  │  📊 15 Points  │  👤 Individual │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📌 Purpose & Learning Objectives

This lab provides **hands-on experience with enterprise cybersecurity analysis** using **public security datasets** and **AI-assisted analysis tools**, while applying **governance, risk, and compliance (GRC) principles**.

### 🏢 Real-World SOC Context

This lab reflects **real Security Operations Centre (SOC) workflows**, where analysts:

| SOC Activity | Lab Application |
|--------------|------------------|
| 🔍 Analyse logs and alerts | Review network, authentication, and identity logs |
| 📊 Summarise large datasets | Create human-written summaries of security events |
| 🤖 Use AI as decision-support | Leverage AI while maintaining critical thinking |
| ✅ Retain human accountability | Make final judgments on security incidents |

### 🎓 What You Will Learn

✅ Analyse **security logs** (network, authentication, identity)  
✅ Recognise **brute-force, credential misuse, and suspicious access patterns**  
✅ Identify **phishing and social engineering indicators**  
✅ Critically evaluate **AI-generated security analysis**  
✅ Apply **AI governance and SecurityX-level professional judgment**  
✅ Understand **human-in-the-loop** decision-making in cybersecurity

---

## 🎯 CompTIA SecurityX Alignment

> ⚠️ **IMPORTANT:** This lab is explicitly aligned with **CompTIA SecurityX (advanced security practitioner)** objectives. You must demonstrate SecurityX-style reasoning and professional terminology in all responses.

### SecurityX Domains Covered

| Domain | Focus Area |
|--------|------------|
| 🚨 **Threat Detection & Incident Response** | Analyse security telemetry, identify IoCs, assess threat patterns |
| 🔐 **Identity, Access & Privilege Management** | Evaluate IAM logs, apply Zero Trust principles, assess privilege risks |
| 🎣 **Social Engineering & Email Security** | Identify phishing indicators, evaluate defense layers |
| 📋 **Governance, Risk & Compliance (GRC)** | Apply governance frameworks, assess AI-specific risks |
| 🤖 **Emerging Technologies** | Critical evaluation of AI tools, human-in-the-loop decision-making |

**📍 Assessment Requirement:** Each task response must include SecurityX-level reasoning, appropriate terminology, and professional judgment.

---

## 🎥 Video Guide

**A short instructional video covers:**

✅ How to access the AI Space  
✅ How to summarise logs correctly  
✅ How to avoid governance violations  
✅ How to answer at SecurityX level  

📍 **Access:** Video link available in Canvas

---

## 🔐 Getting Started: Lab Access Requirements

### Step 1: Create Hugging Face Account

| Requirement | Details |
|-------------|----------|
| **Platform** | Hugging Face (free account) |
| **Email** | Use your **Laurea email ID** (recommended) |
| **Cost** | Free - no payment or credit card required |
| **Sign Up** | https://huggingface.co/join |

### Step 2: Access AI Tool (MANDATORY)

```
🤖 APPROVED AI TOOL ONLY
────────────────────────────────────────────
Use ONLY the course-provided AI Space
📍 Link provided in Canvas
────────────────────────────────────────────
```

⚠️ **PROHIBITED Tools:**

❌ Google Colab  
❌ Kaggle notebooks  
❌ Local AI installations  
❌ ChatGPT, Claude, or any other AI tools  
❌ Custom scripts or environments  

**Reason:** Using unauthorized tools violates lab governance requirements and will result in **automatic disqualification**.

---

## 📂 Approved Public Datasets

> **Requirement:** You must use **at least ONE** dataset from the approved list below.

### Dataset Categories

#### 🌐 Network & Attack Logs

| Dataset | Description | Link |
|---------|-------------|------|
| **CICIDS** | Canadian Institute for Cybersecurity - comprehensive network intrusion datasets | https://www.unb.ca/cic/datasets/ |

**Use Cases:** DDoS detection, network anomalies, intrusion attempts, traffic analysis

---

#### 🔑 Authentication & Insider Threat Logs

| Dataset | Description | Link |
|---------|-------------|------|
| **CERT Insider Threat** | SEI/CMU synthetic insider threat scenarios | https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=508099 |

**Use Cases:** Failed logins, privilege escalation, suspicious access patterns, account compromise

---

#### 🛡️ SOC & Network Metadata

| Dataset | Description | Link |
|---------|-------------|------|
| **Security Onion / Zeek** | Real-world SOC sample logs and network metadata | https://github.com/Security-Onion-Solutions/securityonion-sample-data |

**Use Cases:** Network monitoring, protocol analysis, connection patterns, metadata investigation

---

#### 📧 Email & Phishing Data

| Dataset | Description | Link |
|---------|-------------|------|
| **Phishing Email Dataset** | Labeled phishing and legitimate emails | https://www.kaggle.com/datasets/naserabdullahalam/phishing-email-dataset |
| **Enron Email Dataset** | Public historical email corpus | https://www.cs.cmu.edu/~enron/ |

**Use Cases:** Phishing detection, social engineering analysis, email security patterns

---

## ⚠️ CRITICAL GOVERNANCE RULE

```
╔═══════════════════════════════════════════════════════════════╗
║                    ⛔ AUTOMATIC FAILURE                       ║
║  Do NOT paste raw log files directly into the AI tool        ║
╚═══════════════════════════════════════════════════════════════╝
```

### Required Process (Human-in-the-Loop)

| Step | Action | Why |
|:----:|--------|-----|
| **1** | 🧑 **Analyse logs yourself** | Develop your security analysis skills |
| **2** | 🎯 **Select 5-10 representative entries** | Focus on meaningful patterns |
| **3** | ✍️ **Write human-created summary** | Demonstrate your understanding |
| **4** | 🤖 **Use AI for decision support only** | AI assists but doesn't replace judgment |

### ❌ Violations That Result in Automatic Failure

- Pasting entire raw log files into AI tool
- Letting AI do initial analysis without human review
- Submitting AI output without critical evaluation
- Using unauthorized AI tools
- Copying log summaries from online sources

### ✅ Acceptable AI Usage

- Using AI to validate your analysis after you've completed it
- Asking AI to explain specific technical concepts
- Using AI to suggest additional investigation steps
- Comparing your conclusions with AI-generated insights

---

## 🧪 Task Workflow: Step-by-Step Process

```
┌─────────────────────────────────────────────────────────────┐
│  STEP 1: Human Analysis → STEP 2: Summarise → STEP 3: AI   │
└─────────────────────────────────────────────────────────────┘
```

### 🔍 Step 1: Review the Dataset (Human Analysis)

**Your Actions:**

✅ Download and open the dataset  
✅ Identify suspicious activity and anomalies  
✅ Understand normal vs abnormal patterns  
✅ Select 5-10 representative log entries  
✅ Document your initial observations  

**Questions to Ask:**
- What stands out as unusual?
- Are there patterns in timing, IPs, or user behavior?
- What context is available?
- What information is missing?

---

### ✍️ Step 2: Create a Log Summary (Human-Written)

**Your Summary Should Include:**

| Element | Description |
|---------|-------------|
| **Pattern** | What abnormal behavior did you observe? |
| **Frequency** | How many times did it occur? |
| **Timing** | When did it happen? (timeframe, duration) |
| **Context** | Additional relevant details (user roles, IP addresses, etc.) |
| **Severity** | Your initial assessment of risk level |

**Example Summary:**

```
📋 Authentication Log Summary:

• 18 failed login attempts from IP 192.168.1.45
• All attempts occurred within 3-minute window
• Successful login followed the failed attempts
• Target account has administrator privileges
• Attempts used different passwords (brute-force pattern)
• No MFA challenge recorded
• Time: 2:15 AM - 2:18 AM (off-hours)
```

---

### 🤖 Step 3: Use the AI Space (Decision Support)

**Your Actions:**

1️⃣ Paste **your summary only** (not raw logs)  
2️⃣ Review AI-generated output  
3️⃣ **Critically evaluate** AI conclusions  
4️⃣ Compare with your own analysis  
5️⃣ Document agreements and disagreements  

**Critical Evaluation Questions:**
- Did AI identify the same risks you did?
- Did AI miss any important details?
- Did AI make unsupported assumptions?
- Is AI output realistic for this scenario?
- Would a human SOC analyst agree?

---

## 📝 Lab Tasks (15 Points Total)

```
┌──────────────────────────────────────────────────────────────┐
│  Task 1: 4 pts  │  Task 2: 4 pts  │  Task 3: 3 pts  │  Task 4: 4 pts │
└──────────────────────────────────────────────────────────────┘
```

---

## 🔹 Task 1: Security Log Analysis

**📊 Points:** 4 | **🎯 Domain:** Threat Detection & Incident Response

### Objective

Using **network or authentication logs**, analyse a potential security incident and provide a SecurityX-level assessment.

### SecurityX Learning Outcomes

| Outcome | Description |
|---------|-------------|
| 🔍 **Analyse security telemetry** | Review logs to identify anomalies and patterns |
| 🎯 **Distinguish evidence from assumption** | Separate facts from inference |
| 📊 **Assess confidence and uncertainty** | Quantify certainty levels in your conclusions |
| 🚀 **Recommend next investigative steps** | Propose actionable follow-up actions |

### Required SecurityX Terminology

**Use at least 3 of the following terms appropriately in your response:**

```
✓ Indicators of Compromise (IoCs)
✓ Brute-force attack
✓ Credential stuffing
✓ Event correlation
✓ False positives / False negatives
✓ Incomplete telemetry
✓ Human validation
✓ Threat intelligence
✓ Attack surface
✓ Lateral movement
```

### What to Submit

1. **Dataset Used:** Name and link
2. **Your Log Summary:** 5-10 representative entries analyzed (human-written)
3. **Your Initial Analysis:** What patterns did you identify?
4. **AI-Assisted Analysis:** What did the AI tool conclude?
5. **Critical Evaluation:** Do you agree with AI? Why or why not?
6. **SecurityX Assessment:** Professional judgment on incident severity and next steps

---

---

## 🔹 Task 2: Email & Phishing Analysis

**📊 Points:** 4 | **🎯 Domain:** Social Engineering & Threat Analysis

### Objective

Using public phishing and legitimate email data, analyse and compare AI classifications of phishing attempts.

### SecurityX Learning Outcomes

| Outcome | Description |
|---------|-------------|
| 🎣 **Identify social engineering tactics** | Recognise manipulation techniques in emails |
| ⚠️ **Evaluate detection limitations** | Understand what AI can and cannot detect |
| 🛡️ **Explain layered defenses** | Propose defense-in-depth strategies |

### Required SecurityX Terminology

**Use at least 3 of the following terms appropriately in your response:**

```
✓ Social engineering
✓ Phishing indicators
✓ Defense in depth
✓ User awareness training
✓ Email security gateway
✓ Contextual analysis
✓ Human factor risk
✓ Spear phishing
✓ Pretexting
✓ Business Email Compromise (BEC)
```

### What to Submit

1. **Dataset Used:** Name and link
2. **Email Summary:** Analysis of 5-10 emails (phishing and legitimate)
3. **Phishing Indicators:** What red flags did you identify?
4. **AI Classification:** How did AI classify these emails?
5. **Critical Evaluation:** Did AI miss any indicators? False positives?
6. **SecurityX Assessment:** Recommendations for layered email security controls

---

---

## 🔹 Task 3: Identity & Access Log Analysis

**📊 Points:** 3 | **🎯 Domain:** Identity, Access & Privilege Management

### Objective

Analyse Identity and Access Management (IAM) logs to identify potential account compromise or privilege abuse.

### Example Log Summary Format

```
🔑 IAM Log Summary:

• User logged in from Sweden at 09:15 UTC
• Same user logged in from Singapore at 09:40 UTC (25 min later)
• MFA challenge not completed for Singapore login
• Sensitive internal resources accessed after Singapore login
• Account has elevated privileges (admin role)
• No travel notification on file
```

### SecurityX Learning Outcomes

| Outcome | Description |
|---------|-------------|
| 🔐 **Assess identity risk** | Evaluate likelihood of account compromise |
| 🎯 **Apply Zero Trust principles** | Implement "never trust, always verify" mindset |
| 👤 **Justify human approval thresholds** | Determine when automation requires human oversight |

### Required SecurityX Terminology

**Use at least 3 of the following terms appropriately in your response:**

```
✓ Identity and Access Management (IAM)
✓ Privileged access
✓ Zero Trust
✓ Least privilege
✓ MFA enforcement
✓ Risk-based authentication
✓ Human-in-the-loop
✓ Impossible travel
✓ Account takeover
✓ Session hijacking
```

### What to Submit

1. **Dataset Used:** Name and link
2. **IAM Log Summary:** Analysis of suspicious access patterns
3. **Risk Assessment:** What identity risks did you identify?
4. **AI Analysis:** What did AI conclude about the activity?
5. **Zero Trust Application:** How would Zero Trust principles apply?
6. **SecurityX Assessment:** Should this require human approval? Why?

---

---

## 🔹 Task 4: AI Governance & Risk Evaluation

**📊 Points:** 4 | **🎯 Domain:** Governance, Risk & Compliance (GRC) + Emerging Technologies

### Objective

Evaluate AI-specific risks in cybersecurity operations and propose appropriate governance controls.

### SecurityX Learning Outcomes

| Outcome | Description |
|---------|-------------|
| ⚖️ **Assess AI-specific risks** | Identify unique risks introduced by AI tools |
| 📋 **Propose governance controls** | Recommend policies and procedures for AI use |
| 🔍 **Maintain accountability** | Ensure human responsibility for AI-assisted decisions |
| 📊 **Ensure auditability** | Enable tracing and review of AI-influenced decisions |

### Required SecurityX Terminology

**Use at least 4 of the following terms appropriately in your response:**

```
✓ Governance framework
✓ Risk management
✓ Human-in-the-loop
✓ Auditability
✓ Accountability
✓ AI hallucination / confabulation
✓ Over-reliance on automation
✓ Data minimisation
✓ Decision-support vs decision-making
✓ Bias in AI models
✓ Transparency
✓ Explainability (XAI)
```

### What to Submit

1. **AI Risk Assessment:** What risks did you observe when using AI for log analysis?
2. **Hallucination Examples:** Did AI make any unsupported claims or assumptions?
3. **Governance Controls:** What policies would you implement for AI use in SOC?
4. **Human-in-the-Loop:** When should humans override AI recommendations?
5. **Auditability Requirements:** How would you document AI-assisted decisions?
6. **SecurityX Assessment:** Professional recommendations for responsible AI use in cybersecurity

---

## ✅ Quality Checklist: SecurityX-Level Analysis

**Use this checklist before submitting each task:**

### 🔍 Log Understanding

| Question | Your Answer |
|----------|-------------|
| ☐ What is normal behavior in this dataset? | |
| ☐ What patterns are abnormal or suspicious? | |
| ☐ What is the baseline for comparison? | |

### 📊 Evidence Quality

| Question | Your Answer |
|----------|-------------|
| ☐ What evidence supports my conclusions? | |
| ☐ What information is missing from logs? | |
| ☐ What assumptions am I making? | |
| ☐ What is my confidence level? (High/Medium/Low) | |

### 🤖 AI Evaluation

| Question | Your Answer |
|----------|-------------|
| ☐ Did AI overgenerate or hallucinate details? | |
| ☐ Did AI miss important patterns I identified? | |
| ☐ Would a human SOC analyst agree with AI output? | |
| ☐ Did AI make unsupported assumptions? | |

### ⚖️ Governance & Professional Judgment

| Question | Your Answer |
|----------|-------------|
| ☐ Is human approval required for this decision? | |
| ☐ Is AI appropriate for this type of decision? | |
| ☐ Can this decision be audited and explained? | |
| ☐ Have I maintained human accountability? | |

---

---

## 📤 Submission Requirements

### Format

**Submit ONE document via Canvas:**
- **Accepted formats:** PDF or Word (.docx)
- **File naming:** `LastName_FirstName_SecurityX_Lab.pdf`
- **Submission deadline:** See Canvas

### Required Content Checklist

**Your submission MUST include all of the following:**

#### ✅ For Each Task (1-4):

| Section | Requirement |
|---------|-------------|
| 📂 **Dataset Information** | Name, link, and brief description of dataset used |
| ✍️ **Human-Written Summary** | Your analysis of 5-10 log entries (NOT raw logs) |
| 🤖 **AI-Assisted Analysis** | Summary of what AI tool concluded |
| 🎯 **Critical Evaluation** | Your professional assessment - agree/disagree with AI |
| 📋 **SecurityX Terminology** | Use required number of SecurityX terms appropriately |
| 💼 **Professional Recommendations** | Next steps, governance controls, or security improvements |

#### ✅ Overall Requirements:

☐ All 4 tasks completed  
☐ SecurityX-level reasoning demonstrated  
☐ Proper citation of datasets  
☐ Human-in-the-loop governance maintained  
☐ Professional writing and formatting  
☐ No raw log pasting violations  

---

## 📊 Grading Rubric

**Maximum Score: 15 Points**

| Task | Points | Evaluation Criteria |
|:----:|:------:|---------------------|
| **Task 1** | 4 pts | Security log analysis quality, SecurityX terminology, critical thinking |
| **Task 2** | 4 pts | Phishing analysis depth, AI evaluation, defense recommendations |
| **Task 3** | 3 pts | IAM risk assessment, Zero Trust application, human approval justification |
| **Task 4** | 4 pts | AI governance understanding, risk assessment, professional judgment |

### Detailed Grading Focus

#### ✅ What Earns High Marks:

- **SecurityX-level professional reasoning** (not just technical descriptions)
- **Critical evaluation of AI output** (identifying limitations, biases, errors)
- **Evidence-based conclusions** (separating facts from assumptions)
- **Proper governance principles** (human-in-the-loop, accountability, auditability)
- **Appropriate terminology usage** (SecurityX keywords used correctly in context)
- **Actionable recommendations** (specific, realistic next steps)

#### ❌ What Results in Point Deductions:

- Pasting raw logs (automatic failure)
- Using unauthorized AI tools
- Accepting AI output without critical analysis
- Missing SecurityX terminology requirements
- Lack of professional judgment
- Shallow or generic responses
- Poor documentation of analysis process

---

## 🔑 Final Reminders

```
╔════════════════════════════════════════════════════════════╗
║           SecurityX Professional Assessment                ║
║                                                            ║
║  You are evaluated on:                                     ║
║  ✓ Professional judgment and reasoning                     ║
║  ✓ Governance and compliance awareness                     ║
║  ✓ Critical thinking about AI limitations                  ║
║  ✓ Human accountability in decision-making                 ║
║                                                            ║
║  You are NOT evaluated on:                                 ║
║  ✗ What the AI produces                                    ║
║  ✗ Volume of data analyzed                                 ║
║  ✗ Technical complexity alone                              ║
╚════════════════════════════════════════════════════════════╝
```

**Key Principle:** This lab tests your ability to use AI **as a tool** while maintaining **human professional judgment** - exactly what SecurityX-level professionals do in real SOC environments.

---

**Questions?** Contact your instructor via Canvas or during lab hours.
