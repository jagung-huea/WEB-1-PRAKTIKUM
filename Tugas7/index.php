<?php

require 'Hewan.php';
require 'Kucing.php';
require 'Anjing.php';

echo "<h2>Data Hewan</h2>";

$kucing = new Kucing();

$kucing->setNama("Suratman");
$kucing->setUmur(15);

echo "Nama: " . $kucing->getNama() . "<br>";
echo "Umur: " . $kucing->getUmur() . " Tahun<br>";
echo "Jenis: " . get_class($kucing) . "<br>";
echo "Suara: " . $kucing->getSuara();

echo "<br><br>";

$anjing = new Anjing();

$anjing->setNama("Reno");
$anjing->setUmur(20);

echo "Nama: " . $anjing->getNama() . "<br>";
echo "Umur: " . $anjing->getUmur() . " Tahun<br>";
echo "Jenis: " . get_class($anjing) . "<br>";
echo "Suara: " . $anjing->getSuara();
?>