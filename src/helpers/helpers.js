export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(correct, wrong, word) {
  let status = "win";

  //check for wins
  word.split("").forEach((element) => {
    if (!correct.includes(element)) {
      status = "";
    }
  });

  //Check for loss
  if (wrong.length === 6) status = "lose";

  return status;
}
