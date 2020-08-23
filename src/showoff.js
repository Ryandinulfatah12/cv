
const project = [
    {
        nama: "Codespace",
        img: "src/img/project/codespace.jpg",
        type: "Laravel REST API",
        desc: "Aplikasi web yang terintegrasi dengan API HERE Maps melalui studi kasus pembuatan aplikasi daftar lokasi tempat ngoding yang asyik."
    },
    {
        nama: "Sistem pendeteksi dini pergerakan tanah longsor",
        img: "src/img/project/iot.jpg",
        type: "Internet of Things (IoT) Project",
        desc: "Sistem pendeteksi dini pergerakan tanah longsor SMKN 1 padaherang yang telah saya buat untuk PAMERAN SMK KARYA INOVASI (anak PKL) di STMIK AKAKOM YOGYAKARTA, alat pendeteksi yang bisa dimonitoring melalui web dengan REALTIME."
    },
    {
        nama: "Smart Home Project",
        img: "src/img/project/smarthome.jpg",
        type: "Internet of Things (IoT) Project",
        desc: "Karya Inovasi dari SMK Negeri 1 Padaherang, yang dimana sebuah rumah yang dilengkapi fitur canggih seperti membuka gerbang dengan HP, membuka pintu utama dengan KTP, semua lampu bisa otomatis/manual dari HP, Jemuran dan Kipas Otomatis, serta Monitoring Suhu Ruangan"
    },
    {
        nama: "Aplikasi Kasir Restourant Management",
        img: "src/img/project/laravel2.jpg",
        type: "Laravel Project",
        desc: "Aplikasi Kasir Restourant Management System yang dibuat oleh Saya (Ryan Dinul Fatah) Untuk memenuhi tugas Sekolah tepatnya Project Akhir UJIKOM 2020 saya di SMKN 1 Padaherang ini."
    },
    {
        nama: "Aplikasi Pengaduan Masyarakat",
        img: "src/img/project/laravel1.jpg",
        type: "Laravel Project",
        desc: "Aplikasi ini merupakan aplikasi yang dapat mengelola pendataan pengaduan dari masyarakat, selain dibuat sesimple mungkin, aplikasi ini juga lumayan dapat bekerja dengan baik untuk dibilang sebuah Aplikasi Pengaduan Masyarakat."
    }
];
project.forEach((i) => {
    $('#project').append(`
    <div>
        <img src="${i.img}">
        <div class="desc">
        <h2>${i.nama}</h2>
        <span class="badge">${i.type}</span>
        <p>${i.desc}</p>
        </div>
    </div>
    `);
} )

const experiences = [
    {
        img: "src/img/experiences/first.jpg",
        desc: "Project Freelance Front-end Development"
    },
    {
        img: "src/img/experiences/second.jpg",
        desc: "Project Freelance Kedua Upwork"
    }
];
experiences.forEach((i) => {
    $('#experiences').append(`
    <div>
        <img class="cert" src="${i.img}">
        <p class="p-sertifikat">${i.desc}</p>
        </div>
    </div>
    `);
} )

const feedback = [
    {
        img: "src/img/stars/first.jpg"
    },
    {
        img: "src/img/stars/second.jpg"
    }
];
feedback.forEach((i) => {
    $("#feedback").append(`
        <div>
            <img class="cert" src="${i.img}">
        </div>
    `);
})

const sertifikat = [
    {
        image: "src/img/sertifikat/dicoding_web.jpg",
        tentang: "Kelas Dasar Pemrograman Web Dicoding"
    },
    {
        image: "src/img/sertifikat/dicoding_web_2.jpg",
        tentang: "Fundamental Front-end Development Dicoding"
    },
    {
        image: "src/img/sertifikat/solid.jpg",
        tentang: "Kelas Belajar Prinsip Pemrograman SOLID Dicoding"
    },
    {
        image: "src/img/sertifikat/google.jpg",
        tentang: "Fundamental Digital Marketing Google Digital Garage"
    },
    {
        image: "src/img/sertifikat/eng.jpg",
        tentang: "Basic English Online Course for Programmer YEC.CO.ID"
    },
    {
        image: "src/img/sertifikat/codepol.jpg",
        tentang: "Course HERE Developer Codepolitan"
    }
];
sertifikat.forEach((i) => {
    $('#sertifikat').append(`
    <div>
        <img class="cert" src="${i.image}">
        <p class="p-sertifikat">${i.tentang}</p>
        </div>
    </div>
    `);
} )