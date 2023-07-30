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
        <tr style="background-color: yellow; color: black;">
            <th>Key</th>
            <th>Page</th>
            <th>Name</th>
            <th>Client Time</th>
            <th>Server Time</th>
            <th>Admin Time</th>
            <th>Extension ID</th>
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
            echo '<td>' . htmlspecialchars($item['key']) . '</td>';
            echo '<td>' . htmlspecialchars($item['page']) . '</td>';
            echo '<td>' . htmlspecialchars($item['name']) . '</td>';
            echo '<td>' . htmlspecialchars($item['client_time']) . '</td>';
            echo '<td>' . htmlspecialchars($item['server_time']) . '</td>';
            echo '<td class="admin-time"></td>'; // Menambahkan kelas "admin-time" untuk sel Admin Time
            echo '<td>' . htmlspecialchars($item['extension_id']) . '</td>';
            echo '</tr>';
        }
        ?>
    </table>
</center>
</body>

<script>
    function getCurrentDateTime() {
        var now = new Date();
        var day = String(now.getDate()).padStart(2, '0');
        var month = String(now.getMonth() + 1).padStart(2, '0');
        var year = now.getFullYear();
        var hours = String(now.getHours()).padStart(2, '0');
        var minutes = String(now.getMinutes()).padStart(2, '0');
        var seconds = String(now.getSeconds()).padStart(2, '0');
        return day + '-' + month + '-' + year + ' - ' + hours + ':' + minutes + ':' + seconds;
    }

    function updateAdminTime() {
        var adminTime = getCurrentDateTime();
        var adminTimeCells = document.querySelectorAll('.admin-time');
        adminTimeCells.forEach(cell => {
            cell.innerText = adminTime;
        });
    }

    // Panggil fungsi updateAdminTime setiap detik
    setInterval(updateAdminTime, 1000);
</script>
</html>
