const teamMembers = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      img: "img/male1.png"
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "img/female1.png"
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "img/male2.png"
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      img: "img/female2.png"
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "img/male3.png"
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      img: "img/female3.png"
    }
  ];

  const teamCard = document.getElementById("contenitore-teamcard");

  const nomeCognome = document.getElementById('nomeCognome');
  const ruolo = document.getElementById('ruolo');
  const img = document.getElementById('immagine');
  const email = document.getElementById('email');

  for (let i = 0; i < teamMembers.length; i++) {

    let info = teamMembers[i];
    teamCard.innerHTML = teamCard.innerHTML.concat(`
    <div class="flex">
                <figure>
                    <img height="100px" src='./${info.img}' alt='${info.name}'/>
                </figure>
                <div class="flex flex-column">
                    <h5>'${info.name}'</h5>
                    <span>'${info.email}'</span>
                    <span>'${info.role}'</span>
                </div>
    </div>   
    ` )    
       
  } 

  btnSubmit.addEventListener("click", function(event){
  
    event.preventDefault()
    teamMembers.push(
        {
            name: 'nomeCognome',
            role: 'ruolo',
            email: 'email',
            img: 'img'  
        })
    console.log(teamMembers)
  })