var url = "https://api.openai.com/v1/chat/completions"
var apiKey = //Enter chatgpt api key here

function apiRequest(event){
  event.preventDefault();

  var article = document.getElementById("article").value;
  console.log(article);

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      temperature: 0.5,
      messages: [{role:'system', content: "summarize this: " + article}]
    })
  })
  .then(response => response.json())
  .then(data =>{document.getElementById("Summarizer").innerHTML = data.choices[0].message.content})
  .catch(error =>{
    console.error('Error:', error)
  });
} 

