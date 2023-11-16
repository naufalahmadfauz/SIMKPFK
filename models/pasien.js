'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pasien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pasien.init({
    reg: {
      type: DataTypes.STRING,
      primaryKey:true,
      allowNull:false,
      unique:true,
      validate: {
        notEmpty: {
          msg: "Nomer registrasi harus diisi"
        },
        notNull: {
          msg: "Nomer registrasi tidak boleh kosong"
        }
      }
    },
    nama: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: {
          msg: "nama harus diisi"
        },
        notNull: {
          msg: "nama tidak boleh kosong"
        }
      }
    },
    jkn: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: {
          msg: "jkn harus diisi"
        },
        notNull: {
          msg: "jkn tidak boleh kosong"
        }
      }
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: {
          msg: "alamat harus diisi"
        },
        notNull: {
          msg: "alamat tidak boleh kosong"
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: {
          msg: "status harus diisi"
        },
        notNull: {
          msg: "status tidak boleh kosong"
        }
      }
    },
    tinggi_badan: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
        notEmpty: {
          msg: "Tinggi badan harus diisi"
        },
        notNull: {
          msg: "Tinggi badan tidak boleh kosong"
        }
      }
    },
    berat_badan: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
        notEmpty: {
          msg: "Berat badan harus diisi"
        },
        notNull: {
          msg: "Berat badan tidak boleh kosong"
        }
      }
    },
    usia: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
        notEmpty: {
          msg: "Usia harus diisi"
        },
        notNull: {
          msg: "Usia badan tidak boleh kosong"
        }
      }
    },
    
    
  }, {
    sequelize,
    tableName: 'pasiens',
    modelName: 'Pasien',
  });
  return Pasien;
};
