# Developer Lab 2: Developing NoSQL Solutions and REST APIs

## Purpose

> In this lab, you will build a **serverless backend** for a café application using **Amazon DynamoDB** and **Amazon API Gateway**. You will master NoSQL database design patterns including composite keys and efficient query operations, implement data protection with conditional writes and batch operations, and expose your backend functionality through **REST APIs with mock integrations**. 

**ℹ️Important:** This lab is designed for **AWS Academy Learner Lab**. Remember to work within your lab session time limit and stop the lab when finished to preserve your budget.

---

## Step-by-step guide for student

### Step 1: Ensure that you have studied all the content from Module 2: Building Data-Driven & Scalable Cloud Applications. 

<details markdown="1">
<summary>👉Click to expand the step by step guide</summary>

> To complete this lab, you should be familiar with the following AWS concepts.

**Required Knowledge:**
- AWS CloudShell and AWS CLI commands
- Amazon DynamoDB (tables, items, primary keys, composite keys, query operations)
- Amazon API Gateway (REST APIs, resources, methods, mock integrations)
- AWS Identity and Access Management (IAM)  
- Basic Python programming and JSON format  

</details>

---

### Step 2: Lab Tasks


## Task 1: Exploring DynamoDB Using AWS CloudShell - 3 Points

> You will explore Amazon DynamoDB using **AWS CloudShell**. You will create a DynamoDB table, inspect its structure, and interact with it using the **AWS CLI**.

<details markdown="1">
<summary>👉Click to expand the Task 1 Guide</summary>

### 1. Access AWS CloudShell

1. Log in to **AWS Academy** and navigate to your course.
2. Click on **Modules** → **Learner Lab** → **Start Lab**.
3. Wait for the lab status indicator to turn green (⚫ → 🟢).
4. Click **AWS** to open the AWS Management Console in a new tab.
5. In the AWS Console, click the **CloudShell** icon in the top navigation bar (or search for "CloudShell" in the services search).
6. Wait for the CloudShell environment to initialize (this may take 1-2 minutes on first launch).

**Note:** AWS Academy Learner Lab typically operates in the **us-east-1** region.

Verify the AWS CLI version:

```bash
aws --version
```

## Task 1.1: Create the Backend Data Store (DynamoDB Table) 

> In this task, you will create the **primary data store** for a serverless backend using DynamoDB. 


### Scenario  
You are building a backend for a small café application. Menu items will be stored in DynamoDB.

### Steps

1. Ensure your **AWS Academy Learner Lab** session is running (green indicator).

2. Access **AWS CloudShell**:
   - Click **AWS** to open the AWS Management Console
   - In the console, click the **CloudShell** icon in the top navigation bar
   - Wait for CloudShell to initialize (may take 1-2 minutes)

3. In CloudShell, create a file named `mytable.py` using one of these methods:

  **Using nano editor (easier for beginners):**

   ```bash
   nano mytable.py
   ```
   Then paste the code below, press `Ctrl+O` to save, `Enter` to confirm, and `Ctrl+X` to exit.

4. Code to add to the file:

```python
import boto3

dynamodb = boto3.resource('dynamodb', region_name='us-east-1')

table = dynamodb.create_table(
    TableName='CafeProducts',
    KeySchema=[
        {'AttributeName': 'product_name', 'KeyType': 'HASH'}
    ],
    AttributeDefinitions=[
        {'AttributeName': 'product_name', 'AttributeType': 'S'}
    ],
    BillingMode='PAY_PER_REQUEST'
)

table.wait_until_exists()
print("CafeProducts table created")

```

5. Save and close the file:
   - If using **nano**: Press `Ctrl+O` (to save), `Enter` (to confirm), then `Ctrl+X` (to exit)


6. Run the script in CloudShell:

```bash
python3 mytable.py
```

   **Note:** You may see a Python version warning, you can ignore it.

7. Verify the table exists using AWS CLI:

```bash
aws dynamodb list-tables
```

8. Alternatively, verify in the **AWS Console** → Navigate to **DynamoDB** → **Tables** to see `CafeProducts` listed.

