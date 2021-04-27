var jsondata;
var ssobj=[];
function preload(){
  // 取得spreadsheet
  jsondata = loadJSON('https://spreadsheets.google.com/feeds/list/1nXwzLsdpOGho9HBu4tGhcmQ4fbOwYoYZ11OItnCS-QQ/od6/public/values?alt=json');
}
function setup() {
  let temp = jsondata.feed.entry;
  let i = 1;
  console.log(jsondata);
  //console.log(jsondata.feed.entry[1].gsx$month.$t);
  // 寫入資料庫資料
  let str='';
  for(let i=0;i<temp.length;i+=1){
    str += '<div class="slide-'+i+'">'+
           '<img style="display:block; margin:auto; id="'+temp[i].gsx$no.$t+'" src="./asset/'+temp[i].gsx$no.$t+'.jpg" class="img-fluid" ></img>'+
                '<p style="text-align: center;">'+'HW'+jsondata.feed.entry[i].gsx$no.$t+'</p>'+
                '<p style="text-align: center;">'+jsondata.feed.entry[i].gsx$date.$t+'</p>'+
      '<a href="'+ jsondata.feed.entry[i].gsx$url.$t +'" target="_blank">'+
                '<p style="text-align: center;">'+jsondata.feed.entry[i].gsx$link.$t+'</p>'+
      '</a>'+
           '</div>';
  }
  /*
  for(let i=0;i<temp.length;i+=1){
    str+= '<div class="slide-'+i+'">'+
             '<img src="./asset/B10835037_1.jpg" class="img-fluid" ></img>'+
             '<p style="text-align: center;">'+temp[i].gsx$學號.$t+'</p>'+
          '</div>';
  }
*/
  //將演算的資料 str 插入 index 裡面 id= hw1 的 tag 物件
  window.document.getElementById("hw1").innerHTML=str;
  
    $(document).ready(()=>{
      $('#hw1').slick({
          centerMode:true,
          slidesToShow: 1,
          slidesToScroll: 5,
          autoplaySpeed: 2000,
          arrows: true
      });
    }); 

}

function draw() {
  
  
}