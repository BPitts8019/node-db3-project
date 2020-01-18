-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT p.ProductName, c.CategoryName FROM Product AS p
JOIN Category AS c ON p.CategoryId = c.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT o.Id, s.CompanyName FROM [Order] as o
JOIN [Shipper] AS s ON o.ShipVia = s.Id
WHERE o.OrderDate < "2012-08-09";

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT p.ProductName, d.Quantity FROM [OrderDetail] AS d
JOIN [Product] as p ON d.ProductId = p.Id
WHERE d.OrderId = 10251;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT
	o.Id as "Order ID", 
	c.CompanyName AS "Customer's Company Name", 
	e.LastName AS "Employee's Last Name" 
FROM [Order] AS o
JOIN [Customer] as c ON o.CustomerId = c.Id
JOIN [Employee] as e ON o.EmployeeId = e.Id