### Expected Results
- CloudShell displays: "CafeProducts table created"
- AWS CLI list-tables command shows `CafeProducts` in the output
- DynamoDB console shows the `CafeProducts` table with status "Active"
- Table has partition key: `product_name` (String type)

### Submission: Required Screenshots for Task 1
- Screenshot of CloudShell showing script execution with "CafeProducts table created"

</details>

---
## Task 2: Working with Composite Keys and Query Operations - 5 Points

> You will create a table with a composite key (partition key + sort key) and practice Query vs Scan operations, which are fundamental NoSQL concepts.

<details markdown="1">
<summary>👉 Click to expand Task 2</summary>

### Scenario
The café wants to organize products by category and track them with unique IDs. You'll use a composite key design pattern commonly used in NoSQL databases.

### Part A: Create Table with Composite Key

1. In **AWS CloudShell**, create a file named `create_menu_table.py`:

```bash
nano create_menu_table.py
```

2. Add the following code:

```python
import boto3

dynamodb = boto3.resource('dynamodb', region_name='us-east-1')

table = dynamodb.create_table(
    TableName='CafeMenu',
    KeySchema=[
        {'AttributeName': 'category', 'KeyType': 'HASH'},    # Partition key
        {'AttributeName': 'product_id', 'KeyType': 'RANGE'}  # Sort key
    ],
    AttributeDefinitions=[
        {'AttributeName': 'category', 'AttributeType': 'S'},
        {'AttributeName': 'product_id', 'AttributeType': 'S'}
    ],
    BillingMode='PAY_PER_REQUEST'
)

table.wait_until_exists()
print("CafeMenu table created with composite key")
print(f"Partition Key: category")
print(f"Sort Key: product_id")
```

3. Run the script:

```bash
python3 create_menu_table.py
```

4. Verify in the console:
   - Navigate to **DynamoDB** → **Tables** → **CafeMenu**
   - Click **View table details** → Note the Key schema shows both partition and sort keys

### Part B: Load Data with Batch Operations

5. Create a file to load multiple items:

```bash
nano load_menu_data.py
```

6. Add code:

```python
import boto3
from decimal import Decimal

table = boto3.resource('dynamodb', region_name='us-east-1').Table('CafeMenu')

items = [
    {'category': 'beverage', 'product_id': 'BEV-001', 'name': 'Espresso', 'price': Decimal('2.50')},
    {'category': 'beverage', 'product_id': 'BEV-002', 'name': 'Latte', 'price': Decimal('3.50')},
    {'category': 'beverage', 'product_id': 'BEV-003', 'name': 'Cappuccino', 'price': Decimal('3.25')},
    {'category': 'food', 'product_id': 'FOOD-001', 'name': 'Croissant', 'price': Decimal('2.75')},
    {'category': 'food', 'product_id': 'FOOD-002', 'name': 'Muffin', 'price': Decimal('2.50')},
    {'category': 'food', 'product_id': 'FOOD-003', 'name': 'Bagel', 'price': Decimal('2.25')},
]

with table.batch_writer() as batch:
    for item in items:
        batch.put_item(Item=item)

print(f"Successfully loaded {len(items)} items into CafeMenu")
```

7. Run the batch load:

```bash
python3 load_menu_data.py
```

### Part C: Query vs Scan Operations

8. Create a file to query beverages only:

```bash
nano query_category.py
```

9. Add query code:

```python
import boto3

table = boto3.resource('dynamodb', region_name='us-east-1').Table('CafeMenu')

# Query all beverages (efficient - uses partition key)
response = table.query(
    KeyConditionExpression='category = :cat',
    ExpressionAttributeValues={
        ':cat': 'beverage'
    }
)

print(f"Query Result: Found {response['Count']} beverages")
for item in response['Items']:
    print(f"  {item['product_id']}: {item['name']} - ${item['price']:.2f}")

print(f"\nConsumed Capacity: {response['ResponseMetadata']['HTTPStatusCode']}")
```

10. Run the query:

```bash
python3 query_category.py
```

11. Now create a scan operation for comparison:

