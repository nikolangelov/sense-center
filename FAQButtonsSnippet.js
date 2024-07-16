function toggleExpand(index){

    var readMore = document.querySelector('.read-more-click-to-expand-'+index);
    if (readMore){
      readMore.classList.add('expanded');
        readMore.classList.remove('to-be-expanded');
        readMore.classList.add('last-expanded');}
    readMore = document.querySelector('.read-more-click-to-expand-'+(index+1));
    if (readMore)readMore.classList.add('to-be-expanded');
    readMore = document.querySelector('.read-more-click-to-expand-'+(index-1));
    if (readMore)readMore.classList.remove('last-expanded');
    readMore = document.querySelector('.first-faq-section');
    if (readMore)readMore.classList.remove('last-expanded');
    }