<?php

require_once("connection.php");

$connection = new connection();
$conn = $connection->connection();

$sql = "SELECT * FROM data";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Address: " . $row["address"]. " - Phone: " . $row["phone"]. "<br>";
  }
} else {
  echo "0 results";
}