```bash
nano scan_table.py
```

12. Add scan code:

```python
import boto3

table = boto3.resource('dynamodb', region_name='us-east-1').Table('CafeMenu')

# Scan entire table (less efficient - reads all items)
response = table.scan()

print(f"Scan Result: Found {response['Count']} items total")
for item in response['Items']:
    print(f"  {item['category']}/{item['product_id']}: {item['name']} - ${item['price']:.2f}")

print(f"\nScanned Count: {response['ScannedCount']}")
```

13. Run the scan:

```bash
python3 scan_table.py
```

### Part D: Query with Sort Key Condition

14. Create a more specific query:

```bash
nano query_specific.py
```

15. Add code to query with both keys:

```python
import boto3

table = boto3.resource('dynamodb', region_name='us-east-1').Table('CafeMenu')

# Query beverages starting with "BEV-001"
response = table.query(
    KeyConditionExpression='category = :cat AND begins_with(product_id, :prefix)',
    ExpressionAttributeValues={
        ':cat': 'beverage',
        ':prefix': 'BEV-00'
    }
)

print(f"Query with sort key condition: Found {response['Count']} items")
for item in response['Items']:
    print(f"  {item['product_id']}: {item['name']}")
```

16. Run:

```bash
python3 query_specific.py
```

### Part E: Understanding the Differences

17. Use AWS CLI to compare operations:

Query (efficient - targets partition):
```bash
aws dynamodb query \
    --table-name CafeMenu \
    --key-condition-expression "category = :cat" \
    --expression-attribute-values '{":cat":{"S":"food"}}'
```

Scan (less efficient - reads entire table):
```bash
aws dynamodb scan --table-name CafeMenu
```

### Expected Results
- **create_menu_table.py:** Displays "CafeMenu table created with composite key" with partition and sort key names
- **load_menu_data.py:** Shows "Successfully loaded 6 items into CafeMenu"
- **query_category.py:** Returns 3 beverage items (Espresso, Latte, Cappuccino) with their prices
- **scan_table.py:** Returns all 6 items (3 beverages + 3 foods) from the table
- **query_specific.py:** Returns beverage items matching the prefix condition
- DynamoDB console shows CafeMenu table with composite key schema (category + product_id)

### Analysis Questions (You don't need to write them down, just analyse to check your understanding):

1. **Composite Key Design**: Why is using `category` as partition key and `product_id` as sort key a good design?

2. **Query vs Scan**: 
   - Which operation is more efficient for retrieving all beverages? Why?
   - When would you use Scan instead of Query?

3. **Partition Key Distribution**: What could happen if all products had the same category?

### Submission: Required Screenshots for Task 2
- **Screenshot 1:** DynamoDB console showing CafeMenu table details with composite key schema (partition key + sort key)
- **Screenshot 2:** CloudShell output showing both query_category.py and scan_table.py results side-by-side

</details>

--- 
## Task 3: Protect Backend Data Using Conditional Writes - 4 Points

> In a real backend, accidental overwrites can corrupt data. This task uses `ConditionExpression` to protect backend data integrity.

<details markdown="1">
<summary>👉 Click to expand Task 3</summary>

### Steps

1. In **AWS CloudShell**, create a new file named `conditional_put.py`:

```bash
nano conditional_put.py
```

   (Or use `vi conditional_put.py` if you prefer vi editor)

2. Add the following code:

```python
import boto3
from botocore.exceptions import ClientError

table = boto3.resource('dynamodb', region_name='us-east-1').Table('CafeProducts')

try:
    table.put_item(
        Item={
            'product_name': 'tea',
            'price_cents': 300
        },
        ConditionExpression='attribute_not_exists(product_name)'
    )
    print("Item inserted successfully")
except ClientError as e:
    if e.response['Error']['Code'] == 'ConditionalCheckFailedException':
        print("Item already exists! Insert prevented.")
    else:
        raise
```

3. Save the file.

4. Run the script the first time in CloudShell:

```bash
python3 conditional_put.py
```

5. Run the script a second time and observe the conditional check failure.

