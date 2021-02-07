$(() => {
  let words = $('p').text().split(/\s+/);
  let text = words.join('</span> <span>');
  $('p').html('<span>' + text + '</span>');
  $('span').on('click', function () {
    $(this).css({
      backgroundColor: 'yellow',
      fontWeight: 'bold',
    });
  });
});
