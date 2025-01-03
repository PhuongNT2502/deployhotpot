require("dotenv").config();
module.exports = {
    vnp_TmnCode: "HSMY45J3",
    vnp_HashSecret: "P8RDKPM5JGHHJWKEDRER8WB2HZ0WHDAC",
    vnp_Url: "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html",
    vnp_Api: "https://sandbox.vnpayment.vn/merchant_webapi/api/transaction",
    vnp_ReturnUrl: "http://localhost:8888/order/vnpay_return",
    // development: {
    //   username: process.env.DB_USERNAME,
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_DATABASE_NAME,
    //   host: process.env.DB_HOST,
    //   port: process.env.DB_PORT,
    //   dialect: process.env.DB_DIALECT,
    //   logging: false,
    //   query: { raw: true },
    //   timezone: "+07:00",
    // },
    development: {
        username: "root",
        password: "123456",
        database: "leehotpot",
        host: "10.1.119.86",
        port: "3307",
        dialect: "mysql",
        logging: false,
        query: {raw: true},
        timezone: "+07:00",
    },
    test: {
        username: "root",
        password: "123456",
        database: "leehotpot",
        host: "10.1.119.86",
        dialect: "mysql",
    },
    production: {
        username: "root",
        password: "123456",
        database: "leehotpot",
        host: "10.1.119.86",
        dialect: "mysql",
    },
};
