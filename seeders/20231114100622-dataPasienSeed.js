'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('pasiens', [
      {
        reg: "P1",
        nama: "Anita",
        jkn: "Ya",
        alamat: "Aceh",
        status: "Lama",
        createdAt: "2023-11-14T12:00:54.000Z",
        updatedAt: "2023-11-14T12:00:55.000Z"},
      {
        reg: "P2",
        nama: "Bayu",
        jkn: "Bukan",
        alamat: "Bontang",
        status: "Baru",
        createdAt: "2023-11-14T12:00:56.000Z",
        updatedAt: "2023-11-14T12:00:57.000Z"},
      {
        reg: "P3",
        nama: "Cinta",
        jkn: "Ya",
        alamat: "Cilegon",
        status: "Lama",
        createdAt: "2023-11-14T12:00:58.000Z",
        updatedAt: "2023-11-14T12:00:59.000Z"},
     {
        reg: "P4",
        nama: "Budi",
        jkn: "Ya",
        alamat: "Jakarta",
        status: "Lama",
        createdAt: "2023-11-14T12:00:00.000Z",
        updatedAt: "2023-11-14T12:00:01.000Z"
      },
      {
        reg: "P5",
        nama: "Citra",
        jkn: "Bukan",
        alamat: "Bandung",
        status: "Baru",
        createdAt: "2023-11-14T12:00:02.000Z",
        updatedAt: "2023-11-14T12:00:03.000Z"
      },
      {
        reg: "P6",
        nama: "Dewi",
        jkn: "Ya",
        alamat: "Surabaya",
        status: "Lama",
        createdAt: "2023-11-14T12:00:04.000Z",
        updatedAt: "2023-11-14T12:00:05.000Z"
      },
      {
        reg: "P7",
        nama: "Eko",
        jkn: "Ya",
        alamat: "Medan",
        status: "Lama",
        createdAt: "2023-11-14T12:00:06.000Z",
        updatedAt: "2023-11-14T12:00:07.000Z"
      },
      {
        reg: "P8",
        nama: "Fitri",
        jkn: "Bukan",
        alamat: "Yogyakarta",
        status: "Baru",
        createdAt: "2023-11-14T12:00:08.000Z",
        updatedAt: "2023-11-14T12:00:09.000Z"
      },
      {
        reg: "P9",
        nama: "Gunawan",
        jkn: "Ya",
        alamat: "Malang",
        status: "Lama",
        createdAt: "2023-11-14T12:00:10.000Z",
        updatedAt: "2023-11-14T12:00:11.000Z"
      },
      {
        reg: "P10",
        nama: "Hana",
        jkn: "Ya",
        alamat: "Semarang",
        status: "Lama",
        createdAt: "2023-11-14T12:00:12.000Z",
        updatedAt: "2023-11-14T12:00:13.000Z"
      },
      {
        reg: "P11",
        nama: "Irfan",
        jkn: "Bukan",
        alamat: "Palembang",
        status: "Baru",
        createdAt: "2023-11-14T12:00:14.000Z",
        updatedAt: "2023-11-14T12:00:15.000Z"
      },
      {
        reg: "P12",
        nama: "Jasmine",
        jkn: "Ya",
        alamat: "Makassar",
        status: "Lama",
        createdAt: "2023-11-14T12:00:16.000Z",
        updatedAt: "2023-11-14T12:00:17.000Z"
      },
      {
        reg: "P13",
        nama: "Krisna",
        jkn: "Ya",
        alamat: "Bali",
        status: "Lama",
        createdAt: "2023-11-14T12:00:18.000Z",
        updatedAt: "2023-11-14T12:00:19.000Z"
      },
      {
        reg: "P14",
        nama: "Lina",
        jkn: "Bukan",
        alamat: "Balikpapan",
        status: "Baru",
        createdAt: "2023-11-14T12:00:20.000Z",
        updatedAt: "2023-11-14T12:00:21.000Z"
      },
      {
        reg: "P15",
        nama: "Maulana",
        jkn: "Ya",
        alamat: "Manado",
        status: "Lama",
        createdAt: "2023-11-14T12:00:22.000Z",
        updatedAt: "2023-11-14T12:00:23.000Z"
      },
      {
        reg: "P16",
        nama: "Nadia",
        jkn: "Ya",
        alamat: "Pontianak",
        status: "Lama",
        createdAt: "2023-11-14T12:00:24.000Z",
        updatedAt: "2023-11-14T12:00:25.000Z"
      },
      {
        reg: "P17",
        nama: "Oscar",
        jkn: "Bukan",
        alamat: "Denpasar",
        status: "Baru",
        createdAt: "2023-11-14T12:00:26.000Z",
        updatedAt: "2023-11-14T12:00:27.000Z"
      },
      {
        reg: "P18",
        nama: "Putri",
        jkn: "Ya",
        alamat: "Batam",
        status: "Lama",
        createdAt: "2023-11-14T12:00:28.000Z",
        updatedAt: "2023-11-14T12:00:29.000Z"
      },
      {
        reg: "P19",
        nama: "Rizki",
        jkn: "Ya",
        alamat: "Bekasi",
        status: "Lama",
        createdAt: "2023-11-14T12:00:30.000Z",
        updatedAt: "2023-11-14T12:00:31.000Z"
      },
      {
        reg: "P20",
        nama: "Sari",
        jkn: "Bukan",
        alamat: "Cirebon",
        status: "Baru",
        createdAt: "2023-11-14T12:00:32.000Z",
        updatedAt: "2023-11-14T12:00:33.000Z"
      },
      {
        reg: "P21",
        nama: "Taufik",
        jkn: "Ya",
        alamat: "Tangerang",
        status: "Lama",
        createdAt: "2023-11-14T12:00:34.000Z",
        updatedAt: "2023-11-14T12:00:35.000Z"
      },
      {
        reg: "P22",
        nama: "Ulfa",
        jkn: "Ya",
        alamat: "Serang",
        status: "Lama",
        createdAt: "2023-11-14T12:00:36.000Z",
        updatedAt: "2023-11-14T12:00:37.000Z"
      },
      {
        reg: "P23",
        nama: "Vicky",
        jkn: "Bukan",
        alamat: "Padang",
        status: "Baru",
        createdAt: "2023-11-14T12:00:38.000Z",
        updatedAt: "2023-11-14T12:00:39.000Z"
      },
      {
        reg: "P24",
        nama: "Wulan",
        jkn: "Ya",
        alamat: "Pekanbaru",
        status: "Lama",
        createdAt: "2023-11-14T12:00:40.000Z",
        updatedAt: "2023-11-14T12:00:41.000Z"
      },
      {
        reg: "P25",
        nama: "Yoga",
        jkn: "Ya",
        alamat: "Ambon",
        status: "Lama",
        createdAt: "2023-11-14T12:00:42.000Z",
        updatedAt: "2023-11-14T12:00:43.000Z"
      },
      {
        reg: "P26",
        nama: "Zahra",
        jkn: "Bukan",
        alamat: "Jayapura",
        status: "Baru",
        createdAt: "2023-11-14T12:00:44.000Z",
        updatedAt: "2023-11-14T12:00:45.000Z"
      },
      {
        reg: "P27",
        nama: "Aditya",
        jkn: "Ya",
        alamat: "Kupang",
        status: "Lama",
        createdAt: "2023-11-14T12:00:46.000Z",
        updatedAt: "2023-11-14T12:00:47.000Z"
      },
      {
        reg: "P28",
        nama: "Bella",
        jkn: "Ya",
        alamat: "Palu",
        status: "Lama",
        createdAt: "2023-11-14T12:00:48.000Z",
        updatedAt: "2023-11-14T12:00:49.000Z"
      },
      {
        reg: "P29",
        nama: "Cahya",
        jkn: "Bukan",
        alamat: "Samarinda",
        status: "Baru",
        createdAt: "2023-11-14T12:00:50.000Z",
        updatedAt: "2023-11-14T12:00:51.000Z"
      },
      {
        reg: "P30",
        nama: "Dini",
        jkn: "Ya",
        alamat: "Banjarmasin",
        status: "Lama",
        createdAt: "2023-11-14T12:00:52.000Z",
        updatedAt: "2023-11-14T12:00:53.000Z"
      }
  

    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('pasiens', null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
