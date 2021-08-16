const cards = [];

// make cards based on inquirer inputs
const teamCards = (employees) => {
  const makeManager = (manager) => {
    return `
    <div class="card-content">
        <div class="name"><h3>${manager.name}</h3></div>
        <div class="id">${manager.id}</div>
        <div class="email">${manager.email}</div>
        <div class="officenum">${manager.officeNumber}</div>
        <div class="role">${manager.role()}</div>
    </div>
    `;
  };
  //   push to cards array and filter by role
  cards.push(
    employees
      .filter((employee) => employee.role() === "Manager")
      .map((manager) => makeManager(manager))
  );

  const makeIntern = (intern) => {
    return `
    <div class="card-content">
        <div class="name"><h3>${intern.empName()}</h3></div>
        <div class="id">${intern.empID()}</div>
        <div class="email">${intern.empEmail()}</div>
        <div class="school">${intern.school()}</div>
        <div class="role">${intern.role()}</div>
    </div>
    `;
  };

  cards.push(
    employees
      .filter((employee) => employee.role() === "Intern")
      .map((intern) => makeIntern(intern))
      .join("")
  );

  const makeEngineer = (engineer) => {
    return `
    <div class="card-content">
        <div class="name"><h3>${engineer.name()}</h3></div>
        <div class="id">${engineer.empID()}</div>
        <div class="email">${engineer.email()}</div>
        <div class="github">${engineer.github()}</div>
        <div class="role">${engineer.role()}</div>
    </div>
    `;
  };

  cards.push(
    employees
      .filter((employee) => employee.role() === "Engineer")
      .map((engineer) => makeEngineer(engineer))
      .join("")
  );

  return cards.join("");
};

// export html
module.exports = (employees) => {
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="./style.css" />
</head>

<body>
<header class="masthead clear">
    <div class="centered">

        <div class="site-branding">
            <h1 class="site-title">My Team</h1>
        </div>
    </div>
</header>

<main class="main-area">

    <div class="centered">

        <section class="cards">

            <article class="card">
                <div class="card-content">
                    ${teamCards(employees)}
                </div>
            </article>

        </section>

    </div>

</main>
</body>
</html>`;
};
