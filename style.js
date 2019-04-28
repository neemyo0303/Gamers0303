<script>
  $(document).ready(function(){
    // 마우스 트리거
    $(".card-text").hover(
      function(){
        $(this).animate({
          marginTop:"-=1%",
        },200);
      },

      // 마우스 빠져나갔을 때
      function(){
        $(this).animate({
          marginTop:"0%"
        },200);
      } ); });
</script>
