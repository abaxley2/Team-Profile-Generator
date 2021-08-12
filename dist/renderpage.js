const teamCards = (employees) => {
  const makeManager = (manager) => {
    return `
        <div class="card-content">
            <div class="name"><h3>${manager.name()}</h3></div>
            <div class="id">${manager.empID()}</div>
            <div class="email">${manager.email()}</div>
            <div class="officenum">${manager.office()}</div>
            <div class="role">${manager.role()}</div>
        </div>
        `;
  };
};

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
