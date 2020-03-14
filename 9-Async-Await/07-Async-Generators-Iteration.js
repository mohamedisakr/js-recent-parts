async function* fetchURLs(urls) {
  for (let url of urls) {
    let response = await fetch(url);
    if (response.status == 200) {
      let text = await response.text();
      yield text.toUpperCase();
    } else {
      yield undefined;
    }
  }
}

async function main(favoritesSites) {
  for await (let text of fetchURLs(favoritesSites)) {
    console.log(text);
  }
}

let favoritesSites = ["www.google.com", "www.github.com"];
main(favoritesSites);
