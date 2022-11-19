const restaurantProvider = require("../../app/Restaurant/restaurantProvider");
const restaurantService = require("../../app/Restaurant/restaurantService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");

const {emit} = require("nodemon");

/**
 * API No. 1
 * API Name : 식당 생성 API
 * [POST] /app/restaurants
 */
exports.postRestaurants = async function (req, res) {

    /**
     * Body: name, category, address, deliveryTime, deliveryCost, minimumCost
     */
    const {name, category, address, deliveryTime, deliveryCost, minimumCost} = req.body;

    // 빈 값 체크
    if (!name)
        return res.send(response(baseResponse.SIGNUP_EMAIL_EMPTY));

    // 기타 등등 - 추가하기


    const restaurantRegisterResponse = await restaurantService.createRestaurant(
        name, category, address, deliveryTime, deliveryCost, minimumCost
    );

    return res.send(restaurantRegisterResponse);
};

/**
 * API No. 2
 * API Name : 식당 조회 API 
 * [GET] /app/restaurants
 */
 exports.getRestaurants = async function (req, res) {

    // 식당 전체 조회
    const restaurantListResult = await restaurantProvider.retrieveRestaurantList();
    return res.send(response(baseResponse.SUCCESS, restaurantListResult));

};

/**
 * API No. 3
 * API Name : 특정 식당 조회 API
 * [GET] /app/restaurants/{restaurantId}
 */
exports.getRestaurantById = async function (req, res) {

    /**
     * Path Variable: restaurantId
     */
    const restaurantId = req.params.restaurantId;

    if (!restaurantId) return res.send(errResponse(baseResponse.USER_USERID_EMPTY));

    const restaurantByUserId = await restaurantProvider.retrieveRestaurant(restaurantId);
    return res.send(response(baseResponse.SUCCESS, restaurantByUserId));
};