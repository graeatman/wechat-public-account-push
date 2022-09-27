export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wxfe43393337ada7b1",
    // 公众号appSecret
    appSecret: "f57dd857fcaadc13ea60c42b06122598",
    // 模板消息id
    templateId: "P1qo9nEfhTxAMILijg21_B5na_PvAQUYMWJ_ll80_iU",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: [oNona50juWkSsMAczhkJ9SZ5ueWE],

    // 信息配置
    // 所在省份
    province: "河南",
    // 所在城市
    city: "郑州",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "宝贝", "year": "2004", "date": "04-24", "type": 'new'},
      {"name": "二臂", "year": "2004", "date": "02-07", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-06-10",
    // 结婚纪念日
    marryDate: "2022-06-10"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
  4  
main.js
