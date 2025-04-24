# Git and Github Notes

## Git Commands

1. git config --list (Untuk melihat seluruh konfigurasi git milik kita)
2. git config --global user.name (Untuk membuat username)
3. git config --global user.email (Untuk membuat email)
4. git init (Mengubah folder biasa menjadi folder git)
5. git status (Memeriksa status folder/repository git)
6. git add (Menambahkan sebuah file/folder ke dalam staging area git)
7. git commit (Memindahkan sebuah file/folder ke dalam repository git)
   -git commit -m "[commit message]" (Message nya buat ngasih tau, kalau perubahan apa yang kita lakukan saat gitcommit saat itu)
8. git log (Melihat commit history)
9. git branch (Untuk melihat branch git repository kita)
   git branch -M "[new branch name]" (Mengubah nama branch saat ini)
10. git remote:
    - git remote add origin [link remote repository] (Mengoneksikan local repository dengan remote repository)
    - git remote -v (Untuk melihat alamat remote repository)
    - git remote set-url origin [link remote repository] (Mengganti remote repository)
11. git push:
    - git push (Upload perubahan yang ada di locak repository ke remote repository)
    - git push -u origin [branch name] (Upload perubahan dan set default branch)
    - git push origin [branch name] (Upload perubahan ke spesifik branch tanpa merubah default branch)

## Step buat GitHub Repository

1. Buat akun
2. Klik tombol "New Repository"
3. Buat nama repository
4. Tambahkan deskripsi
5. Pilih tipe (public/private) repository
6. Klik create repository
7. Buka folder yang mau di push di terminal komputer
8. ```
   git init
   git add . (Nambahin semua folder yang ada di folder tersebut)
   git commit -m "first commit"
   git branch -M main
   git remote add origin [link remote repository]
   git push -u origin main
   ```
