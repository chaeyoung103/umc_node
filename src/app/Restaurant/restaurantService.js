const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
const restaurantDao = require("./restaurantDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");

// Service: Create, Update, Delete 비즈니스 로직 처리

exports.createRestaurant = async function (
    name,
    category,
    image,
    address, 
    deliveryTime, 
    deliveryCost, 
    minimumTime) {
    try {

        const insertRestaurantInfoParams = [name,
            category,
            image,
            address, 
            deliveryTime, 
            deliveryCost, 
            minimumTime];

        const connection = await pool.getConnection(async (conn) => conn);

        const restaurantIdResult = await restaurantDao.insertRestaurantInfo(connection, insertRestaurantInfoParams);
        console.log(`추가된 레스토랑 : ${restaurantIdResult[0].insertId}`)
        connection.release();
        return response(baseResponse.SUCCESS);


    } catch (err) {
        logger.error(`App - createRestaurant Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};

exports.editRestaurant = async function (id, name, category) {
    try {
        console.log(id)
        const connection = await pool.getConnection(async (conn) => conn);
        const editRestaurantResult = await restaurantDao.updateRestaurantInfo(connection, id, name, category)
        connection.release();

        return response(baseResponse.SUCCESS);

    } catch (err) {
        logger.error(`App - editRestaurant Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}

exports.deleteRestaurant = async function (id) {
    try {
        console.log(id)
        const connection = await pool.getConnection(async (conn) => conn);
        const deleteRestaurantResult = await restaurantDao.deleteRestaurant(connection, id)
        connection.release();

        return response(baseResponse.SUCCESS);

    } catch (err) {
        logger.error(`App - deleteRestaurant Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}
