// ZMXENO/gate/phaser/modulePhase.js
// READ-ONLY MODULE SELECT LOG — NO MUTATION, NO EXECUTION

export const modulePhase = (intent) => {
  console.log('\n[MODULE SELECT]');
  
  if (intent === "add" || intent === "push") {
    console.log('PUSHMODULE SELECTED');
  } else if (intent === "sub" || intent === "pull") {
    console.log('PULLMODULE SELECTED');
  } else {
    console.log('UNKNOWN INTENT — NO MODULE SELECTED');
  }

  
};