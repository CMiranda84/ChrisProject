class QuestionProvider {
  constructor() {
    this.questions = [
      //category geography
      new Question(
        "What is the highest point on Earth? ",
        ["Eiffel tower", "Mount Everest", "Nanga Parbat", "Egypt pyramid"],
        "Mount Everest",
        "geography"
      ),
      new Question(
        "What is the largest river in the world by volume of water",
        ["Congo River", "Mississippi RIver", "Amazon River", "Nilo River"],
        "Amazon River",
        "geography"
      ),
      new Question(
        "What is the largest desert in the world, which is made up  of ice?",
        ["Greenland desert", "Arctic", "Sahara", "Antarctic"],
        "Antarctic",
        "geography"
      ),
      new Question(
        "What is the capital of Australia? ",
        ["Melbourne", "Sidney", "Austra Capital", "Canberra"],
        "Canberra",
        "geography"
      ),
      new Question(
        "What is the largest country in South America in terms of land area",
        ["Brazil", "Mexico", "Argentina", "Colombia"],
        "Brazil",
        "geography"
      ),
      ////////////////////////Music/////////////////////////////////////////
      new Question(
        "What is the best-selling album of all time?",
        [
          "'Thriller' - Michael Jackson",
          "'The Dark Side of the Moon' - Pink Floyd",
          "'Back in Black' - AC/DC",
          "'Led Zeppelin IV' - Led Zeppelin Correct",
        ],
        "'Thriller' - Michael Jackson",
        "music"
      ),
      new Question(
        "Which British rock band is known as 'The Fab Four'?",
        ["The Rolling Stones", "The Who", "Queen", "The Beatles"],
        "The Beatles",
        "music"
      ),
      new Question(
        "Who is the lead singer of the rock band Queen?",
        ["Freddie Mercury", "Mick Jagger", "David Bowie", "Robert Plant"],
        "Freddie Mercury",
        "music"
      ),
      new Question(
        "Which of these artists is known as the 'King of Pop'?",
        ["Prince", "Justin", "Timberlake", "Michael Jackson"],
        "Michael Jackson",
        "music"
      ),
      new Question(
        "Which singer is known for hits such as 'Rolling in the Deep' and 'Hello'?",
        ["Taylor Swift", "Beyoncé", "Adele", "Rihanna"],
        "Adele",
        "music"
      ),
      new Question(
        "What is the name of the famous music festival held annually in Indio, California?",
        ["Lollapalooza", "Coachella", "Glastonbury", "Burning Man"],
        "Coachella",
        "music"
      ),
      ///////////////////////////////////cinema////////////////////////////////////////
      new Question(
        "What is the name of the actor who played the Joker in the 2008 film 'The Dark Knight'?",
        [
          "Heath Ledger",
          "Joaquin Phoenix",
          " Jack Nicholson",
          "Jared Leto",
          "Cesar Romero",
        ],
        "Heath Ledger",
        "cinema"
      ),
      new Question(
        "In which movie did Leonardo DiCaprio win his first Oscar for Best Actor?",
        ["The Revenant", "Titanic", "The Wolf of Wall Street", "Blood Diamond"],
        "The Revenant",
        "cinema"
      ),
      new Question(
        "What is the name of the actress who played the character Katniss Everdeen in the 'Hunger Games' film series?",
        [
          "Emma Watson",
          "Jennifer Lawrence",
          "Scarlett Johansson",
          "Kristen Stewart",
        ],
        "Jennifer Lawrence",
        "cinema"
      ),
      new Question(
        "What is the name of the director of the film 'Titanic', released in 1997 and one of the highest-grossing films of all time?",
        [
          "Steven Spielberg",
          "Quentin Tarantino",
          "Christopher Nolan",
          "James Cameron",
        ],
        "James Cameron",
        "cinema"
      ),
      new Question(
        "What is the name of the 2009 Pixar animated film set in a post-apocalyptic world inhabited by robots?",
        ["Toy Story", "Wall-E", "Finding Nemo", "Ratatouille"],
        "Wall-E",
        "cinema"
      ),
      new Question(
        "Which 1973 horror film directed by William Friedkin is based on a real case of demonic possession?",
        ["Halloween", "A Nightmare on Elm Street", "Psycho", "The Exorcist"],
        "The Exorcist",
        "cinema"
      ),
      ////////////////////////////////////////////general knowledge////////////////////////////////:
      new Question(
        "Witch football player has more 'balon d'or?",
        ["Ronaldinho", "Messi", "C Ronaldo", "Mbapé"],
        "Messi",
        "general knowledge"
      ),
      new Question(
        "What is the largest planet in the solar system?",
        ["Jupiter", "Earth", "Saturn", "Urano"],
        "Jupiter",
        "general knowledge"
      ),
      new Question(
        "Who wrote the play 'Romeo and Juliet'?",
        [
          "DiCaprio",
          "William Shakespeare",
          "Hamnet Shakespeare",
          "Charles Dickens",
        ],
        "William Shakespeare",
        "general knowledge"
      ),
      new Question(
        "What is the most abundant chemical element in the universe?",
        ["Oxygen", "H2O", "Hydrogen", "Nytrogen"],
        "Hydrogen",
        "general knowledge"
      ),
      new Question(
        "Who was the first human being to set foot on the Moon?",
        ["Apollo", "Neil Armstrong", "Son Lin", "Vladmir Moon"],
        "Neil Armstrong",
        "general knowledge"
      ),
      /////////////////////////////////////////Cience///////////////////////////////////////////
      new Question(
        "What is the process by which plants convert sunlight into food energy?",
        ["Respiration", "Transpiration", "Photosynthesis", "Chloroplast"],
        "Photosynthesis",
        "cience"
      ),
      new Question(
        "What is the name given to the basic unit of structure and function in biology?",
        ["Molecule", "Organ", "Cell", "Tissue"],
        "Cell",
        "cience"
      ),
      new Question(
        "Who is considered the father of modern physics for his contributions to the theory of relativity?",
        ["Isaac Newton", "Galileo Galile", "Albert Einstein", "Nikola Tesla"],
        "Albert Einstein",
        "cience"
      ),
      new Question(
        "What is the name of the first woman to win a Nobel Prize and the only person to win a Nobel Prize in two different disciplines?",
        [
          "Ada Lovelace",
          "Dorothy Crowfoot Hodgkin",
          "Marie Curie",
          "Rosalind Franklin",
        ],
        "Marie Curie",
        "cience"
      ),
      new Question(
        "What is the basic unit of heredity in living organisms?",
        ["Chromosome", "DNA", "Gene", "Protein"],
        "Gene",
        "cience"
      ),
      /////////////////////////////////////////Maths////////////////////////////////
      ///////////////////////////////////////FRIENDS :D////////////////////////////////////////
      new Question(
        "Quem que ultrapassa tudo 'katakoka' ki bira doente pp?",
        ["Isaac", "Chris", "Brian", "Shade 'gram"],
        "Brian",
        "friends"
      ),
      new Question(
        "Quem tem mais buxexona?",
        [
          "Diko 'Slevas Virgulino'",
          "Helga 'buxexa'",
          "David 'Muutxo karonca'",
          "Peixe balão",
        ],
        "Helga 'buxexa'",
        "friends"
      ),
      new Question(
        "Quem tem maiores testículos",
        [
          "Benjamim 'Shaolin'",
          "Vaca 'bebum'",
          "Shade 'gram'",
          "Sisqo 'Megarovs'",
        ],
        "Shade 'gram'",
        "friends"
      ),
      new Question(
        "Quem xixi na leite pa 'Megarovs' bebi?",
        ["Chris", "Rodney 'Rods Wires'", "Benjamim", "Joao Dinis Virgolino"],
        "Rodney 'Rods Wires'",
        "friends"
      ),
      new Question(
        "Quem ki ta anda ku vibrador na bolsa pa td lado?",
        ["Rafa", "GArroto", "Fabrizio", "Lizyto"],
        "Lizyto",
        "friends"
      ),
      new Question(
        "Quem é maior na caba alguem ku festa?",
        ["Gwen 'Grandolaine'", "Jaquiline", "Aléxia", "Poeta"],
        "Gwen 'Grandolaine'",
        "friends"
      ),
      new Question(
        "Quem ki Alice 'mae de Brian' gosta mais?",
        ["Brian", "Chris", "Rock 'irmao de brian'", "Avo de Brian"],
        "Chris",
        "friends"
      ),
      new Question(
        "Quem é mais gatero?",
        ["Vadinho", "Lalau", "Vannick 'Vaca'", "maior gatero de Praia"],
        "Vannick 'Vaca'",
        "friends"
      ),
    ];
  }
  getRandomQuestion() {
    let randomQuestionIndex = Math.floor(Math.random() * this.questions.length);

    return this.questions[randomQuestionIndex];
  }

  getRandomQuestionByCategory(category) {
    let categoryQuestions = [];

    for (let i = 0; i < this.questions.length; i++) {
      if (
        this.questions[i].category != undefined &&
        this.questions[i].category.toLocaleLowerCase() ==
          category.toLocaleLowerCase()
      )
        categoryQuestions.push(this.questions[i]);
    }

    let randomQuestionIndex = Math.floor(
      Math.random() * categoryQuestions.length
    );

    return categoryQuestions[randomQuestionIndex];
  }
}
