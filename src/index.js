import './style.css';

document.body.innerHTML = `  <header>
<h1>Leaderboard</h1>
</header>

<main>
<section id="recent-scores">
  <div id="scores-title">
    <h2>Recent Scores</h2>
    <button type="button">Refresh</button>
  </div>

  <div id="scores">
    <div class="names">Name: 100</div>
    <div class="names2">Name: 20</div>
    <div class="names">Name: 50</div>
    <div class="names2">Name: 78</div>
    <div class="names">Name: 125</div>
    <div class="names2">Name: 77</div>
    <div class="names">Name: 42</div>
  </div>
</section>

<section id="add-score">
  <h2>Add your score</h2>
  
  <form action="https://formspree.io/f/mayajwdo" method="POST">
    <label for="name"></label>
    <input type="text" name="name" id="name" required>

    <label for="score"></label>
    <input type="text" name="score" id="score" required>

    <div id="submit-container"> 
      <input type="submit" id="submit">
    </div>
  </form>
</section>

</main>`;
