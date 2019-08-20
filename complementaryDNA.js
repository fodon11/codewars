function DNAStrand(dna){
  let complementaryDNA = "";
  function getComplement(char){
    let complementaryChar;
    switch(char){
      case 'A': complementaryChar = 'T'; break;
      case 'T': complementaryChar = 'A'; break;
      case 'G': complementaryChar = 'C'; break;
      case 'C': complementaryChar = 'G'; break;
    }
    return complementaryChar;
  }
  let dnaArr = dna.split("");
  dnaArr.forEach(e => {
    complementaryDNA += getComplement(e);
  })
  return complementaryDNA;
}
