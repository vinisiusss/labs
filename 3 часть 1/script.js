
// Задача 1

// function counter(n) {
//     let current = n;
//     const interval = setInterval(() => {
//         console.log(current);
//         if (current === 0) {
//             clearInterval(interval);
//         }
//         current--;
//     }, 1000);
// }
// counter(5);

// function createCounter(n) {
//     let current = n;
//     let intervalId;
//     function start() {
//         intervalId = setInterval(() => {
//             console.log(current);
//             current--;
//             if (current < 0) {
//                 clearInterval(intervalId);
//             }
//         }, 1000);
//     }
//     function pause() {
//         clearInterval(intervalId);
//     }
//     function stop() {
//         clearInterval(intervalId);
//         current = n;
//     }
//     return {
//         start,
//         pause,
//         stop
//     };
// }
// const counter = createCounter(5);
// counter.start();
// setTimeout(() => {
//     counter.pause();
// }, 3000);
// setTimeout(() => {
//     counter.stop();
// }, 5000);




// Задача 2

// function Delay(N) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, N * 1000);
//     });
// }
// const delayPromise = Delay(5); 
// delayPromise.then(() => {
//     console.log('Прошло 5 секунд');
// });

// async function getFirstRepo(username) {
//     const response = await fetch(`https://api.github.com/users/${username}/repos`);
//     const data = await response.json();
//     if (data.length > 0) {
//         return data[0].name;
//     } else {
//         return "Репозитории не найдены";
//     }
// }
// const username = "vini "; 
// getFirstRepo(username)
//     .then(repoName => {
//         console.log(`Первый репозиторий пользователя ${username}: ${repoName}`);
//     })
//     .catch(error => {
//         console.error("Произошла ошибка:", error);
//     });


// Задача 3

class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
    const response = await fetch(url);
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  }
  
  async function getGithubUser() {
    let user;
    while (!user) {
      let name = prompt("Введите логин?", "iliakan");
      try {
        user = await loadJson(`https://api.github.com/users/${name}`);
        alert(`Полное имя: ${user.name}.`);
      } catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
          alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        } else {
          throw err;
        }
      }
    }
    return user;
  }
  
  getGithubUser();