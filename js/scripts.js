$(document).ready(function() {
  $("form#add").submit(function(event) {
    var side1 = parseInt($("#add1").val());
    var side2 = parseInt($("#add2").val());
    var side3 = parseInt($("#add3").val());

    if (((side1 === 0) || (side2 === 0) || (side3 === 0)) || ((side1 + side2 <= side3) || (side1 + side3 <= side2) || (side2 + side3 <= side1)))  {
      $('.not-a-triangle').show();
      $('.scalene').hide();
      $('.isosceles').hide();
      $('.equilateral').hide();
    } else {
        if ((side1 === side2) && (side2 === side3)) {
          $('.equilateral').show();
          $('.isosceles').hide();
          $('.scalene').hide();
          $('.not-a-triangle').hide();
        }

        if (((side1 === side2) && (side1 != side3)) || ((side1 === side3) && (side1 != side2)) || ((side2 === side3) && (side1 != side3))) {
          $('.isosceles').show();
          $('.scalene').hide();
          $('.equilateral').hide();
          $('.not-a-triangle').hide();
        }

        if ((side1 > side3) && (side1 > side2) && (side2 > side3)) {
          $('.scalene').show();
          $('.equilateral').hide();
          $('.isosceles').hide();
          $('.not-a-triangle').hide();
        }
      }
      event.preventDefault();
  });
});
