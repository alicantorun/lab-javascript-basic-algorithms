const hacker1 = "Alican";
const hacker2 = "Devan";

console.log('The navigator\'s name is: ', hacker1);
console.log('The driver\'s name is: ', hacker2);

if (hacker1.length > hacker2.length) {
  console.log(`Yo, navigator got the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
  console.log(`The Driver has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`)
}

let newHacker1 = '';
let newHacker2 = '';

for (let i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase());
  console.log(' ');

  newHacker1 += hacker1[i].toUpperCase();
  newHacker1 += ' ';
}

console.log(newHacker1);

for (let i = hacker2.length - 1; i >= 0; i--) {
  console.log(hacker2[i]);

  newHacker2 += hacker2[i];
  newHacker2 += ' ';
}

console.log(newHacker2);

if (hacker1.localeCompare(hacker2) < 0) {
   console.log('Yo, the navigator goes first definitely.')
} else if ( hacker2.localeCompare(hacker1) < 0) {
  console.log('The driver\'s name goes first')
} else {
  console.log('What?! You both got the same name?')
}

/// Bonus

const paragraph1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus ex vel metus viverra auctor. Aenean vel sollicitudin arcu. In diam justo, volutpat ac scelerisque eu, vehicula eu nibh. Donec fringilla elementum elit, id tincidunt ex euismod et. Phasellus mauris leo, tempor ut lacus non, interdum accumsan enim. Aenean ligula enim, sodales id massa vitae, ullamcorper tincidunt nunc. Nam vitae ullamcorper augue. Nam scelerisque tincidunt vestibulum. Nam elit ligula, luctus sit amet erat id, congue tincidunt nisl. In hac habitasse platea dictumst. Suspendisse vulputate risus vel lectus efficitur, quis molestie libero placerat. Vivamus ullamcorper nec dui eget condimentum. Duis pellentesque diam sapien, at congue ante lobortis non.

Donec tristique, massa vel venenatis vestibulum, ipsum massa blandit mauris, a consequat augue neque id sapien. Nunc feugiat scelerisque nisl vitae lacinia. Aenean eleifend metus ut lacinia tempor. Quisque elementum fringilla augue. Morbi odio diam, tempor eget consequat vel, consectetur non tortor. Aliquam eu viverra justo, a elementum tortor. Vivamus vel tortor a ligula ullamcorper venenatis. Suspendisse consequat, elit et bibendum tincidunt, sem arcu varius sapien, vel vestibulum orci sem et metus. Vivamus sit amet lectus viverra, cursus leo vitae, sodales elit. Vestibulum vestibulum euismod arcu, sed venenatis neque lobortis at. In ac risus quis nisl pulvinar tempor in id nisi.

Suspendisse justo augue, sagittis vel elementum sed, suscipit fermentum metus. Suspendisse non consequat erat, auctor sollicitudin est. Aenean varius erat nisi, mattis hendrerit lacus interdum eu. Suspendisse ultricies eget purus ut facilisis. Suspendisse venenatis, odio eget tincidunt aliquam, mauris sem condimentum mi, eget hendrerit enim nunc eget erat. Aenean blandit ac urna eget finibus. Proin eu elit tincidunt, auctor purus sed, blandit leo. Sed sed nibh a justo ullamcorper posuere.`;

let counterWords = 0

for (let i = 0; i < paragraph1.length; i++) {
  if (paragraph1[i] === ' ') {
    counterWords++;
  }
}
console.log(counterWords + 1);

let counterEt = 0

for (let i = 0; i < paragraph1.length; i++) {
  if (paragraph1.slice(i, i + 2) === 'et') {
    counterEt++;
  }
}
console.log(counterEt);

