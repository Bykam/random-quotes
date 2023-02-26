function myFunction() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key":
          "f3fe5f29c9msh6feb53ab5285fd6p1353d0jsn57d3b2cf73b4",
        "X-RapidAPI-Host": "quotes-by-api-ninjas.p.rapidapi.com",
      },
    };

    fetch(
      "https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes",
      options
    ).then(function (response) {
      response.json().then(function (data) {
        const datas = data;
        datas.forEach((quote) => {
          document.getElementById("quotes-result").innerHTML = "";
          document.getElementById("quotes-result").insertAdjacentHTML(
            "beforeend",
            `
                    <h3>'${quote.quote}'</h3>
                    <div class='axios'>
                      <p>Author: ${quote.author}</p>
                      <p>Category: ${quote.category}</p>
                      </div>
                    `
          );
        });
      });
    });
  }