songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND

function songDecoder(song){
  let songWords = song.split(/WUB/g);
  songWords = songWords.filter(e => e !== "");
  let originalSong = "";
  songWords.forEach((e, i) => {
    if(e !== ''){
      if(i === songWords.length-1){
        originalSong += e;
      } else {
        originalSong += e + " ";
      }
    }
  })
  return originalSong;
}
