fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
  .then((data) => data.json())
  .then((quoteData) => {
    const quoteText1 = quoteData.articles[1].title;
    const quoteText2 = quoteData.articles[0].title;
    const quoteText3 = quoteData.articles[1].title;

    const image = quoteData.articles[0].urlToImage;
    const authorText = quoteData.author;

    const quoteElement1 = document.getElementById("headline1");
    quoteElement1.innerHTML = quoteText1;

    const quoteElement2 = document.getElementById("headline2");
    quoteElement2.innerHTML = quoteText2;

    const authorElement = document.getElementById("authorElement");
    authorElement.innerHTML = authorText;
  });

  var date = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });

  // extract the day, month, year, and time from the date object
  var day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    new Date(date)
  );
  var month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    new Date(date)
  );
  var year = new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(
    new Date(date)
  );
      var time = new Intl.DateTimeFormat("en-US", {
        day: "numeric",
      }).format(new Date(date));

  document.getElementById("day").innerHTML = day;
  document.getElementById("year").innerHTML = year;
  document.getElementById("month").innerHTML = month;
  document.getElementById("date").innerHTML = time;