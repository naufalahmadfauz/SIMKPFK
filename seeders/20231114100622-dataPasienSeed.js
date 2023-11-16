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
            tinggi_badan: 170,
            berat_badan: 60,
            usia: 20,
            createdAt: "2023-11-14T12:00:54.000Z",
            updatedAt: "2023-11-14T12:00:55.000Z"
        },
        {
            reg: "P2",
            nama: "Bayu",
            jkn: "Bukan",
            alamat: "Bontang",
            status: "Baru",
            tinggi_badan: 175,
            berat_badan: 70,
            usia: 25,
            createdAt: "2023-11-14T12:00:56.000Z",
            updatedAt: "2023-11-14T12:00:57.000Z"
        },
        {
            reg: "P3",
            nama: "Cinta",
            jkn: "Ya",
            alamat: "Cilegon",
            status: "Lama",
            tinggi_badan: 160,
            berat_badan: 55,
            usia: 22,
            createdAt: "2023-11-14T12:00:58.000Z",
            updatedAt: "2023-11-14T12:00:59.000Z"
        },
        {
            reg: "P4",
            nama: "Dedi",
            jkn: "Ya",
            alamat: "Depok",
            status: "Lama",
            tinggi_badan: 165,
            berat_badan: 65,
            usia: 28,
            createdAt: "2023-11-14T12:01:00.000Z",
            updatedAt: "2023-11-14T12:01:01.000Z"
        },
        {
            reg: "P5",
            nama: "Eva",
            jkn: "Bukan",
            alamat: "Enrekang",
            status: "Baru",
            tinggi_badan: 155,
            berat_badan: 50,
            usia: 21,
            createdAt: "2023-11-14T12:01:02.000Z",
            updatedAt: "2023-11-14T12:01:03.000Z"
        },
        {
            reg: "P6",
            nama: "Firman",
            jkn: "Ya",
            alamat: "Flores",
            status: "Lama",
            tinggi_badan: 180,
            berat_badan: 75,
            usia: 30,
            createdAt: "2023-11-14T12:01:04.000Z",
            updatedAt: "2023-11-14T12:01:05.000Z"
        },
        {
            reg: "P7",
            nama: "Gita",
            jkn: "Ya",
            alamat: "Garut",
            status: "Lama",
            tinggi_badan: 165,
            berat_badan: 62,
            usia: 26,
            createdAt: "2023-11-14T12:01:06.000Z",
            updatedAt: "2023-11-14T12:01:07.000Z"
        },
        {
            reg: "P8",
            nama: "Hendra",
            jkn: "Bukan",
            alamat: "Halmahera",
            status: "Baru",
            tinggi_badan: 175,
            berat_badan: 70,
            usia: 27,
            createdAt: "2023-11-14T12:01:08.000Z",
            updatedAt: "2023-11-14T12:01:09.000Z"
        },
        {
            reg: "P9",
            nama: "Indah",
            jkn: "Ya",
            alamat: "Indramayu",
            status: "Lama",
            tinggi_badan: 160,
            berat_badan: 55,
            usia: 23,
            createdAt: "2023-11-14T12:01:10.000Z",
            updatedAt: "2023-11-14T12:01:11.000Z"
        },
        {
            reg: "P10",
            nama: "Joko",
            jkn: "Ya",
            alamat: "Jakarta",
            status: "Lama",
            tinggi_badan: 170,
            berat_badan: 68,
            usia: 29,
            createdAt: "2023-11-14T12:01:12.000Z",
            updatedAt: "2023-11-14T12:01:13.000Z"
        },
        {
            reg: "P11",
            nama: "Kartika",
            jkn: "Bukan",
            alamat: "Kupang",
            status: "Baru",
            tinggi_badan: 160,
            berat_badan: 52,
            usia: 24,
            createdAt: "2023-11-14T12:01:14.000Z",
            updatedAt: "2023-11-14T12:01:15.000Z"
        },
        {
            reg: "P12",
            nama: "Lukman",
            jkn: "Ya",
            alamat: "Lombok",
            status: "Lama",
            tinggi_badan: 175,
            berat_badan: 72,
            usia: 31,
            createdAt: "2023-11-14T12:01:16.000Z",
            updatedAt: "2023-11-14T12:01:17.000Z"
        },
        {
            reg: "P13",
            nama: "Maya",
            jkn: "Ya",
            alamat: "Malang",
            status: "Lama",
            tinggi_badan: 165,
            berat_badan: 60,
            usia: 25,
            createdAt: "2023-11-14T12:01:18.000Z",
            updatedAt: "2023-11-14T12:01:19.000Z"
        },
        {
            reg: "P14",
            nama: "Nugroho",
            jkn: "Bukan",
            alamat: "Ngawi",
            status: "Baru",
            tinggi_badan: 180,
            berat_badan: 78,
            usia: 32,
            createdAt: "2023-11-14T12:01:20.000Z",
            updatedAt: "2023-11-14T12:01:21.000Z"
        },
        {
            reg: "P15",
            nama: "Olive",
            jkn: "Ya",
            alamat: "Padang",
            status: "Lama",
            tinggi_badan: 160,
            berat_badan: 55,
            usia: 26,
            createdAt: "2023-11-14T12:01:22.000Z",
            updatedAt: "2023-11-14T12:01:23.000Z"
        },
        {
            reg: "P16",
            nama: "Prabowo",
            jkn: "Ya",
            alamat: "Purwakarta",
            status: "Lama",
            tinggi_badan: 175,
            berat_badan: 75,
            usia: 28,
            createdAt: "2023-11-14T12:01:24.000Z",
            updatedAt: "2023-11-14T12:01:25.000Z"
        },
        {
            reg: "P17",
            nama: "Qori",
            jkn: "Bukan",
            alamat: "Queensland",
            status: "Baru",
            tinggi_badan: 165,
            berat_badan: 60,
            usia: 27,
            createdAt: "2023-11-14T12:01:26.000Z",
            updatedAt: "2023-11-14T12:01:27.000Z"
        },
        {
            reg: "P18",
            nama: "Raden",
            jkn: "Ya",
            alamat: "Rembang",
            status: "Lama",
            tinggi_badan: 170,
            berat_badan: 68,
            usia: 30,
            createdAt: "2023-11-14T12:01:28.000Z",
            updatedAt: "2023-11-14T12:01:29.000Z"
        },
        {
            reg: "P19",
            nama: "Sari",
            jkn: "Ya",
            alamat: "Sragen",
            status: "Lama",
            tinggi_badan: 160,
            berat_badan: 55,
            usia: 25,
            createdAt: "2023-11-14T12:01:30.000Z",
            updatedAt: "2023-11-14T12:01:31.000Z"
        },
        {
            reg: "P20",
            nama: "Taufan",
            jkn: "Bukan",
            alamat: "Tangerang",
            status: "Baru",
            tinggi_badan: 175,
            berat_badan: 70,
            usia: 28,
            createdAt: "2023-11-14T12:01:32.000Z",
            updatedAt: "2023-11-14T12:01:33.000Z"
        },
        {
            reg: "P21",
            nama: "Utami",
            jkn: "Ya",
            alamat: "Ungaran",
            status: "Lama",
            tinggi_badan: 165,
            berat_badan: 62,
            usia: 26,
            createdAt: "2023-11-14T12:01:34.000Z",
            updatedAt: "2023-11-14T12:01:35.000Z"
        },
        {
            reg: "P22",
            nama: "Vian",
            jkn: "Bukan",
            alamat: "Yogyakarta",
            status: "Baru",
            tinggi_badan: 180,
            berat_badan: 78,
            usia: 32,
            createdAt: "2023-11-14T12:01:36.000Z",
            updatedAt: "2023-11-14T12:01:37.000Z"
        },
        {
            reg: "P23",
            nama: "Winda",
            jkn: "Ya",
            alamat: "Wonogiri",
            status: "Lama",
            tinggi_badan: 160,
            berat_badan: 55,
            usia: 23,
            createdAt: "2023-11-14T12:01:38.000Z",
            updatedAt: "2023-11-14T12:01:39.000Z"
        },
        {
            reg: "P24",
            nama: "Xavier",
            jkn: "Ya",
            alamat: "Xinjiang",
            status: "Lama",
            tinggi_badan: 175,
            berat_badan: 70,
            usia: 29,
            createdAt: "2023-11-14T12:01:40.000Z",
            updatedAt: "2023-11-14T12:01:41.000Z"
        },
        {
            reg: "P25",
            nama: "Yanti",
            jkn: "Bukan",
            alamat: "Yakarta",
            status: "Baru",
            tinggi_badan: 160,
            berat_badan: 52,
            usia: 24,
            createdAt: "2023-11-14T12:01:42.000Z",
            updatedAt: "2023-11-14T12:01:43.000Z"
        },
        {
            reg: "P26",
            nama: "Zulkifli",
            jkn: "Ya",
            alamat: "Zanzibar",
            status: "Lama",
            tinggi_badan: 180,
            berat_badan: 75,
            usia: 31,
            createdAt: "2023-11-14T12:01:44.000Z",
            updatedAt: "2023-11-14T12:01:45.00z"
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
