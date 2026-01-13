# AI, Governance & Cybersecurity Lab

**🎯 CompTIA SecurityX Aligned  │  📊 15 Points  │  👤 Individual**

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

**🤖 APPROVED AI TOOL ONLY**

> Use ONLY the course-provided AI Space  
> 📍 Link provided in Canvas

**⚠️ Using unauthorized tools = automatic disqualification**

---

## 📂 Approved Public Datasets

> **Requirement:** You must use **at least ONE** dataset from the approved list below.

| Category | Dataset | Description | Use Cases | Link |
|----------|---------|-------------|-----------|------|
| 🌐 **Network & Attack** | **CICIDS** | Canadian Institute for Cybersecurity network intrusion datasets | DDoS detection, network anomalies, intrusion attempts, traffic analysis | https://www.unb.ca/cic/datasets/ |
| 🔑 **Authentication & Insider Threat** | **CERT Insider Threat** | SEI/CMU synthetic insider threat scenarios | Failed logins, privilege escalation, suspicious access patterns, account compromise | https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=508099 |
| 🛡️ **SOC & Network Metadata** | **Security Onion / Zeek** | Real-world SOC sample logs and network metadata | Network monitoring, protocol analysis, connection patterns, metadata investigation | https://github.com/Security-Onion-Solutions/securityonion-sample-data |
| 📧 **Email & Phishing** | **Phishing Email Dataset** | Labeled phishing and legitimate emails | Phishing detection, social engineering analysis, email security patterns | https://www.kaggle.com/datasets/naserabdullahalam/phishing-email-dataset |
| 📧 **Email & Phishing** | **Enron Email Dataset** | Public historical email corpus | Email pattern analysis, communication security research | https://www.cs.cmu.edu/~enron/ |

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

**STEP 1: Human Analysis → STEP 2: Summarize → STEP 3: AI**

### 🔍 Step 1: Manual Dataset Review

**Your Actions:**

1. Download and open your chosen dataset
2. Review the data to understand normal vs abnormal patterns
3. Identify suspicious activity and anomalies
4. Select 5-10 representative entries that illustrate the pattern
5. Document your observations

**Key Questions:**
- What behavior is unusual?
- What patterns emerge?
- What context or information is missing?

---

### ✍️ Step 2: Write Your Summary & Analysis

**Part A: Create Log Summary**

Write a concise summary of what you observed (5-10 bullet points):
- What happened?
- How many times?
- When (timing/duration)?
- Who/what was involved?
- Any relevant context?

**Part B: Document YOUR Analysis (CRITICAL - Do This Before AI)**

Before using AI, write your own professional analysis:

```
📝 Template for Your Analysis:

Security Assessment: [HIGH/MEDIUM/LOW RISK] - [Your conclusion]

Evidence:
• [What patterns indicate this?]
• [What specific details support your conclusion?]
• [What makes this suspicious?]

Concerns/Gaps:
• [What information is missing?]
• [What assumptions are you making?]
• [What needs further investigation?]

Recommendations:
1. [Immediate action needed?]
2. [Follow-up investigation steps?]
3. [Prevention measures?]
```

**Why This Matters:** You need your own documented analysis BEFORE using AI so you can compare and critically evaluate AI's conclusions. This demonstrates human-in-the-loop governance.

---

### 🤖 Step 3: Use AI & Critically Evaluate

**Process:**

1️⃣ Paste **your summary only** (Part A from Step 2) into the approved AI tool  
2️⃣ Review what the AI concludes  
3️⃣ **Compare** AI output with YOUR analysis (Part B from Step 2)  
4️⃣ **Document the comparison** - where you agree, disagree, and why  

**Critical Evaluation Framework:**

| Question | Your Answer |
|----------|-------------|
| Did AI reach the same conclusions as you? | |
| Did AI identify risks you missed? | |
| Did AI miss risks you identified? | |
| Did AI make unsupported assumptions or hallucinate? | |
| Would a human SOC analyst agree with AI? | |
| When would you override AI's recommendation? | |

---

