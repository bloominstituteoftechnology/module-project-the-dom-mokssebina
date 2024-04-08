function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here

  const widgets = document.querySelectorAll('section>div')
  //widget.classList.toggle('widget')

  widgets.forEach((widget, index) => {
    widget.classList.add('widget')
    widget.setAttribute('tabIndex', `${index + 1}`)

  })

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const randomIndex = Math.floor(Math.random() * quotes.length)

  const randomQuote = quotes[randomIndex]

  const quoteHolder = document.createElement('div')
  const authorHolder = document.createElement('div')

  const widget1 = document.querySelector('.quoteoftheday')
  
  quoteHolder.textContent = randomQuote.quote
  authorHolder.textContent = `${randomQuote.date !== null ? `${randomQuote.author} in ${randomQuote.date}` : `${randomQuote.author} in an unknown date`}`
  
  widget1.appendChild(quoteHolder)
  widget1.appendChild(authorHolder)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const advIndex = Math.floor(Math.random() * adverbs.length)
  const advIndex2 = Math.floor(Math.random() * adverbs.length)

  const nounIndex = Math.floor(Math.random() * nouns.length)
  const nounIndex2 = Math.floor(Math.random() * nouns.length)

  const verbIndex = Math.floor(Math.random() * verbs.length)
  const verbIndex2 = Math.floor(Math.random() * verbs.length)

  const adverbItem = adverbs[advIndex]
  const adverbItem2 = adverbs[advIndex2]

  const nounItem = nouns[nounIndex]
  const nounItem2 = nouns[nounIndex2]

  const verbItem = verbs[verbIndex]
  const verbItem2 = verbs[verbIndex2]

  const phrase = `We need to ${verbItem} our ${nounItem} ${adverbItem} in order to ${verbItem2} our ${nounItem2} ${adverbItem2}.`

  const paragraph = document.createElement('p')

  paragraph.textContent = phrase

  document.querySelector('.corporatespeak').appendChild(paragraph)
  
  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here

  const widget3 = document.querySelector(".countdown")
  let count = 5
  const countDownItem = document.createElement('p')
  countDownItem.textContent = `T-minus ${count}...`
  widget3.appendChild(countDownItem)

  const timer = setInterval(() => {
    if(count === 1) {
      countDownItem.textContent = 'Liftoff! 🚀'
      clearInterval(timer)
    } else {
      countDownItem.textContent = `T-minus ${--count}...`
    }
  },1000) 
  

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const peopleIndex = Math.floor(Math.random() * people.length)
  const person = people[peopleIndex]
  const friendsParagraph = document.createElement('p')
  document.querySelector(".friends").appendChild(friendsParagraph)
  const dob = new Date(person.dateOfBirth).getFullYear()

  let sentence = `${person.fname} ${person.lname} was born in ${dob} and`

  if(!person.friends.length){
    sentence += ' has no friends.'
  } else {

    sentence += ' is friends with'
    console.log("friends length: ",person.friends.length)

    for(let i = 0; i < person.friends.length; i++){
      const friendId = person.friends[i]
      console.log("friend ID: ",friendId)
      
      const friend = people.filter(item => item.id === friendId)
      console.log("friend: ",friend)

      const fullName = `${friend[0].fname} ${friend[0].lname}`
      console.log("full name: ",fullName)

      if(i === person.friends.length - 1){

        sentence += ` ${fullName}.`

      } else if(i === person.friends.length - 2){

        sentence += ` ${fullName} and`

      } else {

        sentence += ` ${fullName},`

      }
    }
  }

  friendsParagraph.textContent = sentence
  console.log("sentence: ",person)

  

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here


  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