### Expected Result
- **First execution:** Succeeds and inserts the item
- **Second execution:** Fails with `ConditionalCheckFailedException` — insert is prevented

### Submission: Required Screenshots for Task 3
- Screenshot of CloudShell showing successful conditional insert (first run)
- Screenshot of CloudShell showing the conditional failure error message (second run)

</details>

---
## Task 4: Load Multiple Backend Records Using Batch Operations - 4 Points

> Batch operations are commonly used to initialize or update backend data. This task demonstrates efficient bulk loading into DynamoDB.

<details markdown="1">
<summary>👉 Click to expand Task 4</summary>

### Steps

1. In **AWS CloudShell**, create a file named `batch_load.py`:

```bash
nano batch_load.py
```

   (Or use `vi batch_load.py` if you prefer vi editor)

2. Add the following code:

```python
import boto3

table = boto3.resource('dynamodb', region_name='us-east-1').Table('CafeProducts')

items = [
    {'product_name': 'muffin', 'price_cents': 250},
    {'product_name': 'cookie', 'price_cents': 200},
    {'product_name': 'sandwich', 'price_cents': 550}
]

with table.batch_writer() as batch:
    for item in items:
        batch.put_item(Item=item)

print("Batch load completed")
```

3. Save the file.

4. Run the script in CloudShell:

```bash
python3 batch_load.py
```

5. Verify the items were added:
   - Option 1: Use AWS CLI in CloudShell:
   ```bash
   aws dynamodb scan --table-name CafeProducts
   ```
   - Option 2: Check the DynamoDB console → **Tables** → **CafeProducts** → **Explore table items**

### Expected Results
- CloudShell displays: "Batch load completed"
- AWS CLI scan shows all items including: muffin (250), cookie (200), sandwich (550), and any previously added items like tea (300)
- DynamoDB console shows at least 4 items in the CafeProducts table
- All items have `product_name` and `price_cents` attributes

### Submission: Required Screenshots for Task 4
- Screenshot of CloudShell showing batch script execution with "Batch load completed"
- Screenshot of DynamoDB console showing multiple items in the table

</details>

---
## Task 5: Expose the Backend Using Mock REST APIs - 4 Points

> In this task, you will expose backend functionality using Amazon API Gateway with **mock integrations**. This completes the serverless backend architecture.

<details markdown="1">
<summary>👉 Click to expand Task 5</summary>

### Overview

You will create **3 API endpoints** (resources + methods):

| Endpoint | Method | Returns |
|----------|--------|---------|
| `/products` | GET | List of café products |
| `/products/special` | GET | Featured product |
| `/report` | POST | Confirmation message |

---

### Part 1: Create the API

1. In AWS Console, search for and open **API Gateway**
2. Click **Create API**
3. Find **REST API** (the one that says "Develop a REST API...") → Click **Build**
4. Select **New API**
5. **API name**: `CafeBackendAPI`
6. **Endpoint Type**: **Regional**
7. Click **Create API**

You'll see an empty API with just a root `/` resource.

---

### Part 2: Build First Endpoint - GET /products

**Step 1: Create `/products` resource**

