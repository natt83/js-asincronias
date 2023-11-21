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

  const tableContainer = document.getElementById("table-container");
  
  const table = document.createElement("table");
  
  const headerRow = table.insertRow(0);
  Object.keys(jsonData.results[0]).forEach(key => {
    const headerCell = document.createElement("th");
    headerCell.textContent = key;
    headerRow.appendChild(headerCell);
  });
  
  jsonData.results.forEach((todo, index) => {
    const row = table.insertRow(index + 1);
  
    Object.values(todo).forEach(value => {
      const cell = row.insertCell();
      cell.textContent = value;
    });
  });
  tableContainer.appendChild(table);
  console.log(Object.keys(jsonData.results[0]).join('\t'));

jsonData.results.forEach(todo => {
  console.log(Object.values(todo).join('\t'));
});

 