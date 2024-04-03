const video = document.querySelector('.video');
const link = video.querySelector('.video__link');
//const media = video.querySelector('.video__media');
const button = video.querySelector('.video__button');

const createIframe = () => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?si=UEqrqi2tNvk81IL9');
  iframe.setAttribute('allow', 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  iframe.setAttribute('allowfullscreen', 'allowfullscreen');
  iframe.setAttribute('loading', 'lazy');
  iframe.classList.add('video__media');

  return iframe;
};

const onButtonClick = () => {
  const iframe = createIframe();

  link.remove();
  button.remove();
  video.appendChild(iframe);
};

const setupVideo = () => {
  button.addEventListener('click', onButtonClick);

  link.removeAttribute('href');
};

export { setupVideo };