1. Click the blue **Create resource** button (you'll see it in the Resources panel)
2. In the form:
   - **Resource name**: Type `products`
   - **Resource path**: Will auto-fill as `/products`
3. Click **Create resource** button at the bottom

You'll see `/products` appear in the left sidebar under `/`.

**Step 2: Add GET method**

1. Ensure `/products` is highlighted in the left sidebar (click it if not)
2. Click the blue **Create method** button
3. In the method setup form:
   - **Method type**: Select **GET** from dropdown
   - **Integration type**: Select **Mock**
4. Click **Create method** button at the bottom

**Step 3: Configure mock response**

1. After creating the method, you'll see the method execution flow diagram
2. Scroll down and click **Integration response** to expand it
3. Click the **Edit** button
4. The **Mapping templates** section will be visible
5. You'll see **Content type** is already set to `application/json`
6. Scroll down to the **Template body** editor (large text box)
7. Click in the Template body editor and paste this JSON:

```json
{
  "products": [
    {"name": "coffee", "price": 3.50},
    {"name": "tea", "price": 3.00}
  ]
}
```

8. Scroll down and click **Save** button

✅ **First endpoint complete!**

**What you've accomplished:**
- Created a `/products` resource in your API
- Added a GET method that uses Mock integration (no backend needed)
- Configured it to return a JSON response with coffee and tea products
- When someone calls `GET /products`, they'll receive the mock product list

Your API now has 1 working endpoint. You should see in the left sidebar:
- `/` (root)
  - `/products` with a GET method

---

### Part 3: Build Second Endpoint - GET /products/special

**Step 1: Create nested resource**

1. In the left sidebar, click `/products` (important: must select the parent first)
2. Click **Create resource** button
3. In the form:
   - **Resource name**: Type `special`
   - **Resource path**: Will show `/special` (creates `/products/special`)
4. Click **Create resource** at the bottom

**Step 2: Add GET method**

1. Ensure `/products/special` is highlighted in the left sidebar
2. Click **Create method** button
3. In the form:
   - **Method type**: Select **GET**
   - **Integration type**: Select **Mock**
4. Click **Create method** at the bottom

**Step 3: Configure mock response**

1. Scroll down to **Integration response** → Click to expand
2. Click **Edit** button
3. The **Content type** is already set to `application/json`
4. In the **Template body** editor, paste this JSON:

```json
{
  "featured": "muffin",
  "price": 2.50
}
```

5. Click **Save**

✅ **Second endpoint complete!**

**What you've accomplished:**
- Created a nested `/products/special` resource (child of `/products`)
- Added a GET method with Mock integration
- Configured it to return JSON with the featured café item (muffin)
- When someone calls `GET /products/special`, they'll get the featured product

Your API now has 2 working endpoints. You should see in the left sidebar:
- `/` (root)
  - `/products` with a GET method
    - `/special` with a GET method

---

### Part 4: Build Third Endpoint - POST /report

**Step 1: Create `/report` resource**

1. In the left sidebar, click **/** (the root) at the very top
2. Click **Create resource** button
3. In the form:
   - **Resource name**: Type `report`
   - **Resource path**: Will show `/report`
4. Click **Create resource** at the bottom

**Step 2: Add POST method**

1. Ensure `/report` is highlighted in the left sidebar
2. Click **Create method** button
3. In the form:
   - **Method type**: Select **POST** from dropdown
   - **Integration type**: Select **Mock**
4. Click **Create method** at the bottom

**Step 3: Configure mock response**

1. Scroll to **Integration response** → Click to expand
2. Click **Edit** button  
3. The **Content type** is already `application/json`
4. In the **Template body** editor, paste this JSON:

```json
{
  "status": "Report generated",
  "timestamp": "2026-01-23"
}
```

5. Click **Save**

✅ **All three endpoints complete!**

**What you've accomplished:**
- Created a `/report` resource at the root level
- Added a POST method (not GET this time!) with Mock integration
- Configured it to return a confirmation JSON with status and timestamp
- When someone calls `POST /report`, they'll receive the confirmation message

Your complete API structure in the left sidebar should now show:
- `/` (root)
  - `/products` with a GET method
    - `/special` with a GET method
  - `/report` with a POST method

**Next step:** Deploy your API to make it accessible via a URL!

---

### Part 5: Deploy the API

**Important:** Make sure all 3 resources and their methods are created before deploying.

1. Look for the orange **Deploy API** button (top right of the screen)
2. Click **Deploy API**
3. In the deployment dialog:
   - **Stage**: Select **\*New Stage\*** from dropdown
   - **Stage name**: Type `dev`
   - **Stage description**: Leave blank (optional)
4. Click **Deploy** button

✅ After deployment, you'll see:
- A success message
- **Invoke URL** at the top (e.g., `https://abc123xyz.execute-api.us-east-1.amazonaws.com/dev`)

**Note:** The Invoke URL is only accessible during your lab session. Once you end the lab, the URL will no longer work.

---

### Part 6: Test Your API

**Test in AWS Console:**

1. Navigate to **API Gateway** → **APIs** → **CafeBackendAPI** → **Resources**
2. In the left sidebar, click the **GET** method under `/products`
3. In the main panel, click the **Test** tab
4. Scroll down and click the blue **Test** button
5. Check the response (scroll down):
   - **Status**: Should show `200`
   - **Response body**: Should display your coffee/tea JSON

**Repeat for other endpoints:**
- Click **GET** method under `/products/special` → **Test** tab → **Test** button
- Click **POST** method under `/report` → **Test** tab → **Test** button

All three should return status `200` with their configured mock data.

---

### Part 7: Test Your API with the Invoke URL (Optional but Recommended)

Now test your API from outside the AWS Console using the Invoke URL!

**How to Find Your Invoke URL:**

If you need to retrieve your Invoke URL again:
1. Navigate to **API Gateway** >> **APIs** in AWS Console
2. Click on your API (**CafeBackendAPI**)
3. In the left sidebar, click **Stages**
4. Click on **dev** stage
5. On the right, you'll see the **Invoke URL**, you can copy it 

**Test GET endpoints in Web Browser**

1. Copy your Invoke URL (e.g., `https://abc123xyz.execute-api.us-east-1.amazonaws.com/dev`)
2. **Construct the full endpoint URLs** by adding your resource paths to the Invoke URL:
   - Your Invoke URL ends with `/dev` (your stage name)
   - Add `/products` after `/dev` to test the products endpoint
   - Add `/products/special` after `/dev` to test the special endpoint
   
3. Open a new browser tab and test each endpoint:
   - **For products list:** `https://YOUR-INVOKE-URL/dev/products`
     - Example: `https://1embsk0sz8.execute-api.us-east-1.amazonaws.com/dev/products`
   - **For special product:** `https://YOUR-INVOKE-URL/dev/products/special`
     - Example: `https://1embsk0sz8.execute-api.us-east-1.amazonaws.com/dev/products/special`

4. You should see the JSON responses directly in your browser

**What's happening:**
- When you access these URLs, API Gateway receives your request
- It routes the request to the matching resource (`/products` or `/products/special`)
- The Mock integration executes and returns the JSON you configured
- Your browser displays the raw JSON response


### Expected Results
- **Console Testing (Part 6):** All three endpoints return status `200` with their configured JSON responses
- **Browser Testing:** 
  - `/dev/products` displays: `{"products":[{"name":"coffee","price":3.5},{"name":"tea","price":3.0}]}`
  - `/dev/products/special` displays: `{"featured":"muffin","price":2.5}`

✅ If you see your mock JSON responses, your API is working perfectly!

**Troubleshooting:**
- If you get an error, check that you deployed the API (Part 5)
- Make sure you're using the correct Invoke URL from the deployment stage
- Verify your API resources and methods are correctly configured

---

### Submission: Required Screenshots for Task 5

Submit **2 screenshots**:

1. **Screenshot 1**: API Gateway console showing your 3 resources in the left sidebar (/, /products, /products/special, /report) with their methods visible
2. **Screenshot 2**: Deployed stage page showing the **Invoke URL** (this proves your API was successfully deployed)

**Note:** Take screenshots during your lab session. The API and URL will not be accessible after you end the lab.

</details>

### Guidance and feedback
Guidance is available during the online consultation session or via Teams call.

### Evaluation
The evaluation is done based on the number of successfully completed tasks. Check the rubric.  

### Schedule and timing
Check the deadline in Canvas

### Submission
- **Document Submission:** Compile the required screenshots (as outlined at the end of each task) into a single Word document. Ensure each screenshot is clearly labeled to indicate which task it represents. ***Upload the word document to canvas.***
- **Self assessment:** In the submission comment box, provide a self-assessment based on the rubric guide. Clearly state how many points you believe you have earned for this task.  

### Clean Up 
- ℹ️ **Delete All Resources:** After completing the lab, be sure to delete all resources from the lab environment to avoid incurring unnecessary charges. Remember that you’ll need these credits for other lab tasks, so use them wisely. 