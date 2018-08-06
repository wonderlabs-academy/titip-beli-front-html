function switchNotification(setting) {
  if ($('#' + setting).attr('class') == 'flex-no-shrink text-sm border-4 text-white py-1 px-2 rounded pr-5 pl-5 bg-green hover:bg-green-dark border-green hover:border-green-dark') {
    $('#' + setting).removeClass('bg-green hover:bg-green-dark border-green hover:border-green-dark').addClass('bg-grey hover:bg-grey-dark border-grey hover:border-grey-dark');
    $('#' + setting).text('No');
    $('#' + setting).blur();
  } else {
    $('#' + setting).removeClass('bg-grey hover:bg-grey-dark border-grey hover:border-grey-dark').addClass('bg-green hover:bg-green-dark border-green hover:border-green-dark');
    $('#' + setting).text('Yes');
    $('#' + setting).blur();
  }
}

function collapse(setting ) {
  if ($('#' + setting).attr('class') == 'block') {
    $('#' + setting).removeClass('block').addClass('hidden');
    $('#' + setting).blur();
  } else {
    $('#' + setting).removeClass('hidden').addClass('block');
    $('#' + setting).blur();
  }
}