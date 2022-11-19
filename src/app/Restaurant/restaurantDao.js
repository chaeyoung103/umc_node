// 모든 유저 조회
async function selectRestaurant(connection) {
    const selectRestaurantListQuery = `
                  SELECT name, category, address, deliveryTime, deliveryCost, minimumCost 
                  FROM Restaurant;
                  `;
    const [restaurantRows] = await connection.query(selectRestaurantListQuery);
    return restaurantRows;
  }
  
  // restaurantId 회원 조회
  async function selectRestaurantId(connection, restaurantId) {
    const selectRestaurantIdQuery = `
                   SELECT restaurantIdx, name, category, address, deliveryTime, deliveryCost, minimumCost
                   FROM Restaurant
                   WHERE restaurantIdx = ?;
                   `;
    const [restaurantRow] = await connection.query(selectRestaurantIdQuery, restaurantId);
    return restaurantRow;
    }
  
  // 유저 생성
  async function insertRestaurantInfo(connection, insertRestaurantInfoParams) {
    const insertRestaurantInfoQuery = `
          INSERT INTO Restaurant(name, category, address, deliveryTime, deliveryCost, minimumCost)
          VALUES (?, ?, ?, ?, ?, ?);
      `;
    const insertRestaurantInfoRow = await connection.query(
        insertRestaurantInfoQuery,
        insertRestaurantInfoParams
    );
  
    return insertRestaurantInfoRow;
  }

  module.exports = {
    selectRestaurant,
    selectRestaurantId,
    insertRestaurantInfo
  };