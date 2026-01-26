# Developer Lab 3: Orchestrating and Automating DynamoDB-Based Workflows

## Purpose

> In this lab, you will extend the work completed in **Developer Lab 2** by creating an **event-driven architecture** that orchestrates and automates workflows. You will learn to connect multiple AWS services (DynamoDB, SNS, SQS, Lambda, and Step Functions) to build a complete serverless processing pipeline. This lab uses a combination of **AWS CLI** (via CloudShell) for infrastructure setup and **AWS Management Console** for service configuration.

**ℹ️Important:** This lab is designed for **AWS Academy Learner Lab**. Remember to work within your lab session time limit and stop the lab when finished to preserve your budget.

---

## Step-by-step guide for student

### Step 1: Ensure that you have studied all the content from Module 3 and completed Developer Lab 2.

<details markdown="1">
<summary>👉Click to expand the step by step guide</summary>

> To complete this lab, you should be familiar with the following AWS concepts.

**Required Knowledge:**

- Completion of Developer Lab 2 (DynamoDB tables and items)
- AWS Management Console navigation and AWS CloudShell
- Amazon DynamoDB (tables, items, update operations)
- Amazon SNS (topics, message publishing)
- Amazon SQS (queue creation, dead-letter queues, subscriptions)
- AWS Lambda (function creation, triggers, Python programming)
- AWS Step Functions (state machines, workflow execution)
- JSON format and data structures
- AWS Identity and Access Management (IAM) roles and permissions

**Prerequisite:**

Before starting this lab, you must have successfully completed **Developer Lab 2**, including:

- Creating DynamoDB table(s)
- Defining partition and sort keys
- Inserting items into the table(s)
- Understanding basic DynamoDB operations

**Note:** No new DynamoDB tables are created in this lab.

</details>

---

### Step 2: Lab Tasks

## Task 1: Verify and Update Existing DynamoDB Data - 5 Points

> You will confirm access to the DynamoDB table created in Developer Lab 2 and perform updates on existing items using the AWS Management Console.

<details markdown="1">
<summary>👉Click to expand the Task 1 Guide</summary>

### 1. Access AWS Management Console

1. Log in to **AWS Academy** and navigate to your course.
2. Click on **Modules** → **Learner Lab** → **Start Lab**.
3. Wait for the lab status indicator to turn green (⚫ → 🟢).
4. Click **AWS** to open the AWS Management Console in a new tab.

**Note:** AWS Academy Learner Lab typically operates in the **us-east-1** region.

### Task 1.1: View Your DynamoDB Table

1. In the AWS Console search bar at the top, type **DynamoDB** and select **DynamoDB** from the results.

2. In the left navigation pane, click **Tables**.

3. You should see **both** tables you created in Developer Lab 2: `CafeMenu` and `CafeProducts`.

4. Click on **`CafeMenu`** to view its details.
   - Table name
   - **Table details** section showing partition key and sort key 
   - Table status (should show as "Active")

### Task 1.2: View an Existing Item

1. While viewing your `CafeMenu` table details, click on the **Explore table items** button (or **Actions** → **Explore items**).

2. You should see a list of items in your table displayed in the items view.

3. Locate the item with `category` = `beverage` and `product_id` = `BEV-001`.

4. Click on the item to view its full details and note the current **price** attribute value.

### Task 1.3: Update Items in Both Tables

**Step 1: Update CafeMenu Table**

1. With the beverage item (`category` = `beverage`, `product_id` = `BEV-001`) selected, click the **Edit item** button.

2. Locate the **price** attribute.

3. Change the price value to **2.75**

4. Click **Save & Close** at the bottom of the dialog.

5. Verify the update, the price should now show **2.75**

**Step 2: Update CafeProducts Table**

1. Navigate back to **DynamoDB** → **Tables** in the left navigation.

2. Click on **`CafeProducts`** to view its details.

3. Click on the **Explore table items** button.

4. Locate the item with `product_name` = `tea`.

5. Click on the item, edit the price.

6. Locate the **price_cents** attribute.

7. Change the value to **350**

8. Click **Save & Close**.

