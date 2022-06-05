const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const qual_t = sequelize.define("qual_t",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    qual_table_p00: {type: DataTypes.BIGINT},
    qual_table_p01: {type: DataTypes.TEXT}
})

const main_t = sequelize.define("main_t",{
    main_table_i: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    main_table_r: {type: DataTypes.BIGINT},
    main_table_t: {type: DataTypes.TEXT}
})

const totalData = sequelize.define('total_data', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

qual_t.hasOne(main_t)
main_t.belongsTo(qual_t)

qual_t.belongsToMany(main_t, {through: totalData})
main_t.belongsToMany(qual_t, {through: totalData})

module.exports = {qual_t, main_t, totalData}