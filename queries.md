# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
Select ProductName, CategoryName from Products as P
JOIN Categories as Cat
ON P.CategoryID = Cat.CategoryID
### Note: this gave me 77, not 76, categories.

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
SELECT OrderID, ShipperName, OrderDate from Orders
JOIN Shippers as Ship
ON Orders.ShipperID = Ship.ShipperID
WHERE OrderDate<'1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT ProductName, Quantity FROM [OrderDetails] as OD
JOIN Products as Pro
ON OD.ProductID = Pro.ProductID
WHERE OrderID = '10251'
ORDER BY ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 