9. Verify the update - price_cents should now show **350**

### Expected Results
- DynamoDB Tables page displays both tables from Developer Lab 2 (`CafeMenu` and `CafeProducts`)
- Table overview shows table structure with key schema and "Active" status
- Items view successfully displays existing items in both tables
- Edit operations update the price attributes successfully
- Updated items show the new price values (CafeMenu: 2.75, CafeProducts: 350)

### Submission: Required Screenshots for Task 1
- **Screenshot 1 (Task 1.1):** DynamoDB table overview showing `CafeMenu` table with key schema and Active status
- **Screenshot 2 (Task 1.3 - Step 1):** Items view showing the updated beverage item in `CafeMenu` with price = 2.75
- **Screenshot 3 (Task 1.3 - Step 2):** Items view showing the updated tea item in `CafeProducts` with price_cents = 350

</details>

---

## Task 2: Publish DynamoDB Update Events Using Amazon SNS - 5 Points

> You will create an Amazon SNS topic and publish messages containing information about DynamoDB updates.

<details markdown="1">
<summary>👉Click to expand Task 2</summary>

### Task 2.1: Create an SNS Topic

1. In AWS CloudShell, create an SNS topic:

```bash
aws sns create-topic --name DynamoDBUpdateEvents
```
2. Note the `TopicArn` from the output. It will look like:
   ```
   arn:aws:sns:us-east-1:123456789012:DynamoDBUpdateEvents
   ```
3. Store the ARN in an environment variable for easy reference:
```bash
export TOPIC_ARN=$(aws sns list-topics --query 'Topics[?contains(TopicArn, `DynamoDBUpdateEvents`)].TopicArn' --output text)
echo $TOPIC_ARN
```

### Task 2.2: Publish an Update Event

1. Create a JSON message that describes the update you performed in Task 1.
2. Publish a message to the SNS topic:
```bash
aws sns publish \
    --topic-arn $TOPIC_ARN \
    --subject "DynamoDB Item Updated" \
    --message '{
        "table": "CafeMenu",
        "partition_key": "beverage",
        "sort_key": "BEV-001",
        "updated_attribute": "price",
        "new_value": "2.75",
        "timestamp": "2026-01-23T10:30:00Z"
    }'
```

**Note:** Adjust the message content to match your actual table name and the item you updated.

> Review the output to confirm the message was published. You should see a `MessageId` in the response.

### Task 2.3: Verify the Topic Exists

1. List all SNS topics to verify your topic was created:
```bash
aws sns list-topics
```
2. Get topic attributes:
```bash
aws sns get-topic-attributes --topic-arn $TOPIC_ARN
```
### Expected Results
- `create-topic` command returns a TopicArn
- `publish` command returns a MessageId
- `list-topics` command shows `DynamoDBUpdateEvents` in the list
- Message is successfully published to the SNS topic

### Submission: Required Screenshots for Task 2
- **Screenshot 1 (Task 2.1 or 2.3):** CloudShell output showing the `aws sns list-topics` command with your `DynamoDBUpdateEvents` topic visible in the list
- **Screenshot 2 (Task 2.2):** CloudShell output showing the `aws sns publish` command execution with the MessageId confirming successful message publication

</details>

---

## Task 3: Queue and Process Events Using Amazon SQS and AWS Lambda - 5 Points

> You will create an SQS queue, subscribe it to the SNS topic, and create a Lambda function to process messages.

<details markdown="1">
<summary>👉Click to expand Task 3</summary>

### Task 3.1: Create SQS Queues

1. Create a dead-letter queue (DLQ) first:

```bash
aws sqs create-queue --queue-name DynamoDBUpdatesDLQ
```
2. Get the DLQ ARN:

```bash
export DLQ_URL=$(aws sqs get-queue-url --queue-name DynamoDBUpdatesDLQ --query 'QueueUrl' --output text)
export DLQ_ARN=$(aws sqs get-queue-attributes --queue-url $DLQ_URL --attribute-names QueueArn --query 'Attributes.QueueArn' --output text)
echo $DLQ_ARN
```
3. Create the main queue with DLQ configuration:

