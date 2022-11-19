const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const restaurantDao = require("./restaurantDao");

// Provider: Read 비즈니스 로직 처리

exports.retrieveRestaurantList = async function () {

  const connection = await pool.getConnection(async (conn) => conn);
  const restaurantListResult = await restaurantDao.selectRestaurant(connection);
  connection.release();

  return restaurantListResult;

};

exports.retrieveRestaurant = async function (restaurantId) {
  const connection = await pool.getConnection(async (conn) => conn);
  const restaurantResult = await restaurantDao.selectRestaurantId(connection, restaurantId);

  connection.release();

  return restaurantResult[0];
};