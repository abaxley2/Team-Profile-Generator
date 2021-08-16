const makeTeam = (employees) => {
  // I had this setup with 3 different arrays, but could not get the function makeTeam to work passing each of them in.
  // After looking at the answer I changed it to this and added the .maps and .filters
  const teamArray = [];

  const generateManager = (manager) => {
    return `<div class="card-content">
  <div class="name"><h3>${manager.name}</h3></div>
  <div class="id">${manager.id}</div>
  <div class="email">${manager.email}</div>
  <div class="officenum">${manager.officeNumber}</div>
  <div class="role">${manager.role}</div>
  </div>`;
  };

  teamArray.push(
    employees
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );

  const generateEngineers = (engineer) => {
    return `<div class="card-content">
  <div class="name"><h3>${engineer.name}</h3></div>
  <div class="id">${engineer.id}</div>
  <div class="email">${engineer.email}</div>
  <div class="github">${engineer.github}</div>
  <div class="role">${engineer.role}</div>
</div>`;
  };

  teamArray.push(
    employees
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineers(engineer))
      .join("")
  );

  const generateInterns = (intern) => {
    return `<div class="card-content">
  <div class="name"><h3>${intern.name}</h3></div>
  <div class="id">${intern.id}</div>
  <div class="email">${intern.email}</div>
  <div class="school">${intern.school}</div>
  <div class="role">${intern.role}</div>
</div>`;
  };

  teamArray.push(
    employees
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateInterns(intern))
      .join("")
  );

  return teamArray.join("");
};

module.exports = (employees) => {
  return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Team Profile Generator</title>
          <link rel="stylesheet" href="../dist/style.css" />
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
                          ${makeTeam(employees)}
                      </div>
                  </article>
              </section>
          </div>
      </main>
      </body>
      </html>`;
};