```bash
aws sqs create-queue \
    --queue-name DynamoDBUpdatesQueue \
    --attributes '{
        "RedrivePolicy": "{\"deadLetterTargetArn\":\"'"$DLQ_ARN"'\",\"maxReceiveCount\":\"3\"}"
    }'
```
4. Get the main queue URL and ARN:

```bash
export QUEUE_URL=$(aws sqs get-queue-url --queue-name DynamoDBUpdatesQueue --query 'QueueUrl' --output text)
export QUEUE_ARN=$(aws sqs get-queue-attributes --queue-url $QUEUE_URL --attribute-names QueueArn --query 'Attributes.QueueArn' --output text)
echo "Queue URL: $QUEUE_URL"
echo "Queue ARN: $QUEUE_ARN"
```

### Task 3.2: Subscribe SQS Queue to SNS Topic

1. Create a queue policy to allow SNS to send messages:

```bash
aws sqs set-queue-attributes \
    --queue-url $QUEUE_URL \
    --attributes '{
        "Policy": "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Effect\":\"Allow\",\"Principal\":{\"Service\":\"sns.amazonaws.com\"},\"Action\":\"sqs:SendMessage\",\"Resource\":\"'"$QUEUE_ARN"'\",\"Condition\":{\"ArnEquals\":{\"aws:SourceArn\":\"'"$TOPIC_ARN"'\"}}}]}"
    }'
```
2. Subscribe the queue to the SNS topic:

```bash
aws sns subscribe \
    --topic-arn $TOPIC_ARN \
    --protocol sqs \
    --notification-endpoint $QUEUE_ARN
```
3. Verify the subscription:

```bash
aws sns list-subscriptions-by-topic --topic-arn $TOPIC_ARN
```

### Task 3.3: Test the Integration

1. Publish another test message to the SNS topic:

```bash
aws sns publish \
    --topic-arn $TOPIC_ARN \
    --subject "Test Event" \
    --message '{"test": "SNS to SQS integration", "timestamp": "2026-01-23T11:00:00Z"}'
```
2. Check if the message arrived in the SQS queue:

```bash
aws sqs receive-message --queue-url $QUEUE_URL
```

You should see the test message in the output, confirming that the SNS-to-SQS integration is working correctly.

### Task 3.4: Create a Lambda Function 

Due to IAM restrictions in AWS Academy Learner Lab, the easiest way to create a Lambda function is through the AWS Management Console. The console will automatically create the required execution role for you.

**📚 Understanding IAM Restrictions:**

**In AWS Academy Learner Lab:**

- You cannot create or modify IAM roles using AWS CLI or SDK
- The `LabRole` (which you have access to) cannot be assumed by Lambda or Step Functions
- However, the AWS Console has special permissions that allow it to create Lambda execution roles automatically

**In a Real-World AWS Environment:**

