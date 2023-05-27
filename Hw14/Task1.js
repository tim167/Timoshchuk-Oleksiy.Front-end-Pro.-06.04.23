function redirectToWebsite(buttonId) {
  let link;

  if (buttonId === 'button1') {
    link = "https://www.google.com.ua/";
  } else if (buttonId === 'button2') {
    link = "www.google.com.ua/";
  }

  if (!/^(f|ht)tps?:\/\//i.test(link)) {
    link = "http://" + link;
  }

  window.location.href = link;
}