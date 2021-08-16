const makeTeam = (employees) => {
  // I had this setup with 3 different arrays, but could not get the function makeTeam to work passing each of them in.
  // After looking at the answer I changed it to this and added the .maps and .filters
  const teamArray = [];

  const generateManager = (manager) => {
    return `
    <div class="card">
    <div class="card-header">
  <div class="name"><h3>${manager.name}</h3></div>
  </div>
  <div class="card-body">
  <div class="id">Manager ID: ${manager.id}</div>
  <div class="email">Email: ${manager.email}</div>
  <div class="officenum">Office Number: ${manager.officeNumber}</div>
  <div class="role">${manager.role}</div>
  </div>
  </div>`;
  };

  teamArray.push(
    employees
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );

  const generateEngineers = (engineer) => {
    return `<div class="card">
  <div class="card-header">
  <div class="name"><h3>${engineer.name}</h3></div>
  </div>
  <div class="card-body">
  <div class="id">Engineer ID: ${engineer.id}</div>
  <div class="email">Email: ${engineer.email}</div>
  <div class="github">GitHub: ${engineer.github}</div>
  <div class="role">${engineer.role}</div>
  </div>
</div>`;
  };

  teamArray.push(
    employees
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineers(engineer))
      .join("")
  );

  const generateInterns = (intern) => {
    return `<div class="card">
  <div class="card-header">
  <div class="name"><h3>${intern.name}</h3></div>
  </div>
  <div class="card-body">
  <div class="id">Intern ID: ${intern.id}</div>
  <div class="email">Email: ${intern.email}</div>
  <div class="school">School: ${intern.school}</div>
  <div class="role">${intern.role}</div>
  </div>
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
   <div class=header>
       <h1>My Team</h1>
   </div>
   <div class="container-body">
         ${makeTeam(employees)} 
         </div>       
    </body>
      </html>`;
};