- You would have full IAM permissions (if you're an admin or have appropriate policies)
- You could create Lambda execution roles using AWS CLI, CloudFormation, Terraform, or other IaC tools
- You would define explicit IAM policies for least-privilege access
- Enterprise environments often have pre-created roles that development teams can attach to their Lambda functions
- DevOps teams typically automate Lambda function creation with infrastructure-as-code, including role creation

**Understanding Lambda Execution Roles:**

Every Lambda function needs an **execution role**. This is an IAM role that grants the Lambda function permissions to:
- Write logs to CloudWatch Logs (so you can see what the function is doing)
- Read messages from SQS queues (in this case, to process messages from `DynamoDBUpdatesQueue`)
- Access other AWS services like DynamoDB, S3, or other APIs as needed

Think of it as giving your Lambda function an "identity" and "permissions" to interact with other AWS services on your behalf. Without this role, Lambda cannot execute your code or access any AWS resources.

**Steps to Create Lambda Function via Console:**

1. In the AWS Console, navigate to the **Lambda** service (search for "Lambda" in the services search bar)

2. Click **Create function**

3. Choose **Author from scratch**

4. Configure the function:
    - **Function name:** `ProcessDynamoDBUpdates`
    - **Runtime:** Select **Python 3.11**

5. **Important - Understanding Permissions:**

    - Under **Permissions**, expand the section
    - Change the default selection to **"Use an existing role"**
    - From the **Existing role** dropdown, select **LabRole**
    - This role has the necessary permissions for Lambda to:
        - Write logs to CloudWatch Logs
        - Execute the function
        - Access other AWS services

6. Click **Create function**

    - AWS will create the function using the existing role
    - You'll see a success message when the function is created

7. **Update the Function Code:**

    - In the code editor, you'll see a default `lambda_function.py` file with placeholder code (a simple "Hello from Lambda!" function)
    - **Select all the code** (Ctrl+A or Cmd+A) and **delete it**
    - **Copy and paste** the code below into the editor
    - Click the **Deploy** button to save your changes
    - Wait for the "Successfully updated the function ProcessDynamoDBUpdates" confirmation message

**Lambda Function Code:**

```python
import json
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    logger.info("Processing messages")
    
    for record in event['Records']:
        # Handle both SQS (body is string) and Step Functions (body is dict)
        if isinstance(record['body'], str):
            # SQS format: body is a JSON string containing SNS message
            sns_message = json.loads(record['body'])
            message_content = json.loads(sns_message['Message'])
        else:
            # Step Functions format: body is already a dict
            message_content = json.loads(record['body']['Message'])
        
        logger.info(f"Received update event: {json.dumps(message_content)}")
        
        # Process the message
        if 'table' in message_content:
            logger.info(f"Table: {message_content['table']}")
        if 'updated_attribute' in message_content:
            logger.info(f"Updated attribute: {message_content['updated_attribute']}")
    
    return {
        'statusCode': 200,
        'body': json.dumps('Successfully processed messages')
    }
```
8. **Verify Deployment:**
   
    - You should see a message: "Successfully updated the function ProcessDynamoDBUpdates"
    - The function is now ready to process messages

**What Just Happened?**

You've created a Lambda function that can:

- Receive events from SQS containing SNS messages
- Parse the JSON data from those messages
- Log information about DynamoDB updates
- The execution role you created gives it permission to write these logs to CloudWatch

In Task 3.5, you'll connect this Lambda function to your SQS queue so it automatically processes messages.

### Task 3.5: Configure Lambda to Process SQS Messages

1. While viewing your Lambda function (`ProcessDynamoDBUpdates`), get to the **Function overview** section.

2. Click **Add trigger**.

3. In the trigger configuration:
    - **Select a source:** Choose **SQS**
    - **SQS queue:** Select `DynamoDBUpdatesQueue` from the dropdown
    - **Batch size:** Enter `10`
    - Leave other settings as default

4. Click **Add**.

5. You should see the SQS trigger appear in the Function overview diagram.

6. **Test the Lambda function:**

    - Navigate to **SNS** in the console (search for "SNS")
    - Click **Topics** in the left navigation
    - Click on `DynamoDBUpdateEvents`
    - Click **Publish message**
    - **Subject:** `Lambda Test`
    - **Message body:**
   ```json
   {
       "table": "CafeMenu",
       "action": "update",
       "timestamp": "2026-01-26T11:30:00Z"
   }
   ```
   - Click **Publish message**

7. **View CloudWatch Logs:**

    - In the AWS Console search bar, type **CloudWatch** and select it
    - Click **Logs** in the left navigation, then click the **Log Management**. You will see Log Groups.
    - Click on `/aws/lambda/ProcessDynamoDBUpdates`
    - Click on the most recent log stream
    - You should see log entries showing your Lambda function processed the message

### Expected Results
- Both SQS queues (main and DLQ) are created successfully
- SNS subscription is active (status: "Confirmed")
- Test message sent to SNS appears in SQS queue
- Lambda function is created with SQS trigger configured
- CloudWatch Logs show Lambda processing messages from SQS
- Log entries display the message content

### Submission: Required Screenshots for Task 3
- **Screenshot 1 (Task 3.1):** CloudShell output showing SQS queue creation with queue URL and ARN
- **Screenshot 2 (Task 3.5):** Lambda function overview showing the SQS trigger
- **Screenshot 3 (Task 3.5):** CloudWatch Logs showing Lambda function processing messages

</details>

---

## Task 4: Create Workflow Orchestration Using AWS Step Functions - 5 Points

> You will create an AWS Step Functions state machine to orchestrate the processing workflow.

<details markdown="1">
<summary>👉Click to expand Task 4</summary>

### Task 4.1: Create a Step Functions State Machine

1. In the AWS Console search bar, type **Step Functions** and select **Step Functions** from the results.

2. If this is your first time using Step Functions, you'll see a landing page with a **Get started** button, click it. Otherwise, click **Create state machine**.

3. You'll see the workflow designer with three tabs at the top: **Design**, **Code**, and **Config**.

4. Click the **Code** tab to write your workflow in JSON.

5. In the code editor, replace the default JSON definition with the following:

```json
{
  "Comment": "Process DynamoDB update events",
  "StartAt": "ProcessUpdate",
  "States": {
    "ProcessUpdate": {
      "Type": "Task",
      "Resource": "arn:aws:states:::lambda:invoke",
      "Parameters": {
        "FunctionName": "ProcessDynamoDBUpdates",
        "Payload": {
          "Records": [
            {
              "body.$": "$.message"
            }
          ]
        }
      },
      "End": true
    }
  }
}
```
6. Click the **Config** tab at the top.
7. Configure settings:
    - **State machine name:** Enter `DynamoDBUpdateWorkflow`
    - **Type:** Select **Standard** 
    - **Permissions:** Select **Choose an existing role**
    - **Existing role:** Select **LabRole**
    - Leave other settings as default
8. Click the **Create** button at the top right.

### Task 4.2: Execute the Workflow

1. On the state machine details page, click **Start execution**.

2. In the execution input, enter the following JSON (copy it exactly as shown):

```json
{
  "message": "{\"Message\": \"{\\\"table\\\": \\\"CafeMenu\\\", \\\"action\\\": \\\"update\\\", \\\"partition_key\\\": \\\"beverage\\\", \\\"sort_key\\\": \\\"BEV-001\\\"}\"}"
}
```
3. Click **Start execution**.
4. You'll be taken to the execution details page. Monitor the execution:
    - The **Graph view** will show the workflow progress
    - Wait for the status to show **Succeeded** (usually takes a few seconds)

5. Scroll below to see the **Events** to view the execution history.

6. Verify the Lambda function was invoked:
    - Navigate to **CloudWatch** (search for it in the console)
    - Click **Logs** → **Log Management** → **Log groups**
    - Click on `/aws/lambda/ProcessDynamoDBUpdates`
    - Check the latest log stream to confirm the function was called by Step Functions

### Expected Results
- Step Functions state machine is created successfully
- Workflow execution starts and completes with "Succeeded" status
- Graph view shows the workflow progression
- Execution events show Lambda invocation
- CloudWatch Logs confirm Lambda was invoked by Step Functions

### Submission: Required Screenshots for Task 4
- **Screenshot 1 (Task 4.1):** Step Functions state machine page showing `DynamoDBUpdateWorkflow` in the list
- **Screenshot 2 (Task 4.2):** Execution details page showing "Succeeded" status with the graph view
- **Screenshot 3 (Task 4.2):** CloudWatch Logs showing Lambda invocation from Step Functions

</details>

---

### Guidance and feedback
Guidance is available upon requests or via Teams call.

### Evaluation
The evaluation is done based on the number of successfully completed tasks. Check the rubric.  

### Schedule and timing
Check the deadline in Canvas

### Submission
- **Document Submission:** Compile the required screenshots (as outlined at the end of each task) into a single Word document. Ensure each screenshot is clearly labeled to indicate which task it represents. ***Upload the word document to canvas.***
- **Self assessment:** In the submission comment box, provide a self-assessment based on the rubric guide. Clearly state how many points you believe you have earned for this task.  

### Clean Up 

ℹ️ **Delete All Resources:** After completing the lab, be sure to delete all resources from the lab environment to avoid incurring unnecessary charges. Remember that you’ll need these credits for other lab tasks, so use them wisely. 