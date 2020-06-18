function waterFall() {

  var widthNum = parseInt($(window).width() / $(".item").outerWidth(true)),
            allHeight=[];

    // 根据屏幕宽度 算出一行多少列，并用数组占位
    for (var i=0;i < widthNum; i++){
        allHeight.push(0)
    }
  
    $(".item").each(function () {
        var $cur = $(this),
                indx = 0,
        // 每次循环把第一个值作为最小高度
        minAllHeight = allHeight[0];
        for (var j = 0; j < allHeight.length; j++){
            //  循环所有高度进行对比把最小高度找出来
            if (allHeight[j] < minAllHeight){
                minAllHeight = allHeight[j];
                // 如果该列高度小于最小高度把indx指向该列
                indx = j;
            }          
        }

      // 循环后 indx ，minAllHeight 只会有一个 
       $cur.css({
            "left": indx * $cur.outerWidth(true),
            "top": minAllHeight
        });     

        // 把当前this 确定好位置，并进行保存
        allHeight[indx] = minAllHeight + $cur.outerHeight(true);

    })

  }

  waterFall();

  $(window).on("resize",function () {
      waterFall()
  })