## 📝 Lab Tasks (15 Points Total)

**Task 1: 4 pts  │  Task 2: 4 pts  │  Task 3: 3 pts  │  Task 4: 4 pts**

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

- Indicators of Compromise (IoCs)
- Brute-force attack
- Credential stuffing
- Event correlation
- False positives / False negatives
- Incomplete telemetry
- Human validation
- Threat intelligence
- Attack surface
- Lateral movement

### What to Submit

**Follow the 3-step workflow, then submit:**

1. **Dataset:** Name and link to the dataset you used
2. **Your Summary:** The human-written log summary (Step 2, Part A)
3. **Your Analysis:** Your documented analysis BEFORE using AI (Step 2, Part B)
4. **AI Output:** Summary of what the AI tool concluded
5. **Critical Evaluation:** Compare your analysis with AI output (Step 3 framework)
6. **SecurityX Assessment:** Your final professional judgment using required terminology

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

- Social engineering
- Phishing indicators
- Defense in depth
- User awareness training
- Email security gateway
- Contextual analysis
- Human factor risk
- Spear phishing
- Pretexting
- Business Email Compromise (BEC)

### What to Submit

**Follow the 3-step workflow, then submit:**

1. **Dataset:** Name and link to the dataset you used
2. **Your Summary:** Human-written summary of 5-10 emails (Step 2, Part A)
3. **Your Analysis:** Phishing indicators and risks YOU identified (Step 2, Part B)
4. **AI Output:** How AI classified the emails and what it concluded
5. **Critical Evaluation:** Compare your analysis with AI output (Step 3 framework)
6. **SecurityX Assessment:** Your final recommendations using required terminology

---

---

## 🔹 Task 3: Identity & Access Log Analysis

**📊 Points:** 3 | **🎯 Domain:** Identity, Access & Privilege Management

### Objective

Analyse Identity and Access Management (IAM) logs to identify potential account compromise or privilege abuse. Look for patterns like impossible travel, privilege escalation, or suspicious access to sensitive resources.

### SecurityX Learning Outcomes

| Outcome | Description |
|---------|-------------|
| 🔐 **Assess identity risk** | Evaluate likelihood of account compromise |
| 🎯 **Apply Zero Trust principles** | Implement "never trust, always verify" mindset |
| 👤 **Justify human approval thresholds** | Determine when automation requires human oversight |

### Required SecurityX Terminology

**Use at least 3 of the following terms appropriately in your response:**

- Identity and Access Management (IAM)
- Privileged access
- Zero Trust
- Least privilege
- MFA enforcement
- Risk-based authentication
- Human-in-the-loop
- Impossible travel
- Account takeover
- Session hijacking

### What to Submit

**Follow the 3-step workflow, then submit:**

1. **Dataset:** Name and link to the dataset you used
2. **Your Summary:** Human-written summary of IAM activity (Step 2, Part A)
3. **Your Analysis:** Identity risks and Zero Trust concerns YOU identified (Step 2, Part B)
4. **AI Output:** What AI concluded about the suspicious activity
5. **Critical Evaluation:** Compare your analysis with AI output (Step 3 framework)
6. **SecurityX Assessment:** Your final judgment on risk and human approval needs

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

- Governance framework
- Risk management
- Human-in-the-loop
- Auditability
- Accountability
- AI hallucination / confabulation
- Over-reliance on automation
- Data minimisation
- Decision-support vs decision-making
- Bias in AI models
- Transparency
- Explainability (XAI)

### What to Submit

**This task evaluates your entire lab experience:**

1. **AI Risk Assessment:** What risks did you observe when using AI across all tasks?
2. **Hallucination Examples:** Did AI make unsupported claims? (cite specific examples from Tasks 1-3)
3. **Critical Evaluation:** Where did AI excel? Where did it fail? Use Step 3 framework
4. **Governance Controls:** What policies would you implement for AI use in SOC?
5. **Human-in-the-Loop:** When should humans override AI? (use examples from your tasks)
6. **SecurityX Assessment:** Professional recommendations for responsible AI governance

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
