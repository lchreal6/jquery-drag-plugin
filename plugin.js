(function($) {
    
    $.fn.drag = function() {

        var el = this;
        
        $(this).on('mousedown', function(e) {
            var oEvent = e || event;

            //获取坐标
            var disX = oEvent.clientX - $(this).offset().left;
            var disY = oEvent.clientY - $(this).offset().top;

            $(document).on('mousemove', function(e) {
                var oEvent = e || event;

                //获取距离
                var l = oEvent.clientX - disX;
                var t = oEvent.clientY - disY;
               
                //设置位置
                $(el).css({
                    left: l + "px",
                    top: t + "px"
                })
            })
        })

        $(this).on('mouseup', function() {
           
            $(document).off("mousemove")

        })
    }

}(jQuery))