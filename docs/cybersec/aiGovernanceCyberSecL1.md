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

<details markdown="1" >
<summary><h2 style="display: inline;">🎯 CompTIA SecurityX Alignment</h2></summary>

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

</details>

---

<details markdown="1">
<summary><h2 style="display: inline;">🔐 Lab Setup & Access</h2></summary>

### Video Guide

A short instructional video (link in Canvas) covers: AI Space access, log summarization, governance requirements, and SecurityX-level responses.

### Required Accounts

1. **Hugging Face Account** (free): Sign up at https://huggingface.co/join using your Laurea email
2. **AI Tool Access**: Use ONLY the course-provided AI Space (link in Canvas). Using unauthorized tools = automatic disqualification.

</details>

---

<details markdown="1">
<summary><h2 style="display: inline;">📂 Approved Public Datasets</h2></summary>

> **Requirement:** You must use **at least ONE** dataset from the approved list below.

| Category | Dataset | Description | Use Cases | Link |
|----------|---------|-------------|-----------|------|
| 🌐 **Network & Attack** | **CICIDS** | Canadian Institute for Cybersecurity network intrusion datasets | DDoS detection, network anomalies, intrusion attempts, traffic analysis | https://www.unb.ca/cic/datasets/ |
| 🔑 **Authentication & Insider Threat** | **CERT Insider Threat** | SEI/CMU synthetic insider threat scenarios | Failed logins, privilege escalation, suspicious access patterns, account compromise | https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=508099 |
| 🛡️ **SOC & Network Metadata** | **Security Onion / Zeek** | Real-world SOC sample logs and network metadata | Network monitoring, protocol analysis, connection patterns, metadata investigation | https://github.com/Security-Onion-Solutions/securityonion-sample-data |
| 📧 **Email & Phishing** | **Phishing Email Dataset** | Labeled phishing and legitimate emails | Phishing detection, social engineering analysis, email security patterns | https://www.kaggle.com/datasets/naserabdullahalam/phishing-email-dataset |
| 📧 **Email & Phishing** | **Enron Email Dataset** | Public historical email corpus | Email pattern analysis, communication security research | https://www.cs.cmu.edu/~enron/ |

</details>

---

<details open markdown="1">
<summary><h2 style="display: inline;">⚠️ CRITICAL GOVERNANCE RULE</h2></summary>

> **⛔ AUTOMATIC FAILURE**  
> **Do NOT paste raw log files directly into the AI tool**

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

</details>

---

<details open markdown="1">
<summary><h2 style="display: inline;">🧪 Task Workflow: Step-by-Step Process</h2></summary>

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

Before using AI, write your own professional analysis using this template:

**📝 Your Analysis Template:**

- **Security Assessment:** [HIGH/MEDIUM/LOW RISK] - [Your conclusion]
- **Evidence:** What patterns indicate this? What specific details support your conclusion? What makes this suspicious?
- **Concerns/Gaps:** What information is missing? What assumptions are you making? What needs further investigation?
- **Recommendations:** 1) Immediate action needed? 2) Follow-up investigation steps? 3) Prevention measures?

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

</details>

---

## 📝 Lab Tasks (15 Points Total)

**Task 1: 4 pts  │  Task 2: 4 pts  │  Task 3: 3 pts  │  Task 4: 4 pts**

---

<details markdown="1">
<summary><h2 style="display: inline;">🔹 Task 1: Security Log Analysis (4 pts)</h2></summary>

**🎯 Domain:** Threat Detection & Incident Response

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

</details>

<details markdown="1">
<summary><h2 style="display: inline;">🔹 Task 2: Email & Phishing Analysis (4 pts)</h2></summary>

**🎯 Domain:** Social Engineering & Threat Analysis

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

</details>

<details markdown="1">
<summary><h2 style="display: inline;">🔹 Task 3: Identity & Access Log Analysis (3 pts)</h2></summary>

**🎯 Domain:** Identity, Access & Privilege Management

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

</details>

<details markdown="1">
<summary><h2 style="display: inline;">🔹 Task 4: AI Governance & Risk Evaluation (4 pts)</h2></summary>

**🎯 Domain:** Governance, Risk & Compliance (GRC) + Emerging Technologies

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

</details>

---

<details markdown="1">
<summary><h2 style="display: inline;">✅ Quality Checklist: SecurityX-Level Analysis</h2></summary>

**Use this checklist before submitting each task:**

| Category | Key Questions |
|----------|---------------|
| **🔍 Log Understanding** | What is normal behavior? What patterns are abnormal? What is the baseline? |
| **📊 Evidence Quality** | What evidence supports my conclusions? What information is missing? What assumptions am I making? What is my confidence level? |
| **🤖 AI Evaluation** | Did AI overgenerate or hallucinate? Did AI miss patterns I identified? Would a human SOC analyst agree? Did AI make unsupported assumptions? |
| **⚖️ Governance** | Is human approval required? Is AI appropriate for this decision? Can this be audited? Have I maintained human accountability? |

</details>

---

<details open markdown="1">
<summary><h2 style="display: inline;">📤 Submission Requirements</h2></summary>

**Submit ONE document via Canvas:**
- Format: PDF or Word (.docx)
- File naming: `LastName_FirstName_SecurityX_Lab.pdf`
- Deadline: See Canvas

**Required Content for Each Task (1-4):**

Dataset information (name, link, description) • Human-written summary (5-10 log entries, NOT raw logs) • AI-assisted analysis summary • Critical evaluation (your assessment vs AI) • SecurityX terminology (required count per task) • Professional recommendations

**Overall Requirements:** All 4 tasks completed • SecurityX-level reasoning • Proper dataset citations • Human-in-the-loop governance • Professional formatting • No raw log violations  

</details>

---

<details markdown="1">
<summary><h2 style="display: inline;">📊 Grading Rubric (15 Points Total)</h2></summary>

| Task | Points | Focus |
|:----:|:------:|-------|
| **Task 1** | 4 pts | Security log analysis, SecurityX terminology, critical thinking |
| **Task 2** | 4 pts | Phishing analysis depth, AI evaluation, defense recommendations |
| **Task 3** | 3 pts | IAM risk assessment, Zero Trust application, human approval justification |
| **Task 4** | 4 pts | AI governance understanding, risk assessment, professional judgment |

**High Marks:** SecurityX-level reasoning • Critical AI evaluation • Evidence-based conclusions • Proper governance principles • Correct terminology usage • Actionable recommendations

**Point Deductions:** Raw logs (automatic failure) • Unauthorized AI tools • Uncritical acceptance of AI output • Missing terminology • Lack of professional judgment • Shallow responses • Poor documentation

</details>

---

## 🔑 Final Reminders

> **SecurityX Professional Assessment**
>
> **You ARE evaluated on:** Professional judgment • Governance awareness • Critical thinking about AI limitations • Human accountability
>
> **You are NOT evaluated on:** What AI produces • Volume of data • Technical complexity alone

**Key Principle:** This lab tests your ability to use AI as a tool while maintaining human professional judgment - exactly what SecurityX-level professionals do in real SOC environments.

**Questions?** Contact your instructor via Canvas or during lab hours.
