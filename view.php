<!DOCTYPE html>
<html>
<head>
    <title>Data dari key.json</title>
</head>
<body>
    <h1>Data dari key.json</h1>
    <center>
        <input type="text" name="test" id="">
    <table border="1">
        <tr>
            <th>Key</th>
            <th>Page</th>
            <th>Name</th>
            <th>Client Time</th>
        </tr>
        <?php
        // Baca konten dari key.json
        $jsonData = file_get_contents('key.json');

        // Hapus karakter baris baru ("\n") dari string JSON
        $jsonData = str_replace("\n", '', $jsonData);
        $jsonData = str_replace("][", ',', $jsonData);
        
        // Konversi JSON menjadi array asosiatif dengan 'true' sebagai argumen kedua
        $data = json_decode($jsonData, true);

        // Cek apakah data JSON berhasil di-decode
        if ($data === null && json_last_error() !== JSON_ERROR_NONE) {
            die("Gagal membaca file JSON.");
        }

        // Mem-balik urutan elemen dalam array $data
        $data = array_reverse($data);

        // Loop untuk menampilkan data dalam tabel
        foreach ($data as $item) {
            echo '<tr>';
            echo '<td>' . $item['key'] . '</td>';
            echo '<td>' . $item['page'] . '</td>';
            echo '<td>' . $item['name'] . '</td>';
            echo '<td>' . $item['client_time'] . '</td>';
            echo '</tr>';
        }
        ?>
    </table>
</center>
</body>
</html>
