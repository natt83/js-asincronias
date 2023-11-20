const jsonData = {
    "results": [
      {
        "title": "Estudiar Js",
        "priority": "alta",
        "isDone": false
      },
      {
        "title": "Estudiar CSS",
        "priority": "alta",
        "isDone": true
      },
      {
        "title": "Estudiar OOP",
        "priority": "media",
        "isDone": false
      },
      {
        "title": "Estudiar IA",
        "priority": "baja",
        "isDone": false
      }
    ]
  };
  

  const titles = jsonData.results.map(todo => todo.title);
 console.log(titles);
  