'use strict';

$(document).ready(() => {
  const photoList = document.getElementById('photolist');
  photoList.insertAdjacentHTML('afterend', `<div id="btnMore">See More</div>`);
  const setMoreBtn = document.getElementById('btnMore');
  const selectElement = document.getElementById('loadNum');
  let loadNum = selectElement.value;
  let dataLength;

  const renderJSON = (json, times, currentPosition = 0) => {
    const loadingImg = document.getElementById('loadingImg');

    for(let i = 0; i < times; i++) {
      const j = i + currentPosition;
      const thumbnail = json[j].thumbnailUrl;
      const title = json[j].title;
      const link = json[j].url;
      const picHTML = `
        <a href="${link}" class="loaded" target="_blank" rel="noopener noreferrer">
          <img src="${thumbnail}"></img>
          <span>${title}</span>
        </a>
      `;
      photoList.insertAdjacentHTML("beforeend", picHTML);
    }
    loadingImg && loadingImg.remove();
  };
 
  const ajaxLoad = () => {
    $.ajax({ url: 'https://jsonplaceholder.typicode.com/photos/' })
    .done((data) => { // success
      dataLength = data.length;
      const loadedItemLength = photoList.getElementsByClassName('loaded').length;
      const restLength = dataLength - loadedItemLength;

      if(dataLength !== loadedItemLength) {
        if(loadedItemLength === 0) { // 1st time
          if(dataLength < loadNum) {
            renderJSON(data, dataLength);
            setMoreBtn.remove();
          } else {
            renderJSON(data, loadNum);
          }
        } else { // more than 2 times
          if (loadNum < restLength) {
            renderJSON(data, loadNum, loadedItemLength);
          } else {
            renderJSON(data, restLength, loadedItemLength);
            setMoreBtn.remove();
          }
        }
      } else {
        loadingImg && loadingImg.remove();
        return false;
      }
    })
    .fail((XMLHttpRequest, textStatus, errorThrown) => { // failed
      console.log(`Error detected!`);
      console.log(`XMLHttpRequest : ${XMLHttpRequest.status}`);
      console.log(`textStatus : ${textStatus}`);
      console.log(`errorThrown : ${errorThrown.message}`);
      loadingImg && loadingImg.remove();
    });
  };

  ajaxLoad();

  setMoreBtn.addEventListener('click', () => {
    const loadingImg = `
      <div id="loadingImg">
        <img src="img/loadingImage.gif"></img>
      </div>
    `;
    document.body.insertAdjacentHTML("afterbegin", loadingImg);
    ajaxLoad();
  });

  selectElement.addEventListener('change', () => {
    loadNum = selectElement.value !== "all" ? selectElement.value : dataLength;
  });
})
