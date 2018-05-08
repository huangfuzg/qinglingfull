var PageSize = 10;
var Pages = 10;
var PageList = [];
var newPage = 0;
var curPage = 1;

function setNum(){
  console.log(PageList);
  // console.log("Pagelist: ",PageList);
  if(PageList.length<5){
    for(var i=0;i<PageList.length;i++){
      $("#p"+(i+1)+" a").text(PageList[i]);
      $("#p"+(i+1)).show();
    }
    for(var i=PageList.length;i<5;i++){
      $("#p"+(i+1)).hide();
    }
  }
  else{
    for(var i=0;i<PageList.length;i++){
      $("#p"+(i+1)+" a").text(PageList[i]);
      $("#p"+(i+1)).show();
    }
  }
}

function getData(page){
  // setNum()
  $.ajax({
    type:"GET",
    // url:"data/news.json?t="+timer,
    url:"http://fruitninja.xin:8000/getNewsList?page="+page,
    dataType:'json',
    jsonpCallback:"callback",
    success:function(res){
      console.log(res.data);
      $("#news_title").empty();
      Pages = Math.ceil(res.data.newsCount/PageSize);
      // if(Pages<5){
      //   for(var i=0;i<5-Pages;i++){
      //
      //   }
      // }
      newPage = Pages>5 ? 5 :Pages;
      PageList = [];
      for(var i=0;i<newPage;i++){
        PageList.push(i+1);
      }
      if(PageList.length>4){
        if(page > 2 ){
          var newPageList = [];
          for(var i=(page-3);i<((page+2)>Pages?Pages:(page+2));i++){
            newPageList.push(i+1);
          }
          PageList = newPageList;
        }
      }
      res.data.news.forEach(function(d){
        var txt = "<li class='one_line'><i class='ion-ios-arrow-right'></i> &nbsp;&nbsp;<span class='date'>"+d['post_time'].slice(0,10)+"</span><a href='news?news_id="+d['id']+"' class=''>"+d['title']+"</a></li>";
        $("#news_title").append(txt);
      })
      setNum();
      activePage();
    },
  })
}


function selectPage(page){
  if(page<1||page>Pages) return;
    getData(page);
};

function activePage() {
    if($("#p1").text()==curPage) $("#p1").attr("class","page-item active");
    else $("#p1").attr("class","page-item");
    if($("#p2").text()==curPage) $("#p2").attr("class","page-item active");
    else $("#p2").attr("class","page-item");
    if($("#p3").text()==curPage) $("#p3").attr("class","page-item active");
    else $("#p3").attr("class","page-item");
    if($("#p4").text()==curPage) $("#p4").attr("class","page-item active");
    else $("#p4").attr("class","page-item");
    if($("#p5").text()==curPage) $("#p5").attr("class","page-item active");
    else $("#p5").attr("class","page-item");
};
// activePage();
$(".num a").click(function(){
  curPage = $(this).text();
  // console.log(curPage);
  selectPage(curPage);
  activePage();
});

$("#prev").click(function(){
  // console.log("curPage: ",curPage);
  curPage=curPage==1?1:curPage-1;
  selectPage(curPage);
  activePage();
});
$("#next").click(function(){
  // console.log("curPage: ",curPage);
  curPage=curPage==Pages?Pages:(+curPage+1);
  // console.log(curPage);
  selectPage(curPage);
  activePage();
});
getData(1);
activePage();
