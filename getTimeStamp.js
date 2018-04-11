let getTimeStamp = function(){
  //1.获取当前时间的 时间戳
  Date.parse(new Date());
  //结果：1486347562000
  //2.获取当前 时间
  new Date();
  //结果：Mon Feb 06 2017 10:19:42 GMT+0800 (CST)
  //3.将 时间戳 转换成 时间
  new Date(1486347562000);
  //结果：Mon Feb 06 2017 10:19:22 GMT+0800 (CST)
  //4.将 时间 转换成 时间戳
  Date.parse(new Date("2017-02-06 10:30:50"));
  //结果：1486348250000
};