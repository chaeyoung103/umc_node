module.exports = function(app){
    const restaurant = require('./restaurantController');

    // 1.식당 추가 API
    app.post('/app/restaurants', restaurant.postRestaurants);

    // 2.식당 조회 API (+ 검색)
    app.get('/app/restaurants',restaurant.getRestaurants); 

    // 3. 특정 식당 조회 API
    app.get('/app/restaurants/:restaurantId', restaurant.getRestaurantById);

    // 4. 식당 정보 수정 API
    app.patch('/app/restaurants/:restaurantId', restaurant.patchRestaurants);

    // 5. 식당 삭제 API
    app.delete('/app/restaurants/:restaurantId', restaurant.deleteRestaurant);
}