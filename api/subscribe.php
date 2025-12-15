<?php
// ===== PRE-FLIGHT (CORS) =====
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  header("Access-Control-Allow-Origin: http://localhost:5173");
  header("Access-Control-Allow-Methods: POST, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type");
  http_response_code(200);
  exit;
}

// ===== MAIN REQUEST =====
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require "db.php";

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data["email"], $data["name"])) {
  http_response_code(400);
  echo json_encode(["message" => "Invalid data"]);
  exit;
}

$stmt = $pdo->prepare(
  "INSERT INTO leads (name, email) VALUES (?, ?)"
);
$stmt->execute([
  trim($data["name"]),
  trim($data["email"]),
]);

echo json_encode(["message" => "Saved successfully"]);
