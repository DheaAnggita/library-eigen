# Technical Test - Eigen
Project ini menggunakan Express.js sebagai framework web, PostgreSQL sebagai basis data, dan Sequelize sebagai ORM (Object-Relational Mapping) untuk berinteraksi dengan basis data.

## Instalasi
### 1. Klon Repository
Klon repository ini ke dalam direktori lokal Anda:
```
git clone https://github.com/DheaAnggita/library-eigen.git
```

### 2. Instal Dependensi
Instal semua dependensi dengan menjalankan perintah:
```
npm install
```

### 3. Konfigurasi Database
ubah file .env. Kemudian, konfigurasi koneksi basis data post Anda dalam file .env.
```
DB_USER = postgres
DB_NAME = library
DB_PASSWORD = password
DB_HOST = localhost
DB_PORT = 5432
```

### 4. Jalankan Migrasi Database
Terapkan migrasi basis data dengan menjalankan perintah berikut:
```
npx sequelize-cli db:migrate
```

### 5. Jalankan Seeder Database
Terapkan seeder basis data dengan menjalankan perintah berikut:
```
npx sequelize-cli db:seed:all
```
## Menjalankan Aplikasi
Untuk menjalankan aplikasi, gunakan perintah:
```
node index.js
```

Aplikasi akan berjalan di http://localhost:3000

Untuk melihat dokumentasi endpoint melalui swagger gunakan http://localhost:3000/api-docs
