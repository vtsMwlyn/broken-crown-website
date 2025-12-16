<?php
$allowedOrigins = [
  "http://localhost:5173",
  "https://brimvahlcrown.com",
  "https://www.brimvahlcrown.com",
];

$origin = $_SERVER["HTTP_ORIGIN"] ?? "";

if (in_array($origin, $allowedOrigins, true)) {
  header("Access-Control-Allow-Origin: $origin");
  header("Vary: Origin");
}

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// ===== PRE-FLIGHT =====
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  http_response_code(200);
  exit;
}

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
