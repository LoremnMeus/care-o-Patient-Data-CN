function updateContent(data) {
  document.getElementById('input-top').value = data.top;
  document.getElementById('input-middle').value = data.middle;
  document.getElementById('input-bottom').value = data.bottom;
  document.getElementById('case-id-display').value = "Case" + data.id;
}

var inner_id = 0;
document.getElementById('prev-button').addEventListener('click', function () {
  if (jsonData.data[inner_id - 1]){
    inner_id = inner_id - 1
    updateContent(jsonData.data[inner_id]);
  }else{
    alert('Error in getting previous data');
  }
});
document.getElementById('next-button').addEventListener('click', function () {
  if (jsonData.data[inner_id + 1]){
    inner_id = inner_id + 1
    updateContent(jsonData.data[inner_id]);
  }else{
    alert('Error in getting next data');
  }
});
/*
document.getElementById('submit-button').addEventListener('click', function () {
  const topValue = document.getElementById('input-top').value;
  const middleValue = document.getElementById('input-middle').value;
  const bottomValue = document.getElementById('input-bottom').value;

  const data = {
    top: topValue,
    middle: middleValue,
    bottom: bottomValue
  };

  fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    alert('Updated: ' + data.message);
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error!');
  });
});
*/
/*
document.getElementById('prev-button').addEventListener('click', function () {
  fetch('/prev', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      return response.json().then(data => { throw new Error(data.message) });
    }
    return response.json();
  })
  .then(data => {
    updateContent(data);
  })
  .catch(error => {
    console.error('Error:', error);
    alert(error.message || 'Error in getting previous data');
  });
});

document.getElementById('next-button').addEventListener('click', function () {
  fetch('/next', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      return response.json().then(data => { throw new Error(data.message) });
    }
    return response.json();
  })
  .then(data => {
    updateContent(data);
  })
  .catch(error => {
    console.error('Error:', error);
    alert(error.message || 'Error in getting next data');
  });
});
// 初始化加载第一个数据项
document.addEventListener('DOMContentLoaded', function() {
  fetch('/current', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    updateContent(data);
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error in loading data');
  });
});
*/
updateContent(jsonData.data[inner_id]);